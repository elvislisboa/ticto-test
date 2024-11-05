import React from "react";
import Modal from 'react-modal';

import { currencyFormat } from "@/constants";
import { Input } from "@/components";
import { Controller } from "react-hook-form";
import { INewTransactionModalLayout } from "../data";
import { close, incomeCircle, outcomeCircle } from "@/assets";

import styles from "./styles.module.scss"
import Image from "next/image";

export const NewTransactionModal: React.FC<INewTransactionModalLayout> = ({ handleCreateNewTransaction, isToggleNewTransactionModal, handleToggleNewTransactionModal, handleSubmit, control, setType, type, errors }) => {
  return (
    <Modal
      isOpen={isToggleNewTransactionModal}
      onRequestClose={handleToggleNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleToggleNewTransactionModal}
        className="react-modal-close"
      >
        <Image src={close} alt="Fechar modal" />
      </button>

      <form className={styles.form} onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>Cadastrar transação</h2>

        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              value={field.value || ''}
              type="text"
              placeholder="Nome"
              error={errors.title?.message}
            />
          )}
        />

        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              inputMode="numeric"
              placeholder="Preço"
              value={field.value > 0 ? (currencyFormat(field.value, 'output') as string) : ""}
              onChange={event => {
                const parsedValue = currencyFormat(event.target.value, 'input') as number;
                field.onChange(parsedValue);
              }}
              error={errors.amount?.message}
            />
          )}
        />

        <div className={styles.transactionTypeWrapper}>
          <button
            type="button"
            onClick={() => { setType('deposit'); }}
            className={styles[type === 'deposit' ? type : "radioBox"]}
          >
            <Image src={incomeCircle} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
            onClick={() => { setType('withdraw'); }}
            className={styles[type === 'withdraw' ? type : "radioBox"]}
          >
            <Image src={outcomeCircle} alt="Saída" />
            <span>Saída</span>
          </button>
        </div>

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder='Categoria'
              error={errors.category?.message}
            />
          )}
        />
        <button type="submit">
          CADASTRAR
        </button>
      </form>
    </Modal>
  );
};
