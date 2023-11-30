
import data from './data.js'

//About us modal
const modalBtn = document.querySelector(".modal-btn")

const modal = document.querySelector(".modal-overlay")

const closeBtn = document.querySelector(".close-btn")

//function

const modeB = ()=>{
  modal.classList.add("open-modal")
}

const fobC = ()=>{
  modal.classList.remove("open-modal")
}

modalBtn.addEventListener("click", modeB)

closeBtn.addEventListener("click",fobC)




//using selectors inside the element
const questions = document.querySelectorAll(".question-answer");

questions.forEach(function (question) {
  //console.log(question)
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});


//Menu



// const container = document.querySelector(".menu-box")
// const btnafter = document.querySelectorAll(".beem-a");
// const btnprev = document.querySelectorAll(".beem-p");

// //if length is 1 hide buttons
// if (data.length === 1){
//   btnafter.forEach(element => element.style.display = 'none')
//   btnprev.forEach(element => element.style.display = 'none')
// }

// //if length is 2, add copies of slides
// let menuData = [...data]
// if(data.length === 2){
//    menuData = [...data, ...data]
//  }

// container.innerHTML = menuData.map((person, slideIndex)=>{
  
//  const {img,icon1, h2, p1,price,icon2,stroke,order} = person

// let position = 'next'
// if(slideIndex === 0){
//   position = 'active'
// }

// if(slideIndex === menuData.length -1){
//   position = 'last'
// }
// if(data.length <= 1){
//   position ='active'
// }
// return `<div class="menu-image ${position}">

// <img src="${img}">
// </div>
// <div class="small-card">
// <i class="${icon1}"></i>
// </div>
// <div class="menu-info">
// <h2>${h2}</h2>
// <p>${p1}   </p>
// <h3>${price}</h3>
// <div class="menu-icon">
// <i class="${icon2}"></i>
// <i class="${icon2}"></i>
// <i class="${icon2}"></i>



// <i class="${icon2}"></i>
//   <i class="${stroke}"></i>
// </div>
// <a href="#" class="menu-btn">${order}</a>
// </div>
// `

//  })
// .join('')


// const startSlider = (type) => {
//   //get all three menu active,last next

//   const active = document.querySelectorAll(".active")

//   const last = document.querySelector(".last")

//   let next = active.nextElementSibling

//   if (!next){
//     next = container.firstElementChild;
//   }

//   active.classList.remove('active')
//   last.classList.remove('last')
//   next.classList.remove('next')

//   if(type === 'prev'){
//     active.classList.add('next')
//     last.classList.add('active')
//     next -last.previousElementSibling
//     if(!next){
//       next = container.lastElementChild
//     }
//     next.classList.remove('next')
//     next.classList.add('last')
//     return
//   }
//   active.classList.add('last')
//   last.classList.add('next')
//   next.classList.add('active')
// }
// btnprev.forEach(element =>{
//   element.addEventListener('click', () => {
//   startSlider()
// });
// });
// btnafter.forEach(element => {
//   element.addEventListener('click', () => {
//   startSlider('prev')
//   })
// })
