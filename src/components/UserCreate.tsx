import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <NumberInput source="age" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="address.street" />
      <TextInput source="website" />
    </SimpleForm>
  </Create>
);
