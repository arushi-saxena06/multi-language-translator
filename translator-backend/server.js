const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB error:", err));

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
const translatedText = data.translatedText;


    const data = await response.json();
    const translatedText = data.translation;

    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: "Translation failed" });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
