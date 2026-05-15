import type { Metadata } from "next";
import "./globals.css";

/*
const yourFontSans = UseYourFont({
  variable: "",
  subsets: [],
});
*/

export const metadata: Metadata = {
  title: "Your Next App Template",
  description: "Pre-configured Next.js template by Glazeen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        /*use your font here ${yourFontSans.variable}*/
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
