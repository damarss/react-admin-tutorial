import {
  Admin,
  CustomRoutes,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./provider/localStorageDataProvider";
import { Dashboard, PostCreate, PostEdit, PostList, PostShow, UserList } from "./components";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { localAuthProvider } from "./provider/localAuthProvider";
import { Layout } from "./layout";

export const App = () => (
  <Admin
    title=""
    authProvider={localAuthProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
  >
    <Resource name="users" list={UserList} recordRepresentation="name" show={ShowGuesser} icon={UserIcon} />
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);
