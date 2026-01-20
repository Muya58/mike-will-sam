import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layout/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
  title: "TurboClub Manager",
  description: "Premium Sports Club Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Sidebar />
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', padding: 'var(--spacing-lg)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
