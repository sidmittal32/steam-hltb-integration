# Steam HLTB Integration Extension

![Project Logo](extension\icons\icon128.png)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Chrome Extension Setup](#chrome-extension-setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

The **Steam HLTB Integration Extension** is a Chrome extension designed to enhance your Steam gaming experience by displaying estimated completion times from [HowLongToBeat](https://howlongtobeat.com/) directly on Steam game pages. This extension leverages a Flask-based backend server to fetch and cache game data, ensuring quick and efficient access to information about main story completion, extras, and 100% completionist times.

## Features

- **Real-Time Data Fetching:** Retrieves accurate game completion times from HowLongToBeat.
- **Seamless Integration:** Automatically inserts HLTB data into Steam game pages.
- **Caching Mechanism:** Reduces redundant API calls by caching fetched data.
- **User-Friendly Interface:** Displays information in a clean, styled card for easy reading.
- **Cross-Origin Support:** Backend server configured with CORS to facilitate communication with the Chrome extension.

## Technology Stack

- **Backend:**
  - Python
  - Flask
  - HowLongToBeat Python Library
  - Flask-CORS

- **Frontend:**
  - JavaScript
  - Chrome Extensions API
  - HTML & CSS (inline)

## Installation

### Prerequisites

- **Python 3.7+** installed on your machine.
- **Google Chrome** browser for installing the extension.
- **Git** for cloning the repository.

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/sidmittal32/steam-hltb-integration.git
   cd steam-hltb-integration
   ```

2. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

3. **Create a Virtual Environment:**

   It's recommended to use a virtual environment to manage dependencies.

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

   *If `requirements.txt` is not present, you can install dependencies manually:*

   ```bash
   pip install Flask howlongtobeatpy flask-cors
   ```

5. **Run the Flask Server:**

   ```bash
   python app.py
   ```

   The server will start on `http://0.0.0.0:5000`. Ensure this server is running whenever you use the Chrome extension.

### Chrome Extension Setup

1. **Navigate to Chrome Extensions Page:**

   Open Chrome and go to `chrome://extensions/`.

2. **Enable Developer Mode:**

   Toggle the "Developer mode" switch on the top right corner.

3. **Load the Extension:**

   - Click on "Load unpacked".
   - Select the `extension` folder from the cloned repository where `background.js`, `content.js`, and `manifest.json` are located.

4. **Verify Installation:**

   The extension should now appear in your list of installed extensions. You might see its icon next to the address bar.

## Usage

1. **Ensure Backend is Running:**

   Make sure the Flask server is active by running `python app.py` in the `backend` directory.

2. **Browse Steam:**

   Visit any Steam game page, for example: `https://store.steampowered.com/app/your_game_id/`.

3. **View HLTB Data:**

   The extension will automatically fetch and display HowLongToBeat data within the game details section. If data is unavailable, appropriate messages will be shown.

## Screenshots

### 1. Extension Icon in Chrome

![Extension Icon](screenshots\screenshot1.png)

### 2. HLTB Data on Steam Game Page

![HLTB Data Display](screenshots\screenshot2.png)

### 3. Backend Server Running

![Backend Server](screenshots\screenshot3.png)

## Project Structure

```
steam-hltb-integration/
├── backend/
│   ├── app.py
│   ├── requirements.txt
├── extension/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── background.js
│   ├── content.js
│   ├── manifest.json
├── screenshots/
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── screenshot3.png
├── README.md
└── LICENSE
```

## Contributing

Contributions are welcome! Whether it's reporting bugs, suggesting features, or submitting pull requests, your input helps improve the project.

1. **Fork the Repository.**

2. **Create a Feature Branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request.**

Please ensure that your code follows the project's coding standards and includes appropriate tests where applicable.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [HowLongToBeat](https://howlongtobeat.com/) for providing comprehensive game completion data.
- [Flask](https://flask.palletsprojects.com/) for the robust backend framework.
- [Chrome Extensions API](https://developer.chrome.com/docs/extensions/mv3/) for enabling seamless browser integrations.
- [howlongtobeatpy](https://github.com/ScrappyCocco/HowLongToBeat-PythonAPI) for the Python library to interact with HowLongToBeat.
