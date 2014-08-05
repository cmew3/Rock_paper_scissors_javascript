function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.defeats = function(opponent) {
	return Object.keys(Game.prototype.BEATS[this.pick]).indexOf(opponent.pick) != -1;
};

Player.prototype.makeRandomPick = function() {
	var random = Math.floor((Math.random() * 5));
	this.picks(Object.keys(Game.prototype.BEATS)[random])
};

