let currentValue = '';
let previousValue = '';
let operator = '';



// all html content
let numbersBtn = document.querySelectorAll('.number');
let operatorBtn = document.querySelectorAll('.operator')
 let currentdisplay = document.querySelector('.current-display');
 let previousDisplay = document.querySelector('.previous-display');
 let decimal = document.querySelector('.decimal')
 let clearBtn = document.querySelector('.clear');
 let equalBtn = document.querySelector('.equal');
 let deleteBtn = document.querySelector('.delete');
numbersBtn.forEach(number => {
number.addEventListener('click', () =>{

  handleNumber(number.innerText)
 currentdisplay.innerText = currentValue;
 
})
});

operatorBtn.forEach((operate) =>{
  operate.addEventListener('click', () =>{
   handleOperators(operate.innerText)
   previousDisplay.textContent = previousValue + '' + operator;
   currentdisplay.textContent = currentValue
  })
  })

  clearBtn.addEventListener('click', () =>{
   previousValue = '';
   currentValue = '';
   operator = '';
   previousDisplay.textContent = previousValue;
   currentdisplay.textContent =  currentValue;
  })
  equalBtn.addEventListener('click', () =>{
    if(currentValue != '' && previousValue != ''){
  calculate()
  previousDisplay.textContent = '';
  if(previousValue.length <= 15){
    currentdisplay.textContent = previousValue;
  }else{
    currentdisplay.textContent = previousValue.slice(0, 15) + '...';
  }
  
    }
  })

decimal.addEventListener('click', () =>{
  handleDecimal()
})

deleteBtn.addEventListener('click', function(){
  if(currentdisplay.textContent){
    currentdisplay.innerText = currentdisplay.innerText.slice(0, -1)
  }
})



function handleNumber(num) {
if(currentValue.length <= 15) {
  currentValue += num
}
}

function handleOperators(op) {
operator = op;
previousValue = currentValue;
currentValue = '';
}

function calculate () {
previousValue = Number(previousValue);
currentValue = Number(currentValue);
if(operator=== "+") {
  previousValue += currentValue;
} else if(operator === "-"){
  previousValue -= currentValue;
}else if(operator === "x") {
  previousValue *= currentValue;
}else if(operator === '/') {
  previousValue /= currentValue;
}
previousValue = roundnumber(previousValue)
previousValue = previousValue.toString()
 console.log(previousValue)
}

function roundnumber (num) {
return Math.round(num * 1000) / 1000;
}

function handleDecimal(){
if(!currentValue.includes('.')){
  currentValue += '.'
}

}