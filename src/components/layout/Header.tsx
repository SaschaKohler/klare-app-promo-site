"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import KlareSvg from "../KlareSvg";
import ClearSvg from "../ClearSvg";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Vereinfacht: Nur pfadbasierte Spracherkennung
  const isEnglish = pathname.startsWith("/en");

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
              {isEnglish ? (
                // CLEAR Logo für Englisch
                <>
                  <ClearSvg letter="C" className="w-9 h-9" />
                  <ClearSvg letter="L" className="w-9 h-9" />
                  <ClearSvg letter="E" className="w-9 h-9" />
                  <ClearSvg letter="A" className="w-9 h-9" />
                  <ClearSvg letter="R" className="w-9 h-9" />
                </>
              ) : (
                // KLARE Logo für Deutsch
                <>
                  <KlareSvg letter="K" className="w-9 h-9" />
                  <KlareSvg letter="L" className="w-9 h-9" />
                  <KlareSvg letter="A" className="w-9 h-9" />
                  <KlareSvg letter="R" className="w-9 h-9" />
                  <KlareSvg letter="E" className="w-9 h-9" />
                </>
              )}
              <span className="ml-2 text-xl font-bold dark:text-white">
                App
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href={isEnglish ? "/en#features" : "/#features"}
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              {isEnglish ? "Features" : "Features"}
            </Link>
            <Link
              href={isEnglish ? "/en#methode" : "/#methode"}
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              {isEnglish ? "CLEAR Method" : "KLARE Methode"}
            </Link>
            <Link
              href={isEnglish ? "/en#showcase" : "/#showcase"}
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              {isEnglish ? "Preview" : "Preview"}
            </Link>
            {/* <Link  */}
            {/*   href="/#about"  */}
            {/*   className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? 'text-klare-text dark:text-dark-klare-text' : 'text-klare-text dark:text-dark-klare-text'}`} */}
            {/* > */}
            {/*   Über Uns */}
            {/* </Link> */}
            <Link
              href={isEnglish ? "/en#faq" : "/#faq"}
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              {isEnglish ? "FAQ" : "FAQ"}
            </Link>
            <Link
              href="/blog"
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
            >
              {isEnglish ? "Blog" : "Blog"}
            </Link>
            <Link href={isEnglish ? "/en#call-to-action" : "/#call-to-action"}>
              <button
                className={`py-2 px-5 rounded-full font-medium transition-all ${
                  isScrolled
                    ? "bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90"
                    : "bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90"
                }`}
              >
                {isEnglish ? "Get Updates" : "Updates erhalten"}
              </button>
            </Link>

            {/* Sprachumschalter */}
            <LanguageSwitcher />
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
              href={isEnglish ? "/en#features" : "/#features"}
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEnglish ? "Features" : "Features"}
            </Link>
            <Link
              href={isEnglish ? "/en#methode" : "/#methode"}
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEnglish ? "CLEAR Method" : "KLARE Methode"}
            </Link>
            <Link
              href={isEnglish ? "/en#showcase" : "/#showcase"}
              className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? "text-klare-text dark:text-dark-klare-text" : "text-klare-text dark:text-dark-klare-text"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEnglish ? "Preview" : "Preview"}
            </Link>
            {/* <Link  */}
            {/*   href="#about"  */}
            {/*   className={`font-medium hover:text-klare-k dark:hover:text-dark-klare-k ${isScrolled ? 'text-klare-text dark:text-dark-klare-text' : 'text-klare-text dark:text-dark-klare-text'}`} */}
            {/* > */}
            {/*   Über Uns */}
            {/* </Link> */}
            <Link
              href={isEnglish ? "/en#faq" : "/#faq"}
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEnglish ? "FAQ" : "FAQ"}
            </Link>
            <Link
              href="/blog"
              className="font-medium text-klare-text dark:text-dark-klare-text hover:text-klare-k dark:hover:text-dark-klare-k py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEnglish ? "Blog" : "Blog"}
            </Link>
            <Link
              href={isEnglish ? "/en#call-to-action" : "/#call-to-action"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="py-2 px-5 rounded-full font-medium bg-klare-k dark:bg-dark-klare-k text-white hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 transition-all">
                {isEnglish ? "Get Updates" : "Updates erhalten"}
              </button>
            </Link>

            {/* Sprachumschalter im mobilen Menü */}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
