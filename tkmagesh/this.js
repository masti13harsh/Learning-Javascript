//Day 1 practice
var emp = {		//Object
	name: "Harsh"
};

function greet(salutation, message) {
	console.log(salutation + this.name + ", " + message);	//Here this refers to the object that owns this function
}

greet("Hi", "Good Morning");

greet.call(emp, "Hi ", "Good Morning");		//_proto_

greet.apply(emp, ["Hi ", "Good Morning"]);	//_proto_
