"use client";

import { useState, useEffect } from "react";

const fullText = "Bleron Zekaj";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= fullText.length) return;
    const timeout = setTimeout(() => {
      setDisplayed(fullText.slice(0, index + 1));
      setIndex(index + 1);
    }, 100);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center px-8"
      style={{ borderBottom: "1px solid var(--text)" }}
    >
      <p
        className="text-xs mb-6 tracking-widest uppercase"
        style={{ color: "var(--text)" }}
      >
        &gt; WELCOME
      </p>

      <h1
        style={{
          fontFamily: "Press Start 2P",
          color: "var(--green)",
          fontSize: "clamp(2rem, 6vw, 5rem)",
          lineHeight: "1.4",
          marginBottom: "2rem",
        }}
      >
        {displayed}
        <span className="animate-pulse">▋</span>
      </h1>

      <p
        className="text-xs mt-4"
        style={{ color: "var(--green)", fontFamily: "var(--font-share-tech)" }}
      >
        &gt; Söker LIA-praktik: Okt–Dec 2026 &amp; Jan–Apr 2027
      </p>

      <p
        style={{
          color: "var(--text)",
          fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
          maxWidth: "600px",
          lineHeight: "1.9",
          fontFamily: "Share Tech Mono",
        }}
      >
        Software developer with a background in football. I build applications
        using Java, Spring Boot and modern web technologies, with a focus on
        quality and testing.
      </p>

      <div className="flex gap-6 mt-12">
        <a
          href="#projects"
          className="text-xs px-8 py-4 transition-all duration-300"
          style={{
            border: "1px solid var(--green)",
            color: "var(--green)",
            fontFamily: "Share Tech Mono",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--green)";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--green)";
          }}
        >
          Go to projects →
        </a>
        <a
          href="#contact"
          className="text-xs px-8 py-4 transition-all duration-300 hover:text-white"
          style={{
            border: "1px solid var(--text)",
            color: "var(--text)",
            fontFamily: "Share Tech Mono",
          }}
        >
          Kontakt
        </a>
      </div>
    </section>
  );
}
