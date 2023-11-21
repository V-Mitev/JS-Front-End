function solve(input) {
	let movies = [];

	for (const commands of input) {
		if (commands.includes("addMovie")) {
			let splitCommand = commands.split("addMovie ");

			let obj = { name: splitCommand[1] };

			movies.push(obj);
		} else if (commands.includes("directedBy")) {
			let [movie, director] = commands.split(" directedBy ");

			let searching = movies.find((el) => el.name === movie);

			if (searching) {
				searching["director"] = director;
			}
		} else if (commands.includes('onDate')) {
            let [movie, date] = commands.split(' onDate ');

            let searching = movies.find((el) => el.name === movie);

			if (searching) {
				searching["date"] = date;
			}
        }
	}

    movies.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    });
}

solve([
	"addMovie Fast and Furious",
	"addMovie Godfather",
	"Inception directedBy Christopher Nolan",
	"Godfather directedBy Francis Ford Coppola",
	"Godfather onDate 29.07.2018",
	"Fast and Furious onDate 30.07.2018",
	"Batman onDate 01.08.2018",
	"Fast and Furious directedBy Rob Cohen",
]);
