import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import logo1 from "@/assets/logo1.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"; // social icons

const Footer = () => {
  return (
    <footer className="bg-background text-muted">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-border">
        {/* Logo & Description */}
        <div className="w-4/5">
          <Image
            className="w-20 md:w-24"
            src={assets.logo1}
            alt="logo1"
            width={100}
            height={100}
          />
          <p className="mt-6 text-sm text-muted">
            Destination for corporate formal wear and high-quality leather goods.
            Specializing in sophisticated blazers and a diverse range of leather items.
          </p>

        </div>

        {/* Company Links */}
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-foreground mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="hover:underline transition hover:text-primary"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="hover:underline transition hover:text-primary"
                  href="/about-us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="hover:underline transition hover:text-primary"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="hover:underline transition hover:text-primary"
                  href="/terms&conditions"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-foreground mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>
                Email <br /> inquiry.zax@gmail.com
              </p>
            </div>
          </div>
        </div>
  <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/zaxgiftproducts/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaInstagram className="text-white w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/Z-ax-Gift-Products"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/zaxgift2025/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-primary transition"
            >
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
            
          </div>
       

      </div>
      

      {/* Copyright */}
      <p className="py-4 text-center text-xs md:text-sm">
        © 2026 ZAX. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
