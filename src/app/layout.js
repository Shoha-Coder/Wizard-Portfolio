import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shoha_Coder</title>
        <meta
          name="description"
          content="A unique creative portfolio designed by Shoha_Coder with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand."
        />
        <meta
          property="og:url"
          content="https://wizard-portfolio.shoha-coder.uz"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shoha_Coder" />
        <meta
          property="og:description"
          content="A unique creative portfolio designed by Shoha_Coder with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand."
        />
        <meta
          property="og:image"
          content="https://links.shoha-coder.uz/wizard-portfolio/opengraph.png"
        />
        <meta
          name="twitter:card"
          content="https://links.shoha-coder.uz/wizard-portfolio/opengraph.png"
        />
        <meta
          property="twitter:domain"
          content="wizard-portfolio.shoha-coder.uz"
        />
        <meta
          property="twitter:url"
          content="https://wizard-portfolio.shoha-coder.uz"
        />
        <meta name="twitter:title" content="Shoha_Coder" />
        <meta
          name="twitter:description"
          content="A unique creative portfolio designed by Shoha_Coder with cutting-edge technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. Experience the art of modern web development firsthand."
        />
        <meta
          name="twitter:image"
          content="https://links.shoha-coder.uz/wizard-portfolio/opengraph.png"
        ></meta>
      </head>
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
