import { renderHook, act, waitFor } from "@testing-library/react";
import { TransactionsProvider, useTransactions } from "./useTransactions";
import { getTransactions, postTransaction } from "@/services/Transaction";

jest.mock('@/services/Transaction', () => ({
  getTransactions: jest.fn().mockResolvedValue({ data: { transactions: [] } }),
  postTransaction: jest.fn(),
}));

describe("useTransactions", () => {
  beforeEach(() => {
    (getTransactions as jest.Mock).mockClear();
    (postTransaction as jest.Mock).mockClear();
  });

  it("retorna transações vazias inicialmente", async () => {
    (getTransactions as jest.Mock).mockResolvedValueOnce({ data: { transactions: [] } });

    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider,
    });

    await waitFor(() => {
      expect(result.current.transactions).toEqual([]);
    });
  });

  it("adiciona uma nova transação", async () => {
    const newTransaction = {
      id: 1,
      title: "Nova transação",
      amount: 100,
      type: "withdraw",
      category: "Teste",
      createdAt: new Date().toISOString(),
    };

    (postTransaction as jest.Mock).mockResolvedValueOnce(newTransaction);

    const { result } = renderHook(() => useTransactions(), {
      wrapper: TransactionsProvider,
    });

    await act(async () => {
      await result.current.createTransaction({
        title: "Nova transação",
        amount: 100,
        type: "withdraw",
        category: "Teste",
      });
    });

    await waitFor(() => {
      expect(result.current.transactions).toHaveLength(1);
      expect(result.current.transactions[0]).toEqual(newTransaction);
    });
  });
});
