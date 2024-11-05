import { render, screen } from "@testing-library/react";
import { TransactionsTable } from "./index";

jest.mock("../../hooks/useTransactions", () => ({
  useTransactions: jest.fn(() => ({
    transactions: [
      {
        title: "Test Transaction",
        amount: 10000,
        type: "withdraw",
        category: "Desenvolvimento",
        createdAt: "2023-06-29T10:00:00.000Z",
      },
    ],
  })),
}));

describe("TransactionsTable", () => {
  beforeEach(() => {
    render(
      <TransactionsTable />
    );
  });

  test("exibe a tabela de transações corretamente", () => {
    const title = screen.getByText("Test Transaction");
    const amount = screen.getByText("R$ 100,00");
    const category = screen.getByText("Desenvolvimento");
    const date = screen.getByText("29/06/2023 às 07h00");

    expect(title).toBeInTheDocument();
    expect(amount).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});