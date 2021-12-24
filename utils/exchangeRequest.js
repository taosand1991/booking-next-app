async function exchangeRequest(baseCurrency, targetCurrency) {
  const apiKey = "e99832cbe78750f565462333";
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}`;
  const data = await fetch(url);
  const result = await data.json();
  return result;
}

export default exchangeRequest;
