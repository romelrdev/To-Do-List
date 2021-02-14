//Everytime you type a task in the input and press the 'add' button, a new <li> element will appear in the <ul>
//create button that clears all <li> elements and a button that only clears the tasks that have been completed or clicked on.

//////////variables and selecting elements


  //targeting the value of the input element in our HTML, which will be text

let submitT = document.querySelector('.addTaskBtn');
  //button that will activate a function that takes the new task and submits it as a li item

let list = document.querySelector('.list');
  //ul element

let clearAll = document.querySelector('.clearAll');
  //clear all button

let clearComplete = document.querySelector('.clearCompleted');
  //clear completed button


  //target any <li> element in the document

//////////functions
function completed(e){
    e.target.classList.toggle('done')
  }

function addTask(){
  let newT = document.querySelector('.enterTask').value;
  if (newT !== '') {
    list.innerHTML += (`<li onclick="completed()">${newT}</li>`);
  }
}

function clearA(){
  list.innerHTML = ('');
}
function enter(event){
  if(event.keyCode == 13){
    addTask()
  }
}





//////////event listeners

submitT.addEventListener('click', addTask);
clearAll.addEventListener('click', clearA);
