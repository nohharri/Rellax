//requires jQuery plugin
function Rellax() {
	//check to see if Attribute exists or is set
	var checkAttr = function(attr) {
		if(attr == null)
			//there is no attr at all
			return 0;
		else {
			if(!attr)
				//attr exists but is empty
				return 1;
			else
				//attr has a value
				return 2;
		}
	}
	//Instantiate full background
	$("body").css({
		margin: 0,
		padding: 0,
	});

	//backgroundY assigns a vertical scroll element
	//so the width is always 100% of its container.
	$("*[rellax]").css({
		"position": "fixed",
		"background-color" : "black"
	});

	//find all instances of parallax
	//O(n) time where n = # of rellax attributes
	$('[rellax]').each(function() {
		var rellax          = $(this);
		var widthAttr       = $(this).attr("width");
		var heightAttr      = $(this).attr("height");
		var backgroundURL   = $(this).attr("backgroundURL");
		var backgroundColor = $(this).attr("backgroundColor");

		//check to see width is set
		if(checkAttr(widthAttr) == 2) {
			$(this).css({
				"width": widthAttr //ex. 200px
			});
		}
		//width is not set, default is img width
		else {
			console.log("width not set, using default value.");
			if(checkAttr(backgroundURL) == 2) {
				console.log("backgroundURL value set.");
				var img = new Image();
				img.src = $(this).attr("backgroundURL");
				$(img).on('load', function() {
					console.log(img.width);
				 	$(rellax).css({
				 		"width": img.width + "px"
				 	});
				});
			}
		}
		//height attribute exists so set height.
		if(checkAttr(heightAttr) == 2) {
			$(this).css({
				"height": heightAttr //ex. 200px
			});
		}
		//height is not set, default is img height
		else {
			//background url exists and is set to a url
			if(checkAttr(backgroundURL) == 2) {
				var img = new Image();
				img.src = $(this).attr("backgroundURL");
				$(img).on('load', function() {
				 	$(rellax).css({
				 		"height": img.height + "px"
				 	});
				});
			}
		}
		//check if backgroundURL exists, if so, set a background cover
		if(checkAttr(backgroundURL) == 2) {
			$(this).css({
				"background": "url(" + backgroundURL + ") no-repeat center center",
				"-webkit-background-size": "cover",
				"-moz-background-size": "cover",
  				"-o-background-size": "cover",
				"background-size": "cover"
			});
		}
		if(checkAttr(backgroundColor) == 2) {
			$(this).css({
				"background-color": backgroundColor
			});
		}
	});
	function scrollEvent() {
        viewportTop = $(window).scrollTop();
        windowHeight = $(window).height();
        viewportBottom = windowHeight+viewportTop;
 
        if($(window).width())
 
        $('[rellax]').each(function() {
            var xDistance;
            var yDistance;
            if(checkAttr($(this).attr('xSpeed')) == 2) {
            	xDistance = viewportTop * $(this).attr('xSpeed');
            }
            else {
            	xDistance = 0;
            }
            if(checkAttr($(this).attr('ySpeed')) == 2) {
            	yDistance = viewportTop * $(this).attr('ySpeed');
            }
            else {
            	yDistance = 0;
            }
            $(this).css('transform','translate3d(' + -window.scrollTop - xDistance + 'px, ' + -yDistance +'px,0)');
        });
	}
	function draw() {
        requestAnimationFrame(draw);
        // Drawing code goes here
        scrollEvent();
    }
    draw();
}

//Instantiate Rellax
$(document).ready(function() {
	var rellax = new Rellax();
});

