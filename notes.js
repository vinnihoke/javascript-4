//Tyler McGinnis Video Notes

// var me = {
// 	name: 'Vinni',
// 	age: 29,
// 	sayName: function(){
// 		console.log(this.name);
// 	}
// };

// me.sayName();

//Implicit Binding
//Left of the dot at call time

// var sayNameMixin = function(obj){
// 	obj.sayName = function(){
// 		console.log(this.name);
// 	};
// };

// var me = {
// 	name: "Vinni",
// 	age: 29
// };

// var you = {
// 	name: "Joey",
// 	age: 21
// };

// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName();
// you.sayName();


// var Person = function(name, age){
// 	return {
// 		name: name,
// 		age: age,
// 		sayName: function(){
// 			console.log(this.name);
// 		},
// 		mother: {
// 			name: "Stacey",
// 			sayName: function(){
// 				console.log(this.name);
// 			}
// 		}
// 	}
// }

// var jim = Person('Jim', 42);
// jim.sayName();
// jim.mother.sayName();

//Explicit Binding
//Call, apply, bind.

// var sayName = function(lang1, lang2, lang3){
// 	console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
// };

// var stacey = {
// 	name: 'Stacey',
// 	age: 34
// };

// var languages = ["Javascript", 'Vue', 'Python'];

// // sayName.call(stacey, languages[0], languages[1], languages[2]);
// var newFunction = sayName.bind(stacey, languages[0], languages[1], languages[2]);

// newFunction();

//New Binding
// var Animal = function(color, name, type){
// 	this.color = color;
// 	this.name = name;
// 	this.type = type;
// };

// var zebra = new Animal('black and white', 'Zorro', 'Zebra');




// // Window Binding
// var sayAge = function(){
// 	'use strict';
// 	console.log(this.age);
// };

// var me = {
// 	age: 25,
// };

// sayAge();


//Notes from Dan Frehner

function Person(name, language){
    this.name = name;
    this.language = language;
    this.isPerson = true;

}

Person.prototype.speakMyLanguage = function(){
    return `Do you understand ${this.language}?`;
}

// // const dan = new Person({name: "Dan", favoriteLangugae: "Javascript of course!"});

// // console.log(dan);

function Teenager(name, language, age){ //These will be attributes of every Person, therefore we must inherit Person attr. 
//     let person = new Person(name, language); But this wouldn't give us all of the attr
//     console.log("Before the Person Call:", this);
    Person.call(this, name, language);
//     console.log("After the Person Call:", this);
    this.age = age;
}

Teenager.prototype = Object.create(Person.prototype);

Teenager.prototype.canDrive = function(){
       if(this.age >= 16){
        console.log(`${this.name} can drive!`);
    } else {
        console.log(`${this.name} cannot drive yet.`);
  }
}

var joe = new Teenager("Joe", "Javascript", 15);

console.log(joe.canDrive());
console.log(joe.speakMyLanguage());



//Understanding class syntax:



//Converting Person to class syntax in ES6
// class PersonClass {
// 	constructor(name, language) {
// 		this.name = name;
// 		this.language = language;
// 		this.isPerson = true;
// 	}

// 	speakMyLanguage() { //This would go onto the constructor as a method, but it will be written once, and called as needed.
// 		return `Do you understand ${this.language} ${this.name}?`;
// 	}
// }

// var jim = new PersonClass("Jim", "Javascript");
// console.log(jim.speakMyLanguage());

// var john = new PersonClass("John", "Vue");
// console.log(john.speakMyLanguage());



class Food {
	constructor(attributes) {
		this.name = attributes.name;
		this.color = attributes.color;
		this.calories = attributes.calories;
		this.size = attributes.size;
		//This will automatically return
	}

	isHighInCalories(){
		if(this.calories > 300){
			return true;
		} else {
			return false;
		}
	}
}

class Fruit extends Food {
	constructor(attributes){
		super(attributes);
		this.isSweet = attributes.isSweet;
		this.seedless = attributes.seedless;
		this.juicy = attributes.juicy;
	}
}

class Apple extends Fruit {
	constructor(attributes){
		super(attributes);
		this.type = attributes.type;
	}
}

//Foods
const egg = new Food({name: "Egg", color: "Brown", calories: 70, size: "Small"}); 
const banana = new Food({name: "Banana", color: "Yellow", calories: 50, size: "Medium"});
const chowMein = new Food({name: "Chow Mein", color: "Brownish", calories: 320, size: "Large"});

//Fruits
const apple = new Fruit({name: "Apple", color: "red", calories: 150, size: "Small", isSweet: true, seedless: false, juicy: false, type: "Golden Delicious"});

const apple2 = new Apple({name: "Apple", color: "red", calories: 1500, size: "Small", isSweet: true, seedless: false, juicy: false, type: "Golden Delicious"});



console.log(egg);
console.log(banana);
console.log(chowMein);
console.log(chowMein.isHighInCalories());
console.log(banana.isHighInCalories());
//The new keyword sees that we want a new item. It calls the food class, and checks the constructor. Classes are not hoisted!

console.log(apple);
console.log(apple2.isHighInCalories());

