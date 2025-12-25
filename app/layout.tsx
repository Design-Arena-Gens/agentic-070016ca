import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Client Onboarding SOP | Performance Marketing",
  description: "Complete standard operating procedure for onboarding paid media clients to Meta and Google Ads platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
