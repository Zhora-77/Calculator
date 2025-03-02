let display = document.getElementById('display');


function addNumber(num){
  document.getElementById('display').value += num;
}

function addOperation(op){
  document.getElementById('display').value += op;
}

function clearDisplay(){
  document.getElementById('display').value = '';
}

function backSpace(){
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display.substring(0,display.length -1);
}

function handlePercent(){
  let display = document.getElementById('display').value;
  document.getElementById('display').value = display / 100;
}

function calculate(){
      try{
        let expr = document.getElementById('display').value;
        expr = expr.replace(/×/g, '*');
        expr = expr.replace(/÷/g, '/');
        expr = expr.replace(/%/g, '/100');
        expr = expr.replace(/√/g, 'Math.sqrt');
                display.value = eval(expr);
      } catch (e){
        document.getElementById('display').value = 'Error';
       
      }
}

function addDot(){
    let display = document.getElementById('display').value;
    if(display.indexOf('.') == -1){
      document.getElementById('display').value += '.';
    }
}

function handleSquare(){
  let display = document.getElementById('display').value;
  sqrt = number ** 1/2;
  document.getElementById('display').value = sqrt;
}

function handleSqrt(){
  let  display = document.getElementById('display').value;
  
}

document.addEventListener('keydown',(e) => {
  if(e.key >='0' && e.key <= '9'){
    addNumber(e.key);
  }
  if(['+','-','×','÷'].includes(e.key)){
    addOperation(e.key);
  }
  if(e.key === 'Enter'){
    calculate();
  }
  if(e.key === 'Backspace'){
    backSpace();
  }
  if(e.key === 'Escape'){
    clearDisplay();
  }
  if(e.key === '.'){
    addDot();
  }
  if(e.key === '('){
    addOperation('(');
  }
  if(e.key === ')'){
    addOperation(')');
  }
  if(e.key === '^'){
    addOperation('**');
  }
  if(e.key === '%'){
    addOperation('%');
  }
}) 