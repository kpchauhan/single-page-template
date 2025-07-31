$(document).ready(function(){  
var lastId, 
    topMenu = $(".navbar-nav"), 
    topMenuHeight = topMenu.outerHeight()+70, 
    topMenuHeightmobile = topMenu.outerHeight()+0, 

    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	$(window).scroll(function(){
	// var fromTop = $(this).scrollTop()+topMenuHeight;
	if ($(window).width() < 1200) {
	var fromTop = $(this).scrollTop()+topMenuHeightmobile;
	}
	else {
	var fromTop = $(this).scrollTop()+topMenuHeight;
	}
	var cur = scrollItems.map(function(){
	    if ($(this).offset().top < fromTop)
	        return this;
	    });
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
		    lastId = id;
		    menuItems
		        .parent().removeClass("active")
		        .end().filter("[href='#"+id+"']").parent().addClass("active");
		}                   
	});  



    $(document).on('click', ".nav-link", function () {
        $('header').removeClass('open');
        return false;
    });
    
});