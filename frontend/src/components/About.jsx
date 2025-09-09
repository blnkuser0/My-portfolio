import React from "react";
import useTypingText from "../hooks/useTypingText";
import api from "../api/api";

export default function About() {
  const text = useTypingText(
    [
      "<Hi, I'm Charl a Web Developer />",
      "<I build fast, functional, and fabulous websites. />",
    ],
    70,
    1200
  );

  const submitForm = async (formData) => {
    try {
      const response = await api.post("/contact", formData);
      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <section className="about-wrap" aria-labelledby="about-heading">
      <h2
        id="about-heading"
        style={{
          position: "absolute",
          left: -9999,
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        About me
      </h2>

      <div className="profile" aria-hidden>
        <img src="/images/charl.jpg" alt="Charl profile image" />
      </div>

      <div style={{ flex: 1 }}>
        <div className="typing" aria-live="polite">
          <span>{text}</span>
          <span className="cursor" aria-hidden></span>
        </div>

        <a
          href="/Resume/Charl Narvaez.pdf"
          download="CharlEduard_CV.pdf"
          className="btn-download"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="20"
            height="20"
            style={{ marginRight: 8 }}
          >
            <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1zM4 17a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z" />
          </svg>
          Download CV
        </a>

        <div
          className="tech-heading"
          style={{ fontWeight: 900, marginBottom: 8 }}
        >
          Tech Stack
        </div>
        <div className="stack" aria-label="Tech stack">
          <div
            className="stack-row"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div style={{ marginBottom: 8 }}>
              <strong>Frontend Skills</strong>
            </div>
            <div>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">JavaScript</span>
              <span className="badge">React Js</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">DOM & jquery</span>
            </div>
          </div>

          <div
            className="stack-row"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div style={{ marginBottom: 8 }}>
              <strong>Backend Skills</strong>
            </div>
            <div>
              <span className="badge">Node.js</span>
              <span className="badge">Express.js</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">Rest API</span>
              <span className="badge">MySQL</span>
              <span className="badge">Laravel</span>
            </div>
          </div>

          <div
            className="stack-row"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <div style={{ marginBottom: 8 }}>
              <strong>Other Tools</strong>
            </div>
            <div>
              <span className="badge">Postman</span>
              <span className="badge">GIT</span>
              <span className="badge">Github</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
