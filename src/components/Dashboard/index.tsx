import { Dashboard as Layout } from "./Layout";
import { IDashboard } from "./data";

export const Dashboard = (props: IDashboard) => {

  const layoutProps = {
    ...props
  };

  return <Layout {...layoutProps} />;

};