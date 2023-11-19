import Box from '@mui/material/Box';
import { DashboardMenuItem, MenuProps, ResourceMenuItems, useSidebarState } from 'react-admin';

const Menu = ({ dense = false }: MenuProps) => {
  const open = useSidebarState();

  return (
    <Box
      sx={{
        width: open? 200: 50,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <DashboardMenuItem sx={{ borderRadius: "0 10px 10px 0", overflow: "hidden" }}/>
      <ResourceMenuItems/>
    </Box>
  )
}

export default Menu
