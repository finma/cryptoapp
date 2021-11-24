import Link from "next/link";
import type { VFC } from "react";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <footer className="flex justify-center items-center h-[50px] text-white">
      <p className="text-base">
        &copy; 2021 All Right Reserved.{" "}
        <Link href="https://github.com/finma/cryptoverse">
          <a target="_blank" className="font-medium text-gold">
            Cryptoverse
          </a>
        </Link>
      </p>
    </footer>
  );
};
