"use client"
import { useTransactions } from "@/hooks/useTransactions";
import { DeleteTransactionModal as Layout } from "./Layout";
import { IDeleteTransactionModal } from "./data";

export const DeleteTransactionModal = (props: IDeleteTransactionModal) => {
  const { id, trashTransaction, handleToggleDeleteTransactionModal, isToggleDeleteTransactionModal } = useTransactions();

  async function handleDeleteNewTransaction() {
    await trashTransaction(id as number);

    handleToggleDeleteTransactionModal();
  }

  const layoutProps = {
    handleDeleteNewTransaction,
    isToggleDeleteTransactionModal,
    handleToggleDeleteTransactionModal,
    ...props
  };

  return <Layout {...layoutProps} />;

};