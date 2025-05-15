"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-dark-klare-card shadow-md py-2"
          : "bg-white dark:bg-dark-klare-bg py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex space-x-1 items-center">
              <Image
                src="/klare-svg/K-circle.svg"
                width={36}
                height={36}
                alt="K"
                className="w-9 h-9"
                priority
              />
              <Image
                src="/klare-svg/L-circle.svg"
                width={36}
                height={36}
                alt="L"
                className="w-9 h-9"
                priority
              />
              <Image
                src="/klare-svg/A-circle.svg"
                width={36}
                height={36}
                alt="A"
                className="w-9 h-9"
                priority
              />
              <Image
                src="/klare-svg/R-circle.svg"
                width={36}
                height={36}
                alt="R"
                className="w-9 h-9"
                priority
              />
              <Image
                src="/klare-svg/E-circle.svg"
                width={36}
                height={36}
                alt="E"
                className="w-9 h-9"
                priority
              />
              <span className="ml-2 text-xl font-bold dark:text-white">
                App
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/#features"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              Features
            </Link>
            <Link
              href="/#methode"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              KLARE Methode
            </Link>
            <Link
              href="/#showcase"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              Preview
            </Link>
            {/* <Link  */}
            {/*   href="/#about"  */}
            {/*   className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? 'text-klare-text dark:text-dark-klare-text' : 'text-klare-text dark:text-dark-klare-text'}`} */}
            {/* > */}
            {/*   Über Uns */}
            {/* </Link> */}
            <Link
              href="/#faq"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              Blog
            </Link>
            <Link href="/#call-to-action">
              <button
                className={`py-2 px-5 rounded-full font-medium transition-all ${
                  isScrolled
                    ? "bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90"
                    : "bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90"
                }`}
              >
                Updates erhalten
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX
                size={24}
                className={isScrolled ? "text-klare-text" : "text-white"}
              />
            ) : (
              <FiMenu
                size={24}
                className={isScrolled ? "text-klare-text" : "text-white"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-dark-klare-card"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/#features"
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#methode"
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              KLARE Methode
            </Link>
            <Link
              href="/#showcase"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Preview
            </Link>
            {/* <Link  */}
            {/*   href="#about"  */}
            {/*   className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? 'text-klare-text dark:text-dark-klare-text' : 'text-klare-text dark:text-dark-klare-text'}`} */}
            {/* > */}
            {/*   Über Uns */}
            {/* </Link> */}
            <Link
              href="/#faq"
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/blog"
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#call-to-action"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="py-2 px-5 rounded-full font-medium bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 transition-all">
                Updates erhalten
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
