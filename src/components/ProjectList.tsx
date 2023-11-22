import {
  Button,
  Datagrid,
  DateField,
  LinearProgress,
  List,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  ShowButton,
  TextField,
  WithRecord,
  useListContext,
  useRecordContext,
} from "react-admin";
import {
  Card,
  Grid,
  Box,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Slider,
} from "@mui/material";

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

  const record = useRecordContext();

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

              const timeleft = Math.round(
                (endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
              );

              const progress = Math.round(
                ((Date.now() - startDate.getTime()) /
                  (endDate.getTime() - startDate.getTime())) *
                  100
              );

              return (
                <Box display={"flex"} alignItems={"center"}>
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
                  <span
                    style={{ marginLeft: 8, fontSize: 14 }}
                  >{`${timeleft} days left`}</span>
                  <Box sx={{ flexGrow: 1 }} />
                </Box>
              );
            }}
          />
          <ShowButton
            variant="contained"
            label="View"
            sx={{
              backgroundColor: "primary",
              boxShadow: "none",
              color: "white",
              height: "36px",
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
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {data.map((record: ProjectListProps) => (
        <RecordContextProvider value={record} key={record.id}>
          <Grid key={record.id} xs={12} sm={6} md={4} lg={3} xl={2} item>
            <ProjectCard />
            {/* <Card
              sx={{
                boxShadow: "none",
                border: "1px solid #e0e0e3",
                borderRadius: "10px",
                display: "flex",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {record.title}
                  </Typography>
                </CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <CardActions
                    sx={{
                      ".MuiCardActions-spacing": {
                        display: "flex",
                        justifyContent: "space-around",
                      },
                    }}
                  >
                    <ShowButton
                      variant="contained"
                      label="View"
                      sx={{
                        backgroundColor: "orange",
                        color: "white",
                        ":hover": {
                          backgroundColor: "darkorange",
                          color: "white",
                        },
                      }}
                    />
                  </CardActions>
                </Box>
              </Box>
            </Card> */}
          </Grid>
        </RecordContextProvider>
      ))}
    </Grid>
  );
};
