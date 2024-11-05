"use client"
import { Dashboard, DeleteTransactionModal, Header, NewTransactionModal } from "@/components";
import { TransactionsProvider } from "@/hooks/useTransactions";

export default function Home() {
  return (
    <TransactionsProvider>
      <Header />
      <Dashboard />
      <NewTransactionModal />
      <DeleteTransactionModal />
    </TransactionsProvider>
  );
}
