import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevJourney - Página inicial.",
};

export default function PageHome() {
  return (
    <main>
      <Section />
    </main>
  );
}
