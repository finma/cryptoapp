import Link from "next/link";
import type { VFC } from "react";
import { useState } from "react";
import { Button, NavLink } from "src/component/Button";
import { ListBox } from "src/component/ListBox";

const items = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className=" bg-white dark:bg-black-custom shadow">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex justify-between items-center h-16">
            <div className=" flex items-center">
              <Link href="/">
                <a className="flex-shrink-0 text-2xl font-medium text-gold">Cryptoverse</a>
              </Link>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {items.map(({ href, label }) => {
                    return (
                      <NavLink key={href} href={href} activeClassName="dark:text-gold">
                        <a className="py-2 px-3 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-gold rounded-md">
                          {label}
                        </a>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <div className="relative ml-3">
                  <div className="flex space-x-2">
                    <ListBox />
                    <Button label="Login" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden -mr-2">
              <button
                onClick={handleMenu}
                className="inline-flex justify-center items-center p-2 text-gray-800 hover:text-gray-300 dark:text-white rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden transition">
            <div className="px-2 sm:px-3 pt-2 pb-3 space-y-1">
              {items.map(({ href, label }) => {
                return (
                  <NavLink key={href} href={href} activeClassName="dark:text-white">
                    <a className="block py-2 px-3 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white rounded-md">
                      {label}
                    </a>
                  </NavLink>
                );
              })}
              <div className="mt-2 ml-3">
                <ListBox />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
