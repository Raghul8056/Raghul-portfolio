import {
  Archivo_Black,
  Caveat,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import localFont from "next/font/local";

/**
 * All fonts are self-hosted and emitted into the initial HTML by next/font.
 * Nothing is fetched from a third-party stylesheet at runtime, so text is
 * painted in its final face instead of swapping in after the page appears.
 *
 * `preload` is only enabled for the faces that are visible in the hero, so the
 * critical path stays at three font files.
 */

export const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

export const fontScript = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-script",
  preload: true,
  fallback: ["Segoe Script", "cursive"],
});

export const fontVictory = localFont({
  src: "../../public/fonts/VictoryStrikerSansDemo.otf",
  weight: "400 900",
  style: "normal",
  display: "swap",
  variable: "--font-victory",
  preload: true,
  adjustFontFallback: "Arial",
  fallback: ["Arial Black", "Impact", "sans-serif"],
});

/* Used by the section components that are not mounted on the home page yet,
   so they are registered without a preload hint. */

export const fontDisplay = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
  preload: false,
  fallback: ["Impact", "sans-serif"],
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: false,
  fallback: ["ui-monospace", "SFMono-Regular", "monospace"],
});

export const fontVariables = [
  fontSans.variable,
  fontScript.variable,
  fontVictory.variable,
  fontDisplay.variable,
  fontMono.variable,
].join(" ");
