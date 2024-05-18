// These are your event handlers
const clickCounterHandler = (e) => {
   e.target.dataset.clicks = Number(e.target.dataset.clicks) + 1

  if (e.target.dataset.clicks === '1'){
    e.target.textContent =`I've been clicked ${e.target.dataset.clicks} time.`
  } else if (e.target.dataset.clicks > '1'){
    e.target.textContent =`I've been clicked ${e.target.dataset.clicks} times!`
  }


};
// working on the webpage, not passing the test, what am I doing wrong?
//  come back and use keybordevent 
const handleKeydown = (e) => {
  const p = document.getElementById("keydown-tracker")
  const keyTracker = e.key
  p.textContent = "You pressed Key" + e.key.toUpperCase()

};

const inlineClickCounterHandler = (e) => {
  e.target.dataset.clicks = Number(e.target.dataset.clicks) + 1

 if (e.target.dataset.clicks === '1'){
   e.target.textContent =`I've been clicked ${e.target.dataset.clicks} time.`
 } else if (e.target.dataset.clicks > '1'){
   e.target.textContent =`I've been clicked ${e.target.dataset.clicks} times!`
 }
}

// We've started this one for you
const handleDelegation = (event) => {
  const resultSpan = document.querySelector('#delegation-result');
  resultSpan.textContent = event.target.textContent;
};

const addNewRandomNumber = () => {
const randomButton = document.getElementById('add-random-num')
const addOnList = document.querySelector('#random-numbers')
randomButton.addEventListener('click', ()=>{
  const newItem = document.createElement('li')
  newItem.append( Math.random() * 100 + 1)
  addOnList.append(newItem)
})
};


// Select the elements and attach your event handlers inside main
const main = () => {
  const delegationContainer = document.querySelector('#delegation');
  delegationContainer.addEventListener('click', handleDelegation);
  // clickcounter
const button = document.getElementById("click-button"); 
button.addEventListener('click',clickCounterHandler )
// handle keydown 
document.body.addEventListener('keydown', handleKeydown)
// inlineclickcounter
const inlinebutton = document.getElementById("inline-example"); 
button.addEventListener('click',clickCounterHandler )
  
};

main();
