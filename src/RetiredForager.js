var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

//set prototype to delegate to ForagerBee prototype
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

//add back constructor property
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

//add subclass-specific methods
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};
