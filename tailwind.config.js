/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'klare-k': '#6366F1', // Indigo - Klarheit
        'klare-l': '#8B5CF6', // Violet - Lebendigkeit
        'klare-a': '#EC4899', // Pink - Ausrichtung
        'klare-r': '#F59E0B', // Amber - Realisierung
        'klare-e': '#10B981', // Emerald - Entfaltung
        'klare-bg': '#F9FAFB',
        'klare-card': '#FFFFFF',
        'klare-text': '#1F2937',
        'klare-text-secondary': '#6B7280',
        'klare-border': '#E5E7EB',
        
        // Dark Mode Colors
        'dark-klare-k': '#818CF8', // Lighter Indigo for dark mode
        'dark-klare-l': '#A78BFA', // Lighter Violet for dark mode
        'dark-klare-a': '#F472B6', // Lighter Pink for dark mode
        'dark-klare-r': '#FBBF24', // Lighter Amber for dark mode
        'dark-klare-e': '#34D399', // Lighter Emerald for dark mode
        'dark-klare-bg': '#111827',
        'dark-klare-card': '#1F2937',
        'dark-klare-text': '#F9FAFB',
        'dark-klare-text-secondary': '#D1D5DB',
        'dark-klare-border': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      backgroundImage: {
        'gradient-klare': 'linear-gradient(to right, #6366F1, #8B5CF6, #EC4899, #F59E0B, #10B981)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};