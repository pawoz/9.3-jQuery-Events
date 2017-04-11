//carousel
$(function(){
	var carouselList = $('#carousel ul'),
		prevBtn = $('#prevbtn'),
		nextBtn = $('#nextbtn');
	
//interval
	setInterval(function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);	
	}, 2500);
	
	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft: 0});
	};
	prevBtn.on('click', changeOneSlidePrev);
	
	function changeOneSlidePrev() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
			firstItem.before(lastItem);
			carouselList.css({marginRight: 0});
			carouselList.animate({'marginRight':400}, 500);
	};
	nextBtn.on('click', changeOneSlideFwd);
	
	function changeOneSlideFwd() {
		var firstItem = carouselList.find('li:first'),
			lastItem = carouselList.find('li:last');
			lastItem.after(firstItem);
			carouselList.css({marginLeft: 0});
			carouselList.animate({'marginLeft':-400}, 500);
	};
});
