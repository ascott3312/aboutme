// Your JS file must contain a 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.
'use strict';
console.log('This file is connected.');


//First Question
var firstName = prompt('What is your first name?');
console.log('First Name is' + firstName);

//Initial Greeting
alert('Welcome' + firstName + ' to my website. Thanks for viewing!!');

//Questions
var question1 = prompt (' '+ firstName +' is this the first time visiting this website? Yes or No.').toLowerCase().trim();
console.log(question1);
if (question1 ==='yes') {
  alert('Well thank you for visiting');
} else if (question1 !== 'yes' || question1 === isNaN){
  alert ('Please answer with either Yes or No');
}
