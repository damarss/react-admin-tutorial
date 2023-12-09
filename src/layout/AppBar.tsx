import { AppBar, TitlePortal } from "react-admin";
import AppBarToolbar from "./AppBarToolbar";
import logo from "../assets/images/calendar.png";
import { Box, Typography } from "@mui/material";

type Props = {};

const CustomAppBar = (props: Props) => {
  return (
    <AppBar
      color="transparent"
      sx={{
        color: "rgba(0, 0, 0, 0.6)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",
      }}
      toolbar={<AppBarToolbar />}
    >
      <TitlePortal sx={{ fontWeight: 500, fontSize: "20px" }} />
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        color="black"
        sx={{ flexGrow: 1, cursor: "default" }}
      >
        <Box component="img" src={logo} width="30px" />
        <Typography variant="h6" noWrap fontWeight={600}>
          ProMan
        </Typography>
      </Box>
    </AppBar>
  );
};

export default CustomAppBar;
