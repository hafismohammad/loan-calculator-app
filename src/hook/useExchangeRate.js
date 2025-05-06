import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRate = (currency) => {
  const [conversionRate, setConversionRate] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      if (currency === 'INR') {
        setConversionRate(1);
        return;
      }

      try {
        const res = await axios.get('https://api.exchangerate-api.com/v4/latest/INR');
        const rate = res.data.rates[currency];
        if (rate) {
          setConversionRate(rate);
        } else {
          setConversionRate(1);
          setError('Currency not found');
        }
      } catch (err) {
        console.error('Exchange rate error:', err);
        setConversionRate(1);
        setError('Failed to fetch currency rate.');
      }
    };

    fetchRate();
  }, [currency]);

  return { conversionRate, error };
};

export default useExchangeRate;
