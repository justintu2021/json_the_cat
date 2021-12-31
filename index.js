const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

console.log(fetchBreedDescription(breedName,(error,description) => {
  if (error) {
    console.log("false", error)
} else {
  console.log(description)
  }
}))

