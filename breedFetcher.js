const request = require('request');

const args = process.argv.slice(2);

// const callback = function (error,description)  {
//   if (error) {
//     console.log("false", error);
// } else {
//     console.log (description);
//   }
// };

//// breed name is entered via command line agurment
const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error,response,body) => {
    if (error) {
      return callback(error,null);
    }

    let data = JSON.parse(body)
    let breed = data[0]
    if(breed) {
      return callback(null,breed["description"])
    } else {
        return callback('page not found',null);
      }
  });
  }

module.exports = {fetchBreedDescription}



