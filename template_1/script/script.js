var search_box  = document.querySelector(".search_bar");
var search_icon = document.querySelector(".search_icon_wrapper i");
var apply_button  = document.querySelector(".apply-button");
var menu = document.querySelector(".menu ul");
var menu_items_children = menu.children;

var mobile_menu_icon = document.getElementById("mobile_menu_icon");
var resp_side_menu   = document.querySelector(".resp_side_menu_wrapper");
var resp_side_menu_items = document.querySelector(".resp_side_menu ul").children;
var side_menu_close_tab_wrapper   = document.querySelector(".side_menu_close_tab_wrapper i");
var banner_left_arrow = document.querySelector(".banner_left_arrow");
var banner_right_arrow = document.querySelector(".banner_right_arrow");
var banner_timer_bar = document.querySelector(".banner_timer_bar");

//var banner_timer_bar = document.querySelector(".banner_timer_bar");
var banner_content_wrapper_topic     = document.querySelector(".banner_content_wrapper h2");
var banner_content_wrapper_paragraph = document.querySelector(".banner_content_wrapper p");
var second_banner_button_wrapper     = document.querySelector(".second_banner_button_wrapper");
var second_banner_button_wrapper = document.querySelector(".second_banner_button_wrapper");
var banner_wrapper  = document.querySelector(".banner_wrapper img");
var tiny_images_box = document.querySelectorAll(".image_box");
var banner_wrapper_buttons_content = document.querySelectorAll(".banner_button");

var about_us_content_wrapper = document.querySelector(".about_us_content_wrapper");
var about_us_buttons_wrapper = document.querySelector(".about_us_buttons_wrapper");
var aboutus_buttons = document.querySelectorAll(".about_us_button_box");

var statistic_values_span = document.querySelectorAll("#statistic_value");
var statistic_values  = [];
var statistic_values_intervals  = [];
var statistic_values_interval_index = [];

var svg_spans = document.querySelectorAll("#svg_span");
var svg_spans_path = document.querySelectorAll("#svg_span path");

var footer = document.querySelector(".footer");
var navigate_button = document.querySelector(".navigate_button");
var slide_down = false;
var navigator_top_value = [-8,8];

var scaleX; var scaleY;
var focused_banner_image = 1;
var timer_bar_interval;
var req_banner_animate;

var banner_images_src = ["assets/banner_1.jpg","assets/banner_2.jpg"];

var banners_topic = ["Lorem Ipsum","Lorem Ipsum 2"];
var banners_paragraphs = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "];
var banner_buttons_content = [['<i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Apply','Learn More'],['<i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Apply','<i class="fa fa-heart" aria-hidden="true"></i>&nbsp;&nbsp;Donate']];

banner_wrapper_buttons_content[0].innerHTML = banner_buttons_content[0][1];
banner_wrapper_buttons_content[1].innerHTML = banner_buttons_content[0][0];


apply_button.style.marginTop  = 50 - apply_button.offsetHeight/2 + "px";
banner_left_arrow.style.top = 250 - banner_left_arrow.offsetHeight/2 + "px";
banner_right_arrow.style.top = 250 - banner_left_arrow.offsetHeight/2 + "px";


banner_timer_bar.style.height = "5%";


scaleX = banner_wrapper.getBoundingClientRect().width / banner_wrapper.offsetWidth;
scaleY = banner_wrapper.getBoundingClientRect().height / banner_wrapper.offsetHeight;


tiny_images_box[0].style.border = "5px solid";
tiny_images_box[0].style.borderImage = "linear-gradient(45deg,#392467,#A367B1) 1";


navigate_button.style.marginTop = window.innerHeight - navigate_button.offsetHeight - 20   + "px";

animateFirstBannerImage();


for(var i=0;i<statistic_values_span.length;i++){
    statistic_values[i] = statistic_values_span[i].innerHTML;
    statistic_values_span[i].innerHTML = 0;
}

window.addEventListener("scroll",function(){
    determineDivInViewport(about_us_buttons_wrapper,0);
    statistic_values_span.forEach(function(item,index){
        determineDivInViewport(document.querySelectorAll('#'+item.getAttribute("id"))[index],index);
    });
    svg_spans.forEach(function(item,index){
        determineDivInViewport(document.querySelectorAll('#'+item.getAttribute("id"))[index],index);
    });   
});

 
function determineDivInViewport(div_element,index){
    const element = div_element.getBoundingClientRect();
    if(((element.top > 0 && element.top < this.window.innerHeight)
       || (element.bottom > 0 && element.bottom < this.window.innerHeight))
       && ((element.left > 0 && element.left < this.window.innerWidth) || (element.right > 0 && right<this.innerWidth))){
         switch(div_element.getAttribute("class") || div_element.getAttribute("id")){
            case "about_us_buttons_wrapper":
                colorTheMenuItem(menu_items_children[1].textContent);
                for(var i=0;i<aboutus_buttons.length;i++){
                    aboutus_buttons[i].style.animation = "shakeButton 1s";    
                }
                break;
                case "statistic_value":
                    colorTheMenuItem(menu_items_children[3].textContent);
                    statusBoxIntervals(index);
                    break;
                case "svg_span":
                    animateCircularAroundSpan(index);
                    break;

         }
    }
}

mobile_menu_icon.addEventListener("click",function(){
    resp_side_menu.style.transition = "1s";
    resp_side_menu.style.left  = "10%";
});

side_menu_close_tab_wrapper.addEventListener("click",function(){
    resp_side_menu.style.transition = "1s";
    resp_side_menu.style.left  = "-100%";
});

banner_left_arrow.addEventListener("click",function(){
    changeImageSource(focused_banner_image);
});

banner_right_arrow.addEventListener("click",function(){
    changeImageSource(focused_banner_image);
});

function statusBoxIntervals(index){
    statistic_values_intervals[index] = setInterval(function(){
        if(parseInt(statistic_values_span[index].innerHTML)<parseInt(statistic_values[index])){
          statistic_values_span[index].innerHTML = parseInt(statistic_values_span[index].innerHTML) + 1;
        }else{
            clearInterval(statistic_values_intervals[index]);
        }                 
},10);
}


function animateCircularAroundSpan(index){
    svg_spans_path[index].style.animation = "svg_animation 0.5s linear forwards";
}

function showSearchBar(){
    search_box.style.transition = "0.5s";
    if(search_box.offsetWidth==0){
    search_box.style.visibility = "visible";
    search_box.style.width = "40%"; 
    }else{
        search_box.style.width = "0%"; 
        search_box.style.visibility = "hidden";
    }

}

increaseBannerTimerHeight();

function increaseBannerTimerHeight(){
   // rotateImageBanner();
    timer_bar_interval = setInterval(timerBar,1000);
}

function rotateImageBanner(){
    banner_wrapper.style.animation = "rotate_banner_image 1.5s";
}   

function setFrameOnBoxImage(focused_index){
    if(focused_index==0){
        setFrame(0,1);
        changeImageSource(focused_index);
    }else if(focused_index==1){
        setFrame(1,0);
        changeImageSource(focused_index);
    }

}

function changeImageSource(focused_index){
 
   if(focused_index==0){
      animateFirstBannerImage();
      banner_wrapper.src = banner_images_src[focused_index];
      setFrame(0,1);
      focused_banner_image = 1;
      second_banner_button_wrapper.style.display = "none";
      banner_wrapper_buttons_content[0].innerHTML = banner_buttons_content[0][0];
      banner_wrapper_buttons_content[1].innerHTML = banner_buttons_content[0][1];
   }else{
      banner_wrapper.style.webkitAnimation = "";
      banner_wrapper.src = banner_images_src[focused_index];
      setFrame(1,0);
      focused_banner_image = 0;
      second_banner_button_wrapper.style.display = "block";

      banner_wrapper_buttons_content[0].innerHTML = banner_buttons_content[1][0];
      banner_wrapper_buttons_content[1].innerHTML = banner_buttons_content[1][1];

   }

   banner_content_wrapper_topic.innerHTML = banners_topic[focused_index];
   banner_content_wrapper_paragraph.innerHTML = banners_paragraphs[focused_index];
   banner_timer_bar.style.height =   "0px";
   clearInterval(timer_bar_interval);
   timer_bar_interval = setInterval(timerBar,1000);
   

}

function timerBar(){
    if(banner_timer_bar.offsetHeight<banner_wrapper.offsetHeight-10){
        banner_timer_bar.style.transition = "1.5s";
        banner_timer_bar.style.height = banner_timer_bar.offsetHeight + 30 + "px"; 
        scaleX += 0.01;  scaleY += 0.01;
    }else{
        changeImageSource(focused_banner_image); 
    }
}

function setFrame(box_1,box_2){
    tiny_images_box[box_1].style.border = "5px solid";
    tiny_images_box[box_1].style.borderImage = "linear-gradient(45deg,#392467,#A367B1) 1";
    tiny_images_box[box_2].style.border = "none";
}

function animateFirstBannerImage(){
    banner_wrapper.style.animation = "zoomBannerImage 150s linear infinite";
    banner_wrapper.style.webkitAnimation = "zoomBannerImage 150s linear infinite";
}

var about_img_movement = setInterval(function(){
    if(!slide_down){
          navigate_button.style.marginTop = navigate_button.offsetTop + 15 +"px";
    }else{
          navigate_button.style.marginTop = navigate_button.offsetTop - 15 +"px";
    }
    navigate_button.style.transition = "2s";
    slide_down = !slide_down;
 },500);  

 
navigate_button.addEventListener("click",function(){
   window.scrollTo({top: 0, behavior: 'smooth'});
});


Array.from(menu_items_children).forEach(menu_item => {
    menu_item.addEventListener("click",function(){
       window.scrollTo({
          top:document.getElementsByName(menu_item.textContent)[0].offsetTop,
          behavior:"smooth"
       
        }); 
  
    });
    
  });


  function colorTheMenuItem(menu_item){
    Array.from(menu_items_children).forEach(menu_element => {
       if(menu_element.textContent == menu_item){
          menu_element.style.color = "#C499F3";
       }else{
          menu_element.style.color = "#7360DF";
       }
    });
 }

 Array.from(resp_side_menu_items).forEach(resp_menu_element => {
    resp_menu_element.addEventListener("click",function(){

        
        resp_menu_redirect_intv = setInterval(function(){
            if(resp_side_menu.offsetLeft <= -100){
                window.scrollTo({
                    top:document.getElementsByName(resp_menu_element.textContent)[0].offsetTop,
                    behavior:"smooth"
                 
                  }); 

                  clearInterval(resp_menu_redirect_intv);
            }
        },10);
        resp_side_menu.style.transition = "1s";
        resp_side_menu.style.left  = "-100%";
    });
 });
