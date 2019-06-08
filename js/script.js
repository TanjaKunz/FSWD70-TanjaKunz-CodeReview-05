$(document).ready(function(){
		
	$('.pic').attr('src', data[0].pic);
	$('.movie').text(data[0].name);		
	$('.short').text(data[0].short);		
	// $('.genre').text(films[0].genre);		
	$('.counter').text(Math.floor((Math.random() * 1000) + 1));


	for ( i = 1; i < data.length; i++) {
		
		$('.box:first').clone().appendTo('#films');

		var img = $('.pic');
		$(img[i]).attr('src', data[i].pic);

		var movie = $('.movie');
		$(movie[i]).text(data[i].name);

		var short = $('.short');
		$(short[i]).text(data[i].short);

		// var genre = $('.genre');
		// $(genre[i]).text(data[i].genre);

		var counter = $('.counter');
		$(counter[i]).text(Math.floor((Math.random() * 1000) + 1));
	};



	// var likeBtn = $('.likeBtn');


	$('.likeBtn').click(function() {
		var knot = $(this).parents('div.cntBox');
		var target = knot.find('.counter');

		var cnt = $(target).html();
			cnt = parseInt(cnt)+1;

		$(target).text(cnt);

	    });


	// for ( i = 0; i < likeBtn.length; i++) {

	// 	$(likeBtn[i]).click(function () {
	// 		var knot = $(this).parents('div.cntBox');
	// 		var target = knot.find('.counter');

	// 		var cnt = $(target).html();
	// 			cnt = parseInt(cnt)+1;

	// 		$(target).text(cnt);

	// 	    });
	// };



console.log();

});


