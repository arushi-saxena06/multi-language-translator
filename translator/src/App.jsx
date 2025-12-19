import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");

  function translateText() {
  fetch("https://translator-backend-0ozs.onrender.com/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: inputText,
      targetLang: targetLang
    })
  })
    .then(res => res.json())
    .then(data => {
      setOutputText(data.translatedText);
    })
    .catch(() => {
      setOutputText("Translation failed");
    });
}


  return (
    <div className="container">
      <h1>Multi-Language Translator</h1>

      <textarea
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <select onChange={(e) => setTargetLang(e.target.value)}>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
        <option value="en">English</option>
      </select>

      <button onClick={translateText}>Translate</button>

      <textarea
        placeholder="Translated text"
        value={outputText}
        readOnly
      />
    </div>
  );
}

export default App;
