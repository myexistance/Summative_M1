$(document).ready(function(){
   $("#Dlisthiden").hide();
     $("#add-to-list").click(function(){
     	
     	var toAdd = $('#nextDevice').val();
     	$("ul").append('<li class="center">'+toAdd+'</li>');
     $("#hide").hide();
      $("#FooTer").show();	
      $("#Dlisthiden").show();
      // $(".switch_3").show();
      
    	
  });
    
});



