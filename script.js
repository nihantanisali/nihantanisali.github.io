$(document).ready(function(){
	var clicked;
	$(".email").append(email());
	function email(){
		var email = "nihan";
		email = email + " dot";
		email = email + " tanisali";
		email = email + " at ";
		email = email + " inria";
		email = email + " dot";
		email = email + " fr";
		return email;
}

	function email_(){
		var email = "nihan";
		email = email + ".";
		email = email + "tanisali";
		email = email + "@";
		email = email + "inria";
		email = email + ".";
		email = email + "fr";
		return email;
}

	$(".email2").append(email2());
	function email2(){
		var email = "nihan";
		email = email + ".";
		email = email + "tanisali";
		email = email + "@";
		email = email + "inria";
		email = email + ".";
		email = email + "fr";
		return email;
	}

	function email2_(){
		var email = "nihan";
		email = email + ".";
		email = email + "tanisali";
		email = email + "@";
		email = email + "inria";
		email = email + ".";
		email = email + "fr";
		return email;
	}

	$(".copy-paste-symbol").click(function(){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(email_()).select();
		document.execCommand("copy");
		$temp.remove();
		$("#alerter").text("e-mail copied to clipboard").fadeIn(250).delay(1500).fadeOut(250);
	});
	$(".copy-paste-symbol").mouseenter(function(){
		$("body").css('cursor','pointer');

	});
	$(".copy-paste-symbol").mouseleave(function(){
		$("body").css('cursor','');
	});

	$(".copy-paste-symbol2").click(function(){
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(email2_()).select();
		document.execCommand("copy");
		$temp.remove();
		$("#alerter2").text("e-mail copied to clipboard").fadeIn(250).delay(1500).fadeOut(250);
	});
	$(".copy-paste-symbol2").mouseenter(function(){
		$("body").css('cursor','pointer');

	});
	$(".copy-paste-symbol2").mouseleave(function(){
		$("body").css('cursor','');
	});

})
