$(document).ready(function(){
		
	$('.pic').attr('src', data[0].pic);
	$('.movie').text(data[0].name);		
	$('.short').text(data[0].short);		
	// $('.genre').text(films[0].genre);		
	$('.counter').text(Math.floor((Math.random() * 1000) + 1));

  
	function insert(obj) {
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
			$(counter[i]).text(Math.floor((Math.random() * 1000) + 1));		
		};
	};

	insert(data);

	$('.likeBtn').click(function() {
		var knot = $(this).parents('div.cntBox');
		var target = knot.find('.counter');

		var cnt = $(target).html();
			cnt = parseInt(cnt)+1;

		$(target).text(cnt);

	});





	var boxes = $('.box');
	var pNumb = boxes.find('.counter');

	console.log();


	function compare(a, b) {
		const nameA = a.name;
		const nameB = b.name;

		if (nameA < nameB) {
	        return 1;
	    } else if (nameA > nameB) {
	        return -1;
	    } else {
	        return 0;
	    }
	};



	$('#sortName').click(function() {
		data.sort(compare);
		

		insert(data);

		// insert(obj);
		// console.log(obj);
	});

	
	




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


