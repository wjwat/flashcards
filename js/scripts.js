$(document).ready(function(){
 

  $(".card-title").click(function() {
		$(this).siblings('.card-text').toggleClass('our-def');
  });
});