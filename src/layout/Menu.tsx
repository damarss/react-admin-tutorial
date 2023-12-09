import Box from "@mui/material/Box";
import {
  DashboardMenuItem,
  MenuItemLink,
  MenuProps,
  ResourceMenuItems,
  useSidebarState,
} from "react-admin";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

const Menu = ({ dense = false }: MenuProps) => {
  const open = useSidebarState();

  return (
    <Box
      sx={{
        width: open ? 200 : 10,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <MenuItemLink to="home" primaryText="Home" leftIcon={<HomeIcon />} />
      <DashboardMenuItem />
      <ResourceMenuItems />
      <MenuItemLink to="about" primaryText="About" leftIcon={<InfoIcon />} />
    </Box>
  );
};

export default Menu;
