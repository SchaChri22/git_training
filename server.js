import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// einfache Abfrage
app.get("/message", (req, res) => {
        res.status(200).json({
            message: "Hier ist meine Nachricht",
            success: true
        });
    });

// 404 Handler (wichtig!)
app.use((req, res) => {
    res.status(404).json({
        error: "Route nicht gefunden"
    });
});
// PortListener
app.listen(PORT, () => {
    console.log("Server läuft auf PORT 3000");
});