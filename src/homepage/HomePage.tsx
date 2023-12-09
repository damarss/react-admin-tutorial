import {
  useAuthProvider,
  useAuthState,
  useCheckAuth,
  useRedirect,
} from "react-admin";
import { Navbar } from "../components/Navbar";
import Hero from "./Hero";
import { Grid } from "@mui/material";
import { useEffect } from "react";

export const HomePage = () => {
  

  return (
    <Grid>
      <Navbar />
      <Grid container>
        <Hero />
      </Grid>
    </Grid>
  );
};
