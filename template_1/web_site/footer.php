<?php

  $footer_items = array(array("Resources","Application","Documentation","Systems","FAQ"),
                  array("Company","About Us","Blog","Careers"),
                  array("Social","Facebook","Twitter")); 

   $footer_icons = array(array("fa fa-link","fa fa-link","fa fa-link","fa fa-link"),
                         array("fa fa-link","fa fa-link","fa fa-link"),
                        array("fa fa-envelope-o","fa fa-phone"));               
?>

<div class="footer">
    <div class="sub_footer">
        <div class="footer_box">
            <div class="footer_logo" style="background-color:white;">
                
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <?php for($i=0;$i<3;$i++){ ?>
            <div class="footer_box">
              <span><?php echo $footer_items[$i][0]; ?></span></br>
              <?php for($j=1;$j<count($footer_items[$i]);$j++){ ?>
              <label><i class="<?php echo $footer_icons[$i][$j-1]; ?>" aria-hidden="true"></i>&nbsp;&nbsp; <?php echo $footer_items[$i][$j];  ?></label>
              <?php } ?>
            </div>
        <?php  } ?>
    </div>
</div>

<div class="navigate_button">
    <i class="fa fa-chevron-up" aria-hidden="true"></i>
</div>



<script src="script/script.js"></script>
<script src="script/responsive.js"></script>

</body>
</html>