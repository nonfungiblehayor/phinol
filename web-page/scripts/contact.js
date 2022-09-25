'use strict'

const subjectText = document.querySelector('.subject-text'); // subject field
const subjectMail = document.querySelector('.subject-mail'); // mail field
const subjectMessage = document.querySelector('.subject-message'); // message field
const btnSubmit = document.querySelector('.btn-submit') // submit button
const mail = document.querySelector('.left-div'); // mail frame
const userMail = document.querySelector('.user-mail');
const validationMessage = document.querySelectorAll('.validation-message');
const inputField = [subjectText,subjectMail,subjectMessage]; 
const suggestionPopUp = document.querySelector('.suggestion-pop-up') // suggestion pop-up
const closePop = document.querySelector('.close-pop') // cancel image
console.log(inputField[2].textContent)
const color1 = "#5EC853"
const form = document.querySelector('.form-list')


// display pop up
mail.addEventListener('click', function() {
  form.style.display = "grid"
  suggestionPopUp.style.display = 'flex'
//  if(suggestionPopUp.style.display === 'none') {
//     suggestionPopUp.style.display = 'flex'
//  } else {
//     suggestionPopUp.style.display = 'none'
//  }
})

// close pop up
closePop.addEventListener('click', function(){
    if(suggestionPopUp.style.display === 'flex' &&  form.style.display === "grid") {
        suggestionPopUp.style.display = 'none'
        form.style.display = "none"
     } else {
        suggestionPopUp.style.display = 'none'
        form.style.display = "none"
     }
})

// checking input field to change button state
subjectMessage.addEventListener("keyup", function(e){
      const mailFormat = '@gmail.com';
        if(subjectText.value === '' && subjectMail.value.match(mailFormat) && subjectMail.value === "" && subjectMessage.textContent === "") {
            btnSubmit.style.backgroundColor = '#1F1F1F';
        } else {
            btnSubmit.style.backgroundColor = color1;
            btnSubmit.style.color = '#ffffff'
        }
})


subjectMail.addEventListener('keyup', function(){
   const mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(subjectMail.value.match(mailFormat)) {
      validationMessage[0].style.display = 'none';
   } else {
      validationMessage[0].style.display = 'flex';
   }
})

// check mail validation after typing

let timeout = null;
const mailFormat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const actionMessageC = document.querySelectorAll('.action-message')
// function clickCounter50() {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//       if(responsee[0].value != "") {
//         actionMessageC[0].style.display = "block";
//         if(actionMessageC[0].style.display === "block") {
//           setTimeout(() => actionMessageC[0].style.display = "none", 1500) 
//         }
//       count = localStorage.clickcount
//     } else {
//       localStorage.clickcount = 1;
//     }
//    console.log(count)
//   }
// }

const urlC = 'https://hookb.in/BY1BQJmoLRSknxZk3ao3';
  const fromElC = document.querySelectorAll('form');
  const responseeC = document.querySelectorAll('.mail-list')  
    fromElC[1].addEventListener('submit', async(e)=> {
      e.preventDefault()
    const formData = new FormData(fromElC[1]);
    const fromDataSerialized = Object.fromEntries(formData);
    const jsonObject = responseeC[0].value;
    try {
      if(responseeC[0].value != ""){
      const response = await fetch(urlC, {
        method: "POST",
        body: [jsonObject, localStorage.clickcount],
        headers: {
          "Content-Type": "application/json",
        }
      });
      responseeC[0].value = "";
      actionMessage[0].style.display = "block";
     if(actionMessage[0].style.display === "block") {
    setTimeout(() => actionMessage[0].style.display = "none", 1500) 
  } 
      const json = await response.json()
      console.log(json)
    }} catch (e) {
      console.log(e)
    }
    })
