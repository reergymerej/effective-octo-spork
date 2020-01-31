function Walker() {}
Walker.prototype.walk = function () {
  console.log('[walking...]')
}
Walker.prototype.name = 'a generic Walker'

const walker = new Walker()
walker.walk()



function Person() {}
Person.prototype = Walker.prototype
Walker.prototype.name = 'a generic Person'

Person.prototype.sayHi = function () {
  console.log(`Hello, from ${this.name}.`)
}


const dude = new Person()
dude.sayHi()
dude.walk()


function Child() {}
Child.prototype = Person.prototype
Walker.prototype.name = 'a generic Child'

const kid = new Child()
kid.sayHi()
kid.walk()
