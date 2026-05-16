import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Customer-specific tracking IDs (Atlas task ab9cccdd…):
// - GTM container: GTM-WQ44GF53 (director comment 2026-05-15)
// - site_key + site_id: registered in Mega Admin at deploy (post-build), values
//   below are the customer's ACTIVE site row — will be swapped to the new
//   Owned-Site values once the LP site row is created.
// - No Meta Pixel in task input → no pixelId injected.
// - CTM script: account 572388 (MEGA shared collector).

const SITE_KEY = "dlwke52xg2w4lb2f";
const SITE_ID = "dcad5c9b-cc69-425f-8237-bfcbba5f235e";
const GTM_ID = "GTM-WQ44GF53";

export const metadata: Metadata = {
  metadataBase: new URL("https://book.collisionorlando.com"),
  title: {
    default:
      "Collision Center Orlando — OEM-Certified Auto Body Repair · Free Estimate",
    template: "%s | Collision Center Orlando",
  },
  description:
    "Family-owned for 45+ years. OEM-certified for 13 brands. We work directly with your insurance and back every repair with a lifetime warranty. Free estimate in Orlando, FL.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* Google Tag Manager — customer-specific container per director 2026-05-15 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* MegaTag — siteKey/siteId set at deploy. No pixelId (not provided in task input). */}
        <meta name="mega-site-id" content={SITE_ID} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"${SITE_KEY}",siteId:"${SITE_ID}"};`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)]">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* CTM — account 572388 (MEGA shared) — in body via Script per build doctrine */}
        <Script
          src="https://572388.tctm.co/t.js"
          strategy="afterInteractive"
        />

        {/* MEGA Optimizer — in body, afterInteractive */}
        <Script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id={SITE_ID}
          strategy="afterInteractive"
        />

        <QueryParamPersistence />
        {children}
      </body>
    </html>
  );
}
