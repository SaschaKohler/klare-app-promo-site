"use client";
import React from "react";
import Link from "next/link";
import { FileText, Shield, ExternalLink } from "lucide-react";

// Imprint Component
const ImprintPage: React.FC = () => {
  return (
    <>
      {/* Header with CLEAR Method letters */}
      <header className="py-16 relative overflow-hidden">
        {/* Background with gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, var(--color-klare-k), var(--color-klare-a))`,
          }}
        ></div>

        {/* CLEAR Method as decorative elements in background */}
        <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 sm:space-x-12 transform -rotate-12 scale-150">
            {["C", "L", "E", "A", "R"].map((letter, index) => (
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

        {/* Actual heading with improved readability */}
        <div className="container mx-auto px-4 md:px-8 md:pt-6 r relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Imprint
            <div className="absolute bottom-0 left-0 h-1 w-20 mt-2 bg-white"></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            According to § 5 ECG, § 25 MedienG and § 63 GewO - Legally required
            information
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-klare-card p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Information according to § 5 ECG
            </h2>
            <div className="space-y-3">
              <p className="font-medium">Sascha Kohler</p>
              <p>Furth 6</p>
              <p>4311 Schwertberg</p>
              <p>Austria</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Contact
            </h2>
            <div className="space-y-2">
              <p>Phone: +43 650 90 30 372</p>
              <p>Email: office@sascha-kohler.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Company Information
            </h2>
            <div className="space-y-3">
              <p>Registered business areas:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IT Services</li>
                <li>Advertising Agency</li>
              </ul>
              <p>GISA: 37168483, 37168445</p>
              <p className="mt-4">
                Additional free trade/new self-employed or ongoing training:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Trainer & Speaker</li>
                <li>
                  Life and Social Counselor (in training under supervision){" "}
                  <a
                    href="https://rokakademie.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-klare-k dark:text-dark-klare-k border-b border-klare-k dark:border-dark-klare-k transition-opacity hover:opacity-80"
                  >
                    ROK Academy in Vienna{" "}
                    <ExternalLink size={16} className="ml-1" />
                  </a>{" "}
                </li>
              </ul>
              <p className="mt-4">
                {/* Please replace this with your actual VAT number if available */}
              </p>
              <p>Member of the Austrian Chamber of Commerce (WKO)</p>
              <p>
                Professional regulations: Trade Regulations: www.ris.bka.gv.at
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Supervisory Authority/Trade Authority
            </h2>
            <p>District Administration Perg</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Consumer Dispute Resolution
            </h2>
            <p>
              We recognize the Internet Ombudsman as an out-of-court dispute
              resolution body. In case of complaints, please contact:
              kontakt@sascha-kohler.at or the Online Dispute Resolution platform
              of the European Commission:
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
              Copyright
            </h2>
            <p className="mb-3">
              The contents of this website are protected by copyright. The
              reproduction, editing, distribution and any kind of exploitation
              outside the limits of copyright require the written consent of the
              respective author or creator.
            </p>
            <p>
              © {new Date().getFullYear()} Sascha Kohler. All rights reserved.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Disclaimer
            </h2>
            <p className="mb-3">
              Despite careful content control, we assume no liability for the
              content of external links. The operators of the linked pages are
              solely responsible for their content.
            </p>
            <p>All information is provided without guarantee.</p>
          </section>
        </div>
      </main>

      {/* Back Link */}
      <div className="container mx-auto px-4 md:px-8 mb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/en"
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
            Back to Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImprintPage;

