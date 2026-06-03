import type { Metadata } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import Providers from "./providers";
import "./index.css";

export const metadata: Metadata = {
  title: "Ahlei",
  description: "Ahlei - USCG Approved Maritime Training",
  openGraph: {
    title: "Ahlei",
    description: "Ahlei - USCG Approved Maritime Training",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/063eb6b7-a9fe-4279-b549-6c7b60a203de/id-preview-5ac6610f--c88dac81-c044-472a-bfa2-21acb2f8a647.lovable.app-1774351927596.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/063eb6b7-a9fe-4279-b549-6c7b60a203de/id-preview-5ac6610f--c88dac81-c044-472a-bfa2-21acb2f8a647.lovable.app-1774351927596.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script async src="https://js.paystack.co/v1/inline.js"></script>
        {/* Zoho SalesIQ Live Chat Widget */}
        <script>{`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}</script>
        <script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqbd8af5c4329c14486412a147b2a3980e" defer></script>
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          <CartProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
