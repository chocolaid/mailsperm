import type { Metadata } from "next";
import Layout from "./components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mail Sender",
  description: "Professional email delivery system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
