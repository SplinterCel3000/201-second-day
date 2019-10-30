'use strict';

var names = prompt('Who is taking my quiz?');
alert('Alright ' + names + ' lets do this!');
//console.log(names + 'is taking my quiz.');


var q1 = prompt('Is my name Brandon?');
q1 = q1.toLowerCase();

if(q1 === 'yes' || q1 === 'y') {
  alert('Wow you got it right?');
  //console.log('My name is brandon');

} else {alert('Do you even know my name??');
}


var q2 = prompt('Am I from Seattle?');
q2 = q2.toLowerCase();

if(q2 === 'no' || q2 === 'n') {
  alert('Look at you go another right answer!');
  //console.log('No Im from Florida.');

} else {alert('Again can you read?');
}


var q3 = prompt('Is Fallout my favorite game series?');
q3 = q3.toLowerCase();

if(q3 === 'yes' || q3 === 'y') {
  alert('Your on a roll with this.');
  //console.log('Yes my favorite game series is Fallout.');

} else {alert('You should probably stop here.');
}


var q4 = prompt('Did I have a mentor?');
q4 = q4.toLowerCase();

if(q4 === 'yes' || q4 === 'y') {
  alert('You really are paying attention good job!');
  //console.log('My Mentors name is Stewart.');

} else {alert('You arent reading are you?');
}


var q5 = prompt('Do I attend CodeFellows?');
q5 = q5.toLowerCase();

if(q5 === 'yes' || q5 === 'y') {
  alert('That one was easy!');
  //console.log('Well yes I attend CodeFellows we are in class right now.');

} else {alert('Wow you got that wrong?');
}

var favoriteNumber = '7';
var numberGuessCount = 4;
var correctGuessFlagNumber = false;
var theirGuessAtNumber;

theirGuessAtNumber = prompt('Guess my number!');
while(numberGuessCount > 0 && correctGuessFlagNumber === false){


  if(theirGuessAtNumber > '7') {
    theirGuessAtNumber = prompt('That is to high!');


  } else if(theirGuessAtNumber < '7') {
    theirGuessAtNumber = prompt('thats too low');
  } else { alert('you got it');}


  numberGuessCount--;
  for(var i = 0; i < 3; i++){
    if(favoriteNumber[i] === theirGuessAtNumber){
      correctGuessFlagNumber = true;
    }
  }


}

alert('All done.');


//Drink question 7
alert('What\'s my favorite drink?');
var favoriteDrinks = ['Monster', 'RedBull', 'Rockstar'];
var guessCount = 6;
var correctGuessFlag = false;
var theirGuessAtDrink;


while(guessCount > 0 && correctGuessFlag === false){
  theirGuessAtDrink = prompt('What\'s my favorite drink?');


  guessCount--;
  for(var b = 0; b < 3; b++){
    if(favoriteDrinks[b] === theirGuessAtDrink){
      correctGuessFlag = true;
    }
  }


}



var done = alert('Your all done here are the answers. \n Question 1 - Yes | ' + q1 + '\n Question 2 - No | ' +q2 + '\n Question 3 - Yes | ' + q3 +'\n Question 4 - Yes | ' + q4 + '\n Question 5 - Yes | ' + q5 + '\n Question 6 - 7 | ' + theirGuessAtNumber + '\n Question 7 - Monster, redbull, and Rockstar | ' + theirGuessAtDrink);
alert('That\'s the end!');


