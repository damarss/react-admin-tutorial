import {
  DateField,
  EditButton,
  EmailField,
  NumberField,
  RecordContextProvider,
  ReferenceField,
  TextField,
  useListContext,
} from "react-admin";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import { MyUrlField } from "./MyUrlField";

const MobileGrid = ({ isReferred = false }) => {
  const { data, isLoading } = useListContext();

  if (isLoading || data.length === 0) {
    return null;
  }

  return (
    <Box margin="0.5em">
      {data.map((record) => (
        <RecordContextProvider value={record} key={record.id}>
          <Card sx={{ margin: "0.5em 0" }}>
            <CardHeader
              title={
                <>
                  User #
                  <TextField source="id" variant="body1" />
                </>
              }
              titleTypographyProps={{ variant: "body1" }}
              action={isReferred ? null : <EditButton />}
            />
            <CardContent sx={{ pt: 0 }}>
              <Typography
                variant="body2"
                display="flex"
                flexWrap="nowrap"
                alignItems="center"
                component="div"
                gap={2}
                mb={1}
              >
                <Avatar
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
                {isReferred ? (
                  <ReferenceField source="id" reference="users" link="show" />
                ) : (
                  <TextField source="name" />
                )}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Username :&nbsp;
                <TextField source="username" />
              </Typography>
              {!isReferred && (
                <Typography variant="body2" gutterBottom>
                  Age :&nbsp;
                  <NumberField source="age" />
                </Typography>
              )}
              <Typography variant="body2" gutterBottom>
                Email :&nbsp;
                <EmailField source="email" />
              </Typography>
              {!isReferred && (
                <Typography variant="body2" gutterBottom>
                  Address Street :&nbsp;
                  <TextField source="address.street" />
                </Typography>
              )}
              <Typography variant="body2" gutterBottom>
                Phone :&nbsp;
                <NumberField source="phone" />
              </Typography>
              {!isReferred && (
                <Typography variant="body2" gutterBottom>
                  Website :&nbsp;
                  <MyUrlField source="address.street" />
                </Typography>
              )}
            </CardContent>
          </Card>
        </RecordContextProvider>
      ))}
    </Box>
  );
};

export default MobileGrid;
