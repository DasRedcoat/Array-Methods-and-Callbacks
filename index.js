import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */

// console.log(fifaData["Year"] === 2014 && fifaData["Stage"] === "Finals")


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(fifaData) {
   const CBfinalTeams = fifaData.filter (function(item) {
       return item.Stage === "Final"
   });
   return CBfinalTeams
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// getFinals IS THE CALLBACK!!!!!
// .map will crate a NEW ARRAY from the old array

function getYears(array, getFinals) { //getyears function gets an array and a CB)
    const years = getFinals(array).map(function(item) { // years is the callback function using the array given (fifaData), mapping a new array
        return item.Year
    });
    return years
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(array, getFinalsCB) {
    const winners = getFinalsCB(array).map (function(item) {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name']
        } else {
            return item['Away Team Name']
        }
    });
    return winners;
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

 // we need to target the YEAR and the COUNTRY that won - it is ambiguous to any array used. So it needs to take any array given - declare new variables to target YEAR and COUNTRY

function getWinnersByYear(array, getYears, getWinners) { // set up function as per instructions
    let winningYears = getYears(array, getFinals) // declare winningYears to be the return of the getyears function, with the array and callback for that function
    let winningTeam = getWinners(array, getFinals) // declare winningTeams to be the return of the getyears function, with the array and callback for that function
    return winningYears.map(function(item, index) { //.map a NEW ARRAY from the winningYears function - that way the {item} is referencing the year for the string, and the index found within the winningTeam function is put into the {index} spot but has to be cited to the variable of winningTeam, since that is a DIFFERENT function's callback. 
        return `In ${item}, ${winningTeam[index]} won the world cup!`
    })
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/


// Accumulator???? - "average number of goals" implies adding up the total, they need to "accumulate", be added together, then divide it by the length oo the whole array for the average

function getAverageGoals(getFinals) { // function that takes the getFinals callback
   const homeGoals = getFinals.reduce ((acc, item) => { //variable homeGoals is a reduction of getFinals, and then an accumulator function to accumulate the total
       return acc + item['Home Team Goals'] // return the ACCUMULATION of the {item} of "Home Team Goals" - which is the numerical amount of goals made, and be sure to close the arrow function with a 0 because that is number at which the acculator begins!!!!!
   },0);  // 0 is where the accumulation starts, don't forget it at the end of the function!
   const awayGoals = getFinals.reduce ((acc, item) => {
    return acc + item['Away Team Goals']  // repeat above, but with the away goals.
   },0);
return ((homeGoals + awayGoals) / getFinals.length).toFixed(2)
//return the final result of both sets of goals, add them together (first = PEMDAS) and then divide them by the length of the original array, and round it to the second decimal. 
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
