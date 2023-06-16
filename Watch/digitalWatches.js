const fs = require('fs');

const indianWatch = () => {
  const today = new Date();
  const options = { timezone: 'Asia/Kolkata' };

  // Get the current time in inidian timezone
  const time = today.toLocaleTimeString('en-IN', options);

  // Get the current date in indian timezone
  const date = today.toLocaleDateString('en-IN', options);

  // store the data inside directory
  storeData('indianWatch.txt', `${date} ${time}`);
};

// for usa watch
const usaWatch = () => {
  const today = new Date();
  // USA have more than one timezones
  const optionsUSA = { timeZone: "America/New_York" };

  const timeUSA = today.toLocaleTimeString('en-US', optionsUSA);
  const dateUSA = today.toLocaleDateString('en-US', optionsUSA);

  // for create the data into directory
  storeData('usaWatch.txt', `${dateUSA} ${timeUSA}`);
};

// for china watch
const chinaWatch = () => {
  const today = new Date();
  // As per https://timezonedb.com/time-zones
  // China has two timezone
  // const optionsChina = { timezone: "Asia/Urumqi" };
  const optionsChina = { timeZone: "Asia/Shanghai" };

  const timeInChina = today.toLocaleTimeString('en-CN', optionsChina);
  const dateInChina = today.toLocaleDateString('en-CN', optionsChina);

  storeData('chinaWatch.txt', `${dateInChina} ${timeInChina}`);
};

const storeData = (fileName, data) => {
  // console.log(data);
  data = `${data}\n`;

  // Append the data specified file
  fs.appendFile(fileName, data, "utf-8", (err) => {
    if (err) throw err;
    console.log(`Data is stored on ${fileName}`);
  });
};

module.exports = { indianWatch, usaWatch, chinaWatch };