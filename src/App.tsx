import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
  defaultTheme,
} from "react-admin";
import { dataProvider } from "./provider/localStorageDataProvider";
import {
  Dashboard,
  ProjectCreate,
  ProjectEdit,
  ProjectList,
  ProjectShow,
  TaskList,
  UserCreate,
  UserEdit,
  UserList,
  UserShow,
} from "./components";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import ProductIcon from "@mui/icons-material/Collections";
import { localAuthProvider } from "./provider/localAuthProvider";
import { Layout } from "./layout";

const theme = {
  ...defaultTheme,
  sidebar: {
    width: 200,
  },
};

export const App = () => (
  <Admin
    title=""
    authProvider={localAuthProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
    layout={Layout}
    theme={theme}
  >
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      show={UserShow}
      edit={UserEdit}
      create={UserCreate}
      icon={UserIcon}
    />
    <Resource
      name="projects"
      list={ProjectList}
      show={ProjectShow}
      icon={PostIcon}
      edit={ProjectEdit}
      create={ProjectCreate}
      recordRepresentation="title"
    />
    {/* <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={ProductIcon} /> */}
  </Admin>
);
