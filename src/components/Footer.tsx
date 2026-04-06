import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9D9D9] pt-9 pb-3">
      <div className="custom-container flex justify-between items-center text-lg max-lg:flex-col max-sm:text-base max-lg:space-y-8">
        <div className="max-lg:order-3 max-lg:mt-8">©StellarWA Residency Innovation Sprint</div>
        <nav>
          <ul className="flex flex-row gap-10">
            <li>
              <a href="#program">Program</a>
            </li>
            <li>
              <a href="#timeline">Timeline</a>
            </li>
            <li>
              <a href="#judges">Judges</a>
            </li>
            <li>
              <a href="#mentors">Mentors</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Link href="#" className="inline-flex w-7 h-7 bg-[#0F0F0F] text-white rounded-full items-center justify-center text-sm">
            <FaInstagram />
          </Link>
          <Link href="#" className="inline-flex w-7 h-7 bg-[#0F0F0F] text-white rounded-full items-center justify-center text-sm">
            <FaXTwitter  />
          </Link>
          <span>@Stellar_WA</span>
        </div>
      </div>
    </footer>
  );
}
