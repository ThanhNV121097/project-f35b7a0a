import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-body" });
const playfair = Playfair_Display({ subsets: ["latin", "vietnamese"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Tiệm hoa Cỏ Lạ",
  description: "Hoa tươi theo mùa tại Phan Đình Phùng, Hà Nội"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi" className={`${inter.variable} ${playfair.variable}`}><body>{children}</body></html>;
}
