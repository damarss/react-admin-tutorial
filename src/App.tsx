import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList, PostShow, UserList } from "./components/Resources";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dasboard";
import { localAuthProvider } from "./provider/localAuthProvider";

export const App = () => <Admin authProvider={localAuthProvider} dataProvider={dataProvider} dashboard={Dashboard}>
  <Resource name="users" list={UserList} recordRepresentation="name" show={ShowGuesser} icon={UserIcon} />
  <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon} />
</Admin>;
