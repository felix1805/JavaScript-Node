// const dog = document.querySelector(".dog");
// const bird = document.querySelector(".bird");
// const dogImg = document.getElementById('neondogimg');
// const birdImg = document.getElementById('neonbirdimg');

// dog.addEventListener("click", dogFunction);
// bird.addEventListener("click", birdFunction);

// dogImg.addEventListener("click", dogImgFunction);
// birdImg.addEventListener("click", birdImgFunction);

// function dogFunction() {
//   const neonElements = document.querySelectorAll('.neon');
//   neonElements.forEach((element) => {
//     element.classList.toggle("hidden");
//   });
// }

// function birdFunction() {
//   const neonElements = document.querySelectorAll('.neon');
//   neonElements.forEach((element) => {
//     element.classList.toggle("hidden");
//   });
// }

// function dogImgFunction() {
//   document.getElementById("neondogimg").classList.toggle("hidden");
// }

// function birdImgFunction() {
//   document.getElementById("neonbirdimg").classList.toggle("hidden");
// }


const neonAll = document.querySelectorAll('.neon')
const dogImg = document.querySelector('#neondogimg')
const birdImg = document.querySelector('#neonbirdimg')
const h1 = document.querySelector('h1')

dogImg.addEventListener('click',dogImgFunction)
birdImg.addEventListener('click',birdImgFunction)
h1.addEventListener('click',restoreAll)

Array.from(neonAll).forEach(element => element.addEventListener('click',imgFunction))

function imgFunction(click) {
  document.querySelector('.neon').classList.add('hidden')
 
}

function dogImgFunction(){
  document.querySelector('#neondogimg').classList.add('hidden')
  
}
function birdImgFunction(){
  document.querySelector('#neonbirdimg').classList.add('hidden')
}

function restoreAll(){
  document.querySelector('.neon').classList.toggle('hidden')
  document.querySelector('#neondogimg').classList.toggle('hidden')
  document.querySelector('#neonbirdimg').classList.toggle('hidden')
}