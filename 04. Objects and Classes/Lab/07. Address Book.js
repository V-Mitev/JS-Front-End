function solve(array) {
	let obj = {};

	for (const element of array) {
		let [name, address] = element.split(":");
		obj[name] = address;
	}

	for (const [key, value] of Object.entries(obj).sort()) {
		console.log(`${key} -> ${value}`);
	}
}

solve([
	"Bob:Huxley Rd",
	"John:Milwaukee Crossing",
	"Peter:Fordem Ave",
	"Bob:Redwing Ave",
	"George:Mesta Crossing",
	"Ted:Gateway Way",
	"Bill:Gateway Way",
	"John:Grover Rd",
	"Peter:Huxley Rd",
	"Jeff:Gateway Way",
	"Jeff:Huxley Rd",
]);
