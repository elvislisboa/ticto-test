import { render, screen } from '@testing-library/react';
import { useTransactions } from '@/hooks/useTransactions';
import { Summary } from './';

jest.mock('../../hooks/useTransactions');

describe('Summary', () => {
  test('renders component correctly', () => {
    const transactionsMock = [
      { id: 1, type: 'deposit', amount: 100 },
      { id: 2, type: 'withdraw', amount: 50 },
    ];

    (useTransactions as jest.Mock).mockReturnValue({ transactions: transactionsMock });

    render(<Summary />);

    const depositsElement = screen.getByText(/entradas/i);
    expect(depositsElement).toBeInTheDocument();

    const withdrawalsElement = screen.getByText(/saídas/i);
    expect(withdrawalsElement).toBeInTheDocument();

    const totalElement = screen.getByText(/total/i);
    expect(totalElement).toBeInTheDocument();
  });
});
