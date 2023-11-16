import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/User";

export const App = () => <Admin dataProvider={dataProvider}>
  <Resource name="users" list={UserList} />
</Admin>;
