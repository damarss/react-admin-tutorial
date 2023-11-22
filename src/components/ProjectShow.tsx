import {
  ArrayField,
  Button,
  Datagrid,
  DateField,
  DeleteButton,
  DeleteWithConfirmButton,
  EditButton,
  EmailField,
  List,
  NumberField,
  ReferenceArrayField,
  ReferenceField,
  Resource,
  RichTextField,
  Show,
  SimpleShowLayout,
  TabbedShowLayout,
  TextField,
  WithRecord,
  useGetList,
  useGetRecordId,
  useListContext,
  useRecordContext,
  useUpdate,
} from "react-admin";
import { Grid, Box, Card, CardHeader, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { type } from "os";
import { useState } from "react";

const ProjectTitle = () => {
  const record = useRecordContext();

  //   compute time left from now to end date in days
  const endDate: number = new Date(record.enddate).getTime();
  record.timeleft =
    Math.round((endDate - Date.now()) / (1000 * 60 * 60 * 24)) + " days";

  return <span>Project "{record.title}"</span>;
};

export const ProjectShow = () => {
  return (
    <Show title={<ProjectTitle />}>
      <TabbedShowLayout>
        <TabbedShowLayout.Tab label="info">
          <TextField label="Project Title" source="title" sx={{ mb: 1 }} />
          <RichTextField
            label="Project Description"
            source="description"
            sx={{ mb: 1 }}
          />
          <DateField label="Start Date" source="startdate" sx={{ mb: 1 }} />
          <DateField label="End Date" source="enddate" sx={{ mb: 1 }} />
          <NumberField
            label="Remaining Times"
            source="timeleft"
            sx={{ mb: 1 }}
          />
          <ReferenceField
            label="Project Leader"
            source="project_leader"
            reference="users"
            link="show"
          />
        </TabbedShowLayout.Tab>
        <TabbedShowLayout.Tab label="participant">
          <WithRecord
            render={(record) => (
              <ReferenceArrayField source="project_members" reference="users">
                <Card
                  sx={{
                    boxShadow: "none",
                    border: "1px solid #e0e0e3",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardHeader
                    title="Project Participant"
                    titleTypographyProps={{ variant: "h6" }}
                  />
                  <Box sx={{ height: 2, bgcolor: "grey.300" }} />
                  <Datagrid isRowSelectable={() => false}>
                    <Avatar aria-label="">
                      <TextField source="name[0]" />
                    </Avatar>
                    <ReferenceField
                      label="Name"
                      source="id"
                      reference="users"
                      link="show"
                    />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                  </Datagrid>
                </Card>
              </ReferenceArrayField>
            )}
          />
        </TabbedShowLayout.Tab>
      </TabbedShowLayout>
    </Show>
  );
};
