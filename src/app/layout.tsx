import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nayhara Soares",
  description: "Institutional Web site from Credit of Nayhara Soares",
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
