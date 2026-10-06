import type { Metadata } from "next";
import { Inter, Anton, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--f-body" });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--f-head" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--f-alt" });

export const metadata: Metadata = {
  title: "Trusun Enterprises | Smarter Solar",
  description: "Precision-engineered rooftop solar for homes, housing societies and businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${anton.variable} ${jakarta.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}