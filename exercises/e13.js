import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
  const numOfPlanetsFunc = data.planets.map(function(planet) {
    return  planet.name;
  });
  const numOfPlanets = numOfPlanetsFunc.length;
  const totalTemp = data.planets.reduce(function(acc, i) {
    const totalTemp = acc + i.avgTemp;
    return totalTemp;
  }, 0);
  const avgTempOfPlanets = data.planets.reduce(function(acc, i) {
    return totalTemp / numOfPlanets;
  }); 
    
  return avgTempOfPlanets;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
