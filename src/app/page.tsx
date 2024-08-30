import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevJourney - Página inicial.",
};

export default function PageHome() {
  return (
    <main className="">
      <Card />
    </main>
  );
}
