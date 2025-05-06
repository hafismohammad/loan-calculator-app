const useEmiCalculator = () => {
    const calculateEMI = (principal, annualRate, months) => {
      const r = annualRate / 12 / 100;
      const emi = principal * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
      return parseFloat(emi.toFixed(2));
    };
  
    const generateSchedule = (amount, rate, months, monthlyEmi) => {
      const r = rate / 12 / 100;
      let balance = amount;
      const schedule = [];
  
      for (let i = 1; i <= months; i++) {
        const interest = balance * r;
        const principal = monthlyEmi - interest;
        balance -= principal;
        schedule.push({
          month: i,
          principal: principal.toFixed(2),
          interest: interest.toFixed(2),
          balance: balance > 0 ? balance.toFixed(2) : "0.00",
        });
      }
  
      return schedule;
    };
  
    return { calculateEMI, generateSchedule };
  };
  
  export default useEmiCalculator;
  