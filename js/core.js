
$(document).ready(function() { 
	
	$('.main-career-top-cnt').click(function(){
		var the_link  = $(this).attr('lang');
		$('.career-top-cnt').slideUp();
		$('.'+the_link+'').show();
		//$('.career-cnt').slideDown('slow');
		
	});
	
	
	$('.sde-ico').click(function(){
		
		var id = $(this).attr('lang');
		$('.'+id+'-ico-dv').show();
		$('.'+id+'-ico-frst').hide();
		$('.'+id+'-ico-scnd').show();
		
	});
	
	$('.sde-ico').mouseleave(function(){
			
		var id = $(this).attr('lang');
		$('.'+id+'-ico-dv').hide();
		$('.'+id+'-ico-scnd').hide();
		$('.'+id+'-ico-frst').show();
		
	});
	
	
	$('.teleco-lst-cnt').click(function(){
		var the_link  = $(this).attr('lang');
		$('.teleco-lst-cnt').removeClass('teleco-lst-active');
		
		$('.telcomm-cnt-all').slideUp();
		$('#'+the_link+'').slideDown('slow');	
				
		$(this).addClass('teleco-lst-active');
	});
	
	$('.career-sde-cnt').click(function(){
		var the_link  = $(this).attr('lang');
		$('.jb-vac').slideUp('500');
		$('.'+the_link+'').slideDown('500');
		//$('.career-cnt').slideDown('slow');
		
	});
	
	$(".phone_n_").keyup(validate_inputed_number);
	
	$('#send_cont').click(process_contactform);
	
	$('.stratform').click(process_strategyform);
	
	$('.hire-sbmt').click(process_outsourceform);
});

function process_outsourceform(){
	
	var name 	= $('#name').val();
	var email 		= $('#email').val();
	var phone		= $('#phone').val();
	var companyname	= $('#companyname').val();
	var description = $('#description').val();
	
	var q = "";
	
	if(name == ""){
		q += "Please provide your Name \n";
	}

	if(email == ""){
		q += "Please provide your email addresses \n";
	}
	
	if(phone == ""){
		q += "Please provide your Phone Number \n";
	}
	
	if(companyname == ""){
		q += "Please provide your Company Name \n";
	}
	
	if(description == ""){
		q += "Please provide a Project Description";	
	}

	if(q == ""){
		
			$('.error').removeClass('error2'); 
			
			$.ajax({
				type: "POST", 
				url: "email.php", 
				data: { "action": "outsource", "name": name, "email": email, "phone": phone, "companyname": companyname, "description": description},
				success:function(data){ 
					
					if(data == "wrong email"){
						
						$('.error').text('Wrong Email Format, Please provide a valid email');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
						
					}else if(data == "done"){
						
						$('#name').val('');
						$('#email').val('');
						$('#phone').val('');
						$('#companyname').val('');
						$('#description').val('');
						
						$('.error').addClass('error2');
						$('.error').text('Message successfully sent.');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); $('.close').click(); }, 10000);
						
					}else if(data == "error"){
						
						$('.error').text('There was a problem sending your email please try again');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
					}
				}
			});
	}else{
		//alert(q);
		
		$('.error').removeClass('error2'); 
		$('.error').text(q);
		$('.error').animate({height:"show", opacity:"show"});
		setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
	}
}


function process_strategyform(){
	
	var firstname 	= $('#firstname').val();
	var lastname 	= $('#lastname').val();
	var email 		= $('#email').val();
	var phone		= $('#phone').val();
	var companyname	= $('#companyname').val();
	var course		= $('#course').val();
	
	var q = "";
	
	if(firstname == ""){
		q += "Please provide your First Name /n";
	}
	
	if(lastname == ""){
		q += "Please provide your Last Name /n";
	}
	
	if(email == ""){
		q += "Please provide your email addresses<br>";
	}
	
	if(phone == ""){
		q += "Please provide your Phone Number /n";
	}
	
	if(companyname == ""){
		q += "Please provide your Company Name <br>";
	}
	
	if(course== ""){
		q += "Please fill the course field <br>";
	}
	
	if(q == ""){
			$('.error').removeClass('error2'); 
			
			$.ajax({
				type: "POST", 
				url: "email.php", 
				data: { "action": "strategy_frm", "firstname": firstname, "lastname": lastname,"email": email, "phone": phone, "companyname": companyname, "course": course},
				success:function(data){ 
					
					if(data == "wrong email"){
						
						$('.error').text('Wrong Email Format, Please provide a valid email');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
						
					}else if(data == "done"){
						
						$('#firstname').val('');
						$('#lastname').val('');
						$('#email').val('');
						$('#phone').val('');
						$('#companyname').val('');
						$('#course').val('');
						
						$('.error').addClass('error2');
						$('.error').text('Message successfully sent.');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); $('.close').click(); }, 10000);
						
					}else if(data == "error"){
						
						$('.error').text('There was a problem sending your email please try again');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
					}
				}
			});
	}else{
		alert(q);
		/*$('.error').text(q);
		$('.error').animate({height:"show", opacity:"show"});
		setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 5000);*/
	}
}


function process_contactform(){
	var clientname = $('#contact_name').val();
	var clientemail = $('#contact_email').val();
	var clientmessage = $('#contact_message').val();
	
	var q = "";
	
	if(clientname == ""){
		q += "Please provide your name /n";
	}
	
	if(clientemail == ""){
		q += "Please provide your email addresses<br>";
	}
	
	if(clientmessage == ""){
		q += "Please provide a message <br>";
	}
	
	if(q == ""){
			$('.error').removeClass('error2'); 
			
			$.ajax({
				type: "POST", 
				url: "email.php", 
				data: { "action": "contact_frm", "clientname": clientname, "email": clientemail, "clientmessage": clientmessage},
				success:function(data){ 
					
					if(data == "wrong email"){
						
						$('.error').text('Wrong Email Format, Please provide a valid email');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
						
					}else if(data == "done"){
						
						$('#contact_name').val('');
						$('#contact_email').val('');
						$('#contact_message').val('');
						$('.error').addClass('error2');
						$('.error').text('Message successfully sent.');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
						
					}else if(data == "error"){
						
						$('.error').text('There was a problem sending your email please try again');
						$('.error').animate({height:"show", opacity:"show"});
						setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 10000);
					}
				}
			});
	}else{
		alert(q);
		/*$('.error').text(q);
		$('.error').animate({height:"show", opacity:"show"});
		setTimeout(function(){ $('.error').animate({height:"hide", opacity:"hide"}); $('.error').text(''); }, 5000);*/
	}
}


function validate_inputed_number(){
	//remove lettes and commas
	var the_box_value = $(this).val().replace(/[^\d.]/g, '');
	$(this).val(the_box_value);
	
	//Remove double dots
	the_box_value = $(this).val();
	var occurances = occurrences(the_box_value, ".", "");
	var last_char = the_box_value.charAt( the_box_value.length-1 );
	
	if(last_char == "." && occurances > 1) {
		$(this).val( the_box_value.slice(0, the_box_value.length-1) );	
	}
}


function occurrences(string, subString, allowOverlapping){

    string+=""; subString+="";
    if(subString.length<=0) return string.length+1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}


function addCommas(nStr){
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}



// JavaScript Document