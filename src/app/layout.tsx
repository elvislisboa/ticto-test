import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { TransactionsProvider } from "@/hooks/useTransactions";

import "@/styles/global.scss";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ['latin'] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Ticto Finance",
  description: "Desburocratizando o controle financeiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${roboto.className} ${poppins.className}`}>
        <TransactionsProvider>
          {children}
        </TransactionsProvider>
      </body>
    </html>
  );
}
