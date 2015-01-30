function Employee() {
	console.log(this.constructor.name);
}

Employee();		//Will give Window as window is the owner of the function

new Employee();		//Will give Employee {} as now new object is the owner of the function

//To prevent this..

function Employees() {
	if(this.constructor.name != "Employees") {
		console.log("Hiiii");
		return new Employees();
	}

	console.log(this.constructor.name);
}

Employees();

new Employees();
