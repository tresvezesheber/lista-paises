axios
  .get("https://restcountries.eu/rest/v2/all")
  .then(function(response) {
    console.log(response);

    var countries = response.data;
    var listCountries = document.querySelector("#app ul");

    for (item of countries) {
      var itemCountry = document.createElement("li");
      var flagCountry = document.createElement("img");
      flagCountry.setAttribute("src", item.flag);
      itemCountry.appendChild(flagCountry);

      var nameCountry = document.createElement("h1");
      var textName = document.createTextNode(item.name);
      nameCountry.appendChild(textName);
      itemCountry.appendChild(nameCountry);

      var abbrCountry = document.createElement("span");
      var textAbbr = document.createTextNode(` (${item.alpha2Code})`);
      abbrCountry.appendChild(textAbbr);
      nameCountry.appendChild(abbrCountry);

      var capitalCountry = document.createElement("p");
      var textCapital = document.createTextNode(item.capital);
      capitalCountry.appendChild(textCapital);
      itemCountry.appendChild(capitalCountry);

      listCountries.appendChild(itemCountry);
    }
  })
  .catch(function(error) {
    console.warn(error);
  });
