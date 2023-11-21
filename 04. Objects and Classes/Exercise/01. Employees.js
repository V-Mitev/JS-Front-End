function solve(array) {
    for (const element of array) {
        let obj = {name: element, personalNumber: element.length};

        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }
}

solve([
	"Silas Butler",
	"Adnaan Buckley",
	"Juan Peterson",
	"Brendan Villarreal",
]);
