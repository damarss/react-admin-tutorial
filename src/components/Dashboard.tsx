import { Card, CardContent, CardHeader } from "@mui/material";
import { Title, TitlePortal } from "react-admin";

export const Dashboard = () => {
  return (
    <>
      <Title title="Dashboard" />
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      </Card>
    </>
  );
};
