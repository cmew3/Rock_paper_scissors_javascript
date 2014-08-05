$(document).ready(function(){

	var name = prompt("Please enter name", "Leonard")
	var p1 = new Player(name);
	var p2 = new Player("Sheldon");
	var game = new Game(p1,p2);



	$('#choices img').on('click',function(){
		p2.makeRandomPick();
		p1.picks($(this).data('pick'));
		$("<li " + game.is_the_winner(p1) + ">" + game.victoryMessage() + "</li>").prependTo('#results').slideDown();
		$("#results li:gt(4)").fadeOut(function(){
			$(this.remove());
		});

	})

})

