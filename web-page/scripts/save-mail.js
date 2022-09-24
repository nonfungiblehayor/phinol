const url = 'https://hookb.in/BY1BQJmoLRSknxZk3ao3';
const fromEl = document.querySelectorAll('form');
const responsee = document.querySelectorAll('.mail-list')
const actionMessage = document.querySelectorAll('.action-message')
const earlyAccessPopUp = document.querySelectorAll('.early-access-pop-up')

let count = 0;
// function clickCounter0() {
  
// }

fromEl[0].addEventListener('click', function(){
  if(responsee[0].value != ""){
  actionMessage[0].style.display = "block";
  responsee[0].value = "";
  earlyAccessPopUp[0].style.display = "none"
  if(actionMessage[0].style.display === "block") {
    setTimeout(() => actionMessage[0].style.display = "none", 1500) 
   }
  }
})

fromEl[1].addEventListener('click', function(){
  if(responsee[1].value != ""){
  actionMessage[1].style.display = "block";
  responsee[1].value = "";
  earlyAccessPopUp[1].style.display = "none"
  if(actionMessage[1].style.display === "block") {
    setTimeout(() => actionMessage[1].style.display = "none", 1500) 
   }
  }
})

fromEl[2].addEventListener('click', function(){
  if(responsee[2].value != ""){
  actionMessage[2].style.display = "block";
  responsee[2].value = "";
  earlyAccessPopUp[2].style.display = "none"
  if(actionMessage[2].style.display === "block") {
    setTimeout(() => actionMessage[2].style.display = "none", 1500) 
   }
  }
})

fromEl[3].addEventListener('click', function(){
  if(responsee[3].value != ""){
  actionMessage[3].style.display = "block";
  responsee[3].value = "";
  if(actionMessage[3].style.display === "block") {
    setTimeout(() => actionMessage[3].style.display = "none", 1500) 
   }
  }
})




