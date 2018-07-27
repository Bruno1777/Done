
$("#butt").click(function(){
    $("#box").css("font-weight", "900");
});


$('#tat').click(function(){

	$("#box").css("font-family", 'italic')
});



$('#tit').click(function(){

	$("#box").css("text-decoration", "underline");

});
	

$("#select").click(function(){
var x = $("#select").val();



	$("#box").css("font-size", x+"px");



});



$("#list").click(function(){
	var y = $("#list").val();
	$("#box").css("font-family", y);



});