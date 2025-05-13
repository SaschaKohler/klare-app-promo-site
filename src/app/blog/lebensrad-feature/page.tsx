import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Das Lebensrad als zentrales Feature der KLARE App | KLARE Blog',
  description: 'Das Lebensrad ist ein wichtiges Tool in der KLARE Methode. Erfahre, wie wir dieses Feature in der App umgesetzt haben.',
};

export default function LebensradFeaturePage() {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-dark-klare-bg">
      <article className="container mx-auto px-4 md:px-0 max-w-3xl">
        {/* Article Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-klare-k dark:text-dark-klare-k hover:underline mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Übersicht
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Das Lebensrad als zentrales Feature der KLARE App
          </h1>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
              SK
            </div>
            <div className="ml-3">
              <p className="font-medium text-klare-text dark:text-dark-klare-text">Sascha Kohler</p>
              <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">2. Mai 2025 · 7 Min. Lesezeit</p>
            </div>
          </div>
          
          <div className="flex items-center mb-8">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
              Features
            </span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-klare-l to-klare-k flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-white/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Health Segment */}
                  <path d="M100,100 L100,20 A80,80 0 0,1 156,43.6 Z" fill="#6366F1" opacity="0.8" />
                  {/* Career Segment */}
                  <path d="M100,100 L156,43.6 A80,80 0 0,1 180,100 Z" fill="#8B5CF6" opacity="0.8" />
                  {/* Finance Segment */}
                  <path d="M100,100 L180,100 A80,80 0 0,1 156,156.4 Z" fill="#EC4899" opacity="0.8" />
                  {/* Relationships Segment */}
                  <path d="M100,100 L156,156.4 A80,80 0 0,1 100,180 Z" fill="#F59E0B" opacity="0.8" />
                  {/* Growth Segment */}
                  <path d="M100,100 L100,180 A80,80 0 0,1 43.6,156.4 Z" fill="#10B981" opacity="0.8" />
                  {/* Leisure Segment */}
                  <path d="M100,100 L43.6,156.4 A80,80 0 0,1 20,100 Z" fill="#6366F1" opacity="0.8" />
                  {/* Spirituality Segment */}
                  <path d="M100,100 L20,100 A80,80 0 0,1 43.6,43.6 Z" fill="#8B5CF6" opacity="0.8" />
                  {/* Family Segment */}
                  <path d="M100,100 L43.6,43.6 A80,80 0 0,1 100,20 Z" fill="#EC4899" opacity="0.8" />
                  
                  {/* Inner Circle */}
                  <circle cx="100" cy="100" r="30" fill="white" opacity="0.2" />
                  <circle cx="100" cy="100" r="5" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <p>
            In der KLARE Methode spielt das Lebensrad eine entscheidende Rolle. Es ist ein mächtiges Werkzeug zur Selbstreflexion und hilft dabei, Kongruenz in allen Lebensbereichen zu finden. Als wir mit der Entwicklung der KLARE App begannen, war uns klar, dass das Lebensrad ein zentrales Feature sein würde.
          </p>
          
          <h2>Das Lebensrad-Konzept</h2>
          
          <p>
            Das Lebensrad teilt das Leben in acht wesentliche Bereiche auf:
          </p>
          
          <ul>
            <li>Gesundheit & Vitalität</li>
            <li>Karriere & Berufung</li>
            <li>Finanzen & Wohlstand</li>
            <li>Beziehungen & Partnerschaft</li>
            <li>Familie & Freunde</li>
            <li>Persönliches Wachstum</li>
            <li>Freizeit & Erholung</li>
            <li>Sinn & Spiritualität</li>
          </ul>
          
          <p>
            Jeder dieser Bereiche wird auf einer Skala von 1 bis 10 bewertet, wobei 1 für "sehr unzufrieden" und 10 für "vollkommen zufrieden" steht. So entsteht ein visuelles Profil des aktuellen Lebens, das Ungleichgewichte sofort sichtbar macht.
          </p>
          
          <h2>Die technische Umsetzung</h2>
          
          <p>
            Die Implementierung des Lebensrads in der App war eine spannende Herausforderung. Wir haben uns für eine interaktive Visualisierung entschieden, die es Nutzern ermöglicht, ihre Werte intuitiv einzustellen und sofort das Ergebnis zu sehen.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">Code-Snippet: Lebensrad-Komponentenstruktur</h3>
            <pre className="bg-gray-200 dark:bg-gray-900 p-4 overflow-x-auto rounded-lg text-sm">
{`// LifeWheelComponent.tsx
interface LifeWheelArea {
  id: string;
  name: string; 
  color: string;
  value: number;
  targetValue: number;
}

interface LifeWheelProps {
  areas: LifeWheelArea[];
  onAreaValueChange: (id: string, value: number) => void;
  showTargetValues: boolean;
}

export const LifeWheelComponent: React.FC<LifeWheelProps> = ({
  areas,
  onAreaValueChange,
  showTargetValues
}) => {
  // Rendering logic for the life wheel visualization
  // ...
}`}
            </pre>
          </div>
          
          <p>
            Die Visualisierung des Lebensrads nutzt SVG für die Darstellung der Segmente. Jedes Segment repräsentiert einen Lebensbereich und wird entsprechend der Bewertung gefüllt. Wir haben uns für eine Farbkodierung entschieden, die den KLARE-Farben entspricht.
          </p>
          
          <p>
            Besonders stolz sind wir auf die interaktive Komponente, die es ermöglicht, durch einfaches Ziehen die Werte anzupassen. Dafür haben wir React Native Gesture Handler und Reanimated 2 verwendet, die eine flüssige Animation ermöglichen.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">Lebensrad-Features in der App</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Interaktive Anpassung durch Ziehen oder Tippen</li>
              <li>Anzeige von Ist- und Zielwerten</li>
              <li>Zeitliche Entwicklung der Werte</li>
              <li>Automatische Berechnung des Kongruenz-Scores</li>
              <li>Personalisierte Vorschläge basierend auf den Werten</li>
              <li>Export-Funktion für Coaching-Sessions</li>
            </ul>
          </div>
          
          <h2>Das Lebensrad im KLARE-Prozess</h2>
          
          <p>
            Das Lebensrad ist nicht nur ein Diagnose-Tool, sondern auch ein zentrales Element im gesamten KLARE-Prozess:
          </p>
          
          <ul>
            <li><strong>K (Klarheit)</strong>: Das Lebensrad hilft, den Ist-Zustand ehrlich zu erkennen</li>
            <li><strong>L (Lebendigkeit)</strong>: Es zeigt, in welchen Bereichen Energie aktiviert werden sollte</li>
            <li><strong>A (Ausrichtung)</strong>: Es unterstützt bei der Entwicklung einer kongruenten Werte-Hierarchie</li>
            <li><strong>R (Realisierung)</strong>: Es bietet konkrete Anhaltspunkte für Veränderungsschritte</li>
            <li><strong>E (Entfaltung)</strong>: Es visualisiert den Fortschritt und die Entwicklung über Zeit</li>
          </ul>
          
          <p>
            In der App haben wir diesen Prozess direkt mit dem Lebensrad verknüpft. So wird dem Nutzer stets der Zusammenhang zwischen seiner aktuellen Position im KLARE-Prozess und den Lebensrad-Werten verdeutlicht.
          </p>
          
          <h2>Ausblick: Zukünftige Entwicklungen</h2>
          
          <p>
            Für zukünftige Versionen der App planen wir weitere Verbesserungen des Lebensrad-Features:
          </p>
          
          <ul>
            <li>Eine 3D-Visualisierung für ein noch intuitiveres Verständnis</li>
            <li>KI-basierte Analysen, die Muster in der zeitlichen Entwicklung erkennen</li>
            <li>Verknüpfung mit Journaleinträgen für tiefere Reflexion</li>
            <li>Sharing-Funktion für Coaches und Therapeuten</li>
            <li>Anpassbare Lebensbereiche für individuelle Bedürfnisse</li>
          </ul>
          
          <p>
            Das Lebensrad ist mehr als nur ein Feature der KLARE App – es ist ein leistungsstarkes Werkzeug zur Selbsterkenntnis und ein Schlüssel zu mehr Kongruenz im Leben. Wir freuen uns darauf, es kontinuierlich weiterzuentwickeln und noch wertvoller für unsere Nutzer zu machen.
          </p>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-12 pt-8">
            <h3 className="text-xl font-bold mb-4 text-klare-text dark:text-dark-klare-text">Über den Autor</h3>
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-klare-k text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                SK
              </div>
              <div>
                <p className="font-bold text-klare-text dark:text-dark-klare-text mb-2">Sascha Kohler</p>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                  Lebens- und Sozialberater, NLP-Master & Trainer, Entwickler der KLARE Methode. Sascha widmet sich der Erforschung und Anwendung transformativer Methoden zur persönlichen Entwicklung und begleitet Menschen auf ihrem Weg zu mehr Kongruenz.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">Ähnliche Artikel</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/blog/journal-konzept" 
              className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-a to-klare-r opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-xl font-bold text-white px-4 text-center">Journal-Feature: Kongruenz im Alltag reflektieren</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">15. April 2025</p>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">Das Journal-Feature der KLARE App unterstützt dich dabei, Kongruenzmomente in deinem Alltag zu erkennen und zu reflektieren.</p>
              </div>
            </Link>
            
            <Link 
              href="/blog/design-system" 
              className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-e to-klare-k opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-xl font-bold text-white px-4 text-center">Das Designsystem der KLARE App</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">5. April 2025</p>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">Wie wir ein harmonisches und bedeutungsvolles Designsystem für die KLARE App entwickelt haben.</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Comments Section Placeholder */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">Kommentare</h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">Kommentarfunktion wird in Kürze freigeschaltet.</p>
            <button className="bg-klare-k dark:bg-dark-klare-k text-white px-6 py-2 rounded-full font-medium hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 transition-colors">
              Für Updates anmelden
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
