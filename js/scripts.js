//carousel
$(function(){
	var carouselList = $('#carousel ul'),
		prevBtn = $('#prevbtn'),
		nextBtn = $('#nextbtn'),
		interval;
	
//interval
	interval = setInterval(changeOneSlideFwd, 2500);
	
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

		clearInterval(interval);	
		firstItem.before(lastItem);
		carouselList.css({marginLeft: -400});
		carouselList.animate({marginLeft: 0}, 500);
	};
	nextBtn.on('click', changeOneSlideFwd);
	
	function changeOneSlideFwd() {
		carouselList.animate({marginLeft: -400}, 500, moveFirstSlide);
	};
});
