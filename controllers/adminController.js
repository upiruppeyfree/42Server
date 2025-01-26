const { setNextNumber } = require("../models/randomNumberModel");

exports.setNextNumber = (req, res) => {
  const { number } = req.body;

  if (number < 0 || number > 9 || isNaN(number)) {
    return res.status(400).json({ message: "Number must be between 0 and 9." });
  }

  setNextNumber(number);
  res.json({ message: "Next number set successfully." });
};
