import React from "react";
import { IDashboardLayout } from "../data";

import styles from "./styles.module.scss"
import { Summary } from "@/components/Summary";
import { TransactionsTable } from "@/components/TransactionsTable";

export const Dashboard: React.FC<IDashboardLayout> = ({ }) => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Summary />
        <TransactionsTable />
      </section>
    </main>
  );
};
