import React, { useState } from 'react';
import axios from 'axios';

const SVG = {
  github: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M12 .5C5.7.5.8 5.4.8 11.7c0 4.9 3.2 9 7.6 10.5.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.6.8.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.3-5.1-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.1 0 4.6-2.6 5.6-5.1 5.9.4.4.8 1 .8 2v3c0 .4.2.7.8.6 4.4-1.6 7.6-5.6 7.6-10.5C23.2 5.4 18.3.5 12 .5z" fill="currentColor"/></svg>),
  linkedin: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24V7h5v17H0zM7 7h4.78v2.4h.07c.67-1.2 2.31-2.4 4.76-2.4C22.73 7 24 9.3 24 13.2V24h-5v-9.1c0-2.2-.04-5-3.05-5-3.05 0-3.52 2.38-3.52 4.85V24H7V7z" fill="currentColor"/></svg>),
  mail: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden><path d="M2 4h20v16H2z" stroke="currentColor" strokeWidth="1.2" fill="none"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>)
};

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('/api/contact', form);
      setStatus('sent');
      setForm({name:'',email:'',subject:'',message:''});
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section aria-labelledby="contact-heading">
      <h2 id="contact-heading">Message me</h2>
      <form onSubmit={submit} style={{maxWidth:720,display:'grid',gap:10}} aria-label="Contact form">
        <input aria-label="Name" required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
        <input aria-label="Email" required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <input aria-label="Subject" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
        <textarea aria-label="Message" required placeholder="Write message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} rows={6} />
        <button type="submit" aria-live="polite">Send Message</button>
      </form>

      <div style={{marginTop:14,display:'flex',gap:12,alignItems:'center'}} aria-label="Social links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">{SVG.github}</a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{SVG.linkedin}</a>
        <a href="mailto:youremail@example.com" aria-label="Email">{SVG.mail}</a>
      </div>
      {status && <div style={{marginTop:8}}>Status: {status}</div>}
    </section>
  );
}
