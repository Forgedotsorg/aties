/* ============================================================
   ATEÏS Middle East — Custom SVG Icon Set
   Style: minimal line icons, 24×24 grid, 1.5 stroke,
   round caps/joins, currentColor, optional fill dot.
   Usage: el.innerHTML = AT_ICONS.pava;
   ============================================================ */

window.AT_ICONS = {

  /* ---------------- Core Solutions ---------------- */

  // PA/VA / Voice Evacuation: loudspeaker with sound waves + signal dot
  pava: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 5.5v13l-5.5-3.7H4.8V9.2h2.7z"/><path d="M16.6 9.7a3.4 3.4 0 0 1 0 4.6"/><path d="M19.4 7.4a5.6 5.6 0 0 1 0 9.2"/><circle cx="20.5" cy="5.5" r="1.2" fill="currentColor" stroke="none"/></svg>`,

  // Fire Detection: flame with detector dome
  firealarm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 9.5a5.5 5.5 0 0 1 11 0c0 5.6 2.3 7.3 2.3 7.3H4.2s2.3-1.7 2.3-7.3z"/><path d="M12 8.8c-1.5 1.6-2.4 2.8-2.4 4.1a2.4 2.4 0 0 0 4.8 0c0-1.3-.9-2.5-2.4-4.1z"/><path d="M10.4 20.3a1.7 1.7 0 0 0 3.2 0"/></svg>`,

  // Audio over IP / VOX-NET: waveform with network dot
  audioip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 12h2.2M4.7 8.8v6.4M8 12h1.2M8 6.5v11M11.5 12h1M11.5 9v6M15 12h1M15 4.5v15M18.3 12h1.2M18.3 8v8"/><circle cx="21.5" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>`,

  // Voice Evacuation: megaphone with warning signal
  evacuation: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1l5 3.5v-12z"/><path d="M9 7.5l8.5-4v17L9 16.5"/><path d="M15.5 9a3.5 3.5 0 0 1 0 6"/><path d="M5 20.3l1-5.8"/></svg>`,

  // Professional Audio / DSP: speaker with DSP chip
  proaudio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="10" height="16" rx="2"/><circle cx="8" cy="10" r="2.5"/><circle cx="8" cy="10" r="1" fill="currentColor" stroke="none"/><path d="M8 15.5a1 1 0 0 0 0 2h.01"/><path d="M15.5 8.5a4.5 4.5 0 0 1 0 7M18 6.8a7 7 0 0 1 0 10.4"/></svg>`,

  // Intercom / MAGELLAN: door station with call button
  intercom: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"/><circle cx="12" cy="8" r="2"/><path d="M9.5 15.5h5"/><circle cx="12" cy="18.3" r="1" fill="currentColor" stroke="none"/></svg>`,

  // Smart City / IoT: city node with cloud
  smartcity: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M7 21V9.5L12 6l5 3.5V21"/><path d="M9.5 21v-5h5v5"/><path d="M14.5 9a2.5 2.5 0 0 1 5 0v.5a3 3 0 0 1 0 6h-5"/></svg>`,

  // VELOX / Fire Panel: control panel with leds
  velox: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 10h4M6 14h3"/><circle cx="17" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="14" r="1.5" stroke="currentColor" fill="none"/><path d="M12 19v2M8 19v2"/></svg>`,

  /* ---------------- Product Families ---------------- */

  // BOUTIQUE System: modular rack unit
  boutique: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="6" rx="1.5"/><rect x="2" y="14" width="20" height="6" rx="1.5"/><circle cx="18.5" cy="7" r="1" fill="currentColor" stroke="none"/><path d="M5 7h8M5 17h6"/><circle cx="18.5" cy="17" r="1" fill="currentColor" stroke="none"/></svg>`,

  // IDA8 / Matrix controller: crosspoint matrix
  ida8: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/><path d="M8 4v16M14 4v16"/><circle cx="8" cy="12" r="1.8" fill="currentColor" stroke="none"/><circle cx="14" cy="6" r="1.8" fill="currentColor" stroke="none"/></svg>`,

  // Loudspeakers: EN54 ceiling speaker
  speaker: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7.5h18"/><circle cx="12" cy="14" r="5.5"/><circle cx="12" cy="14" r="2.5"/><circle cx="12" cy="14" r="1" fill="currentColor" stroke="none"/></svg>`,

  // Amplifier / DPA: power amp with waveform
  amplifier: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12c0-1 .5-2 1.5-2.5L12 12l4.5-2.5c1 .5 1.5 1.5 1.5 2.5"/><circle cx="12" cy="12" r="2" stroke="none" fill="currentColor"/></svg>`,

  /* ---------------- Process ---------------- */

  // Consulting & Design: compass over arc
  design: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2"/><path d="M12 3V1.7"/><path d="M10.9 6.7 4.6 19.8M13.1 6.7l6.3 13.1"/><path d="M4.8 18.8a12.5 12.5 0 0 0 14.4 0"/></svg>`,

  // Manufacturing: factory with gear
  manufacturing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M3 21V8l6 3V8l6 3V8l3 1.5V21"/><path d="M9 21v-5h6v5"/></svg>`,

  // Installation: power drill
  installation: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="11" height="6" rx="1.5"/><path d="M14.5 8h4.8"/><path d="M5.5 11l.9 6.6a1.6 1.6 0 0 0 1.6 1.4h1a1.4 1.4 0 0 0 1.4-1.2l.9-6.8"/></svg>`,

  // Integration: connected nodes
  integration: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="2.5"/><circle cx="5.5" cy="18" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M10.9 7.2 6.6 15.8M13.1 7.2l4.3 8.6M8 18h8"/></svg>`,

  // Testing & Commissioning: gauge
  testing: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5a7.5 7.5 0 0 1 15 0"/><path d="M12 8.9v1.7M6.7 11.2l1.2 1.2M17.3 11.2l-1.2 1.2"/><path d="M12 16.5l3.4-4.3"/><circle cx="12" cy="16.5" r="1.3" fill="currentColor" stroke="none"/></svg>`,

  // Maintenance / 24-7: shield with wrench
  maintenance: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21.5c-5-1.8-8-5.2-8-10.2V6.5l8-3 8 3v4.8c0 5-3 8.4-8 10.2z"/><path d="M14.2 7.3a2.9 2.9 0 0 0-3.4 4.2l-3.2 3.2 1.4 1.4 3.2-3.2a2.9 2.9 0 0 0 4.2-3.4l-1.9 1.9-1.4-1.4z"/></svg>`,

  /* ---------------- Sectors / Industries ---------------- */

  // Airports & Transport: airplane
  airport: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5c1.5-1.5 2-3.3 1.4-3.9s-2.4-.1-3.9 1.4L13.5 8.5 4.3 6.3a.6.6 0 0 0-.6.2l-.9 1a.6.6 0 0 0 .1.8L9 12l-2 3H4.3l-1 1 2.9 1.9L8 20.8l1-1v-2.7l3-2 3.7 6.2a.6.6 0 0 0 .8.1l1-.9a.6.6 0 0 0 .3-.3z"/></svg>`,

  // Rail & Metro: train front
  rail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M4 16l-1 4M20 16l1 4M9 20h6"/><circle cx="9" cy="13" r="1.5"/><circle cx="15" cy="13" r="1.5"/><path d="M8 4v6h8V4"/></svg>`,

  // Shopping Malls: shopping bag
  mall: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 7.5h12l.9 12.2a1.7 1.7 0 0 1-1.7 1.8H6.8a1.7 1.7 0 0 1-1.7-1.8z"/><path d="M9 10.5V6.7a3 3 0 0 1 6 0v3.8"/></svg>`,

  // Hotels & Resorts: hotel bed
  hotel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 20v-8.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V20"/><path d="M3.5 16.5h17"/><path d="M6.8 13h4.4"/></svg>`,

  // Hospitals & Healthcare: medical cross
  hospital: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.8 4.2h4.4v5.6h5.6v4.4h-5.6v5.6H9.8v-5.6H4.2V9.8h5.6z"/></svg>`,

  // Universities & Schools: graduation cap
  education: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 9.8 12 5.2l9.5 4.6L12 14.4z"/><path d="M6.3 12v3.8c0 1.5 2.6 2.7 5.7 2.7s5.7-1.2 5.7-2.7V12"/><path d="M21.5 9.8v4.3"/><circle cx="21.5" cy="15.3" r="1" fill="currentColor" stroke="none"/></svg>`,

  // Stadiums & Arenas: stadium arc
  stadium: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 19V9a9 9 0 0 1 18 0v10"/><path d="M3 19h18M7 12h10M9 15.5h6"/><path d="M12 9v3"/></svg>`,

  // Government Buildings: landmark
  government: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.2 19.5 8.2H4.5z"/><path d="M5 10.5h14M6.8 10.5V18M12 10.5V18M17.2 10.5V18"/><path d="M5 18h14M3.5 21h17"/></svg>`,

  // Corporate Offices: office building
  offices: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 21V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 15 5v16"/><path d="M15 9.5h2.5A1.5 1.5 0 0 1 19 11v10"/><path d="M4 21h16"/><path d="M10 7.5h2M10 11h2M10 14.5h2"/><path d="M11 3.5V1.8"/></svg>`,

  // Houses of Worship: mosque dome
  worship: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7.5 21v-5.5c0-3 2-4.6 4.5-6.3 2.5 1.7 4.5 3.3 4.5 6.3V21"/><path d="M12 9.2V7.2"/><circle cx="12" cy="6.1" r=".9" fill="currentColor" stroke="none"/><path d="M4 21V8.5L5 6.5l1 2V21"/><path d="M3 21h18"/></svg>`,

  // Industrial Facilities: factory
  industrial: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M3 21V8l6 3V8l6 3V8l3 1.5V21"/><path d="M9 21v-5h6v5"/><path d="M9 5v3M12 3.5v4.5"/></svg>`,

  // Smart City: network grid
  smartcity2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a13.6 13.6 0 0 0 0 18 13.6 13.6 0 0 0 0-18z"/><path d="M3 12h18"/></svg>`,

  /* ---------------- Utility / Contact ---------------- */

  // Phone
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.8 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"/></svg>`,

  // Mail
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 8 12 13.5 20.5 8"/></svg>`,

  // Location pin
  pin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 10c0 5.1-7 11.5-7 11.5S5 15.1 5 10a7 7 0 0 1 14 0z"/><circle cx="12" cy="10" r="2.5"/></svg>`,

  // Globe / language
  globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a13.6 13.6 0 0 0 0 18 13.6 13.6 0 0 0 0-18z"/><path d="M3 12h18"/></svg>`,

  // Arrow up-right
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8.5 7H17v8.5"/></svg>`,

  // Clock / working hours
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,

  // Certificate / EN54 badge
  cert: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="10" r="5.5"/><path d="M9 21l3-3 3 3"/><path d="M9.5 14.5L8 21M14.5 14.5L16 21"/></svg>`,

};
