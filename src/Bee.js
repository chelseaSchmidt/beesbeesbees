var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//reset Bee subclass prototype to an empty object that delegates to Grub superclass prototype
Bee.prototype = Object.create(Grub.prototype);

//add back the constructor property that we lost due to above reset
Bee.prototype.constructor = Bee;

//add shared methods specific to Bee to the Bee prototype
//(not applicable so far)


