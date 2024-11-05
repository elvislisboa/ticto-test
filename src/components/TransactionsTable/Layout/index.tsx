import React from "react";
import Image from "next/image";

import { trash } from "@/assets";
import { ITransactionsTableLayout } from "../data";

import styles from "./styles.module.scss"

export const TransactionsTable: React.FC<ITransactionsTableLayout> = ({ transactions, handleToggleDeleteTransactionModal }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.heading}>
        <li><strong>Registros</strong></li>
        <li>
          {transactions.length > 1 ?
            `${transactions.length} itens` :
            `${transactions.length} item`
          }
        </li>
        <li>Descrição</li>
        <li>Valor</li>
        <li>Categoria</li>
        <li>Data</li>
      </ul>

      {transactions.map((transaction, index) => (
        <ul className={styles.body} key={index}>
          <li>{transaction.title}</li>
          <li className={styles[transaction.type]}>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(transaction.amount / 100)}</li>
          <li>{transaction.category}</li>
          <li>
            {new Intl.DateTimeFormat('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }).format(new Date(transaction.createdAt)).replace(',', ' às').replace(':', 'h')}
          </li>
          <li>
            <button type="button" onClick={() => handleToggleDeleteTransactionModal(transaction.id)}>
              <Image src={trash} alt="Lixeira" />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};
