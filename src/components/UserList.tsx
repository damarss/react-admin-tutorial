import { useMediaQuery, Theme } from "@mui/material";
import {
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  EmailField,
  List,
  ListActions,
  NumberField,
  SimpleList,
  TextField,
  UrlField,
} from "react-admin";
import { MyUrlField } from "./MyUrlField";
import MobileGrid from "./MobileGrid";

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

  return (
    <List>
      {isSmall ? (
        <MobileGrid />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <NumberField source="age" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <EditButton />
          <DeleteWithConfirmButton />
        </Datagrid>
      )}
    </List>
  );
};
