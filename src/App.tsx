import {
  Admin,
  CustomRoutes,
  EditGuesser,
  ListGuesser,
  Login,
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
import { Route } from "react-router";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { localAuthProvider } from "./provider/localAuthProvider";
import { Layout } from "./layout";
import { HomePage } from "./homepage";
import { About } from "./about";

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
    loginPage={
      <Login backgroundImage="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" />
    }
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
    <CustomRoutes noLayout>
      <Route path="home" element={<HomePage />} />
      <Route path="about" element={<About />} />
    </CustomRoutes>
  </Admin>
);
