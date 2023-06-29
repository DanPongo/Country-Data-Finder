"use strict";

(() => {
    document.getElementById("allCountriesButton").addEventListener("click", async function (event) {
        event.preventDefault();
        displayData("https://restcountries.com/v3.1/all");
    });

    document.getElementById("findCountry").addEventListener("click", async function (event) {
        event.preventDefault();
        const countryName = document.getElementById("countrySearch").value.trim();

        if (isValidCountryName(countryName)) {
            displayData("https://restcountries.com/v3.1/name/" + countryName);
        } else {
            alert("Please enter a valid country name.");
        }
    });

    async function displayData(url) {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data)) {
            const totalCountries = data.length;
            const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
            const averagePopulation = totalPopulation / totalCountries;

            const countriesTableBody = data
                .map((country) => {
                    const currencies = Object.entries(country.currencies || {}).map(([code, currency]) => {
                        return `${currency.name} (${currency.symbol})`;
                    }).join(", ");
                    return `<tr><td>${country.name.common}</td><td>${country.population}</td><td>${currencies}</td></tr>`;
                })
                .join("");

            const regionsCount = data.reduce((acc, country) => {
                const region = country.region || "Unknown";
                acc[region] = (acc[region] || 0) + 1;
                return acc;
            }, {});

            const regionsTableBody = Object.entries(regionsCount)
                .map(([region, count]) => `<tr><td>${region}</td><td>${count}</td></tr>`)
                .join("");

            document.getElementById("totalCountries").innerText = "Total Countries: " + totalCountries;
            document.getElementById("totalPopulation").innerText = "Total Population: " + totalPopulation;
            document.getElementById("averagePopulation").innerText = "Average Population: " + averagePopulation;
            document.getElementById("countriesTable").innerHTML += countriesTableBody;
            document.getElementById("regionsTable").innerHTML += regionsTableBody;
            document.getElementById("statistics").style.display = "block";
        } else {
            alert("No country found with the given name.");
        }
    }

    function isValidCountryName(countryName) {
        return /^[a-zA-Z]+$/.test(countryName);
    }
})();
