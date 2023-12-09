import calendar from "../assets/images/calendar.png";
import { Box, Grid } from "@mui/material";
import { useMediaQuery, Theme, Typography, Button } from "@mui/material";

const Hero = () => {
  const small = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <Grid
      display="flex"
      id="hero"
      container
      mx={5}
      alignItems="center"
      flexDirection={small ? "column" : "row"}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Box>
            <Typography variant="h4" fontWeight={700} color="initial">
              <span
                style={{
                  background:
                    "linear-gradient(to right, #121FCF 0%, #982E3A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ProMan
              </span>
            </Typography>
            <Typography variant="h5" fontWeight={500} color="initial">
              Create, Manage, and Track your Projects
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="initial" fontWeight={400}>
            ProMan is a project management tool that helps you keep track of all
            your projects. ProMan gives you the ability to create projects and
            assign users to project.
          </Typography>
        </Box>
        <Button
          href="/#/login"
          sx={{
            mt: 1,
            background: "#982E3A",
            color: "primary.contrastText",
            borderRadius: 20,
            px: 4,
            py: 1.5,
            fontWeight: 500,
            ":hover": {
              background: "#873E46",
            },
          }}
        >
          Start Now
        </Button>
      </Box>
      <Box
        component="img"
        sx={{
          height: "auto",
          width: 300,
          flex: 1,
        }}
        alt="Calendar icon"
        src={calendar}
      />
    </Grid>
  );
};

export default Hero;
