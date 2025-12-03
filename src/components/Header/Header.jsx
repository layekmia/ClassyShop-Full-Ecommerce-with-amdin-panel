import Link from "next/link";
import Wrapper from "../Wrapper";
import LogoSearchLogin from "./LogoSearchLogin";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="top-strip py-2.5 border-t border-t-black/10 border-b border-b-black/10">
        <Wrapper>
          <div className="flex items-center justify-between">
            <div className="col1">
              <p className="text-xs text-gray-800 font-medium">
                Get up to 50% off new session styles, limit time only
              </p>
            </div>

            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-4 text-sm font-medium text-gray-800 ">
                <li>
                  <Link
                    className="transition-colors hover:text-primary"
                    href="/help-center"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition-colors hover:text-primary"
                    href="/track-orders"
                  >
                    Oder tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Wrapper>
      </div>
      <LogoSearchLogin />
      <Navigation />
    </header>
  );
}
