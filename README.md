# Route Map Viewer Chrome Extension

## Overview

**Route Map Viewer** is a Chrome extension that adds a "View Route" column to your table containing pickup and dropoff locations. When activated, this extension allows users to click on the "View Route" button to open a map showing the route between the specified pickup and dropoff locations.

## Features

- Adds a "View Route" button to each row in a table with "pickup" and "dropoff" columns.
- Opens a map with the route from the pickup to the dropoff location in a new tab.
- Easy to use and integrate with existing tables.

## Installation

1. **Download the extension**:
   - Clone or download the extension files from the repository.

2. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the directory where you have the extension files.

## Usage

1. **Activate the extension**:
   - Click on the Route Map Viewer extension icon in the Chrome toolbar to activate it.

2. **View routes**:
   - Navigate to the page containing your table with "pickup" and "dropoff" columns.
   - The extension will automatically add a "View Route" button to each row.
   - Click on the "View Route" button to open the map showing the route between the pickup and dropoff locations.

## Example

Imagine you have a table like this:

| Pickup         | Dropoff        |
|----------------|----------------|
| New York, NY   | Los Angeles, CA|
| Chicago, IL    | Houston, TX    |

After activating the extension, it will become:

| Pickup         | Dropoff        | View Route          |
|----------------|----------------|---------------------|
| New York, NY   | Los Angeles, CA| [View Route](#)     |
| Chicago, IL    | Houston, TX    | [View Route](#)     |

Clicking on "View Route" will open a map with the route from New York, NY to Los Angeles, CA or from Chicago, IL to Houston, TX.

## Development

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- Google Chrome browser.

### Folder Structure

```
places-extension/
│
├── manifest.json
├── cs.js
├── popup.html
├── places.html
├── popup.html
```

### Key Files

- `manifest.json`: The manifest file containing extension metadata.
- `cs.js`: Contains the script that modifies the table.
- `popup.html`: The HTML for the popup interface.
- `places.html`: The HTML for the simple pickup and dropoff locations interface.

### Building

1. Ensure you have all necessary files and dependencies.
2. Load the extension as described in the installation section.

### Testing

- Verify the extension on a web page with a sample table containing pickup and dropoff columns.
- Ensure that clicking "View Route" opens the correct map with the route.

## Support

For any issues or feature requests, please open an issue in the GitHub repository.

---

Enjoy using Route Map Viewer! If you have any questions or need further assistance, feel free to contact us.