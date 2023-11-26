import {
  EmailField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <NumberField source="age" />
      <EmailField source="email" />
      <TextField source="phone" />
      <TextField source="address.street" />
      <TextField source="website" />
    </SimpleShowLayout>
  </Show>
);
