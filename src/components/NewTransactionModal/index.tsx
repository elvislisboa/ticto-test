"use client"
import { useTransactions } from "@/hooks/useTransactions";
import { NewTransactionModal as Layout } from "./Layout";
import { INewTransactionModal } from "./data";
import { FormEvent, useState } from "react";

export const NewTransactionModal = (props: INewTransactionModal) => {
  const { createTransaction, handleToggleNewTransactionModal, isToggleNewTransactionModal } = useTransactions();

  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [type, setType] = useState<"withdraw" | "deposit">("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    handleToggleNewTransactionModal();
  }

  const layoutProps = {
    type,
    title,
    amount,
    category,
    setType,
    setTitle,
    setAmount,
    setCategory,
    handleCreateNewTransaction,
    isToggleNewTransactionModal,
    handleToggleNewTransactionModal,
    ...props
  };

  return <Layout {...layoutProps} />;

};