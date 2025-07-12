import React from "react";

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black", color: "white", fontFamily: "sans-serif" }}>
      <section style={{ padding: "5rem 1rem", textAlign: "center", background: "linear-gradient(to bottom right, purple, black)" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>TAP – The Artist Playground</h1>
        <p style={{ fontSize: "1.25rem", margin: "1rem auto", maxWidth: "600px" }}>
          Mobile Live Stream Production for Events, Stories, and Culture.
        </p>
        <a href="#contact" style={{ background: "white", color: "black", padding: "0.75rem 1.5rem", borderRadius: "999px", textDecoration: "none", fontWeight: "600" }}>
          Book a Stream
        </a>
      </section>
    </div>
  );
}
