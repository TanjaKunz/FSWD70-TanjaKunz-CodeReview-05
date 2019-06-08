$(document).ready(function(){
		
	$('.pic').attr('src', films[0].pic);
	$('.name').text(films[0].name);		
	$('.short').text(films[0].short);		
	// $('.genre').text(films[0].genre);		
	$('.counter').text(Math.floor((Math.random() * 1000) + 1));


	for ( i = 1; i < films.length; i++) {
		
		$('.box').clone().addClass('clone').appendTo('#films');

		var img = $('.pic');
		$(img[i]).attr('src', films[i].pic);

		var name = $('.name');
		$(name[i]).text(films[i].name);

		var short = $('.short');
		$(short[i]).text(films[i].short);

		// var genre = $('.genre');
		// $(genre[i]).text(films[i].genre);

		var counter = $('.counter');
		$(counter[i]).text(Math.floor((Math.random() * 1000) + 1));
	};





console.log(img);
console.log(name);
console.log(short);
// console.log(genre);
console.log(counter);
});


