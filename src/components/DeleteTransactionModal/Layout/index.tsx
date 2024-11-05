import React from "react";
import Modal from 'react-modal';

import { IDeleteTransactionModalLayout } from "../data";
import { close, trash } from "@/assets";

import styles from "./styles.module.scss"
import Image from "next/image";

export const DeleteTransactionModal: React.FC<IDeleteTransactionModalLayout> = ({ isToggleDeleteTransactionModal, handleToggleDeleteTransactionModal, handleDeleteNewTransaction }) => {
  return (
    <Modal
      isOpen={isToggleDeleteTransactionModal}
      onRequestClose={handleToggleDeleteTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleToggleDeleteTransactionModal}
        className="react-modal-close"
      >
        <Image src={close} alt="Fechar modal" />
      </button>

      <div className={styles.wrapper}>
        <h2>Você está excluindo este registro</h2>

        <figure>
          <Image src={trash} alt="Lixeira" />
        </figure>

        <p>Essa ação é permanente, deseja continuar?</p>

        <span>
          <button type="button" onClick={() => handleDeleteNewTransaction()}>
            DELETAR
          </button>
          <button type="button" onClick={() => handleToggleDeleteTransactionModal()}>
            CANCELAR
          </button>
        </span>
      </div>
    </Modal>
  );
};
