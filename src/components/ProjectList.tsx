import {
  BulkActionsToolbar,
  CreateButton,
  List,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  ShowButton,
  TextField,
  WithRecord,
  useListContext,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import { Card, Grid, Box, Typography, Avatar, Slider } from "@mui/material";
import { ProjectCreate } from "./ProjectCreate";

type ProjectListProps = {
  id: number;
  title: string;
  description: string;
  startdate: Date;
  enddate: Date;
  project_leader: number;
  project_member: number[];
};

export const ProjectList = () => (
  <List
    sort={{ field: "id", order: "ASC" }}
    component="div"
    actions={false}
    perPage={12}
  >
    <ProjectGrid />
  </List>
);

const ProjectGrid = () => {
  const { data, isLoading } = useListContext();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  if (isLoading || data.length === 0) {
    return null;
  }

  const ProjectCard = () => {
    return (
      <Card
        sx={{
          display: "flex",
          gap: 2,
          padding: 2,
          borderRadius: 3,
          height: "100%",
          boxShadow: "0 2px 4px 0 rgba(138, 148, 159, 0.2)",
        }}
      >
        <Avatar sx={{ backgroundColor: "primary.main" }}>
          <TextField source="title[0]" />
        </Avatar>
        <Box display="flex" gap={1} flexDirection="column">
          <TextField
            source="title"
            sx={{ fontSize: 16, fontWeight: 500, marginBottom: 0 }}
          />
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="caption">Project Leader: </Typography>
            <ReferenceField source="project_leader" reference="users" link="" />
          </Box>
          <WithRecord
            render={(record) => {
              const endDate = new Date(record.enddate);
              const startDate = new Date(record.startdate);

              let timeleft: string | number;

              timeleft = Math.round(
                (endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
              );

              if (timeleft < 0) {
                timeleft = "Project has ended";
              } else {
                timeleft = timeleft + " days left";
              }

              const progress = Math.round(
                ((Date.now() - startDate.getTime()) /
                  (endDate.getTime() - startDate.getTime())) *
                  100
              );

              return (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Slider
                    defaultValue={progress}
                    disabled
                    aria-label="Progress bar"
                    size="small"
                    sx={{
                      width: "100px",
                      marginRight: 1,
                      "& .MuiSlider-thumb": {
                        width: "10px",
                        height: "10px",
                      },
                    }}
                  />
                  <span style={{ marginLeft: 8, fontSize: 14 }}>
                    {timeleft}
                  </span>
                  <Box sx={{ flexGrow: 1 }} />
                </Box>
              );
            }}
          />
          <ShowButton
            variant="contained"
            label="View"
            sx={{
              backgroundColor: "primary.main",
              boxShadow: "none",
              color: "white",
              height: "36px",
              borderRadius: "5px",
              ":hover": {
                backgroundColor: "primary.dark",
                color: "white",
                boxShadow: "none",
              },
            }}
          />
        </Box>
      </Card>
    );
  };

  return (
    <Grid sx={{ mt: `${isSmall ? 0 : "0.5em"}` }}>
      <Grid sx={{ mt: 0 }} position="relative">
        <CreateButton
          resource="projects"
          sx={{ position: "absolute", right: 0 }}
        />
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ mt: `${isSmall ? 0 : "1em"}`, pt: `${isSmall ? 0 : "1.5em"}` }}
      >
        {data.map((record: ProjectListProps) => (
          <RecordContextProvider value={record} key={record.id}>
            <Grid key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
              <ProjectCard />
            </Grid>
          </RecordContextProvider>
        ))}
      </Grid>
    </Grid>
  );
};
