async function convertCurrency() {
    try {
      const amount = document.querySelector('#amount').value;
      const fromCurrency = document.querySelector('#fromCurrency').value;
      const toCurrency = document.querySelector('#toCurrency').value;
  
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const exchangeRate = data.rates[toCurrency];
  
      if (!exchangeRate) {
        throw new Error('Invalid currency');
      }
  
      const convertedAmount = amount * exchangeRate;
      const result = document.getElementById('result');
      result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
      console.error('Error fetching or converting currency:', error);
      const result = document.getElementById('result');
      result.innerHTML = 'An error occurred. Please try again later.';
    }
  }
  