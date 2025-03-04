# Pokémon-API Skript

Dieses Skript ruft zufällig ein Pokémon von der PokéAPI ab und gibt dessen Basiswerte aus.

## 📌 Anforderungen
Stelle sicher, dass du folgende Voraussetzungen erfüllst:
- **Node.js** ist installiert ([Download hier](https://nodejs.org/))
- **Axios** ist installiert (falls nicht, siehe Installation unten)

## 🚀 Installation
1. **Clone oder lade die Datei herunter**
   ```sh
   git clone https://github.com/Clickybunty/Pokemon-API.git
   cd Pokemon-API
   ```
2. **Installiere Abhängigkeiten** (falls Axios nicht installiert ist):
   ```sh
   npm install axios
   ```

## 🏃‍♂️ Ausführen des Skripts
Führe das Skript in der Konsole oder im Terminal aus:
```sh
node hausaufgabe.js
```

## 🔍 Funktionsweise
- Das Skript generiert eine **zufällige Pokémon-ID** (1-898).
- Es ruft die **PokéAPI** unter `https://pokeapi.co/api/v2/pokemon/{id}` auf.
- Es gibt den **Namen und die Basiswerte** des Pokémon aus.

## 📚 Beispielausgabe
```
📜 Pokémon: Pikachu
🔢 Basiswerte:
  - Hp: 35
  - Attack: 55
  - Defense: 40
  - Special-attack: 50
  - Special-defense: 50
  - Speed: 90
```

## ⚡ Verbesserungsmöglichkeiten
- Nutzer kann selbst ein Pokémon eingeben.
- Erweiterung um Pokémon-Typen und Fähigkeiten.
- Ausgabe der Pokémon-Sprites (Bilder).

### 🎉 Viel Spaß mit der Pokémon-API! 😊
