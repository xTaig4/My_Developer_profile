import localFont from "next/font/local";

// Self-hosted mono faces (SIL OFL). woff2 live in public/fonts/.
// Courier Prime — primary body face. Departure Mono — display face.
export const courier = localFont({
  src: "../../public/fonts/CourierPrime-Regular.woff2",
  variable: "--font-courier",
  weight: "400",
  display: "swap",
});

export const departure = localFont({
  src: "../../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  weight: "400",
  display: "swap",
});
