(function(){
"use strict";

var arrayObj = [
  {id:1, detail:["hi", "hello", "what up"]},
  {id:2, detail:["snow", "rain", "sun"]},
  {id:3, detail:["mountain", "bird", "squirrel"]},
  {id:4, detail:["fish", "turtle", "elephant"]}
];

//o(1) example:
function constantLoop(){
  var i;
  var array = [];
  for (i=0; i<5; i++){
    array.push(i);
  }
  return array;
}

//o(n) example:
//
function loopVaries(input){
  var i;
  var array = [];
  for (i=0; i<input.length; i++){
    array.push(input[i]);
  }
  return array;
}
//
// //o(n^2)example:
//
function looping(input){
  var i;
  var j;
  var newArray = [];

  for (i=0; i<input.length; i++){
    for (j=0; j<input[i].detail.length; j++){
      newArray.push(input[i].detail[j]);
    }
  }
  return newArray;
}



console.log(constantLoop());
console.log(loopVaries([1,2,3,4,5,6]));
console.log(looping(arrayObj));



})();
