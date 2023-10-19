# World Explorer App

Explore the world with the World Explorer App! Discover detailed information about countries, including population, region, currencies, and more.

![country](https://github.com/DanPongo/Country-Data-Finder/assets/106473315/6ac8d0d6-731c-41bb-a16d-8abf5233cca9)

## Features

- Search for a specific country and view detailed information.
- View statistics of all countries.
- Fetch data from the Restcountries API.
- Display data in well-structured tables and statistics.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- A modern web browser
- A text editor or IDE of your choice

### Installing

1. Clone the repository to your local machine.

2. Open the `index.html` file in your web browser.

## Usage

- Click the "View All Countries" button to display information for all countries.
- Use the search bar to find a specific country and view its detailed information.
- Check the statistics section for total countries, total population, and average population.

## Code Examples

### Fetch Data from API

javascript
async function displayData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // ... (process and display the data)
}


### Search for a Specific Country

javascript
document.getElementById("findCountry").addEventListener("click", async function (event) {
    event.preventDefault();
    const countryName = document.getElementById("countrySearch").value.trim();
    if (isValidCountryName(countryName)) {
        displayData("https://restcountries.com/v3.1/name/" + countryName);
    } else {
        alert("Please enter a valid country name.");
    }
});


## Built With

- HTML
- CSS
- JavaScript
- [Restcountries API](https://restcountries.com/)

## Contributing

We welcome contributions to make this project even better! Please read [CONTRIBUTING.md](link_to_contributing_file) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to Restcountries API for providing the data used in this app.
- Hat tip to everyone who contributed to this project!
```
