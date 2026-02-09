"use client";
import { useEffect, useState } from "react";
import { translateToBangla } from "./translate";

export default function AccordionItem({ question, answer, lang }) {
  const [open, setOpen] = useState(false);
  const [bnQ, setBnQ] = useState("");
  const [bnA, setBnA] = useState("");

  useEffect(() => {
    if (lang === "bn") {
      translateToBangla(question).then(setBnQ);
      translateToBangla(answer).then(setBnA);
    }
  }, [lang, question, answer]);

  return (
    <div className="border rounded-lg mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-4 flex justify-between text-left"
      >
        {lang === "en" ? question : bnQ || "লোড হচ্ছে..."}
        <span>▼</span>
      </button>

      {open && (
        <p className="p-4 text-gray-600">
          {lang === "en" ? answer : bnA || "লোড হচ্ছে..."}
        </p>
      )}
    </div>
  );
}
