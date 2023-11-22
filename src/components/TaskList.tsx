import {
  ChipField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const TaskList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <ChipField source="status" color="secondary" />
      <ReferenceField source="project_id" reference="projects" />
      <ReferenceField source="assigned_to" reference="users" />
    </Datagrid>
  </List>
);
