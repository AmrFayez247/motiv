const elem = document.querySelector('.search');
document.addEventListener("click", ()=>{
    if (elem === document.activeElement) {
        elem.setAttribute("placeholder", "");
    }else{
        elem.setAttribute("placeholder", "Search or type");
    }
})