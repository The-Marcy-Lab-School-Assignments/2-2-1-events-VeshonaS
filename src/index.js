const button = document.getElementById('add-one')
const counter = document.getElementById('results')
let clicks = 0
button.addEventListener('click', ()=> {
  clicks++
counter.textContent = clicks
})