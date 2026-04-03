import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "by yassine — High-Performance Digital Infrastructure",
  description:
    "Next.js ecosystems for Commerce & Coaching brands. PageSpeed-optimized builds that convert.",
  metadataBase: new URL("https://byyassine.com"),
  openGraph: {
    title: "by yassine — High-Performance Digital Infrastructure",
    siteName: "by yassine",
  },
};

export const viewport = {
  themeColor: "#070910",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
