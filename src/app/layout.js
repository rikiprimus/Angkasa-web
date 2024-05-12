import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: '400',
  display: 'swap',
  variable: '--font-poppins'
});
const lato = Lato({ 
  subsets: ["latin"], 
  weight: '400',
  display: 'swap',
  variable: '--font-lato'
});

export const metadata = {
  title: "Ankasa",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
