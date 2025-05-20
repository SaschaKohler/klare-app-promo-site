"use client";
import React from "react";
import Link from "next/link";
import { FileText, Shield, ExternalLink } from "lucide-react";

// Privacy Policy Component
const PrivacyPage: React.FC = () => {
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
        <div className="container mx-auto px-4 md:px-8 md:pt-6 rrelative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Privacy Policy
            <div className="absolute bottom-0 left-0 h-1 w-20 mt-2 bg-white"></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Information about data protection for the CLEAR App according to
            GDPR
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 md:px-8 py-8 mb-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-dark-klare-card p-8 rounded-lg shadow-sm">
          <section className="mb-8">
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
              Effective: May 20, 2025
            </p>
            <p className="mb-4">
              Protection of your personal data is very important to us. This
              privacy policy informs you about how we process your personal data
              when you use our website and the CLEAR App, and outlines your
              rights under data protection law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              1. Data Controller
            </h2>
            <div className="space-y-3">
              <p>The data controller responsible for data processing is:</p>
              <p className="font-medium">Sascha Kohler</p>
              <p>Furth 6</p>
              <p>4311 Schwertberg</p>
              <p>Austria</p>
              <p>Email: office@sascha-kohler.at</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              2. What Data We Collect
            </h2>
            <div className="space-y-3">
              <p>
                <strong>2.1 Website Data:</strong> When you visit our website,
                we collect technical information such as IP address
                (anonymized), browser type, referral source, visit duration, and
                pages viewed. This is done through cookies and similar
                technologies.
              </p>
              <p>
                <strong>2.2 Account Data:</strong> When creating an account for
                the CLEAR App, we collect: email address, username, and password
                (encrypted).
              </p>
              <p>
                <strong>2.3 App Usage Data:</strong> While using the CLEAR App,
                we collect information about how you interact with the app,
                including features used and time spent in different sections.
              </p>
              <p>
                <strong>2.4 Personal Development Data:</strong> The CLEAR App
                allows you to input personal data as part of your personal
                development journey. This may include responses to exercises,
                reflections, goals, and other personal information you choose to
                provide.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              3. How We Use Your Data
            </h2>
            <div className="space-y-3">
              <p>
                <strong>3.1</strong> To provide and maintain our services
              </p>
              <p>
                <strong>3.2</strong> To personalize your experience
              </p>
              <p>
                <strong>3.3</strong> To improve our website and app
              </p>
              <p>
                <strong>3.4</strong> To communicate with you regarding updates,
                support, and service-related announcements
              </p>
              <p>
                <strong>3.5</strong> To provide and improve the CLEAR Method
                tools and exercises
              </p>
              <p>
                <strong>3.6</strong> For analytics purposes to understand how
                our services are used
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              4. Legal Basis for Processing
            </h2>
            <div className="space-y-3">
              <p>We process your data based on the following legal grounds:</p>
              <p>
                <strong>4.1</strong> Performance of contract (Art. 6(1)(b)
                GDPR): Processing necessary to fulfill our contractual
                obligations to you
              </p>
              <p>
                <strong>4.2</strong> Legitimate interests (Art. 6(1)(f) GDPR):
                Where processing is in our legitimate interests and not
                overridden by your rights
              </p>
              <p>
                <strong>4.3</strong> Consent (Art. 6(1)(a) GDPR): Where you have
                given clear consent for us to process your data
              </p>
              <p>
                <strong>4.4</strong> Legal obligations (Art. 6(1)(c) GDPR):
                Where processing is necessary to comply with legal obligations
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              5. Data Security and Retention
            </h2>
            <div className="space-y-3">
              <p>
                <strong>5.1</strong> We implement appropriate technical and
                organizational measures to protect your personal data.
              </p>
              <p>
                <strong>5.2</strong> We retain your data only for as long as
                necessary to fulfill the purposes for which it was collected,
                including legal, accounting, or reporting requirements.
              </p>
              <p>
                <strong>5.3</strong> Personal development data entered in the
                app is stored securely and can be deleted by you at any time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              6. Your Rights
            </h2>
            <div className="space-y-3">
              <p>Under the GDPR, you have the following rights:</p>
              <p>
                <strong>6.1</strong> Right to access your personal data
              </p>
              <p>
                <strong>6.2</strong> Right to rectification of inaccurate data
              </p>
              <p>
                <strong>6.3</strong> Right to erasure ("right to be forgotten")
              </p>
              <p>
                <strong>6.4</strong> Right to restriction of processing
              </p>
              <p>
                <strong>6.5</strong> Right to data portability
              </p>
              <p>
                <strong>6.6</strong> Right to object to processing
              </p>
              <p>
                <strong>6.7</strong> Right to withdraw consent at any time
              </p>
              <p>
                To exercise any of these rights, please contact us at
                office@sascha-kohler.at.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              7. Cookies and Tracking
            </h2>
            <div className="space-y-3">
              <p>
                Our website uses cookies and similar technologies to enhance
                user experience and collect analytical data. You can control
                cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              8. Changes to This Privacy Policy
            </h2>
            <div className="space-y-3">
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Effective" date at the top.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              9. Contact
            </h2>
            <div className="space-y-3">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="font-medium">Sascha Kohler</p>
              <p>Email: office@sascha-kohler.at</p>
            </div>
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

export default PrivacyPage;

