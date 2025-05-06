import React, { useState } from 'react';
import {
  TextField, Button, Grid, Typography, MenuItem,
} from '@mui/material';
import AmortizationTable from './AmortizationTable';
import useExchangeRate from '../hook/useExchangeRate';
import useEmiCalculator from '../hook/useEmiCalculator';

function LoanForm() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState('INR');

  const { conversionRate, error } = useExchangeRate(currency);
  const { calculateEMI, generateSchedule } = useEmiCalculator();

  const handleCalculate = () => {
    const numericYears = parseFloat(years);

    if (!numericYears || numericYears <= 0 || amount <= 0 || rate <= 0) {
      alert("Please enter valid loan amount, rate, and duration.");
      return;
    }

    const months = numericYears * 12;
    const monthlyEmi = calculateEMI(amount, rate, months);
    const sch = generateSchedule(amount, rate, months, monthlyEmi);

    setEmi(monthlyEmi);
    setSchedule(sch);
  };

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item>
          <TextField
            label="Loan Amount"
            variant="outlined"
            value={amount}
            type="number"
            onChange={e => setAmount(parseFloat(e.target.value))}
          />
        </Grid>

        <Grid item>
          <TextField
            label="Interest Rate (%)"
            variant="outlined"
            value={rate}
            type="number"
            onChange={e => setRate(parseFloat(e.target.value))}
          />
        </Grid>

        <Grid item>
          <TextField
            label="Term (Years)"
            variant="outlined"
            value={years}
            type="number"
            onChange={e => setYears(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            select
            label="Currency"
            value={currency}
            onChange={e => setCurrency(e.target.value)}
          >
            {['INR', 'USD', 'EUR', 'GBP'].map(c => (
              <MenuItem key={c} value={c}>{c}</MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={handleCalculate}>
            Calculate EMI
          </Button>
        </Grid>
      </Grid>

      {error && (
        <Typography color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      {emi !== null && (
        <Grid item xs={12}>
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            Monthly EMI: {(emi * conversionRate).toFixed(2)} {currency}
          </Typography>
        </Grid>
      )}

      <AmortizationTable
        schedule={schedule}
        currency={currency}
        conversionRate={conversionRate}
        onReset={() => {
          setSchedule([]);
          setEmi(null);
        }}
      />
    </>
  );
}

export default LoanForm;
