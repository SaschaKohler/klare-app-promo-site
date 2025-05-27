"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { useI18n } from "@/lib/i18n/I18nProvider";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function CallToAction() {
  const { isEnglish } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Using your existing newsletter API
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          source: `klare-app-promo-site-${isEnglish ? "en" : "de"}`,
          language: isEnglish ? "en" : "de",
          page: "call-to-action",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        console.error("Newsletter signup failed:", data.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Newsletter signup error:", error);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="call-to-action">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-klare rounded-3xl py-16 px-8 md:py-20 md:px-12 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-klare-k via-klare-a to-klare-e opacity-90"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              {isEnglish
                ? "Ready for more congruence in your life?"
                : "Bereit für mehr Kongruenz in deinem Leben?"}
            </h2>
            <p className="text-lg md:text-xl mb-10 text-gray-100">
              {isEnglish
                ? "Sign up to receive updates about the CLEAR App and be among the first to get access."
                : "Melde dich an, um Updates zur KLARE App zu erhalten und sei unter den Ersten, die Zugang bekommen."}
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white bg-opacity-20 rounded-2xl p-6 mb-4"
              >
                <FiCheck className="mx-auto text-4xl mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {isEnglish ? "Thank you!" : "Vielen Dank!"}
                </h3>
                <p className="text-sm text-gray-200">
                  {isEnglish
                    ? "You'll receive updates about the CLEAR App soon."
                    : "Du erhältst bald Updates zur KLARE App."}
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3 mb-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    isEnglish ? "Your email address" : "Deine E-Mail-Adresse"
                  }
                  className="flex-grow px-5 py-3 rounded-full text-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="bg-white text-klare-a hover:text-klare-k font-medium px-5 py-3 rounded-full transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-klare-a border-t-transparent rounded-full mr-2"></div>
                      {isEnglish ? "Sending..." : "Wird gesendet..."}
                    </>
                  ) : (
                    <>
                      {isEnglish ? "Get Updates" : "Updates erhalten"}
                      <FiArrowRight className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center text-red-200 text-sm mb-4"
              >
                <FiAlertCircle className="mr-2" />
                {isEnglish
                  ? "Something went wrong. Please try again."
                  : "Etwas ist schiefgelaufen. Bitte versuche es erneut."}
              </motion.div>
            )}

            <p className="text-sm text-gray-200">
              {isEnglish
                ? "We respect your privacy. No spam emails."
                : "Wir respektieren deine Privatsphäre. Keine Spam-Mails."}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

