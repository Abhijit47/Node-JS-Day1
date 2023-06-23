const fs = require('fs');
const storeDataFunction = require('./digitalWatches');

// for usa watch
const usaWatch = () => {
  const today = new Date();
  // USA have more than one timezones
  const optionsUSA = { timeZone: "America/New_York" };

  const timeUSA = today.toLocaleTimeString('en-US', optionsUSA);
  const dateUSA = today.toLocaleDateString('en-US', optionsUSA);

  // for create the data into directory
  storeDataFunction.storeData('usaWatch.txt', `${dateUSA} ${timeUSA}`);
};

usaWatch()
// module.exports = usaWatch;

