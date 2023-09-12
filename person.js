class Person {
 
  #id;
  constructor (){
    this.#id=Math.ceil(Math.random()*(10**3));
  }
  get getID(){
    return this.#id;
  }

}

module.exports = Person;
