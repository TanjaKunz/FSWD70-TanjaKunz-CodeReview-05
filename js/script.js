$(document).ready(function(){
	
/* -------- create HTML content based on json lenght --------*/
	
	for ( i = 1; i < data.length; i++) {		
		$('.box:first').clone().appendTo('#films');		
	};

/* -------- function for loading json --------*/	

function insert(obj) {
	for ( i = 0; i < obj.length; i++) {	
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
};

insert(data);

/* -------- like button --------*/

	$('.likeBtn').click(function() {
		var knot = $(this).parents('div.cntBox');
		var target = knot.find('.counter');

		var cnt = $(target).html();
			cnt = parseInt(cnt)+1;

		$(target).text(cnt);

	});



/* -------- sort content --------*/

var obj = data;

	function checkLikes(a, b) {
       return b.value - a.value;
    };

    function sortDataByLikes() {
        return obj.sort(checkLikes);
    };

    $("#sortLikes").click(function() {
        sortDataByLikes();
        insert(obj);
    });
	


	function checkTitles(a, b) {
        return a.name.localeCompare(b.name);
    };

    function sortDataByAlphabet() {
        return obj.sort(checkTitles);
    };

    $("#sortName").click(function() {
        sortDataByAlphabet();
        insert(obj);
    });



});


