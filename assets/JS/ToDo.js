$("ul").on("click","li",function(event){ //"li" this will apply to all lis whethr they existed or entered later 
	$(this).toggleClass("textSetting");

});

$("ul").on("click","span",function(){ //"span" this will apply to all spans whethr they existed or entered later  
	$(this).parent().fadeOut("500",function(){ //only parent of span will fade 
		$(this).remove();// will remove permanently delete even from inspext
	});
	event.stopPropagation(); //will stop bubling up other functions/events after it
});

$("input[type='text']").keypress(function(event){
	if(event.charCode==13){
		//grabbing input
		var grabText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+grabText+"</li>");
	}
});
$(".fa-pencil-alt").on("click",function(){
	$("input[type='text']").fadeToggle();
});
