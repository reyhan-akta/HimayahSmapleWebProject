let browser_genres = window.matchMedia("(max-width:991px)");
var resp_side_menu   = document.querySelector(".resp_side_menu_wrapper");


if(browser_genres){
    resp_side_menu.style.height =  window.innerHeight + "px";    
}