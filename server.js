const express = require('express'); // Express.js importieren
const app = express(); // Express-Anwendung erstellen
const port = 3000; // Port-Nummer festlegen

app.use(express.json()); // Middleware für JSON-Daten aktivieren

let users = [ // Beispiel-Datenbank (Array von Benutzern)
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

// GET-Route: Alle Benutzer abrufen
app.get('/users', (req, res) => {
    res.json(users);
});

// POST-Route: Neuen Benutzer hinzufügen
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Server starten
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));