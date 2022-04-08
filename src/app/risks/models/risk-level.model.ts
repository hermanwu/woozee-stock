export enum RiskLevel {
  // Cause stock to stop grow
  low = 'Little Unknown',
  // Cause stock to drop.
  medium = 'Half Unknown',
  // Cause stock to be out of business.
  high = 'Mostly Unknown',
  // Stock won't drop much.
  noRisk = 'All known',
}
