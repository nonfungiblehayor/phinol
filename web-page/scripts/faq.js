'use strict'

// faq js section 
const img_down = document.querySelector('.faq-question-1')
const img_up = document.querySelector('.img-up')
const faq_answer = document.querySelector('.faq-answer')
console.log(img_down)

const img_down2 = document.querySelectorAll('.faq-questions')
const img_up2 = document.querySelectorAll('.img-up2')
const faq_answer2 = document.querySelectorAll('.faq-answer2')
const faq_answer2_0 = document.querySelectorAll('.faq-answer2-0')

const actionMessageF = document.querySelectorAll('.action-message')
// function clickCounter40() {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//       if(responsee[0].value != "") {
//         actionMessageF[0].style.display = "block";
//         if(actionMessageF[0].style.display === "block") {
//           setTimeout(() => actionMessageF[0].style.display = "none", 1500) 
//         }
//       count = localStorage.clickcount
//     } else {
//       localStorage.clickcount = 1;
//     }
//    console.log(count)
//   }
// }


  const urlF = 'https://hookb.in/BY1BQJmoLRSknxZk3ao3';
  const fromElF = document.querySelectorAll('form');
  const responseeF = document.querySelectorAll('.mail-list')  
    fromElF[0].addEventListener('submit', async(e)=> {
      e.preventDefault()
    const formData = new FormData(fromElF[0]);
    const fromDataSerialized = Object.fromEntries(formData);
    const jsonObject = responseeF[0].value;
    try {
      if(responseeF[0].value != ""){
      const response = await fetch(urlF, {
        method: "POST",
        body: [jsonObject, localStorage.clickcount],
        headers: {
          "Content-Type": "application/json",
        }
      });
      responseeF[0].value = "";
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

img_down.addEventListener('click', function() {
    faq_answer.style.display = "grid"
})

img_up.addEventListener('click', function(){
    faq_answer.style.display = "none"
})

// 2
img_down2[0].addEventListener('click', function() {
    faq_answer2[0].style.display = "grid"
})

img_up2[0].addEventListener('click', function() { 
    faq_answer2[0].style.display = "none"
})


img_down2[1].addEventListener('click', function() {
    faq_answer2_0[0].style.display = "grid"
})

img_up2[1].addEventListener('click', function() {
    faq_answer2_0[0].style.display = "none"
})

img_down2[2].addEventListener('click', function() {
    faq_answer2_0[1].style.display = "grid"
})

img_up2[2].addEventListener('click', function() {
    faq_answer2_0[1].style.display = "none"
})

img_down2[3].addEventListener('click', function() {
    faq_answer2[1].style.display = "grid"
})

img_up2[3].addEventListener('click', function() {
    faq_answer2[1].style.display = "none"
})
