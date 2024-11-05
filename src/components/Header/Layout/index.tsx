import React from "react";
import Image from "next/image";
import { IHeaderLayout } from "../data";
import { logo } from "@/assets";

import styles from "./styles.module.scss"

export const Header: React.FC<IHeaderLayout> = ({ handleToggleNewTransactionModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Image src={logo} alt="Ticto" />
        <button type="button" onClick={handleToggleNewTransactionModal}>
          NOVA TRANSAÇÃO
        </button>
      </div>
    </header>
  );
};
