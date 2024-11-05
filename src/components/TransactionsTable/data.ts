import { ITransaction } from "@/interface";

export interface ITransactionsTable { }

export interface ITransactionsTableLayout extends ITransactionsTable {
  transactions: ITransaction[];
  handleToggleDeleteTransactionModal: (id?: number) => void;
}