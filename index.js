const watch = require('./Watch/digitalWatches');

// use set interval function to call the indianwatch every seconds
// setInterval(watch.indianWatch, 1000);
setInterval(watch.usaWatch, 1000);
setInterval(watch.chinaWatch, 1000);
