// CODE here for your Lambda Classes
class Person {
	constructor(attr){
		this.name = attr.name;
		this.age = attr.age;
		this.location = attr.location;
	}

	speak() {
		return `Hello my name is ${this.name}, and I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(attr){
		super(attr);
		this.specialty = attr.specialty;
		this.favLanguage = attr.favLanguage;
		this.catchPhrase = attr.catchPhrase;
	}

	demo(subject){
		return `Today we are learning about ${subject}.`;
	}

	grade(student, subject){
		return `${student.name} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(attr){
		super(attr);
		this.previousBackground = attr.previousBackground;
		this.className = attr.className;
		this.favSubjects = attr.favSubjects;
	}

	listsSubjects(){ //Loop that console logs each favSubjects
		for(var subject of this.favSubjects){
			console.log(subject);
		}
	}

	PRAssignment(subject){
		return `${student.name} has submitted a PR for ${subject}`;
	}

	sprintChallenge(subject){
		return `${student.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Person {
	constructor(attr){
		super(attr);
		this.gradClassName = attr.gradClassName;
		this.favInstructor = attr.favInstructor;
	}

	standUp(channel){
		return `${this.name} announces to ${channel}, @channel standy times!`;
	}

	debugsCode(student, subject){
		return `${this.name} debugs ${student.name}'s code on ${subject}`;
	}
}


//Instructor
const clara = new Instructor({name: "Clara", age: 32, location: "South Bay Area", specialty: "Vuetify", favLanguage: "Javascript", catchPhrase: "Hard work works hard for those who work hard."});

console.log(clara);
console.log(clara.demo("crispity, crunchity, peanut buttery Javascript"));

//Student

const tom = new Student({name: "Tom", age: 28, location: "Pawnee, IN", previousBackground: "Restauranteur, Entrepreneur, Parks Department Clerk", className: "WEBPT7", favSubjects: ["Treat Yo-Self", "Javascript"]});

console.log(tom);
console.log(tom.listsSubjects());

//ProjectManager

const jerry = new ProjectManager({name: "Jerry", age: "Unknown", location: "Unknown", gradClassName: "WEBPT1", favInstructor: "Lara"});

console.log(jerry);
console.log(jerry.debugsCode(tom, "Javascript"));
