
const request = require('request');

const args = process.argv.slice(2);

//// breed name is entered via command line agurment
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error,body) => {
  /// in case breed of page not found
  if (error === null) {
    return console.log('error: page not found');
  } else if (error !== undefined) {/// in case request failed, example wrong domain
      return console.log('request failed');
  } else {
      const fs = require('fs'); //this function to read data returned from thecatapi
      fs.readFile(body, () => {
    // console.log(`${body}`);
    // console.log(typeof body)
      const data = JSON.parse(body);
      console.log(data[0]["description"]);
      });
    };
});

  