"use client";
import { useState } from "react";
import faqData from "./frontenddata";
import AccordionItem from "../../../Components/QuestionAndAnswerTopics/AccordionItem";

export default function DjangoFAQ() {
  const [lang, setLang] = useState("en");

  return (
    <div className="max-w-2xl mx-auto bg-red-400">
      {/* Language Switch */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLang(lang === "en" ? "bn" : "en")}
          className="px-4 py-1 rounded bg-blue-500 text-white"
        >
          {lang === "en" ? "বাংলা" : "English"}
        </button>
      </div>

      {/* FAQ List */}
      {faqData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          lang={lang}
        />
      ))}
    </div>
  );
}
