import { AppBar, TitlePortal } from "react-admin"
import AppBarToolbar from "./AppBarToolbar"

type Props = {}

const CustomAppBar = (props: Props) => {
  return (
    <AppBar 
      color="transparent" 
      sx={{  color: 'rgba(0, 0, 0, 0.6)', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)' }}
      toolbar={<AppBarToolbar />}
    >
      <TitlePortal sx={{ fontWeight: 500, fontSize: '20px' }} />
    </AppBar>
  )
}

export default CustomAppBar
