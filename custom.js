/*I worked back and forth with my html file to come up with classes that fit for jquery. I did several
tests here and there checking my work by opening it up in the browser. When things did not go
perfect I just tried another angle or googled responses, there was not much of that on this,
Until I got to the problem I am working on right now. I am trying to identify a way to hide everything
but the selected class, but my classes are all identified the same, I thought "this" would do the trick, but
no such luck. I will get it though, I have been reading around.*/
$(document).ready(function() {
	$(".desc").hide();
	$(".hs").hide();
	$(".gal").click(function(){
		$(".desc, .hs").fadeToggle(1000);
		$(this).toggleClass('see');
		
	});
});