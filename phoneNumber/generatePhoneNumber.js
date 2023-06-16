const fs = require('fs');

// Generate random number
function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * 10);
}

// const res = getRandomNumber(1, 10);
// console.log("🚀  file: generatePhoneNumber.js:8  res", res);

let phNumber = [];
// loop through get 6 digit number
for (let i = 0; i < 6.; i++) {
  let randomNumber = getRandomNumber(0, 10);
  // console.log(randomNumber);

  phNumber.push(randomNumber);
  `9413${phNumber.join('')}`;
}
// console.log(`9413${phNumber.join('')}`);

// setInterval(() => {
//   console.log(`9413${phNumber.join('')}`);
// }, 1500);

const generateNumbers = () => {
  let phNumber = [];
  for (let i = 0; i < 6.; i++) {
    let randomNumber = getRandomNumber(0, 10);
    phNumber.push(randomNumber);
  }

  storeNumber('phoneNumber.txt', `9413${phNumber.join('')}`);
};

const storeNumber = (fileName, phoneNumber) => {
  console.log("🚀  file: generatePhoneNumber.js:38  storeNumber  phoneNumber", phoneNumber);
  console.log("🚀  file: generatePhoneNumber.js:39  storeNumber  fileName", fileName);
  const options = 'utf-8';

  data = `${phoneNumber}\n`;

  fs.appendFile(fileName, data, options, (err) => {
    // console.log("🚀  file: generatePhoneNumber.js:44  fs.writeFile  data", data);
    if (err) {
      console.log(err.code, err.errno, err.name, err.message);
    } else {
      console.log('data stored');
    }
  });

  readNumber('phoneNumber.txt', options, data);
};

const readNumber = (fileName, options, data) => {
  data = data;
  fs.readFile(fileName, options, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

generateNumbers();


// setInterval(() => {
//   generateNumbers();
// }, 1000);