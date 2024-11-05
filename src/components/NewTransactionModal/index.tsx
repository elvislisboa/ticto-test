"use client"
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "@/hooks/useTransactions";

import { NewTransactionModal as Layout } from "./Layout";
import { INewTransactionModal } from "./data";

export const NewTransactionModal = (props: INewTransactionModal) => {
  const { createTransaction, handleToggleNewTransactionModal, isToggleNewTransactionModal } = useTransactions();

  const [type, setType] = useState<"withdraw" | "deposit">("deposit");

  const personalDataSchema = z.object({
    title: z
      .string()
      .nonempty("Nome do registro é obrigatório."),
    amount: z
      .number().min(1, "O valor do registro deve ser maior que 0."),
    category: z
      .string()
      .nonempty("A categoria é obrigatória.")

  });

  type PersonalDataForm = z.infer<typeof personalDataSchema>;

  const { control, handleSubmit, formState: { errors }, reset } = useForm<PersonalDataForm>({
    resolver: zodResolver(personalDataSchema),
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
    },
  });

  async function handleCreateNewTransaction(data: PersonalDataForm) {
    await createTransaction({
      ...data,
      type,
    })

    reset();
    setType("deposit");
    handleToggleNewTransactionModal();
  }

  const layoutProps = {
    type,
    errors,
    setType,
    control,
    handleSubmit,
    handleCreateNewTransaction,
    isToggleNewTransactionModal,
    handleToggleNewTransactionModal,
    ...props
  };

  return <Layout {...layoutProps} />;

};