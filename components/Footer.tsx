import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    // Footer Container
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      {/* Inner Container */}
      <div className="flex max-md:flex-col flex-wrap justifu-between gap-5 sm:px-16 px-6 py-10">
        {/* Navbar Copy Rights Items Container */}
        <div className="flex flex-col justify-start items-start gap-6">
        <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={110}
            height={18}
            className="object-contain"
          />
          <p className="text-baxe text-gray-700">
            Carhub 2024 <br />
            All rights reserved &copy; <br />
            Designed by Sarv Team. 
          </p>
        </div>

        {/* Footer Links Container */}
        <div className="footer__links">
            {footerLinks.map((link) => (
                <div key={link.title} className="footer_link">
                    <h3>{link.title}</h3>
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
