import Link from "next/link";

export default function IconButton({
  children,
  tooltip,
  count = 0,
  path = "/",
}) {
  return (
    <Link
      href={path}
      className="relative p-2 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors duration-200 group"
    >
      {children}

      {/* Badge */}
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-primaryClr text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}

      {/* Tooltip */}
      {tooltip && (
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-gray-500 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {tooltip}
        </span>
      )}
    </Link>
  );
}
