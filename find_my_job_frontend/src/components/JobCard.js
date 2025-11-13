/* eslint-disable react/prop-types */
import React from 'react';
import { formatINRRange } from '../utils/currency';

// PUBLIC_INTERFACE
function JobCard({ job }) {
  /** Job card showing title, company, location, type, salary, and skills. */
  const cardStyle = {
    position: 'relative',
    borderRadius: 14,
    padding: 14,
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(241,245,249,0.9))',
    border: '1px solid rgba(59,130,246,0.25)',
    boxShadow:
      '0 10px 24px rgba(30,64,175,0.10), 0 1px 0 rgba(255,255,255,0.6) inset',
    backdropFilter: 'blur(8px)',
    transition: 'transform 200ms ease, box-shadow 200ms ease',
    willChange: 'transform',
  };

  const cardHover = {
    transform: 'translateY(-2px)',
    boxShadow:
      '0 14px 28px rgba(30,64,175,0.16), 0 1px 0 rgba(255,255,255,0.65) inset',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  };

  const titleStyle = {
    fontSize: 16,
    fontWeight: 800,
    color: '#0b1f44',
    letterSpacing: '-0.01em',
  };

  const companyStyle = {
    color: '#1e3a8a',
    fontWeight: 700,
    fontSize: 12,
    padding: '4px 8px',
    borderRadius: 999,
    background:
      'linear-gradient(180deg, rgba(219,234,254,0.9), rgba(191,219,254,0.9))',
    border: '1px solid rgba(59,130,246,0.25)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset',
  };

  const metaRow = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
    alignItems: 'center',
  };

  const metaPill = {
    fontSize: 11,
    color: '#0b1f44',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(241,245,249,0.95))',
    padding: '4px 8px',
    borderRadius: 999,
    border: '1px solid rgba(59,130,246,0.25)',
  };

  const descStyle = {
    marginTop: 8,
    fontSize: 13,
    color: '#334155',
    lineHeight: 1.4,
  };

  const skillsRow = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
  };

  const skillChip = {
    fontSize: 11,
    color: '#0b1f44',
    background:
      'linear-gradient(180deg, rgba(219,234,254,0.9), rgba(191,219,254,0.9))',
    padding: '4px 8px',
    borderRadius: 999,
    border: '1px solid rgba(59,130,246,0.25)',
  };

  const applyBtnBase = {
    marginTop: 12,
    padding: '10px 12px',
    width: '100%',
    border: '1px solid rgba(37,99,235,0.5)',
    borderRadius: 12,
    background:
      'linear-gradient(180deg, rgba(59,130,246,0.95), rgba(37,99,235,0.95))',
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: '0.02em',
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(37,99,235,0.25)',
    transition: 'transform 150ms ease, box-shadow 150ms ease, opacity 150ms ease',
  };

  const applyHover = {
    transform: 'translateY(-1px)',
    boxShadow: '0 12px 22px rgba(37,99,235,0.3)',
  };

  const [hover, setHover] = React.useState(false);
  const [btnHover, setBtnHover] = React.useState(false);

  // PUBLIC_INTERFACE
  const handleApply = () => {
    /** Opens job.link in a new tab or alerts user if link is missing. */
    if (job && job.link) {
      window.open(job.link, '_blank', 'noopener,noreferrer');
    } else {
      window.alert('Apply link coming soon for this listing.');
    }
  };

  const hasLink = Boolean(job && job.link);
  const applyBtnStyle = {
    ...applyBtnBase,
    ...(btnHover ? applyHover : null),
    ...(hasLink ? null : { opacity: 0.75 }) // subtle disabled style hint
  };

  return (
    <article
      style={{ ...cardStyle, ...(hover ? cardHover : null) }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`${job.title} at ${job.company}`}
    >
      <div style={headerStyle}>
        <h3 style={titleStyle}>{job.title}</h3>
        <span style={companyStyle}>{job.company}</span>
      </div>

      <div style={metaRow}>
        <span style={metaPill}>📍 {job.location}</span>
        <span style={metaPill}>🕒 {job.type}</span>
        {job.experience && <span style={metaPill}>🎯 {job.experience}</span>}
        {job.salary && (
          <span style={metaPill}>
            💰 {formatINRRange(job.salary.min, job.salary.max, { compact: true })}
          </span>
        )}
      </div>

      <p style={descStyle}>{job.description}</p>

      {Array.isArray(job.skills) && job.skills.length > 0 && (
        <div style={skillsRow} aria-label="Required skills">
          {job.skills.slice(0, 6).map((s) => (
            <span key={s} style={skillChip}>
              {s}
            </span>
          ))}
        </div>
      )}

      <button
        type="button"
        style={applyBtnStyle}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        onClick={handleApply}
        title={hasLink ? 'Open application link' : 'Link coming soon'}
        aria-label="Apply to this job"
      >
        Apply Now
      </button>
    </article>
  );
}

export default JobCard;
