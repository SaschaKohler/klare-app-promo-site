'use client';

import Link from "next/link";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="flex space-x-1 items-center mb-4">
              <Image
                src="/klare-svg/K-circle.svg"
                width={28}
                height={28}
                alt="K"
                className="w-7 h-7"
              />
              <Image
                src="/klare-svg/L-circle.svg"
                width={28}
                height={28}
                alt="L"
                className="w-7 h-7"
              />
              <Image
                src="/klare-svg/A-circle.svg"
                width={28}
                height={28}
                alt="A"
                className="w-7 h-7"
              />
              <Image
                src="/klare-svg/R-circle.svg"
                width={28}
                height={28}
                alt="R"
                className="w-7 h-7"
              />
              <Image
                src="/klare-svg/E-circle.svg"
                width={28}
                height={28}
                alt="E"
                className="w-7 h-7"
              />
              <span className="ml-2 text-lg font-bold dark:text-white">
                App
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Die KLARE Methode App begleitet Dich auf dem Weg zu einem
              kongruenten und erfüllten Leben.
            </p>
            <div className="mt-6">
              <h4 className="text-gray-800 dark:text-white font-semibold mb-2">
                Sascha Kohler
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Lebens- und Sozialberater i.A., NLP-Master &
                Trainer,Mentaltrainer, Entwickler der KLARE Methode
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
              >
                <FiYoutube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#methode"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  KLARE Methode
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Über Uns
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              Ressourcen
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://sascha-kohler.at"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Website
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-klare-k dark:hover:text-dark-klare-k transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Schulungen */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              KLARE Methode Schulungen
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Werde zum Experten für persönliche Transformation! Erfahre mehr
              über unsere Workshops, Seminare und Zertifizierungsprogramme zur
              KLARE Methode.
            </p>
            <a
              href="https://sascha-kohler.at/schulungen"
              className="inline-block px-4 py-2 bg-klare-k dark:bg-dark-klare-k text-white rounded-full hover:bg-klare-k/80 dark:hover:bg-dark-klare-k/80 transition-colors"
            >
              Zu den Schulungen
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-4 mt-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
              Bleib informiert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xl">
              Erhalte Updates über den Start der KLARE App und exklusive Inhalte
              zur persönlichen Transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
              <input
                type="email"
                placeholder="Deine E-Mail"
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none flex-grow focus:outline-none focus:ring-1 focus:ring-klare-k dark:focus:ring-dark-klare-k dark:text-white"
              />
              <button className="bg-klare-k dark:bg-dark-klare-k hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none transition-colors">
                Anmelden
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} KLARE Methode App. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/impressum"
              className="text-gray-500 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-gray-500 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k text-sm transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-gray-500 dark:text-gray-400 hover:text-klare-k dark:hover:text-dark-klare-k text-sm transition-colors"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

