import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pagination with Next.js",
  description:
    "Exemplo de paginação com Next.js, mostrando como implementar paginação de forma eficiente.",
  keywords: "pagination, nextjs, react, desenvolvimento web",
  author: "Daniel Rocha",
  robots: "index, follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
