// var name ="Stefanos"
//
// var nameTwo = new String("Ben");
//
// var luckyNumber = 42;
//
// var boolean = true;
//
// var mystery;
//
// console.log(name = nameTwo);
//
//
// let name;
//
// console.log(name);
//
// {
//   const name= "Stefanos";
//   const name = "Artemis";
//   console.log(name);
//
// }
//
// console.log(name);
//
// const greeting = "Hello my name is: ";
// const name = "Bob";
// console.log(greeting + name + '.');
//
// const name ="Bob";
//
// console.log(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione impedit, corporis autem consequatur omnis officia fuga hic, ${name} provident quaerat commodi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione impedit, corporis autem consequatur omnis officia fuga hic, provident quaerat commodi`)
//
// const date = new Date('09/27/89');
//
// console.log(date);
//
// const str ='adsfjlasdflasldjkfaklsdf'
// console.log(str.length);
//
//
// const num = new Number(42);
// const num2 = 42;
//
// const array = [1, 2, 3];
// const array2 = new Array(1, 2, 3);
// const arrayMixed = ['Stefanos', 18, true]
//
// console.log(arrayMixed);
//
// const obj = {
//   name: 'Stefanos',
//   age: 18
// };
// console.log(obj);
//
// alert('Danger Will Robinson!!!');
//  const response = confirm('Are you sure?');
//
//  console.log(response);
//
// const favNum = prompt('What is your favorite movie');
//
// number to string
// console.log(num.toString());
//
// console.log(parseInt(num));
//
//   const firstName = prompt('What is your first name?');
//   const responseFirstName = confirm(firstName);
//   console.log(firstName);
//
//   const lastName = prompt('What is your last name?');
//   const responseLastName = alert(lastName);
//   console.log(lastName);
//
//   const birthday = prompt('What is your Birthday');
//   const responseBirthday = confirm(birthday);
//   console.log(birthday);
//
//
// const str1 = 'You are my brother Anikan';
// const str2 = new String(str1);
// // Loose equals dont care about data type
// console.log(str1 == str2);
// strict equals does
// console.log(str1 === str2);
//
// PEMDAS RULES APPLY TO MATH OPERATIONS ORDER OF OPERATIONS
//
// fizzbuzz test is a reallly popular interview question
// console.log(0.1 + 0.2);
// console.log(0 / 0); // (not a number)
//
// let number = 1;
// console.log('number' , number);
//
// number ++;
// console.log('number' , number);
//
// number ++;
// console.log('number' , number);
// number --;
// console.log('number' , number);
//
// console.log(number += 9);
//
// let cartTotal = 0;
//
// const item = 9.99;
// const item2 = 7.99;
// const discount = .5;
//
// console.log(cartTotal += item);
// console.log(cartTotal += item2);
// // console.log(cartTotal *= discount);
//
//
//
// let total = 0;
// const num1 = prompt('Give me a number', 10);
// const num2 = prompt('Give me a second number', 15);
// // console.log(parseInt(num1));
// // // console.log(parseInt(num2))
// // const new1 =(+num1 + +num2);
// //const new2 =parseInt(num2);
// const prompt1 = +prompt('give me a num 1', 10);
// const prompt2 = +prompt('give me a num 2', 10);
// alert(prompt1 + prompt2);
//
//
// const firstName = "Ben"
//
// if (firstName === 'Jacob') {
//
// console.log('Your name is jacob' );
// } else  if (firstName === 'Ben'){
//   console.log('YOur name is Ben');
//
// } else{
//   console.log('Your name is not Ben or Jacob');
// }
//
//
// const magicNumber = 4;
// if(magicNumber === 1) {
//   console.log(1);
// } else if (magicNumber === 2){
// console.log(2);
// } else {
//   console.log('No magic number for you');
// }
//
// if (false || true) {
//   console.log('Great success!');
// }
//
// const age = 25;
//
// if(age >= 21 && age <= 80){
//   console.log('You are over 21 but less than 80');
// }
//
// const lastName = '';
//
// if(!lastName) {
//   console.log(`You did not provide a last name.`);
// }
//
// const userName = prompt('What is your name?');
//
// if(userName) {
//   alert(userName);
// } else {
//   alert('Invalid Name');
// }
//
//
// userName ? alert(userName) : alert('Invalid name');
// true ? console.log(true) : console.log(false);
//
//
// const superHero = prompt('What is your favorite super hero?');
//
// switch(superHero) {
//   case 'Batman' :
//   console.log('Batman is awesome');
//   break;
// case 'Superman' :
//   console.log('Superman is not better than Batman'):
//   break;
// default:
//   console.log('Sorry, not a superhero.');
//
// }

const userAge = +prompt('What is your age?');
if (userAge >= 18 && userAge <= 80) {
  const likesStarWars = confirm('Do you like Star Wars?');
  if(likesStarWars) {
    alert('May the force be with you!');
  }
} else if (userAge > 80){
  const likesPrunes = confirm('Do you like Prunes?');
  alert('Gross');
} else{
  
}  alert('You are not old enough');



console.log(userAge);
