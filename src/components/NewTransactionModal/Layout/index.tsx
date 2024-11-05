import React from "react";
import Modal from 'react-modal';

import { currencyFormat } from "@/constants";
import { INewTransactionModalLayout } from "../data";
import { close, incomeCircle, outcomeCircle } from "@/assets";

import styles from "./styles.module.scss"
import Image from "next/image";

export const NewTransactionModal: React.FC<INewTransactionModalLayout> = ({ handleCreateNewTransaction, isToggleNewTransactionModal, handleToggleNewTransactionModal, amount, category, setAmount, setCategory, setTitle, setType, title, type }) => {
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

      <form className={styles.form} onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder='Nome'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="text"
          inputMode="numeric"
          placeholder="Preço"
          value={amount > 0 ? (currencyFormat(amount, 'output') as string) : ""}
          onChange={event => {
            const parsedValue = currencyFormat(event.target.value, 'input') as number;
            setAmount(parsedValue);
          }}
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

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          CADASTRAR
        </button>
      </form>
    </Modal>
  );
};
