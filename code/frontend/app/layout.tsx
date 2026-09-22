import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiệm hoa Cỏ Lạ",
  description: "Hoa tươi theo mùa tại Phan Đình Phùng, Hà Nội"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
