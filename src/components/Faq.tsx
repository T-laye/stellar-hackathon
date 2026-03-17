"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

type FaqProps = {
  que: string;
  ans: string;
};

const faqs: FaqProps[] = [
  {
    que: "Who can apply?",
    ans: "Developers, designers, product managers, and Web3 builders can apply as teams of up to three members. Individual applications are not accepted.",
  },
  {
    que: "When and where is the event taking place?",
    ans: "",
  },
  {
    que: "Do I need a completed project to apply?",
    ans: "",
  },
  {
    que: "How many teams are selected?",
    ans: "20 teams are selected to participate in the Virtual Build Sprint, and the top 5 teams advance to the in‑person residency.",
  },
  {
    que: "How do I register?",
    ans: "You can register here. Or scroll up to the register button at top right of the website.",
  },
  {
    que: "Is the residency in person?",
    ans: "",
  },
  {
    que: "What do teams need to submit?",
    ans: "At the end of the Build Sprint, teams submit a working MVP, product demo or GitHub repository, and a short pitch deck.",
  },
  {
    que: "What happens on Demo Day?",
    ans: "Teams present a 5‑minute pitch followed by a 3‑minute Q&A with judges. Winners are announced after the final scoring session.",
  },
  {
    que: "Who’s organizing this?",
    ans: "",
  },
];

const FaqItem = ({ que, ans }: FaqProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={` transition-colors duration-200 ${open ? "" : ""}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 px-1 text-left gap-4 group"
      >
        <span className="font-semibold text-xl sm:text-2xl group-hover:text-primary transition-colors duration-200">
          {que}
        </span>
        <span
          className={`shrink-0 w-7 h-7  flex items-center justify-center text-4xl font-light transition-all duration-300 ${
            open ? "" : ""
          }`}
        >
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 px-1 leading-relaxed">{ans}</p>
      </div>
    </div>
  );
};

export default function Faq() {
  return (
    <section className="pb-30 sm:pt-10">
      <div className="custom-container max-w-2xl mx-auto">
        {/* <h2 className="mb-10">Frequently asked questions</h2> */}

        <div className=" max-w-232.5 mx-auto">
          {faqs.map((faq, i) => (
            <FaqItem key={i} que={faq.que} ans={faq.ans} />
          ))}
        </div>

        <div className="mt-20 sm:mt-34.75 flex flex-col items-center">
          <h1 className="shabo-font text-center text-5xl sm:text-8xl md:text-[115.91px]">
            Build. Launch. Pitch.
          </h1>
          <p className="text-center mt-1 text-sm sm:text-base md:text-xl">
            Applications close April 20. Join the Q2 Residency Innovation
            Sprint.
          </p>
          <Button className="mt-6">Apply Now</Button>
        </div>
      </div>
    </section>
  );
}
