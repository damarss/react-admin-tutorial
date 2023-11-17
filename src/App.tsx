import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList, UserList } from "./components/Resources";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} recordRepresentation="name" show={ShowGuesser} />
  <Resource name="posts" list={PostList} show={ShowGuesser} edit={PostEdit} create={PostCreate} />
</Admin>;
