import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrain = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXT PLAYGROUND",
  description: "various experimental playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={jetBrain.className}>{children}</body>
    </html>
  );
}
