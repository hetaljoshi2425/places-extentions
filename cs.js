console.log("loaded....");

// document.addEventListener("DOMContentLoaded",
console.log("apiKey");

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", async function () {
    // Your script code here
  });
} else {
  async function initMapFunctions() {
    // New async function
    console.log(
      "// DOMContentLoaded already fired, run your script directly, // Your script code here"
    );
    const apiKey = "AIzaSyA8l4a-iHDAfR2O4Y0SK9thAEi1JJZEnqA"; // Replace with your actual API key
    console.log("apiKey", apiKey);

    function extractLocationsFromHTML() {
      const locations = [];
      const rows = document.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const pickup = row.querySelector("td:first-child").textContent.trim();
        const dropoff = row.querySelector("td:nth-child(2)").textContent.trim();
        locations.push({ pickup, dropoff });
      });
      return locations;
    }
    

    // Function to generate Google Maps link for a location pair
    function generateMapLink(pickup, dropoff) {
      return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
        pickup
      )}&destination=${encodeURIComponent(dropoff)}`;
    }

    // Function to add Google Maps links to places.html
    function addMapLinksToHTML() {
      const locations = extractLocationsFromHTML();
      const rows = document.querySelectorAll("tbody tr");
      rows.forEach((row, index) => {
        const mapLink = generateMapLink(
          locations[index].pickup,
          locations[index].dropoff
        );

        const mapLinkElement = document.createElement("a");
        mapLinkElement.href = mapLink;
      mapLinkElement.target = "_blank"; // Open in a new tab
        mapLinkElement.textContent = "View Route";
        mapLinkElement.style.marginLeft = "10px";
        row.appendChild(
          document.createElement("td").appendChild(mapLinkElement)
        );
      });
    }

    // Call the function to add Google Maps links when DOM content is loaded
    addMapLinksToHTML();
  }
  initMapFunctions(); // Call the new async function
}
