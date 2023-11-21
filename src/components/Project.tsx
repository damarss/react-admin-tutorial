import {
  Datagrid,
  DateField,
  List,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  TextField,
  useListContext,
} from "react-admin";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

type ProjectListProps = {
  id: number;
  title: string;
  description: string;
  startdate: Date;
  enddate: Date;
  project_leader: number;
  project_member: number[];
};

export const ProjectList = () => (
  <List sort={{ field: "name", order: "ASC" }} component="div" actions={false}>
    <ProjectGrid />
  </List>
);

const ProjectGrid = () => {
  const { data, isLoading } = useListContext();
  console.log(data);

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <Box margin="0.5em">
      {data.map((record: ProjectListProps) => (
        <RecordContextProvider value={record} key={record.id}>
          <Card sx={{ margin: "0.5em 0" }}>
            
          </Card>
        </RecordContextProvider>
      ))}
    </Box>
  );
};
