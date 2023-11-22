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
  PostCreate,
  PostEdit,
  PostList,
  PostShow,
  ProjectEdit,
  ProjectList,
  ProjectShow,
  TaskList,
  UserCreate,
  UserEdit,
  UserList,
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
  }
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
      show={ShowGuesser}
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
      recordRepresentation="title"
    />
    <Resource
      name="tasks"
      list={TaskList}
      show={ShowGuesser}
      edit={EditGuesser}
      icon={ProductIcon}
    />
    {/* <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={ProductIcon} /> */}
  </Admin>
);
