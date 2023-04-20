// Loading elements
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

// API data
const API_KEY = "2UwsSXXMjUZJGrSqITeK3g==QMuCND9cS12DuLAH";
const apiURL = "https://api.api-ninjas.com/v1/convertcurrency?"; //base url

// Events
convert.addEventListener("click", () => {
  const have = "have=USD";
  const selectedCurrency = "want=" + currency.value;
  const givenAmount = "amount=" + amount.value;
  const url = apiURL + have + "&" + selectedCurrency + "&" + givenAmount; // build new url

  fetch(url, {
    header: {
      "X-API-KEY": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      result.style.fontSize = "20px";
      result.style.fontWeight = "bold";
      const newValue = data.new_amount;
      result.innerHTML = `${amount.value} ${
        currency.value
      } = ${newValue.toFixed(2)} USD`;
    })
    .catch((error) => {
      console.error("Request failed", error);
      result.innerHTML = "An error occurred, please try again later.";
    });
});

//  Documentation: https://api-ninjas.com/api/convertcurrency
//  https://api.api-ninjas.com/v1/convertcurrency?have=XXX&want=XXX&amount=XXX
//  console.log("Final URL:", url); // for debug
