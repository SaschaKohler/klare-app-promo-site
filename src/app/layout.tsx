import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata = {
  title: 'KLARE Methode App | Kongruenz statt Optimierung',
  description: 'Entdecke die KLARE Methode App: In 5 Schritten zur vollständigen Kongruenz. Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung - Von Sascha Kohler',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable} dark`}>
      <body className="bg-white dark:bg-dark-klare-bg text-klare-text dark:text-dark-klare-text">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}