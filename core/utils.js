const fs = require("fs");
const { DBFile } = require("./constants");

/**
 * Reads data from the database based on the provided key.
 *
 * @param {string} key - The key to retrieve the data from the database.
 * @returns {*} - The data associated with the provided key, or undefined if the key is invalid or data retrieval fails.
 */
const readDataFromDB = (key) => {
  if (typeof key !== "string" || key.trim() === "") {
    return;
  }

  try {
    const dbRaw = fs.readFileSync(DBFile);
    const data = JSON.parse(dbRaw)[key];

    return data;
  } catch (error) {
    console.error("Error reading data from DB:", error);

    return;
  }
};

module.exports = { readDataFromDB };
