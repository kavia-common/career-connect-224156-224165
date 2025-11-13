import React, { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import JobCard from './components/JobCard';
import jobsData from './data/jobsData';

// PUBLIC_INTERFACE
function App() {
  /** Main App rendering the Find My Job UI with search/filter and job card grid. */
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    location: 'All',
    type: 'All',
    experience: 'All',
    minSalary: 0,
  });

  const filteredJobs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobsData.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        (job.skills || []).some((s) => s.toLowerCase().includes(q));

      const matchesLocation =
        filters.location === 'All' || job.location === filters.location;

      const matchesType = filters.type === 'All' || job.type === filters.type;

      const matchesExperience =
        filters.experience === 'All' || job.experience === filters.experience;

      const matchesSalary = (job.salary?.min || 0) >= (filters.minSalary || 0);

      return (
        matchesQuery &&
        matchesLocation &&
        matchesType &&
        matchesExperience &&
        matchesSalary
      );
    });
  }, [query, filters]);

  const containerStyle = {
    minHeight: '100vh',
    padding: '32px 20px',
    background:
      'linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(17, 24, 39, 0.06))',
    backdropFilter: 'blur(6px)',
  };

  const maxWidthStyle = {
    maxWidth: 1200,
    margin: '0 auto',
  };

  const headerStyle = {
    marginBottom: 20,
    color: '#0f172a',
  };

  const titleStyle = {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#0b1f44',
    textShadow: '0 1px 0 rgba(255,255,255,0.4)',
  };

  const subtitleStyle = {
    marginTop: 6,
    color: '#334155',
    fontSize: 14,
  };

  const shellStyle = {
    display: 'grid',
    gridTemplateColumns: '280px 1fr',
    gap: 20,
  };

  const panelStyle = {
    borderRadius: 16,
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.58))',
    boxShadow:
      '0 10px 30px rgba(30, 64, 175, 0.10), 0 1px 0 rgba(255,255,255,0.6) inset',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(59, 130, 246, 0.18)',
  };

  const sidebarStyle = {
    ...panelStyle,
    padding: 16,
    position: 'sticky',
    top: 16,
    alignSelf: 'start',
  };

  const contentStyle = {
    ...panelStyle,
    padding: 16,
  };

  const toolbarStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 12,
    marginBottom: 8,
  };

  const countBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 4px 0',
    color: '#0b1f44',
  };

  const pillStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: '#0b1f44',
    background:
      'linear-gradient(180deg, rgba(219, 234, 254, 0.9), rgba(191, 219, 254, 0.9))',
    padding: '6px 10px',
    borderRadius: 999,
    border: '1px solid rgba(59, 130, 246, 0.25)',
    boxShadow: '0 1px 0 rgba(255,255,255,0.6) inset',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 14,
    marginTop: 14,
  };

  const emptyStyle = {
    textAlign: 'center',
    color: '#334155',
    padding: '24px 12px',
    borderRadius: 12,
    border: '1px dashed rgba(59,130,246,0.25)',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(248,250,252,0.9))',
  };

  const footerStyle = {
    marginTop: 18,
    textAlign: 'center',
    color: '#334155',
    fontSize: 12,
  };

  return (
    <div style={containerStyle}>
      <div style={maxWidthStyle}>
        <header style={headerStyle}>
          <h1 style={titleStyle}>Find My Job</h1>
          <p style={subtitleStyle}>
            Discover opportunities tailored to your skills, location, and goals.
          </p>
        </header>

        <div style={shellStyle}>
          <aside style={sidebarStyle}>
            <FilterBar
              filters={filters}
              onChange={setFilters}
              theme="blue"
            />
          </aside>

          <main style={contentStyle}>
            <div style={toolbarStyle}>
              <SearchBar value={query} onChange={setQuery} placeholder="Search by title, company, skills, or location..." />
            </div>

            <div style={countBarStyle}>
              <span style={{ fontWeight: 700 }}>
                {filteredJobs.length} roles found
              </span>
              <span style={pillStyle}>
                Blue • Glassmorphic • Live filters
              </span>
            </div>

            {filteredJobs.length === 0 ? (
              <div style={emptyStyle}>
                No jobs match your search. Try adjusting filters or keywords.
              </div>
            ) : (
              <section style={gridStyle} aria-label="Job results">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </section>
            )}

            <div style={footerStyle}>
              Tip: Use the search to match skills like “React”, “Node”, or “AWS”.
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
