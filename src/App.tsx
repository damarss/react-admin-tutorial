import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList, PostShow, UserList } from "./components/Resources";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} recordRepresentation="name" show={ShowGuesser} />
  <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} />
</Admin>;
