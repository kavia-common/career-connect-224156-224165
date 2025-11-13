/* eslint-disable react/prop-types */
import React from 'react';

// PUBLIC_INTERFACE
function SearchBar({ value, onChange, placeholder = 'Search jobs...' }) {
  /** A single input search bar with subtle glassmorphism and blue focus accents. */
  const wrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 14,
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(248,250,252,0.85))',
    border: '1px solid rgba(59,130,246,0.25)',
    boxShadow:
      '0 6px 18px rgba(30,64,175,0.08), 0 1px 0 rgba(255,255,255,0.6) inset',
    backdropFilter: 'blur(10px)',
  };

  const iconStyle = {
    color: '#2563EB',
    fontWeight: 700,
    fontSize: 18,
  };

  const inputStyle = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: 14,
    color: '#0b1f44',
  };

  return (
    <label style={wrapperStyle} aria-label="Search jobs">
      <span aria-hidden="true" style={iconStyle}>🔎</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </label>
  );
}

export default SearchBar;
