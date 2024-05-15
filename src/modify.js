// These are your event handlers
const clickCounterHandler = () => {
  const button = document.getElementById('add-one')
  let clickCounter = 0
  button.addEventListener('click', ()=> {
    clicks++
    button.dataset.clicks = clickCounter
    button.textContent =`I've been clicked ${clicks} time.`
})

};

const handleKeydown = () => {

};

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
clickCounterHandler()
  
};

main();
