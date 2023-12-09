import { useAuthState, useRedirect } from "react-admin";
import { Navbar } from "../components";
import {
  Grid,
  Box,
  Card,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";

export const About = () => {
  const { authenticated, isLoading } = useAuthState();
  const redirect = useRedirect();
  const small = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  if (!isLoading) {
    if (!authenticated) {
      redirect("/login");
    }
  }

  return (
    <Grid maxWidth={"100vw"}>
      <Navbar />
      <Grid container>
        <Typography
          variant="h4"
          fontWeight={700}
          color="initial"
          align="center"
          sx={{
            mt: 2,
            display: "block",
            mx: "auto",
          }}
        >
          About
        </Typography>
        <Card
          sx={{
            width: "100%",
            my: 1,
            mx: `${small ? "1rem" : "7rem"}`,
            p: 2,
            borderRadius: 5,
          }}
        >
          <Box>
            <Typography variant="subtitle1" color="initial" fontWeight={400}>
              <span style={{ fontWeight: 700 }}>ProMan</span>, your go-to
              project management tool designed to streamline and enhance your
              project tracking experience. With ProMan, managing multiple
              projects has never been more efficient and user-friendly. Our
              intuitive platform empowers you to create and organize projects
              effortlessly, allowing you to stay on top of deadlines,
              milestones, and tasks with ease.
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              fontWeight={400}
              mt={1}
            >
              ProMan's robust features include the ability to assign users to
              specific projects, fostering collaboration and teamwork within
              your organization. Whether you're working on a small-scale project
              or juggling multiple large initiatives, ProMan provides the
              flexibility and scalability you need. Built with cutting-edge
              technologies such as React, Typescript, and Material UI, ProMan
              delivers a seamless and responsive user interface. We believe in
              the power of open-source collaboration, which is why ProMan is
              freely available for use. Experience the benefits of a powerful
              project management tool without any cost constraints. Elevate your
              project management capabilities with ProMan and embark on a
              journey towards enhanced productivity and project success.
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};
