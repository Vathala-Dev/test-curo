"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/data/services";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-xl border border-blue-100 bg-white"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 font-semibold text-navy">{faq.question}</span>
            <svg
              className={cn(
                "h-5 w-5 shrink-0 text-primary transition-transform",
                openIndex === index && "rotate-180"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="border-t border-blue-50 px-6 py-4">
              <p className="text-muted leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
