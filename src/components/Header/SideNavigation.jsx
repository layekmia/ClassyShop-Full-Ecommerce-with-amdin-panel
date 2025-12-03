"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/components/ui/sheet";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// -------------------------------------------
// Categories (You can replace with backend data)
// -------------------------------------------
const categories = [
  { title: "Fashion", children: ["Men", "Women", "Girls"] },
  { title: "Electronics", children: ["Smart Watch", "Laptop", "Mobile"] },
  { title: "Bags", children: ["Women Bag", "Men Bag"] },
  { title: "Footwear", children: ["Women Footwear", "Men Footwear"] },
  { title: "Groceries" },
  { title: "Beauty" },
  { title: "Wellness" },
  { title: "Jewellery" },
];

// -------------------------------------------
// Slug helper (convert string to URL)
// -------------------------------------------
function slugify(text) {
  return text.toLowerCase().replace(/ /g, "-");
}

export default function SideNavigation({ children }) {
  const [openIndex, setOpenIndex] = useState(null);
  const pathname = usePathname();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isActive = (path) => pathname === path;

  return (
    <Sheet>
      {/* Icon/Button that opens the drawer */}
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent
        side="left"
        className="w-[260px] p-0 overflow-y-auto h-full"
      >
        {/* Header logo */}
        <SheetHeader className="border-b p-4">
          <Image src="/logo.jpg" alt="logo" width={150} height={30} />
        </SheetHeader>

        {/* Category list */}
        <div className="px-5 space-y-1">
          {categories.map((cat, index) => {
            const categorySlug = slugify(cat.title);
            const categoryPath = `/category/${categorySlug}`;

            return (
              <div key={cat.title}>
                {/* Main Category Button */}
                <div
                  className={`flex items-center justify-between w-full text-left text-[15px] font-medium cursor-pointer py-2 
                    ${
                      isActive(categoryPath) ? "text-primaryClr" : "text-black"
                    } 
                    hover:text-primaryClr transition`}
                >
                  {/* Category Clickable */}
                  <Link href="#" className="flex-1">
                    {cat.title}
                  </Link>

                  {/* Dropdown Toggle */}
                  {cat.children && (
                    <button
                      className="cursor-pointer"
                      onClick={() => toggle(index)}
                    >
                      {openIndex === index ? (
                        <FiMinus size={18} />
                      ) : (
                        <FiPlus size={18} />
                      )}
                    </button>
                  )}
                </div>

                {/* Sub-categories */}
                {openIndex === index && cat.children && (
                  <div className="mt-2 ml-4 space-y-2">
                    {cat.children.map((sub) => {
                      const subSlug = slugify(sub);
                      const subPath = `/category/${categorySlug}/${subSlug}`;

                      return (
                        <Link
                          href="#"
                          key={sub}
                          className={`block text-sm cursor-pointer transition 
                            ${
                              isActive(subPath)
                                ? "text-primaryClr font-medium"
                                : "text-gray-600"
                            } 
                            hover:text-primaryClr`}
                        >
                          {sub}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
