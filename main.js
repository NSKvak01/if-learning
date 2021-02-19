/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(l){
  if (l.length > 20) {
    return "That's a long string!";
  }
}

function isItMedium(m){
  if (m.length >= 10 && m.length <= 20){
    return "That's a regular sized string!";
  }
}

function isItShort(s){
  if (s.length < 10){
    return "That's a small string!";
  } else{
    return "That's not a small string!"
  }
}

function howLongIsMyString(s){
  if (s.length > 20){
    return "That's a long string!"
  } else if (s.length >= 10 && s.length <= 20){
    return "That's a regular sized string!"
  } else {
    return "That's a small string!"
  }
}

function instructorHeight(n){
  if (n === 'Colin'){
    return 62;
  } else if (n === 'Mesuara'){
    return 69;
  } else{
    return "I don't know that instructor!"
  }
}







/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}