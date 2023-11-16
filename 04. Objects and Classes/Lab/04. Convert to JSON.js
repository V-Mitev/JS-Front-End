function converToJson(firstName, lastName, hairColor) {
	let obj = { name: firstName, lastName, hairColor };

	console.log(JSON.stringify(obj));
}

converToJson("Vladimir", "Mitev", "Brown");
