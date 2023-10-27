
// //await ==> makes the async function wait for the promise
// async function loadFile(){
//     let fileLoad = false;

//     if(fileLoad){
//         return ("File loaded");
//     }
//     else{
//         throw("File not loaded");
//     }
// };

// async function startProcess(){
//     try{
//         let message = await loadFile();
//         console.log(message);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// startProcess();

// loadFile().then((value)=> console.log(value)).catch((typeAnything) => console.log(typeAnything));


//async ==> makes a function return a promise
// async function loadFile(){

//     let fileLoad = false;

//     if(fileLoad){
//         return ("File loaded");
//     }
//     else{
//         throw("File not loaded");
//     }
// };
// loadFile().then((value)=> console.log(value)).catch((typeAnything) => console.log(typeAnything));



//Promises => I promise to return something in future.

// const promise = new Promise((resolve, reject)=>{

//     let fileLoad = true;

//     if(fileLoad){
//         resolve("File loaded");
//     }
//     else{
//         reject("File not loaded");
//     }
// })

// promise.then((value)=> console.log(value)).catch((typeAnything) => console.log(typeAnything));

//console.time() ==> helps to time the code from one point the another
// console.time("Response time");
// setTimeout(() => console.log("Hello"), 3000);
// console.timeEnd("Response time");



// Practice program to create a clock
// const myLabel = document.getElementById("myLabel");

// setInterval(update, 1000);

// function update(){
//     let date  = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hrs = date.getHours();
//         let min = date.getMinutes();
//         let sec = date.getSeconds();

//         return `${hrs}:${min}:${sec}`;
//     }
// }


// Date object ==>  Data and Time
// let date = new Date();
// date = date.toLocaleDateString();
// // date = date.toLocaleTimeString();
// console.log(date);
// let madeUpDate = new Date(1996, 11, 4, 5, 31, 40, 0);
// console.log(madeUpDate);

//setInterval() ==> invokes a function repetedly after number of millisecond (3000 = 3 seconds)

//setTimeout function ==> invokes a function after a number of millisecond
// setTimeout(firstmessage, 3000);
// let tha = setTimeout(secondmessage, 6000);
// setTimeout(thirdmessage, 9000);

// setTimeout(() => {
//     thirdmessage();
// }, 3000);
//clearTimeout(tha);
// function firstmessage(){
//     alert('Buy this course for $100');
// }
// function secondmessage(){
//     alert('Buy this course for $200');
// }
// function thirdmessage(){
//     alert('Buy this course for $300');
// }



//error handling
// try{
//     let x = window.prompt("Enter a number?");
//     x = Number(x);

//     if(isNaN(x)) throw "That was not a number";
//     if(x == "") throw "That was empty";

//     console.log(`${x} is a number`);
// }
// catch{
//     console.log(error);
// }
// finally{
//     console.log("This will always happen");
// }


//Map = objects that holds key-value pairs of any data.
// const store = new Map([
//     ["tshirts" , 20],
//     ["jeans" , 30],
//     ["socks", 10]
// ]);
// console.log(store.get("tshirts")); // get method gets the value
// store.set("hat", 25); //adds another pair of items
// store.forEach((value, key) => console.log(`${key} price is ${value}`));

// arrow function (=>), it basically says function(){}
// same as -- const greetings function(username){}
// const greetings = (username) => {
//     console.log(username);
// }
// greetings("Bro");

// array.forEach() == executes a provided callback function once for each array element
// array.map() == execute a provided callback function once for each element in array and do something.
// array.filter() == creates a new array with filtered callback function.
// array.reduce() == reduces an array to a single value.
// function expression == function without the name.

// a callback =  a function passed as an argument
// function sum(a, b, callback)  =====  console.log(sum(a,b,multiplier()));
//spread operator (...) helps to spread the elements in array and string (unpacks the individual element)
// let number = [1,2,3,4,5,6,7,8,9];
// let maximum = Math.max(...number);
// console.log(maximum);

//rest parameters (...) you can add indefinate amount of parameter. coool!
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// console.log(sum(a,b,c));
// console.log(sum(a,b,c,d));
// function sum(...numbers){  //you can add infinete amount of items
//     let total = 0;
//     for (let number of numbers){
//         total += number;
//     }
//     return total;
// }

//Temperature convert application
// let temp;
// document.getElementById("convert").onclick = function(){

//     if(document.getElementById("celcius").checked){
//         temp = document.getElementById("inputNumber").value;
//         temp = Number(temp);
//         temp = toCelcius(temp);
//         document.getElementById("temp").innerHTML = temp + "C";
//     }
//     else if(document.getElementById("fahrenheit").checked){
//         temp = document.getElementById("inputNumber").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("temp").innerHTML = temp + "F";
//     }
//     else{
//         document.getElementById("temp").innerHTML = "Select a Unit";
//     }
// }

// function toCelcius(temp){
//     return (temp - 32)*(5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9/5 + 32;
// }



//Creating a number guessing game
// const answer = Math.floor(Math.random() *10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){
//     let guess = document.getElementById("guessField").value;
//     guesses+=1;

//     if(guess == answer){
//         alert(`${answer} is the number. It took you ${guesses} to guess`);
//     }
//     else if(guess < answer){
//         alert("Too small");
//     }
//     else{
//         alert("Too large")
//     }


// }


//Template Literals = use delimeter(`) helps in strings and sentences ${userName}
// condition ? expreIfTrue : expreIfFalse

//Important JavaScript: Create a checklist and radio button
// const subscribe = document.getElementById("myCheckbox");
// const visa = document.getElementById("visa");
// const mastercard= document.getElementById("mastercard");
// const paypal = document.getElementById("paypal");

// document.getElementById("myButton").onclick = function(){
//     if(subscribe.checked == true){
//         document.getElementById("mySubscribe").innerHTML = "You are Subscribed";
//     }
//     else{
//         document.getElementById("mySubscribe").innerHTML = "You are not Subscribed";
//     }

//     if(visa.checked){
//         console.log("You selected visa payment method");
//     }
//     else if(mastercard.checked){
//         console.log("You selected mastercard payment method");
//     }
//     else if(paypal.checked){
//         console.log("You selected paypal payment method");
//     }
//     else{
//         console.log("You need to select one!");
//     }
// }






//Creating a counter program
// let count = 0;

// document.getElementById("decrease").onclick = function(){
//     count -= 1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("reset").onclick = function(){
//     count = 0;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("increase").onclick = function(){
//     count += 1;
//     document.getElementById("countLabel").innerHTML = count;
// }





// console.log("Done");

// let firstname = "bro";
// document.getElementById("p3") = "Hello" + firstname;

//Helps to prompt for data
// let username = window.prompt("What's your name?");

//Helps to take a input from the html button and save the data.  COOOOL
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
// }