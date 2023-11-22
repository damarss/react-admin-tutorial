import Box from '@mui/material/Box';
import { DashboardMenuItem, MenuProps, ResourceMenuItems, useSidebarState } from 'react-admin';

const Menu = ({ dense = false }: MenuProps) => {
  const open = useSidebarState();

  return (
    <Box
      sx={{
        width: open? 200: 10,
        marginTop: 1,
        marginBottom: 1,
      }}
    >
      <DashboardMenuItem />
      <ResourceMenuItems />
    </Box>
  )
}

export default Menu
