import type { Metadata } from "next";
import { Inter, Anton, Cinzel } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--f-body",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--f-head",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--f-cinzel",
});

export const metadata: Metadata = {
  title: "Trusun Enterprises | Smarter Solar",
  description:
    "Precision-engineered rooftop solar for homes, housing societies and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${anton.variable} ${cinzel.variable}`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}