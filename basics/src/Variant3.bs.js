// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


function isLarger(animal1, animal2) {
  switch (animal1) {
    case 0 : 
        return animal2 === 1;
    case 1 : 
        return false;
    case 2 : 
        return true;
    
  }
}

var quote = "The force is with you!";

var starwars;

switch (quote) {
  case "I am Your father" : 
      starwars = "Nooooooooooo";
      break;
  case "I love candy" : 
      starwars = "No match";
      break;
  case "The force is with you!" : 
      starwars = "is match";
      break;
  default:
    starwars = "";
}

var math = "correct";

var fivePlusFive = 10;

exports.isLarger = isLarger;
exports.quote = quote;
exports.starwars = starwars;
exports.fivePlusFive = fivePlusFive;
exports.math = math;
/* starwars Not a pure module */
