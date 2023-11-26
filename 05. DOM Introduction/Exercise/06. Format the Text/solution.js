function solve() {
	let input = document.getElementById("input").value.split(".");
	let output = document.getElementById("output");

	input = input
  .filter((s) => s.length > 0)
  .map((s) => (s += "."));

	while (input.length > 0) {
		let p = document.createElement("p");

		p.innerHTML = input.splice(0, 3).join("");

		output.appendChild(p);
	}
}
