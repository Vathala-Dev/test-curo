import { services } from "./services";

export type SharedFormField = {
  id: string;
  name: string;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  rows?: number;
  options?: { value: string; label: string }[];
};

export const sharedFormFields: SharedFormField[] = [
  {
    id: "name",
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "phone",
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Your phone number",
    required: true,
  },
  {
    id: "location",
    name: "location",
    label: "Location",
    type: "text",
    placeholder: "Your location / area",
    required: true,
  },
  {
    id: "service",
    name: "service",
    label: "Service",
    type: "select",
    required: true,
    options: services.map((service) => ({
      value: service.title,
      label: service.title,
    })),
  },
  {
    id: "message",
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us about your healthcare needs...",
    rows: 4,
  },
];

export const sharedFormFieldMap = sharedFormFields.reduce<Record<string, SharedFormField>>((acc, field) => {
  acc[field.name] = field;
  return acc;
}, {});
