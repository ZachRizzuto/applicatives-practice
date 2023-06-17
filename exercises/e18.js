/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import {maxBy, minBy} from '../exercises/e17.js';
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let yearCount = {};
    const asteroidYearArr = data.asteroids.map(function(asteroid) {
      return asteroid.discoveryYear;
    });
    asteroidYearArr.sort();
    const hashedYears = asteroidYearArr.forEach(function(i) {
    /* Did some research on hashmaps and got a basic grasp of the concept so used it.
      Absolutely critique this I had a lot of fun building this function.
      You can bash me if this is not a way I should have solved this. :) Thank you.*/
   	 if(yearCount[i] === undefined) {
    yearCount[i] = 0;
    }
    yearCount[i] += 1;
    });
    const yearAppearancesCount = Object.keys(yearCount).map(function(key) {
    	return yearCount[key];
    });
    const maxOfAsteroidsDiscoveryYear = maxBy(yearAppearancesCount, (num) => num);
    const mostAsteroidDiscoveredYear =  Object.keys(yearCount).find(function(key) {
    	if (yearCount[key] === maxOfAsteroidsDiscoveryYear) {
      	return Object.keys(yearCount);
      }
    });
    return Number(mostAsteroidDiscoveredYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
