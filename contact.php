<?php
require_once('header.php');
?>
<div id="contactFirstSection" class="fullWidth relative">
    <img src="images/banner2.jpg" alt="" class="off off1">  
    <img src="images/background f r CONTACT mobile.jpg" alt="" class="on">  
    <img src="images/banner1.jpg " alt="" class="on1">    
    <a name="status"></a></a>
    <div class="absolute contactBannerWriteUp">
        <h1>We will like to<br> hear from you</h1> 
        <!-- <p class="off">We would be glad to receive inquires from you regarding any of our petroleum products delivery services. You can contact us in any way convienent for you, either through phone call, through email or filling the form below and we will get back to you.</p> -->
    </div>
</div>
<div id="contactSecondSection" class="container-fluid">
    <div class="row">
        <div class="col-md-4">
            <div>            
                <h2>Contact Details</h2>
                <p>Get in touch with us regarding all our products.</p>
                <div class="row  partOne bottomMargin">
                    <div class="col-md-3">
                        <img src="images/office address.png" alt=""> 
                    </div>
                    <div class="col-md-9 content">
                        <b>Office Address</b><br>5a2, 2nd Street, Off Udi Street Osborne Forshore Estate, Ikoyi
                    </div> 
                </div>   
                <div class="row bottomMargin">
                    <div class="col-md-3">
                        <img src="images/phone icon.png" alt=""> 
                    </div>
                    <div class="col-md-9 content">
                        <b>Phone</b><br>01-4531960
                    </div> 
                </div>    
                <div class="row bottomMargin">
                    <div class="col-md-3">
                        <img src="images/email address icon.png" alt=""> 
                    </div>
                    <div class="col-md-9 content">
                        <b>Email</b><br>info@archetypeoil.com
                    </div> 
                </div>  
                <div class="row">
                    <div class="col-md-2">
                       
                    </div>
                    <div class="col-md-10">
                    <a href="" target="_blank"><img src="images/facebook icon.png" alt=""></a> <a href="" target="_blank"><img src="images/twitter icon.png" alt=""></a> <a href="" target="_blank"><img src="images/linkedin.png" alt="" style="height:33px; width:33px;"></a> 
                    </div> 
                </div>            
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-7">
            <?php
                if(isset( $_SESSION['b'])){
                    echo "<p class='red'>Your message field should not be empty</p>";
                    unset($_SESSION['b']);
                }elseif(isset( $_SESSION['a'])){
                    echo "<p class='green'>Mail Sent Successfully</p>";
                    unset($_SESSION['a']);
                }elseif(isset( $_SESSION['c'])){
                    echo "<p class='red'>Error Sending Mail</p>";
                    unset($_SESSION['c']);
                }              
            ?>
            <h2>Send a Message</h2>
            <hr>
            <form action="transact.php" method="POST" class="ng-pristine ng-valid">
                <div class="row myForm aos-init aos-animate" data-aos="fade-down-left">                        
                    <div class="col-md-6">                       
                        <input type="text" name="firstName" id="" placeholder="First Name" required="">
                    </div>
                    <div class="col-md-6 mr">
                    <input type="text" name="lastName" id="" placeholder="Last Name" required="">
                    </div>            
                </div>
                <div class="row myForm aos-init aos-animate"  data-aos="fade-down-left">                        
                    <div class="col-md-6">                       
                        <input type="email" name="email" id="" placeholder="Email" required="">
                    </div>
                    <div class="col-md-6 mr">
                    <input type="text" name="phoneNumber" id="" placeholder="Phone Number" required="">
                    </div>            
                </div>
                <div class="row myForm aos-init aos-animate"  data-aos="fade-down-left">                        
                    <div class="col-md-6">                       
                        <input type="text" name="companyName" id="" placeholder="Company Name" required="">
                    </div>
                    <div class="col-md-6 mr">
                        <input type="text" name="subject" id="" placeholder="Subject" required="">
                    </div>            
                </div>
                <div class="row myForm aos-init aos-animate" data-aos="fade-down-left">
                    <div class="col-md-12">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required="">                   
                        </textarea>
                    </div>                                
                </div>
                <div class="row myForm" style="margin-top:15px;">
                    <div class="col-md-12">
                    <input type="submit" value="Send Message" name="submit">
                    </div>                                
                </div>
            </form>
        </div>
    </div>
</div>
<?php
require_once('footer.php');
?>