import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Phil Fazio - Head Athletic Trainer",
  description: "Official website of Phil Fazio, Head Athletic Trainer for the Flint Firebirds hockey team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
