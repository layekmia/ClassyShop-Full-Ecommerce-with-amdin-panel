import { Search } from "lucide-react";
import { Button } from "../ui/button";

export default function SearchInput() {
  return (
    <div className="w-full h-12 bg-[#e5e5e5] rounded-lg relative  flex items-center shadow-sm hover:shadow-md transition-shadow duration-300">
      <input
        type="text"
        placeholder="Search for products..."
        className="placeholder:text-[#6b6b6b] w-full h-full bg-inherit px-4 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-300"
      />

      <Button
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#FF5252] hover:bg-[#e04848] text-white rounded-full p-2 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        aria-label="Search"
      >
        <Search size={16} />
      </Button>
    </div>
  );
}
