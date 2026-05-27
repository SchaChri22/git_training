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

        if (!message) {
            return res.status(400).json({
                success: false,
                error: "message fehlt im Request Body"
            });
        }
        
        res.status(201).json({
            success: true,
            message: "Nachricht empfangen",
            data: {
                receivedMessage: message,
                timestamp: new Date().toISOString()
            }
        })
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
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