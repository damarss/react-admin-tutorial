import {
  DateInput,
  Edit,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="title" />
      <TextInput source="description" multiline rows={5} />
      <DateInput source="startdate" />
      <DateInput source="enddate" />
      <ReferenceInput source="project_leader" reference="users" />
      <ReferenceArrayInput source="project_members" reference="users" />
    </SimpleForm>
  </Edit>
);
