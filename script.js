let toggleContainer = document.querySelector(".toggle-container");
    let hide = document.querySelector('.sleep')
    let aside = document.querySelector('aside')
    let add = document.querySelector('.add-task')
    let modal = document.querySelector('.model')
    // let toggle = toggleContainer.style.justifyContent;

    function addtoggle (){
        if(modal.style.display === "none"){
            modal.style.display = "block" 
        }else{
            modal.style.display = "none"
            
        }
    }
    add.addEventListener('click', addtoggle)
    function hideToogle(){
        hide.classList.toggle('active')
        document.body.classList.toggle('active')
        aside.classList.toggle('active')
    }
    hide.addEventListener('click', hideToogle)


    function changeToggle () {
        toggleContainer.classList.toggle('active')
        // if(toggleContainer.classList.toggle('active')){
        //     document.body.style.color('black')
        // }else{
        //     document.body.style.color('white')
        // }
    }
    toggleContainer.addEventListener("click", changeToggle);
    let create = document.querySelector('.sn')
    let title = document.querySelector('.title-form')
    let description = document.querySelector('.description-form')
    let subtasks = document.querySelector('.subtasks-form')
    var opt = document.getElementById("naan");
    let work = []


 create.addEventListener('click' , createClick)
 function createClick(e){
    event.preventDefault()
    let newtask = {
    newTitle : title.value,
    newDescription : description.value,
    stat: opt.value
    }
    work.push(newtask)
    localStorage.setItem('works', JSON.stringify(work));
 }
