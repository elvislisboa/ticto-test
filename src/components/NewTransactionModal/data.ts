import { Dispatch, FormEvent, SetStateAction } from "react";

export interface INewTransactionModal { }

export interface INewTransactionModalLayout extends INewTransactionModal {
	type: string;
	title: string;
	amount: number;
	category: string;
	setType: Dispatch<SetStateAction<"withdraw" | "deposit">>;
	setTitle: Dispatch<SetStateAction<string>>;
	setAmount: Dispatch<SetStateAction<number>>;
	setCategory: Dispatch<SetStateAction<string>>;
	handleCreateNewTransaction: (event: FormEvent) => Promise<void>;
	isToggleNewTransactionModal: boolean;
	handleToggleNewTransactionModal: () => void;
}