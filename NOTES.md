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
