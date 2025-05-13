---
title: 'Das Lebensrad – Mein Herzstück der KLARE App'
date: '2025-05-02'
author: 'Sascha Kohler'
excerpt: 'Das Lebensrad ist das zentrale Tool meiner KLARE Methode. Erfahre, warum dieses Feature für mich so besonders ist und wie ich es in der App umgesetzt habe.'
category: 'Features'
coverImage: '/images/blog/life-wheel.jpg'
---

# Das Lebensrad – Herzstück meiner KLARE App

Das Lebensrad (oder "Wheel of Life") ist ein Tool, das mich seit Beginn meiner Arbeit im Bereich der persönlichen Entwicklung begleitet hat. Als ich die KLARE Methode entwickelte, war mir sofort klar: Dieses bewährte Konzept muss das zentrale Element werden. In meiner App habe ich das klassische Lebensrad neu interpretiert und zu einem dynamischen, interaktiven Feature weiterentwickelt, das als Basis für den gesamten Transformationsprozess dient.

## Mein Verständnis des Lebensrads

In meiner Arbeit als Coach und Berater habe ich immer wieder erlebt, wie kraftvoll ein visuelles Instrument sein kann. Das Lebensrad ist für mich die perfekte visuelle Darstellung unserer Lebenssituation – es ermöglicht dir auf einen Blick zu erkennen, welche Bereiche deines Lebens bereits in Balance sind und wo noch Entwicklungspotenzial besteht.

In meiner KLARE App habe ich mich für folgende acht Lebensbereiche entschieden:

1. **Gesundheit & Vitalität** - Körperliches und mentales Wohlbefinden
2. **Karriere & Berufung** - Berufliche Erfüllung und Erfolg
3. **Finanzen & Wohlstand** - Finanzielle Situation und materielle Bedürfnisse
4. **Beziehungen & Partnerschaft** - Romantische und intime Beziehungen
5. **Familie & Freunde** - Soziale Verbindungen und Zugehörigkeit
6. **Persönliches Wachstum** - Lernen, Entwicklung und Selbstverwirklichung
7. **Freizeit & Erholung** - Entspannung, Hobbys und Freizeitgestaltung
8. **Sinn & Spiritualität** - Verbindung zu einem größeren Ganzen, Lebenssinn

<CalloutBox type="info">
  <h3 className="text-lg font-bold mb-2">Warum gerade acht Bereiche?</h3>
  <p>
    Aus meiner Erfahrung mit Klienten habe ich gelernt, dass acht Bereiche die optimale Balance zwischen Vollständigkeit und Übersichtlichkeit bieten. In meiner eigenen Transformationsreise habe ich mit verschiedenen Anzahlen experimentiert – weniger Bereiche waren zu grob, mehr wurden schnell unübersichtlich.
  </p>
</CalloutBox>

## Meine technische Reise zur Umsetzung des Lebensrads

Die Entwicklung eines intuitiven, visuell ansprechenden und technisch robusten Lebensrads war eine meiner größten Herausforderungen bei der App-Entwicklung. Als Einzelentwickler ohne Team musste ich verschiedene Lösungsansätze erkunden und testen. Schließlich entschied ich mich für eine vektorbasierte SVG-Implementation, die sowohl Performance als auch Flexibilität bietet.

<CodeSnippet 
  language="typescript" 
  title="Core LifeWheel Component" 
  code={`// LifeWheelSVG.tsx
export const LifeWheelSVG: React.FC<LifeWheelProps> = ({
  areas,
  size = 300,
  onAreaClick,
  selectedArea
}) => {
  // Calculate coordinates for each segment
  const segments = areas.map((area, index) => {
    const angle = (index / areas.length) * 2 * Math.PI;
    const currentValue = area.currentValue / 10; // Normalize to 0-1 range
    const targetValue = area.targetValue / 10;
    
    // Calculate current value coordinates
    const currentX = size / 2 + Math.cos(angle) * (size / 2) * currentValue;
    const currentY = size / 2 + Math.sin(angle) * (size / 2) * currentValue;
    
    // Calculate target value coordinates
    const targetX = size / 2 + Math.cos(angle) * (size / 2) * targetValue;
    const targetY = size / 2 + Math.sin(angle) * (size / 2) * targetValue;
    
    return {
      ...area,
      angle,
      currentPoint: { x: currentX, y: currentY },
      targetPoint: { x: targetX, y: targetY }
    };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid circles */}
      {[0.2, 0.4, 0.6, 0.8, 1].map(radius => (
        <circle
          key={radius}
          cx={size / 2}
          cy={size / 2}
          r={radius * size / 2}
          fill="none"
          stroke="#ddd"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
      ))}
      
      {/* Current value polygon */}
      <polygon
        points={segments.map(s => \`\${s.currentPoint.x},\${s.currentPoint.y}\`).join(' ')}
        fill="rgba(25, 118, 210, 0.3)"
        stroke="#1976d2"
        strokeWidth="2"
      />
      
      {/* Target value polygon */}
      <polygon
        points={segments.map(s => \`\${s.targetPoint.x},\${s.targetPoint.y}\`).join(' ')}
        fill="none"
        stroke="#f50057"
        strokeWidth="2"
        strokeDasharray="5 3"
      />
      
      {/* Spokes */}
      {segments.map(segment => (
        <line
          key={segment.id}
          x1={size / 2}
          y1={size / 2}
          x2={size / 2 + Math.cos(segment.angle) * (size / 2)}
          y2={size / 2 + Math.sin(segment.angle) * (size / 2)}
          stroke="#ddd"
          strokeWidth="1"
        />
      ))}
      
      {/* Interactive area points */}
      {segments.map(segment => (
        <g key={segment.id}>
          <circle
            cx={segment.currentPoint.x}
            cy={segment.currentPoint.y}
            r={selectedArea === segment.id ? 7 : 5}
            fill={selectedArea === segment.id ? "#f50057" : "#1976d2"}
            onClick={() => onAreaClick(segment.id)}
            className="cursor-pointer"
          />
        </g>
      ))}
    </svg>
  );
};`} 
/>

## Das Lebensrad als Diagnose-Tool in meiner Methode

In der KLARE Methode, die ich über Jahre hinweg entwickelt habe, dient das Lebensrad als fundamentales Diagnose-Tool. Besonders in der K-Phase (Klarheit) ist es unverzichtbar, um den aktuellen Ist-Zustand zu verstehen und Bereiche mit dem größten Entwicklungspotenzial zu identifizieren.

Für jeden Lebensbereich bewertest du:

- Deinen aktuellen Zustand (1-10)
- Deinen gewünschten Zustand (1-10)

Diese beiden Werte visualisieren:

1. Deine aktuelle Lebenssituation (blaue Fläche)
2. Deine Zielvorstellung (rote Umrandung)
3. Die Diskrepanz zwischen Ist und Soll (Abstand zwischen den Linien)

<GradientBox from="from-klare-k" to="to-klare-l">
  <h3 className="text-xl font-bold mb-4">Meine Erkenntnis zur Bedeutung der Diskrepanz</h3>
  <p>
    In meiner eigenen Transformationsreise und in der Arbeit mit Klienten habe ich erkannt: Die Diskrepanz zwischen Ist und Soll zeigt nicht nur, wo Entwicklungspotenzial besteht, sondern auch, wo innere Motivation für Veränderung vorhanden ist. Je größer die Diskrepanz, desto stärker der innere Antrieb zur Transformation in diesem Bereich.
  </p>
</GradientBox>

## Dynamische Entwicklung über Zeit – meine Vision

Eine Besonderheit meines Lebensrad-Features ist die Möglichkeit, die Entwicklung über Zeit zu verfolgen. Diese Idee entstand aus meiner eigenen Erfahrung: Als ich meine persönliche Transformation dokumentierte, wurde mir klar, wie wertvoll es ist, die eigene Entwicklung visuell nachvollziehen zu können.

Durch regelmäßige Bewertungen entsteht eine Zeitleiste der persönlichen Entwicklung, die folgende Einsichten ermöglicht:

- Identifikation von Fortschritten in allen Lebensbereichen
- Erkennen von Wechselwirkungen zwischen verschiedenen Bereichen 
- Bewusstsein für die natürlichen Schwankungen im Leben
- Muster in der persönlichen Entwicklung

Die App, die ich entwickelt habe, generiert zudem automatisch Insights auf Basis dieser Daten, wie zum Beispiel:

- "Dein Bereich 'Gesundheit & Vitalität' hat sich in den letzten 3 Monaten kontinuierlich verbessert."
- "Immer wenn dein Wert für 'Karriere & Berufung' steigt, sinkt dein Wert für 'Freizeit & Erholung'."
- "Du hast dein Ziel für 'Finanzen & Wohlstand' nahezu erreicht – Zeit für ein neues Ziel?"

## Verbindung mit anderen App-Features

Bei der Konzeption meiner App war es mir wichtig, dass alle Features zusammenwirken. Das Lebensrad ist daher eng mit anderen Elementen der KLARE App verknüpft:

1. **KLARE-Methode-Module**: Für jeden Lebensbereich habe ich spezifische Übungen in den K, L, A, R und E Modulen entwickelt.
2. **Journal**: Tagebucheinträge können mit bestimmten Lebensbereichen verknüpft werden – eine Funktion, die aus meiner eigenen Reflexionspraxis stammt.
3. **Ressourcen-Bibliothek**: Kraftquellen und Werkzeuge werden für jeden Lebensbereich kategorisiert.
4. **Ziele und Gewohnheiten**: Konkrete Handlungsschritte zur Verbesserung einzelner Bereiche.

<FeatureList items={[
  "Intuitive Touch-Steuerung zur direkten Anpassung der Werte",
  "Automatische Speicherung der Bewertungshistorie",
  "Detaillierte Bereichs-Beschreibungen mit Reflexionsfragen",
  "Export-Funktion für Coaching-Sessions",
  "Reminder für regelmäßige Neubewertungen",
  "KI-gestützte Musteranalyse und Empfehlungen"
]} />

## Technische Herausforderungen und meine Lösungen

Als Einzelentwickler stand ich bei der Implementierung des Lebensrads vor einigen interessanten technischen Herausforderungen:

### 1. Performance-Optimierung

Die SVG-Berechnung und -Renderung in React Native kann bei komplexen Formen rechenintensiv sein. Nach einigen Versuchen habe ich eine Kombination aus Memoization und reduzierten Re-Renders implementiert:

```typescript
// Optimierung durch Memoization der SVG-Berechnungen
const memoizedWheelCalculation = useMemo(() => {
  // Komplexe Berechnungen für SVG-Koordinaten
  return calculatedSegments;
}, [areas, size]); // Nur neu berechnen, wenn sich areas oder size ändert
```

### 2. Responsive Design

Das Lebensrad muss auf verschiedenen Bildschirmgrößen gut aussehen und nutzbar sein. Nach mehreren Iterationen habe ich eine responsive Skalierung implementiert, die die Größe des Rads, die Schriftgröße und die Interaktionspunkte an die Bildschirmgröße anpasst.

### 3. Datenvisualisierung

Für die zeitliche Entwicklung habe ich verschiedene Charting-Bibliotheken evaluiert und mich schließlich für eine angepasste Version von Recharts entschieden, die sowohl Performance als auch Flexibilität bietet.

## Ausblick: Meine Vision für die Zukunft des Lebensrads

Für zukünftige Versionen meiner App plane ich weitere Verbesserungen des Lebensrad-Features:

- 3D-Visualisierung mit Tiefeneffekt für noch intuitiveres Verständnis
- Erweiterte KI-Analyse für tiefere Einsichten in persönliche Entwicklungsmuster
- Benutzerdefinierte Lebensbereiche für individuellere Anpassung
- Vergleichsmöglichkeiten mit anonymisierten Durchschnittsdaten
- Integration mit externen Tracking-Tools (Gesundheitsdaten, Finanzsoftware, etc.)

Das Lebensrad ist für mich mehr als nur ein Feature – es ist das zentrale Navigationssystem auf dem Weg zu mehr Kongruenz und Erfüllung. Durch die visuelle Darstellung der Lebenssituation erkennst du nicht nur, wo du stehst, sondern auch, wohin du gehst und welche Bereiche deines Lebens besondere Aufmerksamkeit verdienen.

Ich habe das Lebensrad schon mit vielen Menschen in Coaching-Sessions und Workshops genutzt, lange bevor die App entstand. Die digitale Version ist nun sozusagen mein "Coach in der Tasche" geworden. Ich bin gespannt, wie du das Lebensrad in der KLARE App erleben wirst und freue mich auf dein Feedback!

*Sascha*