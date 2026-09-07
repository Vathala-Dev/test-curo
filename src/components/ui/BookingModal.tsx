"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/Button";
import { sharedFormFields } from "@/data/formConfig";

interface BookingModalProps {
    open: boolean;
    onClose: () => void;
}

export default function BookingModal({
    open,
    onClose,
}: BookingModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Make sure document exists
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [open, onClose]);

    if (!open || !mounted) return null;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitted(true);
    }

    return createPortal(
        <div
            className="fixed inset-0 z-[999999] flex items-start justify-center overflow-y-auto bg-slate-950/60 p-4 pt-20 backdrop-blur-sm sm:p-6"
            onClick={onClose}
        >
            <div className="relative w-full max-w-xl">
                <div
                    className="relative max-h-[calc(100vh-7rem)] w-full overflow-y-auto rounded-[2rem] bg-white p-5 shadow-2xl sm:p-8"
                    onClick={(event) => event.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200"
                        aria-label="Close"
                    >
                        ×
                    </button>

                    {submitted ? (
                        <div className="py-6 text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <svg
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-navy">
                                Thank You!
                            </h3>

                            <p className="mt-3 text-muted">
                                We have received your request and our team will contact
                                you shortly.
                            </p>

                            <Button
                                onClick={onClose}
                                className="mt-6 w-full sm:w-auto"
                            >
                                Close
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                    Book a Service
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-navy">
                                    Request a consultation
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
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
                                                    className="mt-2 block w-full rounded-xl border border-blue-200 px-4 py-3 text-navy focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                                                    className="mt-2 block w-full rounded-xl border border-blue-200 px-4 py-3 text-navy placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                                                id={field.id}
                                                name={field.name}
                                                type={field.type}
                                                required={field.required}
                                                className="mt-2 block w-full rounded-xl border border-blue-200 px-4 py-3 text-navy placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                placeholder={field.placeholder}
                                            />
                                        </div>
                                    );
                                })}

                                <Button type="submit" className="w-full">
                                    Submit Request
                                </Button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}