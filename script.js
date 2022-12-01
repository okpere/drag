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
