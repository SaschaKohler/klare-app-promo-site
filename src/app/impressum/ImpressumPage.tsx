"use client";
import React from "react";
import Link from "next/link";
import { FileText, Shield, ExternalLink } from "lucide-react";

// Impressum Komponente
const ImpressumPage: React.FC = () => {
  return (
    <>
      {/* Header mit KLARE-Methode Buchstaben */}
      <header className="py-16 relative overflow-hidden">
        {/* Hintergrund mit Farbverlauf */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, var(--color-klare-k), var(--color-klare-a))`,
          }}
        ></div>

        {/* KLARE Methode als dekorative Elemente im Hintergrund */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 sm:space-x-12 transform -rotate-12 scale-150">
            {["K", "L", "A", "R", "E"].map((letter, index) => (
              <div
                key={index}
                className="text-8xl sm:text-9xl font-bold text-white"
                style={{
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Tatsächliche Überschrift mit verbesserter Lesbarkeit */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Impressum
            <div className="absolute bottom-0 left-0 h-1 w-20 mt-2 bg-white"></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Gemäß § 5 ECG, § 25 MedienG und § 63 GewO - Gesetzlich erforderliche
            Angaben
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-klare-card p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Angaben gemäß § 5 ECG
            </h2>
            <div className="space-y-3">
              <p className="font-medium">Sascha Kohler</p>
              <p>Furth 6</p>
              <p>4311 Schwertberg</p>
              <p>Österreich</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>Telefon: +43 650 90 30 372</p>
              <p>E-Mail: office@sascha-kohler.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Unternehmensdaten
            </h2>
            <div className="space-y-3">
              <p>Eingetragene Gewerbe:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IT-Dienstleistung</li>
                <li>Werbeagentur</li>
              </ul>
              <p>GISA: 37168483,37168445</p>
              <p className="mt-4">
                Zusätzliche freie Gewerbe/neue Selbständige bzw. lfnd.
                Ausbildung:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trainer & Speaker</li>
                <li>
                  Lebens- und Sozialberater (in Ausbildung unter Supervision){" "}
                  <a
                    href="https://rokakademie.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-klare-k dark:text-dark-klare-k border-b border-klare-k dark:border-dark-klare-k transition-opacity hover:opacity-80"
                  >
                    ROK-Akademie in Wien{" "}
                    <ExternalLink size={16} className="ml-1" />
                  </a>{" "}
                </li>
              </ul>
              <p className="mt-4">
                {/* Bitte ersetzen Sie dies mit Ihrer tatsächlichen UID-Nummer falls vorhanden */}
              </p>
              <p>Mitglied der WKO</p>
              <p>Berufsrecht: Gewerbeordnung: www.ris.bka.gv.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Aufsichtsbehörde/Gewerbebehörde
            </h2>
            <p>Bezirkshauptmannschaft Perg</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Verbraucherstreitbeilegung
            </h2>
            <p>
              Wir erkennen den Internet Ombudsmann als außergerichtliche
              Streitbeilegungsstelle an. Bei Beschwerden wenden Sie sich bitte
              an: kontakt@sascha-kohler.at oder an die Plattform zur
              Online-Streitbeilegung der Europäischen Kommission:
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline text-klare-k dark:text-dark-klare-k"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Urheberrecht
            </h2>
            <p className="mb-3">
              Die Inhalte dieser Website sind urheberrechtlich geschützt. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              © {new Date().getFullYear()} Sascha Kohler. Alle Rechte
              vorbehalten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Haftungsausschluss
            </h2>
            <p className="mb-3">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
            <p>Alle Angaben sind ohne Gewähr.</p>
          </section>
        </div>
      </main>

      {/* Zurück-Link */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center font-medium transition-colors text-klare-k dark:text-dark-klare-k"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImpressumPage;
