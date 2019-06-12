$(document).ready(function(){
	


	$('.pic').attr('src', data[0].pic);
	$('.movie').text(data[0].name);		
	$('.short').text(data[0].short);		
	// $('.genre').text(films[0].genre);		
	$('.counter').text(data[0].value);

	
	for ( i = 1; i < obj.length; i++) {
		
		$('.box:first').clone().appendTo('#films');

		var img = $('.pic');
		$(img[i]).attr('src', obj[i].pic);

		var movie = $('.movie');
		$(movie[i]).text(obj[i].name);

		var short = $('.short');
		$(short[i]).text(obj[i].short);

		// var genre = $('.genre');
		// $(genre[i]).text(obj[i].genre);

		var counter = $('.counter');
		$(counter[i]).text(parseInt(obj[i].value) );		
	};



	$('.likeBtn').click(function() {
		var knot = $(this).parents('div.cntBox');
		var target = knot.find('.counter');

		var cnt = $(target).html();
			cnt = parseInt(cnt)+1;

		$(target).text(cnt);

	});

	// $('#sortName').click(function() {
	// 	function compare(a, b) {		
	// 		if ( a.value < b.value ) {
	// 	        return 1;
	// 	    } else if (a.value > b.value) {
	// 	        return -1;
	// 	    } else {
	// 	        return 0;
	// 	    }
	// 	};

	// 	data.sort(compare);
	// 	insert(data)

	// });

	// var boxes = $('.box');
	// var pNumb = boxes.find('.counter');

	// console.log();


	// function compare(a, b) {
	// 	var nameA = a.name;
	// 	var nameB = b.name;

	// 	if (nameA < nameB) {
	//         return 1;
	//     } else if (nameA > nameB) {
	//         return -1;
	//     } else {
	//         return 0;
	//     }
	// };


	// $('#sortName').click(function() {
	// 	data.sort(compare);

	// 	insert(data);		
	// });

	
	




// 	var wrap = $('#films .box');
// 	var count = 0;

// 	wrap.sort(function (a, b) {
    
// 	    var a = parseInt($(a).find('.counter').html());
// 	    var b = parseInt($(b).find('.counter').html());

//     		count += 2;
    
	//     
	//     console.log(a);
	// });


// $("#results").append(wrap);
// $("#calls").append(count+1);




});


