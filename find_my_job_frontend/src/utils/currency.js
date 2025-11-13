//
// PUBLIC_INTERFACE
export function formatINRCompact(amount) {
  /** Formats a number into a compact INR string using Indian numbering (e.g., ₹10L, ₹1.2Cr).
   *
   * @param {number} amount - The amount in INR (integer).
   * @returns {string} Formatted compact string with rupee symbol and Indian units.
   */
  if (typeof amount !== 'number' || Number.isNaN(amount)) return '₹0';

  const abs = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  const LAKH = 100000;
  const CRORE = 10000000;

  if (abs >= CRORE) {
    return `${sign}₹${(abs / CRORE).toFixed(abs >= 10 * CRORE ? 0 : 1)}Cr`;
  }
  if (abs >= LAKH) {
    return `${sign}₹${(abs / LAKH).toFixed(abs >= 10 * LAKH ? 0 : 1)}L`;
  }

  // Fallback for amounts below 1 lakh: use en-IN digit grouping
  return `${sign}₹${abs.toLocaleString('en-IN')}`;
}

// PUBLIC_INTERFACE
export function formatINRRange(min, max, { compact = true } = {}) {
  /** Formats a salary range in INR, as compact "₹10L–₹18L" or full "₹1,200,000–₹1,800,000".
   *
   * @param {number} min - Minimum salary in INR
   * @param {number} max - Maximum salary in INR
   * @param {object} options - Formatting options
   * @param {boolean} options.compact - Use compact Indian units if true
   * @returns {string} Formatted salary range string
   */
  const fmt = (n) =>
    compact
      ? formatINRCompact(n)
      : `₹${Number(n || 0).toLocaleString('en-IN')}`;
  return `${fmt(min)}–${fmt(max)}`;
}
