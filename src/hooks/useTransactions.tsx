"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ITransaction } from '@/interface';
import { getTransactions, deleteTransaction, postTransaction } from '@/services/Transaction';

type TransactionInput = Omit<ITransaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
	children: ReactNode;
};

interface TransactionsContextData {
	id: number | undefined;
	transactions: ITransaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
	trashTransaction: (id: number) => Promise<void>;
	handleToggleNewTransactionModal: () => void;
	isToggleNewTransactionModal: boolean;
	handleToggleDeleteTransactionModal: (id?: number) => void;
	isToggleDeleteTransactionModal: boolean;
};

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [id, setId] = useState<number | undefined>(undefined)
	const [transactions, setTransactions] = useState<ITransaction[]>([]);
	const [isToggleNewTransactionModal, setIsToggleNewTransactionModal] = useState<boolean>(false);
	const [isToggleDeleteTransactionModal, setIsToggleDeleteTransactionModal] = useState<boolean>(false);

	function handleToggleNewTransactionModal() {
		setIsToggleNewTransactionModal(!isToggleNewTransactionModal);
	};

	function handleToggleDeleteTransactionModal(id?: number) {
		setIsToggleDeleteTransactionModal(!isToggleDeleteTransactionModal);
		id && setId(id);
	};

	useEffect(() => {
		const fetchTransactions = async () => {
			try {
				const response = await getTransactions();

				if (response && response.data && response.data.transactions) {
					setTransactions(response.data.transactions);
				} else {
					console.warn('Nenhuma transação encontrada ou dados indefinidos.');
					setTransactions([]);
				}
			} catch (error) {
				console.error('Erro ao buscar transações:', error);
			}
		};

		fetchTransactions();
	}, []);

	async function createTransaction(transactionInput: Omit<ITransaction, 'id' | 'createdAt'>) {
		try {
			if (!transactionInput) return;

			const transaction = await postTransaction({
				...transactionInput
			});

			if (transaction) {
				setTransactions(prevData => [
					...prevData,
					transaction,
				]);
			} else {
				console.warn('A transação retornada é indefinida.');
			}
		} catch (error) {
			console.error('Erro ao criar a transação:', error);
		}
	};


	async function trashTransaction(id: number) {
		try {
			await deleteTransaction(id);

			setTransactions(prevData => prevData.filter((item) => item.id !== id));
		} catch (error) {
			console.error('Erro ao excluir a transação:', error);
		}
	};

	return (
		<TransactionsContext.Provider value={{ id, transactions, trashTransaction, createTransaction, handleToggleDeleteTransactionModal, isToggleDeleteTransactionModal, handleToggleNewTransactionModal, isToggleNewTransactionModal }}>
			{children}
		</TransactionsContext.Provider>
	);
}

export function useTransactions() {
	const context = useContext(TransactionsContext);

	return context;
}