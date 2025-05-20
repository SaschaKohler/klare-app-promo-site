"use client";
import React from "react";
import Link from "next/link";
import { FileText, Shield, ExternalLink } from "lucide-react";

// AGB Komponente
const AGBPage: React.FC = () => {
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
        <div className="container mx-auto px-4 md:pt-6 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Allgemeine Geschäftsbedingungen
            <div className="absolute bottom-0 left-0 h-1 w-20 mt-2 bg-white"></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Rechtliche Informationen zur Nutzung der KLARE App
          </p>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-klare-card p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
              Gültig ab: 20. Mai 2025
            </p>
            <p className="mb-4">
              Willkommen bei der KLARE App ("wir", "uns", "unsere"). Diese
              Allgemeinen Geschäftsbedingungen ("AGB") regeln Ihre Nutzung der
              KLARE App-Anwendung sowie alle damit verbundenen Dienste und
              Funktionen. Bitte lesen Sie diese AGB sorgfältig durch, bevor Sie
              die App nutzen.
            </p>
            <p className="mb-6">
              <strong>Hinweis:</strong> Die umfassenden AGBs bezüglich des
              Erwerbs der KLARE App sind derzeit in Planung und werden noch
              veröffentlicht. Die folgenden Bestimmungen gelten bereits für die
              Nutzung der Anwendung und der Webseite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              1. Einleitung und Geltungsbereich
            </h2>
            <div className="space-y-3">
              <p>
                1.1 Diese AGB regeln das Rechtsverhältnis zwischen Sascha Kohler
                als Anbieter der KLARE App und Ihnen als Nutzer.
              </p>
              <p>
                1.2 Durch die Nutzung unserer App oder durch den Besuch unserer
                Website erklären Sie sich mit diesen AGB einverstanden.
              </p>
              <p>
                1.3 Wir behalten uns das Recht vor, diese AGB jederzeit zu
                ändern. Die jeweils aktuelle Version ist auf unserer Website
                einsehbar.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              2. Rechtliche Abgrenzung zu medizinischen Berufen
            </h2>
            <div className="space-y-3">
              <p>
                <strong>2.1 Nicht-medizinischer Charakter der App:</strong> Die
                KLARE App ist ein Coaching- und Selbsthilfe-Tool und dient
                ausschließlich der persönlichen Entwicklung, Reflexion und
                Lebensgestaltung. Die App stellt <strong>keine</strong>{" "}
                medizinische, psychotherapeutische, klinisch-psychologische oder
                gesundheitspsychologische Dienstleistung dar.
              </p>
              <p>
                <strong>2.2 Kein Ersatz für professionelle Behandlung:</strong>{" "}
                Die KLARE App ist kein Ersatz für eine professionelle
                medizinische Beratung, Diagnose oder Behandlung durch Ärzte,
                Psychotherapeuten, klinische Psychologen, Gesundheitspsychologen
                oder andere Gesundheitsdienstleister. Die in der App enthaltenen
                Inhalte und Methoden ersetzen nicht den Rat oder die Behandlung
                durch ausgebildete und anerkannte Fachkräfte im
                Gesundheitswesen.
              </p>
              <p>
                <strong>2.3 Keine Heilversprechen:</strong> Die KLARE App und
                die darin enthaltenen Methoden geben keine Heilversprechen ab
                und beanspruchen nicht, Krankheiten, psychische Störungen oder
                gesundheitliche Beschwerden zu heilen, zu behandeln, zu lindern
                oder zu verhindern.
              </p>
              <p>
                <strong>2.4 Eigenverantwortung und Selbstfürsorge:</strong> Die
                Nutzung der KLARE App erfolgt eigenverantwortlich. Bei
                bestehenden gesundheitlichen Problemen, psychischen Belastungen
                oder in akuten Krisensituationen sollten Sie umgehend
                professionelle medizinische oder psychologische Hilfe in
                Anspruch nehmen.
              </p>
              <p>
                <strong>2.5 Anspruch der App:</strong> Die KLARE App bietet
                Methoden und Tools zur Förderung persönlicher Entwicklung,
                Achtsamkeit, Selbstreflexion und Lebensgestaltung an, die im
                Rahmen der Lebens- und Sozialberatung und des Mentaltrainings
                eingesetzt werden können. Die Wirksamkeit dieser Methoden kann
                individuell variieren.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              3. Leistungsumfang der KLARE App
            </h2>
            <div className="space-y-3">
              <p>
                3.1 Die KLARE App bietet Tools und Methoden zur persönlichen
                Entwicklung und Selbstreflexion.
              </p>
              <p>
                3.2 Wir bemühen uns, die App stets verfügbar zu halten, können
                jedoch keine ununterbrochene Verfügbarkeit garantieren.
              </p>
              <p>
                3.3 Die genauen Funktionen und der Leistungsumfang können je
                nach Version und Abonnement variieren.
              </p>
              <p>
                3.4 Wir behalten uns vor, Funktionen und Inhalte der App
                jederzeit zu ändern, zu erweitern oder einzustellen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              4. Nutzerpflichten
            </h2>
            <div className="space-y-3">
              <p>
                4.1 Sie verpflichten sich, die App nur für persönliche Zwecke
                und im Einklang mit diesen AGB zu nutzen.
              </p>
              <p>
                4.2 Es ist Ihnen untersagt, die App oder Teile davon zu
                kopieren, zu modifizieren, zu verbreiten oder anderweitig zu
                missbrauchen.
              </p>
              <p>
                4.3 Sie sind für alle Aktivitäten verantwortlich, die über Ihren
                Account stattfinden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              5. Datenschutz
            </h2>
            <div className="space-y-3">
              <p>
                5.1 Der Schutz Ihrer Daten ist uns wichtig. Informationen dazu,
                wie wir Ihre Daten verarbeiten, finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="text-klare-k hover:underline dark:text-dark-klare-k"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              6. Haftung
            </h2>
            <div className="space-y-3">
              <p>
                6.1 Wir übernehmen keine Garantie für die Richtigkeit,
                Vollständigkeit oder Aktualität der in der App bereitgestellten
                Inhalte.
              </p>
              <p>
                6.2 Die Nutzung der App erfolgt auf eigenes Risiko. Wir haften
                nur für Schäden, die durch vorsätzliches oder grob fahrlässiges
                Verhalten unsererseits entstanden sind.
              </p>
              <p>
                6.3 Für leichte Fahrlässigkeit haften wir nur bei Verletzung
                einer wesentlichen Vertragspflicht und nur für vorhersehbare,
                typischerweise eintretende Schäden.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              7. Hinweis zu zukünftigen Nutzungsbedingungen
            </h2>
            <div className="space-y-3">
              <p>
                7.1 Die vollständigen Allgemeinen Geschäftsbedingungen bezüglich
                des Erwerbs, der Nutzung von Premium-Funktionen und weiterer
                Dienste der KLARE App befinden sich derzeit in Ausarbeitung.
              </p>
              <p>
                7.2 Diese werden rechtzeitig vor dem offiziellen Launch der
                kostenpflichtigen Versionen veröffentlicht und werden Regelungen
                zu Preisen, Zahlungsbedingungen, Widerrufsrecht, Laufzeit und
                Kündigung enthalten.
              </p>
              <p>
                7.3 Durch die Nutzung zukünftiger kostenpflichtiger Funktionen
                werden Sie aufgefordert werden, diesen erweiterten Bedingungen
                zuzustimmen.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              8. Schlussbestimmungen
            </h2>
            <div className="space-y-3">
              <p>
                8.1 Es gilt österreichisches Recht unter Ausschluss des
                UN-Kaufrechts und der Verweisungsnormen des internationalen
                Privatrechts.
              </p>
              <p>
                8.2 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
              <p>
                8.3 Gerichtsstand für alle Streitigkeiten aus diesem Vertrag
                ist, soweit gesetzlich zulässig, Wels, Österreich.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Kontakt
            </h2>
            <div className="space-y-3">
              <p>
                Bei Fragen zu diesen AGB können Sie uns wie folgt kontaktieren:
              </p>
              <p className="font-medium">Sascha Kohler</p>
              <p>E-Mail: office@sascha-kohler.at</p>
            </div>
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

export default AGBPage;

