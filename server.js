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