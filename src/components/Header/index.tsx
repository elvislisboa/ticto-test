import { useTransactions } from "@/hooks/useTransactions";
import { Header as Layout } from "./Layout";
import { IHeader } from "./data";

export const Header = (props: IHeader) => {
  const { handleToggleNewTransactionModal } = useTransactions();

  const layoutProps = {
    handleToggleNewTransactionModal,
    ...props
  };

  return <Layout {...layoutProps} />;

};