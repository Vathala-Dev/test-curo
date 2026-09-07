import { services } from "./services";

export type NavItem =
  | { label: string; href: string; hasDropdown?: false }
  | { label: string; href: string; hasDropdown: true };

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blogs", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export const serviceNavItems = services.map((service) => ({
  label: service.title,
  href: `/services/${service.slug}`,
}));
