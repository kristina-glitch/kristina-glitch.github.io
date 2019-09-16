$(document).ready(function() {
  $("#cons-submit").click(function(e) {

    e.preventDefault();
    var name = $(".fname");
    var phone = $(".fphone");
    var email = $(".femail");
    if (name.val() == "") {
		$("#fname").html("This field is required");
		$(".fname").css({"outline": "1px solid red"});    
	}
	else {
		$("#fname").html("");
		$(".fname").css({"outline": "1px solid green"});	
		}
	if (phone.val() == "") {
		$("#fphone").html("This field is required");
		$(".fphone").css({"outline": "1px solid red"});	
	}
	else {
		$("#fphone").html("");	
		$(".fphone").css({"outline": "1px solid green"});
		}

	if (email.val() == "") {
		$("#femail").html("This field is required");
		$(".femail").css({"outline": "1px solid red"}); 
	}
	else {
		$("#femail").html("");
		$(".femail").css({"outline": "1px solid green"}); 	
		}

    if ((name.val() == "") || (phone.val() == "") || (email.val() == ""))  {
    	return false;
    }
    else {
    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      data: {
        "name": name.val(),
        "phone": phone.val(),
        "email": email.val() 
      },
      success: function(data) {
        console.log(data);
      },
      error: function(er) {
        console.log(er);
      }
    });
       $("#cons").html('Thank you! Your message has been successfully sent');
	}
  })
  $("#contact-submit").click(function(e) {
    e.preventDefault();
    var name = $(".contact-name");
    var email = $(".contact-email");
    var msg = $(".contact-msg");
    if (name.val() == "") {
		$("#contact-name").html("This field is required");
		$(".contact-name").css({"outline": "1px solid red"});    
	
	}
	else {
		$("#contact-name").html("");
		$(".contact-name").css({"outline": "1px solid green"});	
		}
	if (email.val() == "") {
		$("#contact-email").html("This field is required");
		$(".contact-email").css({"outline": "1px solid red"});	
	}
	else {
		$("#contact-email").html("");	
		$(".contact-email").css({"outline": "1px solid green"});
		}

	if (msg.val() == "") {
		$("#contact-msg").html("This field is required");
		$(".contact-msg").css({"outline": "1px solid red"}); 
	}
	else {
		$("#contact-msg").html("");
		$(".contact-msg").css({"outline": "1px solid green"}); 	
		}

    if ((name.val() == "") || (email.val() == "") || (msg.val() == ""))  {
    	return false;
    }
    else {
    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      data: {
        "name": name.val(),
        "email": email.val(),
        "msg": msg.val() 
      },
      success: function(data) {
        console.log(data);
      },
      error: function(er) {
        console.log(er);
      }
    });
     $("#cont").html('Thank you! Your message has been successfully sent');
	}
  })
});