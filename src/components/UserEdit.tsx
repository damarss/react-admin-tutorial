import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput source="username" />
      <NumberInput source="age" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="address.street" />
      <TextInput source="website" />
    </SimpleForm>
  </Edit>
);
