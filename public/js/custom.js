$(document).ready(function () {
    var addressLocation = window.location.href;
    $('ul.nav li').each(function (){
    	var menuHref = $(this).find('a').attr('href');   
		if(addressLocation.indexOf(menuHref) != -1)  {
			$('ul.nav li').removeClass('active');
			$(this).addClass('active');
		}
    });
});