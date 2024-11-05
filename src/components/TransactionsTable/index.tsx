import { useTransactions } from "@/hooks/useTransactions";
import { TransactionsTable as Layout } from "./Layout";
import { ITransactionsTable } from "./data";

export const TransactionsTable = (props: ITransactionsTable) => {
  const { transactions, handleToggleDeleteTransactionModal } = useTransactions();

  const layoutProps = {
    transactions,
    handleToggleDeleteTransactionModal,
    ...props
  };

  return <Layout {...layoutProps} />;

};