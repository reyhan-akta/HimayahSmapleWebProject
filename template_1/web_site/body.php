<?php
  $statistic_images_array = ["statistics_4.jpg","statistics_3.jpg","statistics_2.jpg","banner_2.png"];
  $statistic_text_array   = ["أعمال الضغط والمناصرة","التوجيه للقضاء","تحقيق الوساطة والتواصل مع الجهات المسؤولة","تقديم الاستشارات القانونية"];
  $statistics_array = [500,300,100,350];
  $activities_images = ["activity_1.jpg","activity_2.jpg","activity_3.jpg"];
  $activities_topics = ["المؤتمر الصحفي","البرنامج التعليمي","مؤتمر إطلاق المشروع"];
  $activities_paragraphs = ["مشاركة فريق مشروع حماية بمؤتمر صحفي لجمعية حقوق اللاجئين في إسطنبول في محاولة للتصدي لظاهرة العنصرية المتزايدة وخطاب الكراهية الموجه ضد اللاجئين السوريين في تركيا، شارك فريق من مشروع “حماية”",
                            "دورة تعليمية حول المناصرة القانونية لحقوق اللاجئين ضمن أعمال مشروع حماية في التوعية القانونية ورفع كفاءة العاملين والمتطوعين في أعمال الدعم القانوني والحقوقي للاجئين، نظّم مشروع حماية بالتعاون مع معهد",
                            "بتاريخ 15 أغسطس/آب 2023، أطلق “منبر منظمات المجتمع المدني” مشروع “حماية” الهادف لحل الإشكالات القانونية التي يواجهها اللاجئون، خاصة السوريون، في تركيا، في إسطنبول التركية. وتم الإعلان عن المشروع في"]; ?>
<div class = "aboutus" name="ABOUT">
    <div class="sub_aboutus">
        <div class="about_us_photo">
        <div class="about_img_overlay"></div>  
        <img src="assets/about_.jpg"></div>
        <div class="about_us_content_wrapper">
           <div class="about_us_content_flex_wrapper">
              <h3>
                <!-- حماية -->
                <span id="svg_span">
                  <span id="svg_topic">Lorem</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 500 155" preserveAspectRatio="none">
                    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
                  </svg>
                </span>
                <span style="margin-top:-9px">Ipsum</span>
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div class="about_us_buttons_wrapper">
                 <div class="about_us_button_box">More</div>
                 <div class="about_us_button_box">Support Request</div>
                 <div class="about_us_button_box" style="margin-right:0px;float:right;">Donate</div>
              </div>
            </div>    
        </div>
   </div>
    
</div>

<div class="istatistics_wrapper" name="REPORTS">
    <div class="sub_aboutus">
         <h3 id="sub_istatis_topic">
            <span >Lorem</span>
            <span id="svg_span">
              <span id="svg_topic" style="width: 114px;top:-1px;">Ipsum</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path style="stroke: #FFD1E3;" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path></svg>
            </span>
         </h3></br></br></br> 
         <p id="statics_paragraph"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua : +</span><span style="margin-right:0px;">1500</span></p></br></br>
         <p id="statics_paragraph"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span></p>
      <!--   <p></p> -->
         <div class="statistics_box_wrapper">
          <?php for($i=0;$i<4;$i++){ ?>
           <div class="statistics_box">
             <div class="statistics_box_image_wrapper">
                  <img src="assets/statistics/<?php echo $statistic_images_array[2]; ?>">
             </div>
             <div class="statistics_val_wrapper">
               <span class="statistic_value" id="statistic_value"><?php echo $statistics_array[$i];  ?></span>
               <span>+</span>
             </div>
             <div class="statistics_val_wrapper" style="margin-top:0px;">
               <span style="font-size:21px;">Project</span>
             </div>
             <div class="statistics_val_wrapper">
               <span style="font-size:14px;color:#e4c8ff;">Lorem ipsum dolor sit amet</span>
             </div>
           </div>
           <?php } ?>
         </div>
    </div>
</div>


<div class="activities_wrapper" name="ACTIVITIES">
    <div class="sub_activities_wrapper">
         <h3 id="sub_istatis_topic">
            <span style="color:#33186B;">Lorem</span>
            <span id="svg_span">
              <span id="svg_topic" style="color:#33186B;top:-1px;right:0px;">Ipsum</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 500 155" preserveAspectRatio="none">
                 <path style="stroke: #4f3092;" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"></path>
              </svg>
            </span>
         </h3></br></br>
         
      <!--   <p></p> -->
         <div class="activity_boxes_wrapper">
          <?php for($i=0;$i<3;$i++){ ?>
           <div class="activity_box">
               <div class="activity_image_wrapper">
                 <img src="assets/statistics/<?php echo $statistic_images_array[2]; ?>">
               </div>
               <h3 class="activity_topic">
                 <span>Lorem Ipsum Detail</span>
               </h3> </br>
               <!-- paragraph field  --> 
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <a href="#">Learn More</a>
           </div>
           <?php } ?>
         </div>
    </div>
</div>