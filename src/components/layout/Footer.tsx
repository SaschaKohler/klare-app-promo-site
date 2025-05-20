"use client";

import Link from "next/link";
import { FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";
import KlareSvg from "../KlareSvg";
import ClearSvg from "../ClearSvg";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Footer() {
  const { isEnglish } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-klare-bg text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: App & Sascha Kohler */}
          <div>
            <div className="flex space-x-1 items-center mb-4">
              {isEnglish ? (
                <>
                  <ClearSvg letter="C" className="w-8 h-8" />
                  <ClearSvg letter="L" className="w-8 h-8" />
                  <ClearSvg letter="E" className="w-8 h-8" />
                  <ClearSvg letter="A" className="w-8 h-8" />
                  <ClearSvg letter="R" className="w-8 h-8" />
                  <span className="ml-2 text-lg font-bold text-white">
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
                  <span className="ml-2 text-lg font-bold text-white">
                    App
                  </span>
                </>
              )}
            </div>
            <p className="text-gray-300 mb-6">
              {isEnglish
                ? "The CLEAR Method App guides you on the path to a congruent and fulfilled life."
                : "Die KLARE Methode App begleitet Dich auf dem Weg zu einem kongruenten und erfüllten Leben."}
            </p>

            <h3 className="font-bold mb-2 text-white">Sascha Kohler</h3>
            <p className="text-gray-300 mb-4">
              {isEnglish 
                ? "Life & Social Counselor, NLP-Master & Trainer, Mental Coach, Developer of the CLEAR Method"
                : "Lebens- und Sozialberater i.A., NLP-Master & Trainer, Mentaltrainer, Entwickler der KLARE Methode"}
            </p>
            
            <div className="flex space-x-3 mb-2">
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-300 hover:text-white transition-colors">
                <FiYoutube size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">
              {isEnglish ? "Quick Links" : "Quick Links"}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href={isEnglish ? "/en#features" : "/#features"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "Features" : "Features"}
                </Link>
              </li>
              <li>
                <Link
                  href={isEnglish ? "/en#methode" : "/#methode"}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "CLEAR Method" : "KLARE Methode"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "About Us" : "Über Uns"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "FAQ" : "FAQ"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ressourcen */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-white">
              {isEnglish ? "Resources" : "Ressourcen"}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "Website" : "Website"}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "Blog" : "Blog"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {isEnglish ? "Contact" : "Kontakt"}
                </Link>
              </li>
            </ul>

            <h2 className="text-lg font-bold mt-6 mb-4 text-white">
              {isEnglish ? "CLEAR Method Training" : "KLARE Methode Schulungen"}
            </h2>
            <p className="text-gray-300">
              {isEnglish
                ? "Become an expert for personal transformation! Learn more about our workshops, seminars and certification programs for the CLEAR Method. More info coming soon!"
                : "Werde zum Experten für persönliche Transformation! Erfahre mehr über unsere Workshops, Seminare und Zertifizierungsprogramme zur KLARE Methode. Erfahre hier bald mehr!"}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
          <p className="text-gray-300 mb-2 md:mb-0">
            © {currentYear} {isEnglish ? "CLEAR Method App" : "KLARE Methode App"}. {isEnglish ? "All rights reserved." : "Alle Rechte vorbehalten."}
          </p>
          <div className="flex space-x-4">
            <Link href={isEnglish ? "/en/imprint" : "/impressum"} className="text-gray-300 hover:text-white transition-colors">
              {isEnglish ? "Imprint" : "Impressum"}
            </Link>
            <Link href={isEnglish ? "/en/privacy" : "/datenschutz"} className="text-gray-300 hover:text-white transition-colors">
              {isEnglish ? "Privacy Policy" : "Datenschutz"}
            </Link>
            <Link href={isEnglish ? "/en/terms" : "/agb"} className="text-gray-300 hover:text-white transition-colors">
              {isEnglish ? "Terms" : "AGB"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

