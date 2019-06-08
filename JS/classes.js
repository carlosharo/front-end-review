
{
  class Hero {
    //dafault values on the constructor for individual values in the array and the complete array
  constructor(name, [attack = 0, defense = 0, health = 0, range = 0, speed = 0] = [0,0,0,0,0]) {
    this.name = name;
    this.stats = {
      attack,
      defense,
      health,
      range,
      speed
    }
  }

  setAttack (attack) {
    this.stats.attack = attack;
  }

  getAttack () {
    return this.stats.attack;
  }

  getStats() {
    return `Name: ${this.name}
    description:
    attack ${this.stats.attack},
    defense ${this.stats.defense},
    health ${this.stats.health},
    range ${this.stats.range},
    speed ${this.stats.speed}`;
  }
}

//The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
//The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.
class Superman extends Hero {
  constructor(name, stats) {
    super(name, stats); // call the super class constructor and pass in the name and stats parameters.
  }

}

let superman = new Superman('Clark Kent', [90, 100]);
console.log(superman.getAttack());    //expected output: 90
superman.setAttack(100);    //call a function in the parent class from the subclass
console.log(superman.getAttack());    //expected output: 100
console.log(superman.getStats());   //expected output: Name: Clark Kent description: attack 100, defense 100, health 0, range 0, speed 0
}


//Note: function declarations are hoisted and class declarations are not
{
  const p = new Rectangle(); // ReferenceError
  class Rectangle {}
}
