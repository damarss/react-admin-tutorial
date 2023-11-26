import React from "react";
import {
  Create,
  DateInput,
  ReferenceArrayInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";
const RichTextInput = React.lazy(() =>
  import("ra-input-rich-text").then((module) => ({
    default: module.RichTextInput,
  }))
);

export const ProjectCreate = () => (
  <Create sx={{ mb: 2 }}>
    <SimpleForm sx={{ maxWidth: "40em" }}>
      <TextInput source="title" autoFocus fullWidth />
      <RichTextInput source="description" fullWidth />
      <DateInput source="startdate" fullWidth />
      <DateInput source="enddate" />
      <ReferenceInput source="project_leader" reference="users" />
      <ReferenceArrayInput source="project_members" reference="users" />
    </SimpleForm>
  </Create>
);
