import React from "react";
import api from "../api/api";

const submitForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};


export default function Projects({ items = [] }) {
  return (
    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="projects-grid" role="list">
        {items.map((it) => (
          <article
            key={it.id}
            className="project-card"
            role="listitem"
            aria-label={it.title}
          >
            <div className="project-media" aria-hidden>
              <img src={it.image} alt={it.title} />
            </div>

            <div className="project-body">
              <div className="project-meta">
                <h3 style={{ margin: 0 }}>{it.title}</h3>
                <div style={{ fontSize: 12, opacity: 0.9 }}>
                  {it.tech.join(" • ")}
                </div>
              </div>

              <p style={{ margin: 0, opacity: 0.95 }}>{it.description}</p>

              <div className="project-actions">
               
                <a
                  href={it.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn" aria-label={`View ${it.title}`}>
                    View Project
                  </button>
                </a>

              
                {it.github && (
                  <a href={it.github} target="_blank" rel="noopener noreferrer">
                    <button
                      className="btn-outline"
                      aria-label={`View GitHub repo of ${it.title}`}
                    >
                      GitHub
                    </button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
