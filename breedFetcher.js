
const { Agent } = require('http');
const request = require('request');

const args = process.argv.slice(2);

//// breed name is entered via command line agurment
const fetchBreedDescription = function (x) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${x}`, (error,response,body) => {
    //const data = JSON.parse(body);
    // console.log(data.length === 0)
    //in case page not found
      if (body === undefined){
      return console.log('request failed');}
    const data = JSON.parse(body)
    if (data.length === 0) {/// in case request failed, example wrong domain
        return console.log('page not found');
    } else {
        const fs = require('fs'); //this function to read data returned from thecatapi
        fs.readFile(body, () => {
      // console.log(`${body}`);
      // console.log(typeof body)
        console.log(data[0]["description"]);
        });
      };
    });
  }

  fetchBreedDescription(args[0])
