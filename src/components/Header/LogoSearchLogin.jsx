import Link from "next/link";
import Wrapper from "../Wrapper";
import Image from "next/image";
import SearchInput from "./SearchInput";
import IconButton from "./IconButtons";
import { Heart, ShoppingCart } from "lucide-react";

export default function LogoSearchLogin() {
  return (
    <div className="py-3">
      <Wrapper className="flex items-center justify-between">
        {/* Logo  */}
        <div className="col1 w-1/4">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="classy_shop_logo"
              width={200}
              height={40}
            />
          </Link>
        </div>
        {/* Search Bar */}
        <div className="col2 w-[45%]">
          <SearchInput />
        </div>

        {/* Login / Register / whitelist / Cart part */}
        <div className="col3 w-[30%] flex items-center justify-end gap-4">
          <div className="font-medium text-gray-800">
            <Link
              href="/login"
              className="transition-colors hover:text-primaryClr "
            >
              Login
            </Link>{" "}
            |
            <Link
              href="/register"
              className="transition-colors hover:text-primaryClr "
            >
              {" "}
              Register
            </Link>
          </div>
          <div className="flex gap-2">
            <IconButton tooltip="Whitelist" count={2} path="/my-whitelist">
              <Heart />
            </IconButton>
            <IconButton tooltip="Cart" count={1} path="my-cart">
              <ShoppingCart />
            </IconButton>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
