import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StyledComponentsRegistry } from "@/lib/StyledComponentsRegistry";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Deepanshu's Portfolio",
  description: "Hey I'm a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
