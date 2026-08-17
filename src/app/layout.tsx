import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Raghul S — Full Stack Developer & Graphic Designer",
  description:
    "Portfolio of Raghul S, Full Stack Developer & Graphic Designer based in Chennai, India.",
  applicationName: "Raghul S — Portfolio",
  authors: [{ name: "Raghul S" }],
  keywords: [
    "Raghul S",
    "Full Stack Developer",
    "Graphic Designer",
    "Chennai",
    "React",
    "Next.js",
    "Figma",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    siteName: "Raghul S — Portfolio",
    title: "Raghul S — Full Stack Developer & Graphic Designer",
    description:
      "Design, develop, deliver. Portfolio of Raghul S — Full Stack Developer & Graphic Designer based in Chennai, India.",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
