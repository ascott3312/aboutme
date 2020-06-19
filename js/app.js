//Footer
var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

// Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.
'use strict';
console.log('This file is connected.');

var userPoints = 0;

//First Question
var firstName = prompt('What is your first name?');
console.log('First Name is' + firstName);

//Initial Greeting
alert('Welcome ' + ' ' + firstName + ' to my website. Thanks for viewing!!');

//Question 1
function questionOne(){
  // console.log('Function call');
  var question1 = prompt(firstName + ' is this the first time visiting this website? Yes or No.').toLowerCase().trim();
  console.log(question1);
  if (question1 === 'yes' || question1 === 'y') {
    alert('Well thank you for visiting.');
    userPoints += 1;
  }
  else if (question1 === 'no' || question1 ==='n'){
    alert('Great! Welcome back. ' + firstName + '.');
  }
  else {
    alert ('You did not enter in Yes or No');
    questionOne();
  }
}
//Question 2
function questionTwo(){
  var question2 = prompt ('Do you know where I live? Yes or No.').toLowerCase().trim();
  console.log(question2);
  if (question2 ==='yes' || question2 === 'y') {
    alert('Great I love living in Iowa.');
    userPoints += 1;
  } else if (question2 === 'no' || question2 === 'n'){
    alert ('I live in Iowa');
  }
  else {
    alert ('You did not enter in Yes or No');
    questionTwo();
  }
}
//Question 3
function questionThree(){
  var question3 = prompt ('Do you live in the same state as I do? Yes or No.').toLowerCase().trim();
  console.log(question3);
  if (question3 ==='yes' || question3 === 'y') {
    alert('Awesome.');
    userPoints += 1;
  } else if (question3 === 'no' || question3 === 'n'){
    alert ('So you live in a different state');
  }
  else {
    alert ('You did not enter in Yes or No');
    questionThree();
  }
}
//Question 4
function questionFour(){
  var question4 = prompt ('Do you have any kids? Yes or No.').toLowerCase().trim();
  console.log(question4);
  if (question4 ==='yes' || question4 === 'y') {
    alert('I have 4 kids.');
    userPoints += 1;
  } else if (question4 === 'no' || question4 === 'n'){
    alert ('So you have no kids');
  }
  else {
    alert ('You did not enter in Yes or No');
    questionFour();
  }
}
//Question 5
function questionFive(){
  var question5 = prompt ('Do you like the game of football? Yes or No.').toLowerCase().trim();
  console.log(question5);
  if (question5 ==='yes' || question5 === 'y') {
    alert('Awesome! ' + firstName + ' I love football too.');
    userPoints += 1;
  } else if (question5 === 'no' || question5 === 'n'){
    alert ('Not every one likes football');
  }
  else {
    alert ('You did not enter in Yes or No');
    questionFive();
  }
}
//Question 6
function questionSix(){
  var winNumber = 30; //Nunber they need to guess my favorite number
  for (var i = 1; i <= 4;) {
    var question6 = prompt ('Let\'s see if you can guess my favorite number?. Enter in a number between 1 and 50, you get four tries');
    question6 = Number(question6);
    console.log(question6);
    if(i === 4){
      alert('You have passed the number of guesses! My favorite number is ' + winNumber + '.');
      break;
    }
    if (question6 == winNumber) {
      alert('Awesome. This ' + question6 + ' is my favorite number');
      userPoints += 1;
      break;
    }
    if (question6 < winNumber) {
      alert('The number you guessed to low of my favorite number');(i++);continue;
    }
    if (question6 > winNumber) {
      alert('The number you guessed to high of my favorite number ');(i++);continue;
    }
  }
  console.log('the variable i',i );
}
// Question 7
function questionSeven(){
  var numberGuesses = 0;
  var favoriteMovies = ['Mr. Mom', 'Top Gun', 'Strange Brew', 'Creed', 'Sound of Music'];
  console.log(favoriteMovies);

  while(numberGuesses < 6){

    var correctAnswer = false;
    var movieGuess = prompt('Please guess one of my top five movies!');

    for(var i = 0; i < favoriteMovies.length; i++){
      if(movieGuess === favoriteMovies[i]){
        console.log(numberGuesses, movieGuess, 'correct');
        correctAnswer = true;
        break;
      }else if(movieGuess !== favoriteMovies[i]){
        console.log(numberGuesses, movieGuess, 'incorrect');
        continue;
      }
    }
    if(correctAnswer === true){
      alert('Yes, that movie is in my top five!!');
      userPoints += 1;
    }else if(correctAnswer === false){
      alert('Please try again');
    }
    numberGuesses +=1;
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('Thanks for playing ' + firstName + ' you got ' + userPoints + ' out of 11');