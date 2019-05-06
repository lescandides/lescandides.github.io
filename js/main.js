$(function() {
        // Google Analytics: change UA-XXXXX-X to be your site's ID.
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
})


// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


$(document).ready(function () {
	init();
	function init(){
		var current = 0;
		var audio = $('#audio');
		var playlist = $('#playlist');
		var tracks = playlist.find('li a');
		var len = tracks.length - 1;
		audio[0].volume = .10;
		audio[0].play();
		playlist.on('click','a', function(e){
			e.preventDefault();
			link = $(this);
			current = link.parent().index();
			run(link, audio[0]);
		});
		audio[0].addEventListener('ended',function(e){
			current++;
			if(current == len){
				current = 0;
				link = playlist.find('a')[0];
			}else{
				link = playlist.find('a')[current];    
			}
			run($(link),audio[0]);
		});
	}
	function run(link, player){
			player.src = link.attr('href');
			par = link.parent();
			par.addClass('active').siblings().removeClass('active');
			player.load();
			player.play();
	}
});
