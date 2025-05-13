import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Journal-Feature: Kongruenz im Alltag reflektieren | KLARE Blog',
  description: 'Das Journal-Feature der KLARE App unterstützt dich dabei, Kongruenzmomente in deinem Alltag zu erkennen und zu reflektieren.',
};

export default function JournalKonzeptPage() {
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
            Journal-Feature: Kongruenz im Alltag reflektieren
          </h1>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
              SK
            </div>
            <div className="ml-3">
              <p className="font-medium text-klare-text dark:text-dark-klare-text">Sascha Kohler</p>
              <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">15. April 2025 · 5 Min. Lesezeit</p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-klare-a to-klare-r flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-white/10 rounded-xl transform rotate-3"></div>
              <div className="absolute inset-0 transform -rotate-3 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/20">
                <div className="w-full border-b border-white/20 pb-2 mb-4">
                  <div className="text-white text-xl font-semibold">Mein Kongruenz-Journal</div>
                  <div className="text-white/70 text-sm">15. April 2025</div>
                </div>
                <div className="space-y-3 w-full">
                  <div className="h-3 bg-white/20 rounded-full w-full"></div>
                  <div className="h-3 bg-white/20 rounded-full w-5/6"></div>
                  <div className="h-3 bg-white/20 rounded-full w-4/6"></div>
                  <div className="h-3 bg-white/20 rounded-full w-full"></div>
                  <div className="h-3 bg-white/20 rounded-full w-3/6"></div>
                </div>
                <div className="mt-8 border-t border-white/20 pt-4 w-full">
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 rounded-full bg-white/20"></div>
                    <div className="h-8 w-8 rounded-full bg-white/20"></div>
                    <div className="h-8 w-8 rounded-full bg-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="prose dark:prose-invert prose-lg max-w-none">
          <p>
            Die Kongruenz-Arbeit ist ein kontinuierlicher Prozess, der im Alltag gelebt werden will. Um diesen Prozess zu unterstützen, haben wir in der KLARE App das Journal-Feature entwickelt – ein digitales Tagebuch, das dir hilft, Kongruenzmomente zu erkennen, zu reflektieren und zu verstärken.
          </p>
          
          <h2>Warum ein Kongruenz-Journal?</h2>
          
          <p>
            Kongruenz entsteht, wenn Denken, Fühlen, Handeln und Sprechen im Einklang sind. Doch um diese Momente zu erkennen und aus ihnen zu lernen, braucht es Bewusstsein und Reflexion. Genau hier setzt das Journal-Feature an.
          </p>
          
          <blockquote>
            "Was du täglich dokumentierst, dem schenkst du Aufmerksamkeit. Und Energie folgt der Aufmerksamkeit."
          </blockquote>
          
          <p>
            Die regelmäßige Dokumentation von Kongruenzmomenten hilft dabei:
          </p>
          
          <ul>
            <li>Muster zu erkennen</li>
            <li>Erfolgserlebnisse zu verankern</li>
            <li>Blockaden zu identifizieren</li>
            <li>Fortschritte sichtbar zu machen</li>
            <li>Einsichten zu vertiefen</li>
          </ul>
          
          <h2>Das Journal-Feature im Detail</h2>
          
          <p>
            Bei der Entwicklung des Journal-Features haben wir besonderen Wert auf Benutzerfreundlichkeit und Tiefe gelegt. Es soll einfach genug sein, um täglich genutzt zu werden, aber tiefgründig genug, um echte Transformation zu unterstützen.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">Hauptfunktionen des Journals</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Check-ins:</strong> Kurze, tägliche Einträge mit Kongruenz-Bewertung</li>
              <li><strong>Reflexionen:</strong> Tiefergehende Einträge mit geführten Fragen</li>
              <li><strong>Kongruenz-Momente:</strong> Dokumentation besonderer Momente voller Kongruenz</li>
              <li><strong>Inkongruenz-Trigger:</strong> Identifikation von Situationen, die Inkongruenz auslösen</li>
              <li><strong>Ressourcen-Bibliothek:</strong> Sammlung persönlicher Kraftquellen</li>
              <li><strong>Fortschritts-Tracking:</strong> Visualisierung der Kongruenz-Entwicklung über Zeit</li>
            </ul>
          </div>
          
          <h2>Das technische Konzept</h2>
          
          <p>
            Die technische Umsetzung des Journal-Features basiert auf einem flexiblen Datenmodell, das verschiedene Eintragstypen unterstützt und gleichzeitig eine einfache Analyse ermöglicht.
          </p>
          
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">Code-Snippet: Journal-Datenmodell</h3>
            <pre className="bg-gray-200 dark:bg-gray-900 p-4 overflow-x-auto rounded-lg text-sm">
{`// JournalTypes.ts
export type JournalEntryType = 
  | 'check-in'
  | 'reflection'
  | 'kongruenz-moment'
  | 'inkongruenz-trigger'
  | 'resource';

export interface JournalEntry {
  id: string;
  type: JournalEntryType;
  timestamp: string;
  content: string;
  mood?: number; // 1-10
  kongruenzLevel?: number; // 1-10
  tags?: string[];
  relatedLifeWheelAreas?: string[];
  location?: string;
  images?: string[];
}`}
            </pre>
          </div>
          
          <p>
            Besonders stolz sind wir auf die Verbindung zwischen dem Journal und anderen Features der KLARE App:
          </p>
          
          <ul>
            <li>Journal-Einträge können mit bestimmten Lebensbereichen des Lebensrads verknüpft werden</li>
            <li>Die KLARE-Methode-Schritte werden durch spezifische Reflexionsfragen unterstützt</li>
            <li>Dokumentierte Ressourcen können später als Anker genutzt werden</li>
            <li>KI-gestützte Analysen erkennen Muster und geben personalisierte Empfehlungen</li>
          </ul>
          
          <h2>Die Benutzeroberfläche</h2>
          
          <p>
            Bei der Gestaltung der Benutzeroberfläche haben wir uns von klassischen Tagebüchern inspirieren lassen, aber die Vorteile einer digitalen Anwendung genutzt.
          </p>
          
          <p>
            Die Journal-Oberfläche bietet:
          </p>
          
          <ul>
            <li>Eine chronologische Übersicht aller Einträge</li>
            <li>Filtermöglichkeiten nach Eintragstyp, Lebensbereich etc.</li>
            <li>Eine Kalenderansicht zur Navigation durch vergangene Einträge</li>
            <li>Vorlagen für verschiedene Reflexionsübungen</li>
            <li>Eine Stimmungs- und Kongruenz-Tracking-Visualisierung</li>
            <li>Eine Suchfunktion für schnellen Zugriff auf bestimmte Themen</li>
          </ul>
          
          <div className="bg-gradient-to-r from-klare-a to-klare-r text-white rounded-xl p-8 my-8">
            <h3 className="text-xl font-bold mb-4">Die Kraft regelmäßiger Reflexion</h3>
            <p className="mb-0">
              Studien zeigen, dass regelmäßige Selbstreflexion zu erhöhtem Wohlbefinden, besserer Selbsterkenntnis und nachhaltigeren Verhaltensänderungen führt. Das Journal-Feature der KLARE App macht diese kraftvolle Praxis einfach und zugänglich.
            </p>
          </div>
          
          <h2>Integration in den KLARE-Prozess</h2>
          
          <p>
            Das Journal-Feature ist eng mit den fünf Schritten der KLARE-Methode verknüpft:
          </p>
          
          <ul>
            <li><strong>K (Klarheit)</strong>: Journal-Einträge helfen, blinde Flecken zu erkennen und Selbsttäuschungen zu überwinden</li>
            <li><strong>L (Lebendigkeit)</strong>: Durch das Dokumentieren von Energiequellen und -blockaden wird die natürliche Lebendigkeit aktiviert</li>
            <li><strong>A (Ausrichtung)</strong>: Die Reflexion hilft, die eigenen Werte zu klären und eine kongruente Lebensvision zu entwickeln</li>
            <li><strong>R (Realisierung)</strong>: Fortschritte und Herausforderungen bei der Umsetzung werden dokumentiert und analysiert</li>
            <li><strong>E (Entfaltung)</strong>: Die Integration aller Lebensbereiche und das mühelose Manifestieren werden bewusst wahrgenommen</li>
          </ul>
          
          <p>
            Jeder dieser Schritte wird durch spezifische Journal-Vorlagen und Reflexionsfragen unterstützt, die dem Nutzer je nach aktueller Phase im KLARE-Prozess angeboten werden.
          </p>
          
          <h2>Ausblick: Zukünftige Entwicklungen</h2>
          
          <p>
            Für zukünftige Versionen der App planen wir weitere Verbesserungen des Journal-Features:
          </p>
          
          <ul>
            <li>Spracherkennung für Audio-Einträge unterwegs</li>
            <li>KI-basierte Reflexionsfragen, die sich an den individuellen Prozess anpassen</li>
            <li>Erweiterte Visualisierungen der Kongruenz-Entwicklung</li>
            <li>Integration von Bildern, Skizzen und anderen kreativen Ausdrucksformen</li>
            <li>Erweiterte Export-Funktionen für die Arbeit mit Coaches und Therapeuten</li>
          </ul>
          
          <p>
            Das Journal-Feature ist mehr als nur ein digitales Tagebuch – es ist ein leistungsstarker Begleiter auf dem Weg zu mehr Kongruenz im Leben. Durch die regelmäßige Reflexion werden Muster erkannt, Ressourcen gestärkt und Transformation nachhaltig verankert.
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
              href="/blog/lebensrad-feature" 
              className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-l to-klare-k opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-xl font-bold text-white px-4 text-center">Das Lebensrad als zentrales Feature der KLARE App</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">2. Mai 2025</p>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">Das Lebensrad ist ein wichtiges Tool in der KLARE Methode. Erfahre, wie wir dieses Feature in der App umgesetzt haben.</p>
              </div>
            </Link>
            
            <Link 
              href="/blog/erste-schritte-klare-app" 
              className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-40 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-k to-klare-l opacity-90">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h4 className="text-xl font-bold text-white px-4 text-center">Die ersten Schritte der KLARE App Entwicklung</h4>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">6. Mai 2025</p>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">Ein Blick hinter die Kulissen der KLARE App Entwicklung. Erfahre mehr über die Vision, Konzeption und ersten Entwicklungsschritte.</p>
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
