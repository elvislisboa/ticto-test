import { Header } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTransactions } from "@/hooks/useTransactions";

jest.mock("@/hooks/useTransactions", () => ({
  useTransactions: jest.fn(),
}));

describe("Header", () => {
  it("renders component correctly", () => {
    const handleToggleNewTransactionModal = jest.fn();
    (useTransactions as jest.Mock).mockReturnValue({ handleToggleNewTransactionModal });

    render(<Header />);

    const logo = screen.getByAltText("Ticto");
    expect(logo).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /NOVA TRANSAÇÃO/i });
    expect(button).toBeInTheDocument();
  });

  it("executes handleToggleNewTransactionModal when the button is clicked", () => {
    const handleToggleNewTransactionModal = jest.fn();
    (useTransactions as jest.Mock).mockReturnValue({ handleToggleNewTransactionModal });

    render(<Header />);

    const button = screen.getByRole("button", { name: /NOVA TRANSAÇÃO/i });
    fireEvent.click(button);

    expect(handleToggleNewTransactionModal).toHaveBeenCalledTimes(1);
  });
});
