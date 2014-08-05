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

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  if (this._isSamePick()) {
    return null;
} else if (this.player1.defeats(this.player2)) {
    return this.player1;
} else {
    return this.player2;
}
};

Game.prototype.BEATS = {"rock": {scissors: "crushes", lizard: "crushes"},
						"paper": {rock: "covers", spock: "disproves"},
						"scissors": {paper: "cuts", lizard: "decapitates"},
						"lizard": {spock: "poisons",paper: "eats"},
						"spock": {scissors: "smashes",rock: "vapourizes"}
					}

Game.prototype._isSamePick = function() {
	return (this.player1.pick === this.player2.pick);
};

Game.prototype.victoryMessage = function() {
  if (this.winner()===null) {
    return "Draw"
  } else {
	return this.winner().name + "'s " + this.winner().pick + " " + this.victoryMethod() +" "+ this.loser().name + "'s " + this.loser().pick
  }
};

Game.prototype.loser = function() {
	if (this._isSamePick()) {
    return null;
} else {
    return (this.winner()===this.player2) ? this.player1 : this.player2;
}
};

Game.prototype.victoryMethod = function() {
	return this.BEATS[this.winner().pick][this.loser().pick]
};