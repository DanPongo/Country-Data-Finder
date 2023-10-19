# Country Info Explorer

Country Info Explorer is a simple web app that allows you to explore information about countries around the world. You can view all countries or search for a specific country to see details such as population, currencies, and regions.

## Features

- View a list of all countries with their population and currencies.
- Search for a specific country and view its details.
- View statistics including total countries, total population, and average population.
- View a table of regions and the number of countries in each region.

## Getting Started

### Prerequisites

- A modern web browser
- An internet connection

### Installation

1. Clone the repository to your local machine:
```sh
git clone link_to_your_repository
```
2. Open the `index.html` file in your web browser.

## Usage

- Click the "View All Countries" button to display information about all countries.
- Enter a country name in the search box and click the "Find Country" button to search for a specific country.
- View statistics about total countries, total population, and average population.
- View a table of regions and the number of countries in each region.

## Code Examples

### Fetch and Display Country Data

```javascript
async function displayData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // Process and display the data...
}
```

### Search for a Specific Country

```javascript
document.getElementById("findCountry").addEventListener("click", async function (event) {
    event.preventDefault();
    const countryName = document.getElementById("countrySearch").value.trim();
    if (isValidCountryName(countryName)) {
        displayData("https://restcountries.com/v3.1/name/" + countryName);
    } else {
        alert("Please enter a valid country name.");
    }
});
```

### Validate Country Name

```javascript
function isValidCountryName(countryName) {
    return /^[a-zA-Z]+$/.test(countryName);
}
```
## API Reference

This project uses the [Rest Countries API](https://restcountries.com/) to fetch country data.

### Endpoints

- GET `https://restcountries.com/v3.1/all` - Retrieves data about all countries.
- GET `https://restcountries.com/v3.1/name/{country_name}` - Retrieves data about a specific country.

## Contributing

Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or want to reach out to the author, you can contact them at [your_email@example.com].

## Acknowledgments

- Thank you to the Rest Countries API for providing the data used in this project.
