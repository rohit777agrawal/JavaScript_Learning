//cookies
//console.log(navigator.cookieEnabled);

//window = interface used to talk to the web browser ... it's good to get this information.
// console.log(window.outerWidth);

// detect key press
// window.addEventListener("keydown", event => { console.log(event.key)})


//addEventListerner(event, function, useCapture) useCapture can be true or false, for which element first.
// const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeRed);
// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed(){
//     innerDiv.style.backgroundColor = "red";
// }
// function changeGreen(){
//     innerDiv.style.backgroundColor = "lightgreen";
// }

//create events to happen
//.onClick()
//.onLoad()
//.onChange()
//.onmouseover()
//.onmouseout()
//.onmousedown()
//.onmouseup()

//How to change CSS properties
// const title = document.getElementById("myTitle");
// title.style.backgroundColor = "blue";
// title.style.color = "red";

//add/change HTML element
// .innerHTML
//.textContent ( more secure)



//DOM traversal 
//.firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .childern[]
// Array.from(.childern)



// <<<<<<<< This is powerful tool >>>>>>>>>>>> querySelector

//use getElementbyID
// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgrey";
// //use getElementbyName
// let fruits = document.getElementsByName("fruits");
// console.log(fruits[1]);

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })
// //use getElementbyTagName
// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "orange";
// //use getElementbyClassName
// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = "green";

// //or use queryselector for everything (Powerful) 
// // let allElement = document.querySelector("#myTitle"); //for title #
// // allElement.style.backgroundColor = "lightgreen";

// let allElement = document.querySelectorAll(".desserts");
// // allElement.style.backgroundColor = "lightgreen"; //only selects the first element.
// allElement.forEach(elements => {
//     elements.style.backgroundColor = "lightgreen";
// })