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
 
const handleKeydown = (e) => {
  const p = document.querySelector("#keydown-tracker")
  const keyTracker = e.keyboardEvent()
  p.textContent = "You pressed Key" + keyTracker.toUpperCase()

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
  if (event.target.tagName === "BUTTON") {
    resultSpan.textContent = event.target.textContent;
  }
};

const addNewRandomNumber = () => {
const addOnList = document.querySelector('#random-numbers')
const newItem = document.createElement('li')
newItem.append( Math.random() * 100 + 1)
addOnList.append(newItem)
};

const removingEventListener = () =>{
  const delegationContainer = document.querySelector('#delegation');
delegationContainer.removeEventListener('click', handleDelegation)
}


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
inlinebutton.addEventListener('click',inlineClickCounterHandler)
  // Addnewrandomnumber
  const randomButton = document.getElementById('add-random-num')
  randomButton.addEventListener('click', addNewRandomNumber)
  // removingEventListener
  const removeButton = document.getElementById('remove')
  removeButton.addEventListener('click', removingEventListener)
};

main();
