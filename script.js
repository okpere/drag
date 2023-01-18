let toggleContainer = document.querySelector(".toggle-container");
let hide = document.querySelector(".sleep");
let nav = document.querySelector("nav");
let add = document.querySelector(".add-task");
let modal = document.querySelector(".model");
let mainbody =document.querySelector('body')
let openHide = document.querySelector('.we')
// let toggle = toggleContainer.style.justifyContent;

let create = document.querySelector(".sn");
let title = document.querySelector(".title-form");
let description = document.querySelector(".description-form");
let subtasks = document.querySelector(".subtasks-form");
let opt = document.getElementById("naan");

const doing = document.querySelector(".doing");
const don = document.querySelector(".don");
const todo = document.querySelector(".todo");

let work = [];

// events listeners
openHide.addEventListener("click" , openHideToggle)
add.addEventListener("click", addtoggle);
hide.addEventListener("click", hideToogle);
toggleContainer.addEventListener("click", changeToggle);
create.addEventListener("click", createClick);
// create.addEventListener("click", disp);

function addtoggle() {
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

function openHideToggle (){
  mainbody.style.gridTemplateAreas = '"nav header header" "nav main main"'
  nav.style.display = "flex"
  nav.style.justifyContent = "space-between";
  // flex-direction: column;
  openHide.style.display = "none"
}
function hideToogle() {
  // hiding = hide.classList.toggle("active");
  // document.body.classList.toggle("active");
  // nav.classList.toggle("active");
  // if(nav.style.active.display === 'none'){
  //   console.log('start')
  // }else{
  // }
  if(mainbody.style.gridTemplateAreas === '"nav header header" "nav main main"'){
    mainbody.style.gridTemplateAreas = '"header header header" "main main main"';
    nav.style.display = "none"
    openHide.style.display = "block"
  }else{
    mainbody.style.gridTemplateAreas = '"nav header header" "nav main main"'
  }
}

function changeToggle() {
  toggleContainer.classList.toggle("active");
  // if(toggleContainer.classList.toggle('active')){
  //     document.body.style.color('black')
  // }else{
  //     document.body.style.color('white')
  // }
}

const getAllTasks = (work) => {
  work = localStorage.getItem("works");
};

function createClick(e) {
  e.preventDefault();
  let newtask = {
    newTitle: title.value,
    newDescription: description.value,
    stat: opt.value,
  };

  work.push(newtask);
  console.log(work);
  localStorage.setItem("works", JSON.stringify(work));
  

  addWork(newtask);
}

function addWork(work) {
  //create an li tag
  const listItem = document.createElement("ol");
  // create a text content
  const text = document.createTextNode(work.newTitle);

  //   add text content to the li tag
  listItem.appendChild(text);
  //   add li tag to todo, doing or don
  if (work.stat === "Todo") {
    // if work stat is 'Todo', add to todo list
    todo.appendChild(listItem)
  } else if (work.stat === "Doing") {
    // if work stat is 'Doing', add to doing list
    doing.appendChild(listItem)
  } else {
    // if work stat is 'Done', add to don list
    don.appendChild(listItem)
  }
}

    


    
