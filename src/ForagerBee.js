var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

//set prototype to delegate to Bee superclass
ForagerBee.prototype = Object.create(Bee.prototype);

//add back constructor property
ForagerBee.prototype.constructor = ForagerBee;

//add subclass-specific methods
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
