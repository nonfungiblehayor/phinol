const actionMessageA = document.querySelectorAll('.action-message')
// function clickCounterA0() {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//       if(responsee[0].value != "") {
//         actionMessageA[0].style.display = "block";
//         if(actionMessageA[0].style.display === "block") {
//           setTimeout(() => actionMessageA[0].style.display = "none", 1500) 
//         }
//       count = localStorage.clickcount
//     } else {
//       localStorage.clickcount = 1;
//     }
//    console.log(count)
//   }
// }
const urlA = 'https://hookb.in/BY1BQJmoLRSknxZk3ao3';
  const fromElA = document.querySelectorAll('form');
  const responseeA = document.querySelectorAll('.mail-list')  
    fromElA[0].addEventListener('submit', async(e)=> {
      e.preventDefault()
    const formData = new FormData(fromElA[0]);
    const fromDataSerialized = Object.fromEntries(formData);
    const jsonObject = responseeA[0].value;
    try {
      if(responseeA[0].value != ""){
      const response = await fetch(urlA, {
        method: "POST",
        body: [jsonObject, localStorage.clickcount],
        headers: {
          "Content-Type": "application/json",
        }
      });
      responseeA[0].value = "";
      actionMessageA[0].style.display = "block";
     if(actionMessageA[0].style.display === "block") {
    setTimeout(() => actionMessageA[0].style.display = "none", 1500) 
  } 
      const json = await response.json()
      console.log(json)
    }} catch (e) {
      console.log(e)
    }
    })
