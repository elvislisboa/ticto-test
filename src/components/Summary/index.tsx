"use client"
import { useTransactions } from "@/hooks/useTransactions";
import { Summary as Layout } from "./Layout";
import { ISummary } from "./data";

export const Summary = (props: ISummary) => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraw: 0,
    total: 0,
  })

  const layoutProps = {
    summary,
    ...props
  };

  return <Layout {...layoutProps} />;

};