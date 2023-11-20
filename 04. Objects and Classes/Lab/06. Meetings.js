function solve(array) {
	let obj = {};

	for (const item of array) {
		let [weekDay, name] = item.split(" ");

		if (obj.hasOwnProperty(weekDay)) {
			console.log(`Conflict on ${weekDay}!`);
		} else {
			console.log(`Scheduled for ${weekDay}`);
			obj[weekDay] = name;
		}
	}

	for (const [key, value] of Object.entries(obj)) {
		console.log(`${key} -> ${value}`);
	}
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
