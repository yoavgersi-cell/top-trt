import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Best TRT Provider Match - Free Quiz",
  description:
    "Answer a few quick questions and get a personalized TRT clinic recommendation. Compare online testosterone replacement therapy providers based on your needs, budget, and location.",
  alternates: {
    canonical: "https://www.toptrt.io/find-your-match",
  },
  openGraph: {
    title: "Find Your Best TRT Provider Match",
    description:
      "Take our free quiz and get matched with the best TRT clinic for your needs and budget.",
    url: "https://www.toptrt.io/find-your-match",
  },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className="sr-only">Find Your Best TRT Provider Match</h1>
      {children}
    </>
  );
}
