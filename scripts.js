$(document).ready(function(){
	$(".wrapper").submit((e)=>{
		e.preventDefault();
		console.log("user submitted!")
		$('.wrapper input').each(function(){
			var userInput = $(this).val();
			var thisClass = $(this).attr('class');
			var errorClass = `.${thisClass}-error`;
			if(userInput === ""){
				$(errorClass).html("Can not be empty")
				$(errorClass).show();
			}else{
				$(errorClass).hide();
			}
		});
	});
});

