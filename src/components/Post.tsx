import { Create, Datagrid, DeleteButton, Edit, EditButton, List, ReferenceField, ReferenceInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post { record? `"${record.title}"`: `` }</span> 
}

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />
]

export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const PostShow = () => (
    <Show title={<PostTitle />}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" />
            <TextField source="title" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}} />
            <ReferenceInput source="user_id" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);
