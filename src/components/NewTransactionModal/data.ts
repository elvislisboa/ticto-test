import { Dispatch, SetStateAction } from "react";
import { Control, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

interface ITransaction {
	amount: number;
	category: string;
	title: string;
}

export interface INewTransactionModal { }

export interface INewTransactionModalLayout extends INewTransactionModal {
	type: string;
	control: Control<ITransaction, any>;
	handleSubmit: UseFormHandleSubmit<ITransaction, undefined>
	errors: FieldErrors<ITransaction>;
	setType: Dispatch<SetStateAction<"withdraw" | "deposit">>;
	handleCreateNewTransaction: (data: ITransaction) => Promise<void>;
	isToggleNewTransactionModal: boolean;
	handleToggleNewTransactionModal: () => void;
}