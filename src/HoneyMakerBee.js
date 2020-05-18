var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

//set prototype to delegate to Bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);

//add back constructor property
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

//add subclass-specific methods
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};

