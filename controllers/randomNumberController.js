const {
  getCurrentNumber,
  getHistory, // Import the function to get paginated history
} = require("../models/randomNumberModel");

exports.getRandomNumber = (req, res) => {
  const { page = 1, limit = 10 } = req.query; // Retrieve page and limit from query params

  // Fetch current number and paginated history
  const current = getCurrentNumber();
  const history = getHistory(page, limit); 
  const total = Math.min(698 * 10, getHistory(1, 6980).length); // Total entries capped at 6980

  res.json({
    current, // Current random number
    history, // Paginated history
    total,   // Total number of entries in history
  });
};
