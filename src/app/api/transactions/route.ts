import { NextRequest, NextResponse } from 'next/server';

let transactions = [
  {
    id: 1,
    title: 'Freelance de website',
    type: 'deposit',
    category: 'Desenvolvimento',
    amount: 12000,
    createdAt: new Date('2022-04-10 08:20:00'),
  },
  {
    id: 2,
    title: 'Aluguel do apartamento',
    type: 'withdraw',
    category: 'Casa',
    amount: 1500,
    createdAt: new Date('2022-04-12 13:55:00'),
  },
];

export async function GET() {
  return NextResponse.json({ transactions });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newTransaction = {
    id: transactions.length + 1,
    ...body,
    createdAt: new Date(),
  };

  transactions.push(newTransaction);
  return NextResponse.json(newTransaction, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  const transactionId = parseInt(id, 10);
  const initialLength = transactions.length;
  transactions = transactions.filter(transaction => transaction.id !== transactionId);

  if (transactions.length === initialLength) {
    return NextResponse.json({ error: 'Transação não encontrada' }, { status: 404 });
  }

  return NextResponse.json({ message: `Transação com ID ${transactionId} removida com sucesso` }, { status: 200 });
}
