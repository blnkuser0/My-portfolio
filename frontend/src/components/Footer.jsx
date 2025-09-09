import React from 'react';
export default function Footer() {
  const year = new Date().getFullYear();
  return (<footer role="contentinfo">@Charl Eduard {year}. All Rights Reserved</footer>);
}
