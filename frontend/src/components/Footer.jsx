import React from 'react';
import api from "../api/api";

const submitForm = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (<footer role="contentinfo">@Charl Eduard {year}. All Rights Reserved</footer>);
}
