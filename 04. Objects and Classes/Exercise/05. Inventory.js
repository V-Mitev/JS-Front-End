function solve(input) {
	let heroes = [];

	for (const element of input) {
		let heroInfo = element.split(" / ");

		if (heroInfo.length == 3) {
			let hero = { name: heroInfo[0], level: heroInfo[1], items: heroInfo[2] };

			heroes.push(hero);
		}

		heroes.sort((a, b) => a.level - b.level);
	}

	for (const hero of heroes) {
		console.log(`Hero: ${hero.name}`);
		console.log(`level => ${hero.level}`);
		console.log(`items => ${hero.items}`);
	}
}

solve([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);
