import React from 'react';
import api from "../api/api";

const experiences = [
  {
    id: 1,
    title: "WEB DEVELOPER",
    company: "MPOtech Digital System",
    year: "2024",
    desc: "Maintained and enhanced web applications.",
  },
  {
    id: 2,
    title: "TECHNICAL ENGINEER",
    company: "Yumex Philippines",
    year: "2023",
    desc: "Collected and analyzed data to improve production efficiency by 15%.",
  },
  {
    id: 3,
    title: "IT SUPPORT SPECIALIST - INTERN",
    company: "Your Virtual World",
    year: "2022",
    desc: "Did regular computer maintenance and fixed blue screen errors, cutting downtime by nearly 40%.",
  },
];

const submitForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
}; 
export default function Experience() {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Professional Experience</h2>
      <div className="timeline" role="list">
        {experiences.map(item => (
          <article key={item.id} className="timeline-item" role="listitem" aria-label={`${item.title} at ${item.company}`}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:700}}>{item.title}</div>
              <div style={{fontSize:13,opacity:0.8}}>{item.year}</div>
            </div>
            <div style={{fontSize:13,opacity:0.9}}>{item.company}</div>
            <p style={{marginTop:8}}>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
