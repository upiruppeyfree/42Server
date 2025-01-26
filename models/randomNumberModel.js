const numberMappings = {
  0: { color: "violet", size: "Small" },
  1: { color: "green", size: "Small" },
  2: { color: "red", size: "Small" },
  3: { color: "green", size: "Small" },
  4: { color: "red", size: "Small" },
  5: { color: "violet", size: "Big" },
  6: { color: "red", size: "Big" },
  7: { color: "green", size: "Big" },
  8: { color: "red", size: "Big" },
  9: { color: "green", size: "Big" },
};

let currentNumber = null;
let nextNumber = null;
let history = [];
let periodCount = 1;
let lastDate = new Date().toISOString().split("T")[0]; // Track the last date for daily reset

// Function to generate a random number with mappings and a period
const generateRandomNumber = () => {
  const number = nextNumber !== null ? nextNumber : Math.floor(Math.random() * 10);
  nextNumber = null; // Reset the next number after it's used
  const period = new Date().toISOString().replace(/[-:.TZ]/g, "") + String(periodCount).padStart(6, "0");
  periodCount++;

  return {
    period,
    number,
    ...numberMappings[number],
  };
};

// Function to update the current number and manage history
const updateCurrentNumber = () => {
  const today = new Date().toISOString().split("T")[0];

  // Check if the day has changed, and reset history if needed
  if (today !== lastDate) {
    history = [];
    periodCount = 1;
    lastDate = today;
  }

  // Generate a new random number
  currentNumber = generateRandomNumber();
  history.unshift(currentNumber); // Add to the beginning of the history array

  // Limit the history to 698 pages (6980 entries)
  const maxHistoryLength = 698 * 10;
  if (history.length > maxHistoryLength) {
    history.pop(); // Remove the oldest entry
  }
};

// Function to get paginated history
const getHistory = (page, limit) => {
  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  return history.slice(start, end);
};

// Exported functions
module.exports = {
  numberMappings,
  updateCurrentNumber,
  getHistory,
  setNextNumber: (number) => {
    nextNumber = number;
  },
  getCurrentNumber: () => currentNumber,
};

// Initialize the first number and start the generator
updateCurrentNumber();
setInterval(updateCurrentNumber, 60000); // Update every 1 minute
