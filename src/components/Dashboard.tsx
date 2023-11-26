import { Card, Grid, Box, Typography, CardActions } from "@mui/material";
import { Button, Title, useGetList } from "react-admin";
import ProjectIcon from "@mui/icons-material/Book";

export const Dashboard = () => {
  // get users resource list
  const users = useGetList("users");

  // get projects resource list
  const projects = useGetList("projects");

  return (
    <Grid spacing={1}>
      <Title title="Dashboard" />
      <Card
        sx={{
          padding: "20px",
          marginTop: 2,
          boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box display="flex">
          <Box flex="1">
            <Typography variant="h5" component="h2" gutterBottom>
              Welcome to the project management
            </Typography>
            <Box maxWidth="40em">
              <Typography variant="body1" component="p" gutterBottom>
                This is a project management system. You can create projects and
                assign users to them.
              </Typography>
            </Box>
            <CardActions
              sx={{
                padding: { xs: 0, xl: null },
                flexWrap: { xs: "wrap", xl: null },
                "& a": {
                  marginTop: { xs: "1em", xl: null },
                  marginLeft: { xs: "0!important", xl: null },
                  marginRight: { xs: "1em", xl: null },
                },
              }}
            >
              <Button
                variant="contained"
                href="/#/projects"
                startIcon={<ProjectIcon />}
                label="Projects"
              />
            </CardActions>
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "block" }}
            sx={{
              background: `url(/welcome.svg) top right / cover`,
              marginLeft: "auto",
            }}
            width="16em"
            height="9em"
            overflow="hidden"
          />
        </Box>
      </Card>
      {/* count the users and the project to each card */}
      <Box
        display="flex"
        justifyContent="flex-start"
        gap={2}
        alignItems="stretch"
        flexWrap="wrap"
      >
        <Card
          sx={{
            padding: "20px",
            marginTop: 2,
            marginBottom: "1em",
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.1)",
            flex: 1,
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {users.data?.length || 0}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Users
          </Typography>
        </Card>
        <Card
          sx={{
            padding: "20px",
            marginTop: 2,
            marginBottom: "1em",
            flex: 1,
            boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            {projects.data?.length || 0}
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Projects
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};
