function solve(input) {
	class Song {
		constructor(typeList, name, time) {
			(this.typeList = typeList), (this.name = name), (this.time = time);
		}

		printSongName() {
			return console.log(`${this.name}`);
		}
	}

	for (let i = 0; i < input[0]; i++) {
		let song = input[i + 1].split("_");

		const songClass = new Song(song[0], song[1], song[2]);

		if (
			songClass.typeList === input[input.length - 1] ||
			input[input.length - 1] === "all"
		) {
			songClass.printSongName();
		}
	}
}

solve([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
