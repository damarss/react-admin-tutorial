import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit sx={{ mb: 2 }}>
    <SimpleForm sx={{ maxWidth: "40em" }}>
      <NumberInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" fullWidth />
      <TextInput source="username" fullWidth />
      <NumberInput source="age" fullWidth />
      <TextInput source="email" fullWidth />
      <TextInput source="phone" fullWidth />
      <TextInput source="address.street" fullWidth />
      <TextInput source="website" fullWidth />
    </SimpleForm>
  </Edit>
);
