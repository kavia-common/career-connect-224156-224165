/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import jobsData from '../data/jobsData';

// PUBLIC_INTERFACE
function FilterBar({ filters, onChange }) {
  /** Sidebar filter controls for category, location, type, experience, and min salary. */
  const unique = (arr) => Array.from(new Set(arr));

  const categories = useMemo(
    () => ['All', ...unique(jobsData.map((j) => j.category).filter(Boolean))],
    []
  );
  const locations = useMemo(
    () =>
      [
        'All',
        ...unique(
          jobsData.map((j) => j.location).filter(Boolean)
        ),
      ],
    []
  );
  const types = useMemo(
    () => ['All', ...unique(jobsData.map((j) => j.type).filter(Boolean))],
    []
  );
  const experiences = useMemo(
    () => ['All', ...unique(jobsData.map((j) => j.experience).filter(Boolean))],
    []
  );

  const sectionTitle = {
    fontSize: 13,
    fontWeight: 800,
    color: '#0b1f44',
    marginBottom: 8,
    letterSpacing: '0.02em',
  };

  const groupStyle = {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: '1px dashed rgba(59,130,246,0.22)',
  };

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 12,
    border: '1px solid rgba(59,130,246,0.28)',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(241,245,249,0.9))',
    color: '#0b1f44',
    outline: 'none',
    boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset',
  };

  const rangeWrap = {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 10,
    alignItems: 'center',
  };

  const rangeStyle = {
    width: '100%',
  };

  const badgeStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: '#0b1f44',
    padding: '6px 10px',
    borderRadius: 999,
    background:
      'linear-gradient(180deg, rgba(219,234,254,0.9), rgba(191,219,254,0.9))',
    border: '1px solid rgba(59,130,246,0.25)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset',
  };

  return (
    <div>
      <div style={groupStyle}>
        <div style={sectionTitle}>Category</div>
        <select
          aria-label="Filter by category"
          value={filters.category || 'All'}
          onChange={(e) => onChange({ ...filters, category: e.target.value })}
          style={selectStyle}
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div style={groupStyle}>
        <div style={sectionTitle}>Location</div>
        <select
          aria-label="Filter by location"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          style={selectStyle}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div style={groupStyle}>
        <div style={sectionTitle}>Job Type</div>
        <select
          aria-label="Filter by job type"
          value={filters.type}
          onChange={(e) => onChange({ ...filters, type: e.target.value })}
          style={selectStyle}
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div style={groupStyle}>
        <div style={sectionTitle}>Experience</div>
        <select
          aria-label="Filter by experience"
          value={filters.experience}
          onChange={(e) =>
            onChange({ ...filters, experience: e.target.value })
          }
          style={selectStyle}
        >
          {experiences.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>

      <div style={{ ...groupStyle, borderBottom: 'none', marginBottom: 0 }}>
        <div style={sectionTitle}>Salary (₹)</div>
        <div style={rangeWrap}>
          <input
            type="range"
            min={0}
            max={4000000}
            step={50000}
            value={filters.minSalary}
            onChange={(ev) =>
              onChange({ ...filters, minSalary: Number(ev.target.value) })
            }
            style={rangeStyle}
            aria-label="Filter by minimum salary"
          />
          <span style={badgeStyle}>
            ₹{filters.minSalary.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
