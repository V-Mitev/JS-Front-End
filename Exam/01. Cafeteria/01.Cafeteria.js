function solve(input) {
	let numberOfBarista = Number(input.shift());
	let baristas = {};

	for (let i = 0; i < numberOfBarista; i++) {
		let baristaInfo = input.shift().split(" ");

		let baristaName = baristaInfo.shift();
		let baristaShift = baristaInfo.shift();
		let baristaCoffes = baristaInfo.shift().split(",");

		baristas[baristaName] = {
			baristaShift,
			baristaCoffes,
		};
	}

	let commandLine = input.shift();

	while (commandLine !== "Closed") {
		commandLine = commandLine.split(" / ");
		let command = commandLine.shift();

		switch (command) {
			case "Prepare": {
				let baristaName = commandLine.shift();
				let baristaShift = commandLine.shift();
				let coffeeOrder = commandLine.shift();

				let isAvailable = baristas[baristaName].baristaShift === baristaShift;
				let containsOrderedCoffee =
					baristas[baristaName].baristaCoffes.includes(coffeeOrder);

				if (isAvailable && containsOrderedCoffee) {
					console.log(`${baristaName} has prepared a ${coffeeOrder} for you!`);
				} else {
					console.log(
						`${baristaName} is not available to prepare a ${coffeeOrder}.`
					);
				}

				break;
			}
			case "Change Shift": {
				let baristaName = commandLine.shift();
				let newShift = commandLine.shift();
				baristas[baristaName].baristaShift = newShift;

                console.log(`${baristaName} has updated his shift to: ${baristas[baristaName].baristaShift}`);
				break;
			}
			case "Learn": {
                let baristaName = commandLine.shift();
                let newCoffee = commandLine.shift();

                let canBaristaPrepareThisCoffee = baristas[baristaName].baristaCoffes.includes(newCoffee);

                if (!canBaristaPrepareThisCoffee) {
                    baristas[baristaName].baristaCoffes.push(newCoffee);

                    console.log(`${baristaName} has learned a new coffee type: ${newCoffee}.`);
                } else {
                    console.log(`${baristaName} knows how to make ${newCoffee}.`);
                }
				break;
			}
		}

		commandLine = input.shift();
	}

    for (let baristaName in baristas) {
        let barista = baristas[baristaName];
        let drinks = barista.baristaCoffes.join(", ");
    
        console.log(`Barista: ${baristaName}, Shift: ${barista.baristaShift}, Drinks: ${drinks}`);
      }
}

solve([
	"3",
	"Alice day Espresso,Cappuccino",
	"Bob night Latte,Mocha",
	"Carol day Americano,Mocha",
	"Prepare / Alice / day / Espresso",
	"Change Shift / Bob / night",
	"Learn / Carol / Latte",
	"Learn / Bob / Latte",
	"Prepare / Bob / night / Latte",
	"Closed",
]);
