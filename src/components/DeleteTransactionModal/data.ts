export interface IDeleteTransactionModal { }

export interface IDeleteTransactionModalLayout extends IDeleteTransactionModal {
	handleDeleteNewTransaction: () => Promise<void>;
	isToggleDeleteTransactionModal: boolean;
	handleToggleDeleteTransactionModal: () => void;
}