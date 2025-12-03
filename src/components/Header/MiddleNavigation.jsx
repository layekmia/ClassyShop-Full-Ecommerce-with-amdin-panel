import Link from "next/link";

export const navLinks = [
  { label: "Home", path: "/" },

  {
    label: "Fashion",
    path: "/fashion",
    children: [
      { label: "Men", path: "/fashion/men" },
      { label: "Women", path: "/fashion/women" },
      { label: "Girls", path: "/fashion/girls" },
    ],
  },

  {
    label: "Electronics",
    path: "/electronics",
    children: [
      { label: "Smart Watch", path: "/electronics/smart-watch" },
      { label: "Laptop", path: "/electronics/laptop" },
      { label: "Mobile", path: "/electronics/mobile" },
    ],
  },

  {
    label: "Bags",
    path: "/bags",
    children: [
      { label: "Women Bags", path: "/bags/women" },
      { label: "Men Bags", path: "/bags/men" },
    ],
  },

  {
    label: "Footwear",
    path: "/footwear",
    children: [
      { label: "Women Footwear", path: "/footwear/women" },
      { label: "Men Footwear", path: "/footwear/men" },
    ],
  },

  { label: "Groceries", path: "/groceries" },
  { label: "Beauty", path: "/beauty" },
  { label: "Wellness", path: "/wellness" },
  { label: "Jewellery", path: "/jewellery" },
];

export default function MiddleNavigation() {
  return (
    <ul className="flex items-center gap-3">
      {navLinks.map((link) => (
        <li key={link.label} className="relative group">
          <Link
            className="py-4 inline-block px-2 text-black/80 font-medium transition hover:text-primaryClr text-sm"
            href={link.path}
          >
            {link.label}
          </Link>

          {link.children && (
            <ul className="absolute left-0 top-full  w-40 bg-white shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition opacity duration-200 z-50">
              {link.children.map((sub) => (
                <li key={sub.label}>
                  <Link
                    className="block px-3 py-2 text-sm text-black/80 hover:bg-gray-100 hover:text-primaryClr rounded"
                    href={sub.path}
                  >
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
