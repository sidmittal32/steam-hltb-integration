// content.js

// Function to communicate with the background script and get HLTB data
function fetchHLTBData(gameTitle) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ gameTitle: gameTitle }, (response) => {
      if (response && response.data) {
        resolve(response.data);
      } else {
        reject('No data received'); // Could be improved with better error messages
      }
    });
  });
}

// Function to display HLTB data on the Steam page
function insertHLTBData(hltbData) {
  const target = document.querySelector('.game_details');
  if (target && hltbData) {
    const card = document.createElement('div');
    card.className = 'hltb-card';
    card.innerHTML = `
      <h2>How Long to Beat?</h2>
      <div class="hltb-row">
        <span class="hltb-label">MAIN STORY:</span>
        <span class="hltb-value">${hltbData.main_story || 'N/A'} hrs</span>
      </div>
      <div class="hltb-row">
        <span class="hltb-label">MAIN STORY + EXTRAS:</span>
        <span class="hltb-value">${hltbData.main_extra || 'N/A'} hrs</span>
      </div>
      <div class="hltb-row">
        <span class="hltb-label">COMPLETIONIST:</span>
        <span class="hltb-value">${hltbData.completionist || 'N/A'} hrs</span>
      </div>
    `;

    // Adding some styles directly - not the best practice but quick
    const styles = document.createElement('style');
    styles.textContent = `
      .hltb-card {
        background-color: #101822;
        padding: 10px 18px;
        width: 240px;
        border-radius: 4px;
        font-family: "Motiva Sans", Arial, sans-serif;
        margin-top: 10px;
        color: #c5c7c9;
      }
      .hltb-card h2 {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .hltb-row {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
      }
      .hltb-label {
        color: #8f98a0;
        font-size: 11px;
        font-weight: bold;
        text-transform: uppercase;
      }
      .hltb-value {
        color: #c5c7c9;
        font-size: 11px;
        font-weight: normal;
      }
    `;

    // Not sure if styles already exist, but append anyway
    document.head.appendChild(styles);

    // Add the card to the page
    target.appendChild(card);
  }
}

// Main execution block
(async function() {
  const titleElement = document.querySelector('.apphub_AppName');
  if (titleElement) {
    const gameTitle = titleElement.innerText.trim();
    try {
      const data = await fetchHLTBData(gameTitle);
      insertHLTBData(data);
    } catch (err) {
      console.error('Failed to fetch HLTB data:', err);
    }
  }
})();
