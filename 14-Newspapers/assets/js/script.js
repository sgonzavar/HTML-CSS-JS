$(window).load(function(){
	
	var imgPath = "assets/img/";
	
	// Define 6 paper covers:
	
	var papers = [
		{
			line1:"The financial",
			line2:"chrisis is a hoax!",
			subtitle:"Economist admits practical joke"
		}, {
			line1:"Deeply fried now",
			line2:"considered healthy",
			subtitle:"Scientists change the definition of \"Healthy\""
		}, {
			line1:"Apple announces",
			line2:"the new iphone 9",
			subtitle:"5, 6, 7 and 8 deemed \"not hip enough\""
		}, {
			line1:"The world did end",
			line2:"on may 21st!",
			subtitle:"Priest argues we are actually dead"
		}, {
			line1:"France imposes an",
			line2:"internet kitten tax",
			subtitle:"Posting a cat picture on the internet will cost €3"
		}, {
			line1:"Thank you &",
			line2:"goodbye",
			subtitle:"The Zine Weekly takes its farewell"
		}
	];

	// Check whether canvas and CSS3 animations are supported:

	if(!$.support.canvas){
		$('#fin').html('Sorry, your browser does not<br />support &lt;canvas&gt;').show();
		return;
	}
	
	if(!$.support.css3Animation){
		$('#fin').html('Sorry, your browser does not<br />support CSS3 Animations').show();
		return;
	}
	
	// Use jQuery.Deferred to bind a callback when all
	// the images that comprise the paper are loaded:
	
	$.when(
	
		loadImage(imgPath+"paper_top.png"),
		loadImage(imgPath+"paper_left.png"),
		loadImage(imgPath+"paper_center.jpg"),
		loadImage(imgPath+"paper_right.png"),
		loadImage(imgPath+"paper_bottom.png")
		
	).then(function( imgTop, imgLeft, imgCenter, imgRight, imgBottom ){
		
		// Loop through the paper covers and
		// create a new canvas for each one:
		
		$.each(papers,function(i){
			
			var canvas	= document.createElement("canvas"),
				c		= canvas.getContext("2d");
		
			canvas.width = 717;
			canvas.height = 526;

			c.drawImage( imgTop, 0, 0 );
			c.drawImage( imgLeft, 0, 12 );
			c.drawImage( imgCenter, 14, 12 );
			c.drawImage( imgRight, 711, 12 );
			c.drawImage( imgBottom, 0, 516 );
			
			// Drawing the text using our helper
			// function (see at the bottom):
			
			drawText( this.line1, this.line2, this.subtitle, c, 358, 250 );
			
			// Appending the element to the page.
			// This triggers the CSS3 animation.
			
			setTimeout(function(){
				$("body").append(canvas);
			},i*5800);
			
		});
		
		// "This is all"
		$('#fin').delay(papers.length*5800).fadeIn();
	});

	
	/*------------------------
		Helper functions
	------------------------*/
	

	// Load an image by URL and resolve a jQuery.Deferred:
	
	function loadImage(src){
		
		var def = new $.Deferred(),
			img = new Image();
		
		img.onload = function(){
			
			//	Resolve the deferred. The img parameter
			//	will be available in the then function:
			
			def.resolve(img);
		}
		
		// Always set the src attribute
		// after the onload callback:
		
		img.src = src;
		
		return def.promise();
	}
	
	// Draw two lines of text and a subtitle
	// on the canvas (passed as the c param):
	
	function drawText( line1, line2, subtitle, c, x, y ){
		
		c.font = "65px Anton,Calibri";
		c.textAlign = "center";
		c.fillStyle = "#3e3e3e";
		
		c.fillText(line1.toUpperCase(),x,y);
		c.fillText(line2.toUpperCase(),x,y+80);
		
		c.font = "italic 20px Georgia,serif";
		c.fillStyle = "#737373";
		
		c.fillText(subtitle,x,y+120);
	}
});

(function(){
	
	// Adding custom checks for canvas and css3
	// animations support, to the jQuery.support object:
	
	$.support.canvas = 'getContext' in document.createElement('canvas');
	
	$.support.css3Animation = (function(){
		var sp = $('<span>');
		
		return (
			sp.css("-webkit-animation") !== undefined	||
			sp.css("-moz-animation") !== undefined		||
			sp.css("animation") !== undefined
		);
		
	})();
})();