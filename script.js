// Sample JSON data
const healthcareProviders = [
  {
    id: 1,
    name: "John Mugabo",
    type: "doctor",
    specialty: "Family Medicine",
    insurance: ["RAMA"],
    address: "KN 3 Ave, Kigali",
    phone: "0781234567",
  },
  {
    id: 2,
    name: "Kibagabaga Hospital",
    type: "hospital",
    services: ["emergency", "surgery"],
    insurance: ["RAMA", "MMI"],
    address: "KN 67 St, Gasabo, Kigali",
    phone: "0788765432",
  },
  {
    id: 3,
    name: "Mary Johnson",
    type: "doctor",
    specialty: "Pediatrics",
    insurance: ["RAMA"],
    address: "KN 5 Rd, Nyarugenge, Kigali",
    phone: "0788554321",
  },
];

// Function to display results
function displayResults(results) {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  results.forEach((provider) => {
    const li = document.createElement("li");
    li.textContent = `${provider.name} - ${provider.type} - ${provider.address}`;
    resultsList.appendChild(li);
  });
}

// Function to handle search and filter
function searchAndFilter() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const providerType = document
    .getElementById("providerType")
    .value.toLowerCase();

  const filteredProviders = healthcareProviders.filter((provider) => {
    return (
      provider.name.toLowerCase().includes(searchInput) &&
      (providerType === "" || provider.type.toLowerCase() === providerType)
    );
  });

  displayResults(filteredProviders);
}

// Event listeners
document
  .getElementById("searchInput")
  .addEventListener("input", searchAndFilter);
document
  .getElementById("providerType")
  .addEventListener("change", searchAndFilter);

// Initial display
displayResults(healthcareProviders);
