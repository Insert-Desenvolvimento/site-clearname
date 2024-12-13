import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayhara Soares",
  description: "Nayhara Soares Reabilitação de Crédito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
