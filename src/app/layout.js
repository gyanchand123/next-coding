import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       {/*  <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,700&family=Montserrat:wght@700&family=Poppins&family=Roboto:ital,wght@0,100;0,400;1,100&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="stylesheet" href="/style.css"/> 
        <script src="/common.js"/> 
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
