export const calculateEMI = (principal, annualRate, termMonths) => {
    const r = annualRate / 12 / 100;
    const n = termMonths;
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    return parseFloat(emi.toFixed(2));
  };
  