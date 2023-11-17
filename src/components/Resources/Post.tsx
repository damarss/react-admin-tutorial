import { Create, Datagrid, Edit, EditButton, List, ReferenceField, ReferenceInput, Show, SimpleForm, SimpleShowLayout, TextField, TextInput, useRecordContext } from 'react-admin';

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post { record? `"${record.title}"`: `` }</span> 
}

export const PostList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostShow = () => (
    <Show title={<PostTitle />}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
            <TextInput source="id" InputProps={{disabled: true}} />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);
