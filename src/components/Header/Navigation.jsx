import { HiBars3CenterLeft, HiMiniBars3CenterLeft } from "react-icons/hi2";
import Wrapper from "../Wrapper";
import { Roboto } from "next/font/google";
import { LiaAngleDownSolid } from "react-icons/lia";
import MiddleNavigation from "./MiddleNavigation";
import { IoRocketOutline } from "react-icons/io5";
import SideNavigation from "./SideNavigation";

const roboto = Roboto({ subsets: ["latin"] });

export default function Navigation() {
  return (
    <nav className={roboto.className}>
      <Wrapper>
        <div className="flex items-center justify-between gap-4">
          {/* Left: category button */}
          <div className="flex-shrink-0">
            <SideNavigation>
              <button className="bg-transparent text-black flex items-center gap-2 font-medium uppercase text-sm py-1 cursor-pointer w-full">
                <HiMiniBars3CenterLeft className="text-xl" />
                <span>Shop By Categories</span>
                <LiaAngleDownSolid className="text-lg" />
              </button>
            </SideNavigation>
          </div>

          {/* Middle Navigation */}
          <div className="col_2 flex-1 px-10">
            <MiddleNavigation />
          </div>

          {/* A simple button text */}
          <div className="col_ flex-shrink-0 flex items-center gap-2">
            <IoRocketOutline />
            <span>Free International Delivery</span>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}
