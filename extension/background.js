// background.js

// Simple cache to hold HLTB data
const hltbCache = {};

// Fetch data from HLTB API
async function fetchHLTBData(gameTitle) {
  // Check if we already have the data
  if (hltbCache[gameTitle]) {
    return hltbCache[gameTitle];
  }

  try {
    // Make the API request
    const response = await fetch(`http://localhost:5000/fetch_times?title=${encodeURIComponent(gameTitle)}`);
    
    if (!response.ok) {
      // If response not ok, throw an error
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.error) {
      // If API returned an error, throw it
      throw new Error(data.error);
    }

    // Save to cache
    hltbCache[gameTitle] = data;
    return data;
  } catch (error) {
    // Log the error and return null
    console.error('Error fetching HLTB data:', error);
    return null;
  }
}

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.gameTitle) {
    fetchHLTBData(message.gameTitle)
      .then((data) => {
        sendResponse({ data: data });
      })
      .catch((error) => {
        console.error('Error fetching HLTB data:', error);
        sendResponse({ data: null });
      });
    
    // Keep the message channel open for sendResponse
    return true;
  }
});
