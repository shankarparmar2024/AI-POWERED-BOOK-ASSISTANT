import React, { useState } from "react";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const askQuestion = async () => {
    if (!question) return;

    const userMsg = { type: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/ask/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      
      const botMsg = {
        type: "bot",
        text: data.answer || [],
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "⚠ Backend error" },
      ]);
    }

    setLoading(false);
  };

  
  const getRecommendations = async () => {
    if (!title) return;

    try {
      const res = await fetch("http://127.0.0.1:8000/recommend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      const data = await res.json();

      setRecommendations(data.recommendations || []);
    } catch (error) {
      setRecommendations([
        { text: "Error fetching recommendations", score: 0 },
      ]);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🚀 AI-Powered Book Insight Assistant by शंकर </h1>

      {/* 🔥 CHAT SECTION */}
      <div className="chat">
        {messages.map((msg, i) => (
          <div key={i} className={`bubble ${msg.type}`}>
            {/* USER MESSAGE */}
            {msg.type === "user" && <div>{msg.text}</div>}

            {/* BOT MESSAGE */}
            {msg.type === "bot" && Array.isArray(msg.text) && (
              msg.text.map((item, idx) => (
                <div key={idx} className="bot-item">
                  <div>{item.text}</div>
                  <div className="score">🔥 Score: {item.score}</div>
                </div>
              ))
            )}

            {/* ERROR STRING */}
            {msg.type === "bot" && typeof msg.text === "string" && (
              <div>{msg.text}</div>
            )}
          </div>
        ))}

        {loading && <div className="loader"></div>}
      </div>

      {/* 🔥 INPUT */}
      <div className="inputBox">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything..."
        />
        <button onClick={askQuestion}>Send</button>
      </div>

      {/* 🔥 RECOMMENDATION */}
      <div className="recommend">
        <h2>📖 Recommendations</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book..."
        />
        <button onClick={getRecommendations}>Get</button>

        <div className="cards">
          {recommendations.map((r, i) => (
            <div key={i} className="card glow">
              <div>{r.text}</div>
              <div className="score">🔥 Score: {r.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;