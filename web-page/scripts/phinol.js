'use strict'

const x = document.querySelector(".over-lay");
const cancel = document.querySelector(".cancel");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".phinol-logo");
const faq_head = document.querySelector('.faq-head');
function myFunction() {
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

cancel.addEventListener('click', function(){
    if (x.style.display === "flex") {
        x.style.display = "none";
        menu.style.display = "flex";
        logo.style.display = "flex";
        faq_head.style.display = "flex";
      } else {
        x.style.display = "flex";
      }
})

// display faq-information on hover 
const headerFaq = document.querySelectorAll('.header-faq')
const faqHover = document.querySelectorAll('.faq-hover')

for(let i = 0; i < faqHover.length; i++) {
headerFaq[i].addEventListener('mouseover', function(){
  faqHover[i].style.display = 'grid';
})
headerFaq[i].addEventListener('mouseout', function(){
  faqHover[i].style.display = 'none';
})
}

// change button state on clicked 

const btnClick = document.querySelector('.btn-clicked');
const btnClickState = document.querySelectorAll('.btn-click-state')


function myFunc() {
  btnClick.style.backgroundImage = 'linear-gradient(#53C8C8, #53C874)';
}

function newFunc() {
  btnClick.style.backgroundImage = 'linear-gradient(#53C882, #5EC853)';
}

for(let i = 0; i < btnClickState.length; i++){
  btnClickState[i].addEventListener('mousedown', function(){
    btnClickState[i].style.backgroundImage = 'linear-gradient(#53C8C8, #53C874)';
  })
}
for(let i = 0; i < btnClickState.length; i++){
  btnClickState[i].addEventListener('mouseup', function(){
    btnClickState[i].style.backgroundImage = 'linear-gradient(#53C882, #5EC853)';
  })
}
const button1 = document.querySelector('.button1')
button1.addEventListener('click', function(){
  console.log(20)
  if(x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
})


// early access pop up interaction
const early_access_pop_up = document.querySelectorAll('.early-access-pop-up')
const pop_up_button = document.querySelectorAll('.button2')
const close_pop_up = document.querySelectorAll('.close-early-access-pop-up')
const overLay = document.querySelector('.overlay');

 


// show first early access pop up 
pop_up_button[0].addEventListener('click', function(){
  early_access_pop_up[0].style.display = "flex";
})

pop_up_button[1].addEventListener('click', function(){
  early_access_pop_up[1].style.display = "flex";
})

pop_up_button[2].addEventListener('click', function(){
  early_access_pop_up[2].style.display = "flex";
})

// close pop up with escape key
document.addEventListener('keydown', function (e){
  if(e.key == 'Escape') {
   if(early_access_pop_up[0].style.display == "flex") {
    early_access_pop_up[0].style.display = "none"
   } else if (early_access_pop_up[1].style.display == "flex"){
    early_access_pop_up[1].style.display = "none"
   }else if (early_access_pop_up[2].style.display == "flex"){
    early_access_pop_up[2].style.display = "none"
   } else {
    early_access_pop_up[0].style.display = "none"
    early_access_pop_up[1].style.display = "none"
    early_access_pop_up[2].style.display = "none"
   }
  }
})

// close early access pop up 
close_pop_up[0].addEventListener('click', function() {
  early_access_pop_up[0].style.display = "none";
})
close_pop_up[1].addEventListener('click', function() {
  early_access_pop_up[1].style.display = "none";
})
close_pop_up[2].addEventListener('click', function() {
  early_access_pop_up[2].style.display = "none";
})

// change state 
const pop_up_mail = document.querySelectorAll('.pop-up-mail');
const pop_up_submit = document.querySelectorAll('.pop-up-submit');



pop_up_mail[0].addEventListener("keyup", function(e) {
  const val = e.target.value;
  if (val === "") {
    pop_up_submit[0].style.backgroundColor = "#161616";
    pop_up_submit[0].style.color = "#8F8F8F";
  } else {
    pop_up_submit[0].style.backgroundColor = "#53C874";
    pop_up_submit[0].style.color = "#ffffff"; 
  }
});
pop_up_mail[1].addEventListener("keyup", function(e) {
  const val = e.target.value;
  if (val === "") {
    pop_up_submit[1].style.backgroundColor = "#161616";
    pop_up_submit[1].style.color = "#8F8F8F";
  } else {
    pop_up_submit[1].style.backgroundColor = "#53C874";
    pop_up_submit[1].style.color = "#ffffff";  
  }
});
pop_up_mail[2].addEventListener("keyup", function(e) {
  const val = e.target.value;
  if (val === "") {
    pop_up_submit[2].style.backgroundColor = "#161616";
    pop_up_submit[2].style.color = "#8F8F8F";
  } else {
    pop_up_submit[2].style.backgroundColor = "#53C874";
    pop_up_submit[2].style.color = "#ffffff"; 
  }
});