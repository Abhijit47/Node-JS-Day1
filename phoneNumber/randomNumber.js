const { randomBytes } = require('crypto');
// setInterval(() => {
//   randomBytes(10, (err, buf) => {
//     if (err) {
//       console.log(err.name, err.message);
//     } else {
//       console.log(`${buf.length} bytes of random data: $${buf.toString('hex')}`);
//     }
//   });
// }, 1500);

randomBytes(10, (err, buf) => {
  if (err) {
    console.log(err.name, err.message);
  } else {
    console.log(`${buf.length} bytes of random data: $${buf.toString('hex')}`);
  }
});