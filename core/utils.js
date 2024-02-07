const fs = require("fs");
const { DBFile } = require("./constants");

const readDataFromDB = (key) => {
  if (!key) {
    return;
  }

  const dbRaw = fs.readFileSync(DBFile);
  const data = JSON.parse(dbRaw)[key];

  return data;
};

module.exports = { readDataFromDB };
