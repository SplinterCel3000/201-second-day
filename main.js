'use strict';

var names = prompt('Who is taking my quiz?');
alert('Alright ' + names + ' lets do this!');
//console.log(names + 'is taking my quiz.');

var q1 = prompt('Is my name Brandon?');
question1();
function question1() {
  q1 = q1.toLowerCase();

  if (q1 === 'yes' || q1 === 'y') {
    alert('Wow you got it right?');
    //console.log('My name is brandon');

  } else {
    alert('Do you even know my name??');
  }
}

var q2 = prompt('Am I from Seattle?');
question2();
function question2() {

  q2 = q2.toLowerCase();

  if (q2 === 'no' || q2 === 'n') {
    alert('Look at you go another right answer!');
    //console.log('No Im from Florida.');

  } else {
    alert('Again can you read?');
  }
}

var q3 = prompt('Is Fallout my favorite game series?');
question3();
function question3() {

  q3 = q3.toLowerCase();

  if (q3 === 'yes' || q3 === 'y') {
    alert('Your on a roll with this.');
    //console.log('Yes my favorite game series is Fallout.');

  } else {
    alert('You should probably stop here.');
  }
}


var q4 = prompt('Did I have a mentor?');
question4();
function question4() {
  q4 = q4.toLowerCase();

  if (q4 === 'yes' || q4 === 'y') {
    alert('You really are paying attention good job!');
    //console.log('My Mentors name is Stewart.');

  } else {
    alert('You arent reading are you?');
  }
}
var q5 = prompt('Do I attend CodeFellows?');
question5();
function question5() {
  q5 = q5.toLowerCase();

  if (q5 === 'yes' || q5 === 'y') {
    alert('That one was easy!');
    //console.log('Well yes I attend CodeFellows we are in class right now.');

  } else {
    alert('Wow you got that wrong?');
  }
}
var favoriteNumber = 7;
var numberGuessCount = 4;
var theirGuessAtNumber = prompt('Guess my number!');


console.log(`user input after parse = ${theirGuessAtNumber}`);
while (numberGuessCount > 0) {
  theirGuessAtNumber = parseInt(theirGuessAtNumber, 10);
  if (favoriteNumber === theirGuessAtNumber) {
    alert('You got it');
    break;
  } else if (theirGuessAtNumber > 7) {
    numberGuessCount--;
    theirGuessAtNumber = prompt('That is to high!');
  } else if (theirGuessAtNumber < 7) {
    numberGuessCount--;
    theirGuessAtNumber = prompt('thats too low');
  } else {
    numberGuessCount--;
    theirGuessAtNumber = prompt('Please enter a NUMBER!');
  }
}



//Drink question 7

var favoriteDrinks = ['monster', 'redbull', 'rockstar'];
var guessCount = 6;
var correctGuessFlag = false;
var theirGuessAtDrink;


while (guessCount > 0 && correctGuessFlag === false) {
  theirGuessAtDrink = prompt('What\'s my favorite drink?');
  theirGuessAtDrink = theirGuessAtDrink.toLowerCase();
  console.log(favoriteDrinks);

  guessCount--;
  for (var b = 0; b < 3; b++) {
    if (favoriteDrinks[b] === theirGuessAtDrink) {
      correctGuessFlag = true;
    }
  }


}



var done = alert('Your all done here are the answers. \n Question 1 - Yes | ' + q1 + '\n Question 2 - No | ' + q2 + '\n Question 3 - Yes | ' + q3 + '\n Question 4 - Yes | ' + q4 + '\n Question 5 - Yes | ' + q5 + '\n Question 6 - 7 | ' + theirGuessAtNumber + '\n Question 7 - Monster, RedBull, and Rockstar | ' + theirGuessAtDrink);
alert('That\'s the end!');