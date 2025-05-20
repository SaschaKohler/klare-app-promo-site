"use client";

import Link from "next/link";
import { FiGithub, FiHeart, FiCoffee, FiMail } from "react-icons/fi";
import KlareSvg from "../KlareSvg";
import ClearSvg from "../ClearSvg";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { isEnglish } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-klare-bg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Logo and Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="inline-block mb-4">
              <div className="flex space-x-1 items-center">
                {isEnglish ? (
                  <>
                    <ClearSvg letter="C" className="w-8 h-8" />
                    <ClearSvg letter="L" className="w-8 h-8" />
                    <ClearSvg letter="E" className="w-8 h-8" />
                    <ClearSvg letter="A" className="w-8 h-8" />
                    <ClearSvg letter="R" className="w-8 h-8" />
                    <span className="ml-2 text-lg font-bold text-klare-text dark:text-dark-klare-text">
                      App
                    </span>
                  </>
                ) : (
                  <>
                    <KlareSvg letter="K" className="w-8 h-8" />
                    <KlareSvg letter="L" className="w-8 h-8" />
                    <KlareSvg letter="A" className="w-8 h-8" />
                    <KlareSvg letter="R" className="w-8 h-8" />
                    <KlareSvg letter="E" className="w-8 h-8" />
                    <span className="ml-2 text-lg font-bold text-klare-text dark:text-dark-klare-text">
                      App
                    </span>
                  </>
                )}
              </div>
            </Link>
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-md">
              {isEnglish
                ? "Discover the path to complete congruence with the CLEAR Method App."
                : "Entdecke den Weg zur vollständigen Kongruenz mit der KLARE Methode App."}
            </p>

            <div className="flex items-center justify-center md:justify-start mt-4 space-x-4">
              <a
                href="#"
                className="text-klare-text-secondary hover:text-klare-k dark:text-dark-klare-text-secondary dark:hover:text-dark-klare-k"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="mailto:office@sascha-kohler.at"
                className="text-klare-text-secondary hover:text-klare-k dark:text-dark-klare-text-secondary dark:hover:text-dark-klare-k"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Links Column 1 */}
            <div>
              <h3 className="font-bold mb-4 text-klare-text dark:text-dark-klare-text">
                {isEnglish ? "App" : "App"}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={isEnglish ? "/en#features" : "/#features"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Features" : "Features"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isEnglish ? "/en#methode" : "/#methode"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "CLEAR Method" : "KLARE Methode"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={isEnglish ? "/en#showcase" : "/#showcase"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Preview" : "Preview"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="font-bold mb-4 text-klare-text dark:text-dark-klare-text">
                {isEnglish ? "Info" : "Info"}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog"
                    href={isEnglish ? "/en#call-to-action" : "/#call-to-action"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Blog" : "Blog"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    href={isEnglish ? "/en#call-to-action" : "/#call-to-action"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "FAQ" : "FAQ"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#call-to-action"
                    href={isEnglish ? "/en#call-to-action" : "/#call-to-action"}
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Contact" : "Kontakt"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div>
              <h3 className="font-bold mb-4 text-klare-text dark:text-dark-klare-text">
                {isEnglish ? "Legal" : "Rechtliches"}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/impressum"
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Imprint" : "Impressum"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/datenschutz"
                    className="text-klare-text-secondary dark:text-dark-klare-text-secondary hover:text-klare-k dark:hover:text-dark-klare-k"
                  >
                    {isEnglish ? "Privacy Policy" : "Datenschutz"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
            © {currentYear} {isEnglish ? "CLEAR Method" : "KLARE Methode"}.{" "}
            {isEnglish ? "All rights reserved." : "Alle Rechte vorbehalten."}
          </p>
          <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary text-sm mt-2 flex items-center justify-center">
            {isEnglish ? "Made with" : "Erstellt mit"}{" "}
            <FiHeart className="mx-1 text-klare-a" />{" "}
            {isEnglish ? "and" : "und"}{" "}
            <FiCoffee className="mx-1 text-klare-r" />{" "}
            {isEnglish ? "by" : "von"}{" "}
            <a
              href="https://sascha-kohler.at"
              className="ml-1 underline hover:text-klare-k"
            >
              Sascha Kohler
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

