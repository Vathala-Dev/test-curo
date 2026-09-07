"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { sharedFormFields } from "@/data/formConfig";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-navy">Thank You!</h3>
        <p className="mt-2 text-muted">
          We have received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {sharedFormFields.map((field) => {
        if (field.type === "select") {
          return (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-navy">
                {field.label}
              </label>
              <select
                id={field.id}
                name={field.name}
                required={field.required}
                className="mt-2 block w-full rounded-lg border border-blue-200 px-4 py-3 text-navy focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select a service</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (field.type === "textarea") {
          return (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-navy">
                {field.label}
              </label>
              <textarea
                id={field.id}
                name={field.name}
                rows={field.rows ?? 4}
                required={field.required}
                className="mt-2 block w-full rounded-lg border border-blue-200 px-4 py-3 text-navy placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={field.placeholder}
              />
            </div>
          );
        }

        return (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-sm font-medium text-navy">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              required={field.required}
              className="mt-2 block w-full rounded-lg border border-blue-200 px-4 py-3 text-navy placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder={field.placeholder}
            />
          </div>
        );
      })}

      <Button type="submit" className="w-full">
        Submit Now
      </Button>
    </form>
  );
}
