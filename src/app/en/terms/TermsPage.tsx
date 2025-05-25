"use client";
import React from "react";
import Link from "next/link";

// Terms of Service Component
const TermsPage: React.FC = () => {
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
        <div className="container mx-auto px-4 md:px-8 md:pt-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 relative">
            Terms of Service
            <div className="absolute bottom-0 left-0 h-1 w-20 mt-2 bg-white"></div>
          </h1>

          <p className="max-w-3xl text-white/90 text-lg relative z-10">
            Legal information for using the CLEAR App
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
              Welcome to the CLEAR App ("we", "us", "our"). These Terms of
              Service ("Terms") govern your use of the CLEAR App application and
              all related services and features. Please read these Terms
              carefully before using the app.
            </p>
            <p className="mb-6">
              <strong>Note:</strong> The comprehensive Terms regarding the
              purchase of the CLEAR App are currently in development and will be
              published at a later date. The following provisions already apply
              to the use of the application and website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              1. Introduction and Scope
            </h2>
            <div className="space-y-3">
              <p>
                1.1 These Terms govern the legal relationship between Sascha
                Kohler as the provider of the CLEAR App and you as a user.
              </p>
              <p>
                1.2 By using our app or by visiting our website, you agree to
                these Terms.
              </p>
              <p>
                1.3 We reserve the right to change these Terms at any time. The
                current version is always available on our website.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              2. Legal Distinction from Medical Professions
            </h2>
            <div className="space-y-3">
              <p>
                <strong>2.1 Non-medical nature of the app:</strong> The CLEAR
                App is a coaching and self-help tool exclusively designed for
                personal development, reflection, and life design. The app does{" "}
                <strong>not</strong> provide medical, psychotherapeutic,
                clinical-psychological, or health-psychological services.
              </p>
              <p>
                <strong>
                  2.2 Not a substitute for professional treatment:
                </strong>{" "}
                The CLEAR App is not a substitute for professional medical
                advice, diagnosis, or treatment by physicians, psychotherapists,
                clinical psychologists, health psychologists, or other
                healthcare providers. The content and methods contained in the
                app do not replace the advice or treatment by trained and
                recognized healthcare professionals.
              </p>
              <p>
                <strong>2.3 No healing promises:</strong> The CLEAR App and the
                methods contained therein do not make healing promises and do
                not claim to cure, treat, alleviate, or prevent diseases, mental
                disorders, or health complaints.
              </p>
              <p>
                <strong>2.4 Personal responsibility and self-care:</strong> The
                use of the CLEAR App is at your own responsibility. If you have
                existing health problems, psychological stress, or are in acute
                crisis situations, you should immediately seek professional
                medical or psychological help.
              </p>
              <p>
                <strong>2.5 Purpose of the app:</strong> The CLEAR App offers
                methods and tools to promote personal development, mindfulness,
                self-reflection, and life design that can be used in the context
                of life and social counseling and mental training. The
                effectiveness of these methods may vary individually.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              3. Scope of Services
            </h2>
            <div className="space-y-3">
              <p>
                3.1 The CLEAR App provides tools and methods for personal
                development and self-reflection.
              </p>
              <p>
                3.2 We strive to keep the app available at all times, but cannot
                guarantee uninterrupted availability.
              </p>
              <p>
                3.3 The exact functions and scope of services may vary depending
                on the version and subscription.
              </p>
              <p>
                3.4 We reserve the right to change, expand, or discontinue
                functions and content of the app at any time.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              4. User Obligations
            </h2>
            <div className="space-y-3">
              <p>
                4.1 You agree to use the app only for personal purposes and in
                accordance with these Terms.
              </p>
              <p>
                4.2 You are prohibited from copying, modifying, distributing, or
                otherwise misusing the app or parts of it.
              </p>
              <p>
                4.3 You are responsible for all activities that take place
                through your account.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              5. Privacy
            </h2>
            <div className="space-y-3">
              <p>
                5.1 The protection of your data is important to us. Information
                on how we process your data can be found in our{" "}
                <Link
                  href="/en/privacy"
                  className="text-klare-k hover:underline dark:text-dark-klare-k"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              6. Liability
            </h2>
            <div className="space-y-3">
              <p>
                6.1 We do not guarantee the accuracy, completeness, or
                timeliness of the content provided in the app.
              </p>
              <p>
                6.2 The use of the app is at your own risk. We are only liable
                for damages caused by intentional or grossly negligent behavior
                on our part.
              </p>
              <p>
                6.3 For slight negligence, we are only liable in case of breach
                of a material contractual obligation and only for foreseeable,
                typically occurring damages.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              7. Notice Regarding Future Terms of Use
            </h2>
            <div className="space-y-3">
              <p>
                7.1 The complete Terms of Service regarding the purchase, use of
                premium features, and other services of the CLEAR App are
                currently being developed.
              </p>
              <p>
                7.2 These will be published in due time before the official
                launch of the paid versions and will contain regulations on
                prices, payment terms, right of withdrawal, term, and
                termination.
              </p>
              <p>
                7.3 By using future paid features, you will be asked to agree to
                these extended terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              8. Final Provisions
            </h2>
            <div className="space-y-3">
              <p>
                8.1 Austrian law applies to the exclusion of the UN Convention
                on Contracts for the International Sale of Goods and the
                reference norms of international private law.
              </p>
              <p>
                8.2 Should individual provisions of these Terms be or become
                invalid, the validity of the remaining provisions shall remain
                unaffected.
              </p>
              <p>
                8.3 The place of jurisdiction for all disputes arising from this
                contract is, as far as legally permissible, Wels, Austria.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-klare-k dark:text-dark-klare-k">
              Contact
            </h2>
            <div className="space-y-3">
              <p>
                If you have any questions about these Terms, you can contact us
                as follows:
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

export default TermsPage;

