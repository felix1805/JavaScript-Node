const img1 = document.getElementById('image1')
const img2 = document.getElementById('image2')
const img3 = document.getElementById('image3')
const img4 = document.getElementById('image4')
const h1 = document.getElementById('h1ImageSelection')
const img1H2 = document.getElementById('image1-h2')
const img2H2 = document.getElementById('image2-h2')
const img3H2 = document.getElementById('image3-h2')
const img4H2 = document.getElementById('image4-h2')

document.querySelector('#image1').addEventListener('click', img1Function)
document.querySelector('#image2').addEventListener('click', img2Function)
document.querySelector('#image3').addEventListener('click', img3Function)
document.querySelector('#image4').addEventListener('click', img4Function)

function img1Function() {
  h1.classList.toggle('hidden')
  img1H2.classList.toggle('hidden')
  img1.classList.toggle('enlarge')
  img2.classList.toggle('hidden')
  img3.classList.toggle('hidden')
  img4.classList.toggle('hidden')
}
function img2Function() {
  h1.classList.toggle('hidden')
  img2H2.classList.toggle('hidden')
  img1.classList.toggle('hidden')
  img2.classList.toggle('enlarge')
  img3.classList.toggle('hidden')
  img4.classList.toggle('hidden')
}
function img3Function() {
  h1.classList.toggle('hidden')
  img3H2.classList.toggle('hidden')
  img1.classList.toggle('hidden')
  img2.classList.toggle('hidden')
  img3.classList.toggle('enlarge')
  img4.classList.toggle('hidden')
}
function img4Function() {
  h1.classList.toggle('hidden')
  img4H2.classList.toggle('hidden')
  img1.classList.toggle('hidden')
  img2.classList.toggle('hidden')
  img3.classList.toggle('hidden')
  img4.classList.toggle('enlarge')
}