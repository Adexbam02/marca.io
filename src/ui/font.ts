import { Duru_Sans, Poppins, Roboto, Exo_2 } from "next/font/google";

export const duru_Sans = Duru_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const exo = Exo_2({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const roboto = Roboto({
  weight: ["400", "100", "300", "500", "700", "900"],
  subsets: ["latin", "latin-ext"],
});
