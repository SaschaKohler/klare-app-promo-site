---
title: "Warum wir auf React Native mit Expo setzen"
date: "2025-04-28"
author: "Sascha Kohler"
excerpt: "Technische Einblicke in die Entwicklung der KLARE App. Welche Vorteile bieten React Native und Expo für unsere Vision?"
category: "Technologie"
coverImage: "/images/blog/react-native.jpg"
---

# Warum wir auf React Native mit Expo setzen

Bei der Entwicklung der KLARE App standen wir vor einer grundlegenden technologischen Entscheidung: Welches Framework sollen wir nutzen, um unsere Vision einer transformativen App optimal umzusetzen? Nach sorgfältiger Abwägung fiel unsere Entscheidung auf **React Native in Kombination mit Expo** – eine Wahl, die sich bis heute bewährt hat.

## Die Anforderungen an unsere Technologie-Stack

Für die KLARE App benötigten wir eine Technologie, die:

1. **Plattformübergreifend** funktioniert (iOS und Android)
2. **Schnelle Entwicklungszyklen** ermöglicht
3. **Performante Animationen und Interaktionen** unterstützt
4. Eine **aktive Community** und gute Dokumentation bietet
5. **Zukunftssicher** und kontinuierlich weiterentwickelt wird
6. **Offline-Funktionalität** einfach ermöglicht

## Was ist React Native?

React Native ist ein von Facebook (jetzt Meta) entwickeltes Open-Source-Framework, das es ermöglicht, mit JavaScript und React native mobile Anwendungen zu entwickeln. Anders als bei Web-Apps werden dabei tatsächlich native Komponenten gerendert, was eine bessere Performance und ein authentischeres Look-and-Feel bietet.

<CalloutBox type="info">
  <h3 className="text-lg font-bold mb-2">React Native im Überblick</h3>
  <p>
    React Native kombiniert die Vorteile der Web-Entwicklung (schnelle
    Iteration, eine Codebasis für mehrere Plattformen) mit der Performance und
    den Fähigkeiten nativer Apps. Es nutzt die gleiche Design-Philosophie wie
    React für das Web, passt diese jedoch für mobile Anwendungen an.
  </p>
</CalloutBox>

## Warum Expo?

Expo ist ein Ökosystem von Tools und Diensten rund um React Native, das die Entwicklung erheblich vereinfacht. Es bietet:

- Ein **Managed Workflow** mit vorkonfigurierten Build-Tools
- Eine umfangreiche **Bibliothek vorgefertigter Module** für Kamera, Sensoren, Benachrichtigungen etc.
- **Over-the-Air Updates** ohne App-Store-Genehmigungsprozesse
- **Einfaches Testing** auf physischen Geräten
- **EAS (Expo Application Services)** für CI/CD, Builds und Verteilung

```typescript
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function AccelerometerSensor() {
const [data, setData] = useState({ x: 0, y: 0, z: 0 });
const [subscription, setSubscription] = useState(null);

useEffect(() => {
_subscribe();
return () => _unsubscribe();
}, []);

const _subscribe = () => {
setSubscription(
Accelerometer.addListener(accelerometerData => {
setData(accelerometerData);
})
);
Accelerometer.setUpdateInterval(100);
};

const _unsubscribe = () => {
subscription && subscription.remove();
setSubscription(null);
};

return (
<View style={styles.container}>
<Text style={styles.text}>
Accelerometer: (in g's where 1g = 9.81 m/s^2)
</Text>
<Text style={styles.text}>
x: {round(data.x)} y: {round(data.y)} z: {round(data.z)}
</Text>
</View>
);
}

function round(n) {
return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
text: {
fontSize: 16,
marginBottom: 10,
},
});
}

```

## Die Vorteile für die KLARE App

### 1. Eine einzige Codebasis

Mit React Native müssen wir nur einen Codebase pflegen, der auf iOS und Android läuft. Das bedeutet:

- Schnellere Entwicklung neuer Features
- Konsistentere Benutzererfahrung über Plattformen hinweg
- Einfachere Wartung und Fehlerbehebung
- Kleineres Entwicklungsteam nötig

### 2. Komponenten-basierter Ansatz

Der komponenten-basierte Ansatz von React passt perfekt zur modularen Struktur der KLARE-Methode:

- Jeder KLARE-Schritt (K, L, A, R, E) hat seine eigenen UI-Komponenten
- Die Komponenten können einfach wiederverwendet und kombiniert werden
- Zustandsmanagement ist klar strukturiert durch Hooks und Context

<GradientBox>
  <h3 className="text-xl font-bold mb-4">Modularität der KLARE App</h3>
  <p>
    Die modulare Struktur von React Native spiegelt perfekt die KLARE-Methode
    wider. Jeder der fünf Schritte (Klarheit, Lebendigkeit, Ausrichtung,
    Realisierung, Entfaltung) ist als eigenständiges Modul implementiert, das
    gleichzeitig nahtlos mit den anderen Modulen interagiert.
  </p>
</GradientBox>

### 3. Performante Animationen

Für die KLARE App sind intuitive, flüssige Animationen entscheidend, um das Nutzererlebnis zu verbessern. Mit React Native Reanimated und Gesture Handler haben wir:

- Flüssige 60fps Animationen für das Lebensrad
- Natürliche Gesten-Interaktionen
- Reaktive visuelle Rückmeldungen

```javascript
// Beispiel einer Animation mit Reanimated 2
const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [
      { scale: withSpring(pressed.value ? 1.1 : 1) },
      { rotate: withTiming(`${rotation.value * 2 * Math.PI}rad`) }
    ],
    backgroundColor: interpolateColor(
      progress
```

