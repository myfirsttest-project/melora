import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
    title: "Melora Play School | Nurturing Young Minds",
    description: "Premier play school in Gurgaon offering quality early childhood education",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#f97316" />
            <link rel="apple-touch-icon" sizes="192x192" href="/images/melora-192x192.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/images/melora-152x152.png" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <title></title>
        </head>
        <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  '${GA_ID}');
          `}
        </Script>
        <Header />
        <GoogleAnalytics />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
