import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevJourney - Sua jornada no desenvolvimento começa aqui.",
  description:
    "Embarque em uma jornada de aprendizado em programação e descubra o poder do código. Desde os fundamentos até projetos avançados, cada passo é uma oportunidade para transformar sua curiosidade em habilidades práticas. Prepare-se para desenvolver soluções inovadoras e conquistar novos desafios.",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> {}
export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
