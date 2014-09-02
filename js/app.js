$(document).ready(function() {
		function generateNum() {
		return Math.floor((Math.random() * 778) + 1); 
	};
$('button').click(function(){
	$.ajax({
		type: 'GET',
		url: 'http://pokeapi.co/api/v1/pokemon/'+generateNum()+'/',
		dataType: 'jsonp',
		success: function(data) {
			$('.container').show();
			$('.poke-name').text(data.name);
			$('.poke-type').text(data.types[0].name);
			$('.poke-hp').text(data.hp);
			$('.poke-atk').text(data.attack);
			$('.poke-def').text(data.defense);
		}
	});

});
});