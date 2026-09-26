"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutPage = pathname === "/";
  const isPlanPage = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]/95 backdrop-blur">
      <div className="fit-container">
        <div className="navbar min-h-[72px] px-0 text-white">
          <div className="navbar-start">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="FitLog logo"
                width={30}
                height={30}
              />

              <Link
                href="/"
                className="text-xl font-extrabold tracking-wide"
              >
                FITLOG
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden md:flex">
            <nav>
              <ul className="menu menu-horizontal gap-2">
                <li>
                  <Link
                    href="/"
                    className={
                      isWorkoutPage
                        ? "bg-[#c2f800] font-bold text-black"
                        : "text-gray-400"
                    }
                  >
                    Workout
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-plan"
                    className={
                      isPlanPage
                        ? "bg-[#c2f800] font-bold text-black"
                        : "text-gray-400"
                    }
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="navbar-end gap-3">
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-sm text-gray-400"
            >
              <span>Plan</span>
              <span className="badge border-0 bg-[#c2f800] font-bold text-black">
                0
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="hidden items-center gap-2 text-sm text-gray-400 sm:flex"
            >
              <span>Saved</span>
              <span className="badge border border-white/20 bg-transparent text-gray-400">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;