import "./globals.css"
import { Roboto, Roboto_Condensed } from "next/font/google";
import Head from "next/head";


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto",
  subsets: ["latin"],
});


export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  


  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
      </Head>
      <body className={`${roboto.variable} ${robotoCondensed.variable}`}>
        {children}
      </body>
    </html>
    
  );
}
