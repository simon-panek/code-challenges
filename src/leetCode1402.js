'use strict';

function connectionTest3 () {
  return true;
}

// LeetCode #1402
// A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time. 
// Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  i.e.  time[i]*satisfaction[i]
// Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.
// Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.
// n== satisfaction.length
// 1 <= n <= 500
//-10^3 <= satisfaction[i] <= 10^3

const maxSatisfaction = (satisfaction) => {
  let output = 0;
  let nullCheck = false;
  let sorted = [];
  let tempTotal = 0;

  for (let i=0; i < satisfaction.length; i++) { //check for all negative satisfaction
    if(satisfaction[i] > 0) {
      nullCheck = true;
      break;
    }
  }

  sorted = satisfaction.sort((a,b) => {
    return a-b;
  });

  for (let j = 0; j < sorted.length; j++){
    tempTotal = 0;

    for (let k = 0; k+j < sorted.length; k++){
      tempTotal = tempTotal + (sorted[k+j] * (k+1));
    }
    if(tempTotal > output) {
      output = tempTotal;
    }
  }

  if(nullCheck === false) {
    return output = 0;
  } else {
    return output;
  }
};

// Success - Accepted 03/29/2021 14:22
// Runtime: 88ms, faster than 53.42% of JavaScript online submissions for Reducing Dishes.
// Memory Usage: 38.7 MB, less than 78.08% of JavaScript online submissions for Reducing Dishes.

module.exports = { connectionTest3, maxSatisfaction };