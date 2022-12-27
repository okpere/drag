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


    const doing = document.querySelector('.doing')
    const don = document.querySelector('.don')
    const todo = document.querySelector('.todo')



 create.addEventListener('click' , createClick)
 function createClick(e){
    e.preventDefault()
    let newtask = {
    newTitle : title.value,
    newDescription : description.value,
    stat: opt.value
    }
    work.push(newtask)
    localStorage.setItem('works', JSON.stringify(work));
}
create.addEventListener('click' , disp)
function disp(){
    JSON.parse(localStorage.getItem('works')).map(data => {
        console.log(data.newTitle,data.stat)
            if(data.stat === 'Todo'){
                todo.innerHTML += `
            <li>${data.newTitle}<li>`}
            else if(data.stat === 'Doing'){
                doing.innerHTML += `<li>${data.newTitle}<li>`   
            }else if(data.stat === "Done"){
                don.innerHTML += `<li>${data.newTitle}<li>`
            }else{
    
            
        }
           
    })
} 

    
