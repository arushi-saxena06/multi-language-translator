require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// If Node < 18, uncomment below line
// const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

/* ---------- MIDDLEWARE ---------- */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());

/* ---------- MONGODB CONNECTION ---------- */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB error:", err));

/* ---------- TRANSLATE ROUTE ---------- */
app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const response = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        q: text,
        source: "en",
        target: targetLang,
        format: "text"
      })
    });

    const data = await response.json();

    if (!data.translatedText) {
      return res.status(500).json({ error: "Translation failed" });
    }

    res.json({ translatedText: data.translatedText });

  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
