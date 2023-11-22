function solve(inputArray) {
	let parkingLot = [];

	for (const command of inputArray) {

		let [direction, carNumber] = command.split(", ");
        
		if (direction === "IN" && !parkingLot.includes(carNumber)) {
			parkingLot.push(carNumber);
		} else if (direction === "OUT" && parkingLot.includes(carNumber)) {
			let index = parkingLot.findIndex((x) => x === carNumber);
			parkingLot.splice(index, 1);
		}
	}

	if (parkingLot.length > 0) {
		console.log(parkingLot.sort().join("\n"));
	} else {
		console.log("Parking Lot is Empty");
	}
}

solve([
	"IN, CA2844AA",
	"IN, CA1234TA",
	"OUT, CA2844AA",
	"IN, CA9999TT",
	"IN, CA2866HI",
	"OUT, CA1234TA",
	"IN, CA2844AA",
	"OUT, CA2866HI",
	"IN, CA9876HH",
	"IN, CA2822UU",
]);
