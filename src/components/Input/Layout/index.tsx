import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IInputLayout } from "../data";

import styles from "./styles.module.scss"

const Input: React.FC<IInputLayout> = ({ label, error, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {label && <label htmlFor={rest.id}>{label}</label>}
        <input className={styles.field} {...rest} />
      </div>
      <span
        className={styles[error ? "showError" : "error"]}
      >
        <FiAlertCircle size={15} /> {error}
      </span>
    </div>

  );
};

export { Input };