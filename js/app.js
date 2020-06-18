//Footer
var year = document.getElementById('copyright');
var today = new Date();
year.textContent = today.getFullYear();

// Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.
'use strict';
console.log('This file is connected.');


//First Question
var firstName = prompt('What is your first name?');
console.log('First Name is' + firstName);

//Initial Greeting
alert('Welcome' +' '+ firstName + ' to my website. Thanks for viewing!!');

//Question 1
var question1 = prompt (' '+ firstName +' is this the first time visiting this website? Yes or No.').toLowerCase().trim();
console.log(question1);
if (question1 ==='yes') {
  alert('Well thank you for visiting.');
} else if (question1 !== 'yes' || question1 === isNaN){
  alert ('Please answer with either Yes or No')
}
//Question 2
var question2 = prompt ('Do you know where I live? Yes or No.').toLowerCase().trim();
console.log(question2);
if (question2 ==='yes') {
  alert('Great I love living in Iowa.');
} else if (question2 !== 'yes' || question2 === isNaN){
  alert ('Please answer with either Yes or No')
}
//Question 3
var question3 = prompt ('Do you live in the same state as I do? Yes or No.').toLowerCase().trim();
console.log(question3);
if (question3 ==='yes') {
  alert('Awesome.');
} else if (question3 !== 'yes' || question3 === isNaN){
  alert ('Please answer with either Yes or No')
}
//Question 4
var question4 = prompt ('Do you have any kids? Yes or No.').toLowerCase().trim();
console.log(question4);
if (question4 ==='yes') {
  alert('I have 4 kids.');
} else if (question4 !== 'yes' || question4 === isNaN){
  alert ('Please answer with either Yes or No')
}
//Question 5
var question5 = prompt ('Do you like the game of football? Yes or No.').toLowerCase().trim();
console.log(question5);
if (question5 ==='yes') {
  alert('Awesome! ' + firstName + ' I love football too.');
} else if (question5 !== 'yes' || question5 === isNaN){
  alert ('Please answer with either Yes or No')
}
//Question 6
var winNumber = 30; //Nunber they need to guess my favorite number
for (var i = 0; i <= 8; i++){
var question6 = prompt ('Let\'s see if you can guess my favorite number?. Enter in a number between 1 and 100');
console.log(question6);
if (question6 === winNumber) {
  alert('Awesome. This ' + question6 + ' is my favorite number');(i === 8);break;
} 
if (question6 < winNumber) {
  alert('The number you guessed is lower than my favorite number');(i++);continue;
} if(question6 > winNumber) {
  alert('The number you guessed is greater than my favorite number');(i++);continue;
}
//  if(question6 === null || question6 === ' ')
//  alert('Please enter in a number.');(i++);continue;
}
console.log('the variable i',i )



