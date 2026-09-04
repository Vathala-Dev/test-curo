import { services } from "./services";

export type NavItem =
  | { label: string; href: string; hasDropdown?: false }
  | { label: string; href: string; hasDropdown: true };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

export const serviceNavItems = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));
