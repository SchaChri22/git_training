# Git Anleitung

## Versionsverwaltungssystem VCS
- Ein VSC verfolgt und verwaltet Änderungen an Dateien und Datensätzen
- es ist vor allem bei komplexen Projekten mit mehreren Teammitgliedern unentbehrlich

## Vorteile eines VCS
- Rückverfolgbarkeit
- Fehlerückverfolgung
- Kollaboration
- Branching und Merging
- Sicherung

## Arten von Versionsverwaltungssystemen
- Zentralisierte Systeme (Bsp. SVN)
- Verteilte Versionskontrolle (GIT)
- Cloud- basierte Plattformen (GitHub, GitLab, BitBucket)

- installation unter:

https://git-scm.com/install/windows

**Lokales und remote Repository anlegen**

```js
// konfiguration
git config --global user.name "Dein Name"
git config --global user.email "deine.email@example.com"

// kontrolle der Eingaben
git config --list
```

```js
// im terminal ein lokales Repo anlegen
git init
```

```js
// lokale Repo- Kopie an GitHub senden


// alles bisherige in staging Area bringen
git add .
// erster initial Commit
git commit -m 


// Verbindung herstellen
git remote add origin https://github.com/dein-benutzername/mein-projekt.git
// Verbindung prüfen
git remote -v
// upstream setzen
git push --set-upstream origin master

// ein Repository klonen
git clone https://github.com/dein-benutzername/
```

**Zusammenarbeiten in git**
```js
// neuer Sidebranch
git checkout -b branch-name

// welchen branch verwende ich
git branch

// wechsel in mein-branch
git checkout main

// merge von sidebranch in mainbranch
git merge branch-name

// löscht sidebranch nach merge
git branch -d branch-name

// löscht sidebranch ohne merge
git branch -D branch-name


// merge Konflikt
<<<<<<< HEAD
console.log('Version aus main')
=======
console.log('Version aus feature-branch')
>>>>>>> feature-branch
```

## Beispiel

app.js
```js
// app.js

// DOM Elemente
const getButton = document.querySelector('#IdGetButton');
const getOutput = document.querySelector('#idOutput');
const postButton = document.querySelector('#IdPostButton');
const postInput = document.querySelector('#idInput');

// GET fetch
async function getMessage(){
    try {
        const res = await fetch("http://localhost:3000/message");

    if (!res.ok){
        throw new Error(`Http Fehler: ${res.status}`);
    }
        const response = await res.json();
        getOutput.value = response.message;

        console.log("Server antwortet: ", response.message);
    }
    catch (error){
        console.error("Fehler beim Abrufen:" , error.message);;
    };
    
};

// POST fetch
async function sendMessage(){
    const res = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: postInput.value
        })
    });

    const data = await res.json();
    console.log(data);
};

// EVENT für POST fetch
postButton.addEventListener("click", sendMessage);

// EVENT für GET fetch
getButton.addEventListener("click", getMessage);
```

server.js
```js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// GET
app.get("/message", (req, res) => {
        res.status(200).json({
            message: "Hier ist meine Nachricht",
            success: true
        });
    });

// POST
app.post("/message", (req,res) => {
    try {
        const message = req.body;

        // Falls keine Nachricht ankommt
        if (!message) {
            return res.status(400).json({
                success: false,
                error: "message fehlt im Request Body"
            });
        }
        
        // Nachricht erfolgreich angekommen
        res.status(201).json({
            success: true,
            message: "Nachricht empfangen",
            data: {
                receivedMessage: message,
                timestamp: new Date().toISOString()
            }
        })
    }

    // falls Server Fehler vorliegt
    catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});

// PortListener
app.listen(PORT, () => {
    console.log("Server läuft auf PORT 3000");
});
```

index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="app.js" defer></script>
  </head>
  <body>
    <button type="button" id="IdGetButton">GET Button</button>
    <input type="text" id="idOutput" readonly placeholder="GET Nachricht" />
    <br />
    <br />
    <button type="button" id="IdPostButton">POST Button</button>
    <input type="text" id="idInput" placeholder="POST Nachricht" />
  </body>
</html>
```