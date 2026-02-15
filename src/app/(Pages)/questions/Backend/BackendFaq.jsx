"use client";
import { useState } from "react";
import AccordionItem from "../../../Components/QuestionAndAnswerTopics/AccordionItem";
import BackendData from "./BackendData";

export default function BackEndFAQ() {
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
      {BackendData.map((item) => (
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
