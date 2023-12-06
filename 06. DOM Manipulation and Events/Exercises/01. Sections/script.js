function create(words) {
	const content = document.getElementById("content");

	for (const word of words) {
		const div = document.createElement("div");

		const p = document.createElement("p");

		p.textContent = word;
		p.style.display = "none";

		div.appendChild(p);
		content.appendChild(div);

		div.addEventListener("click", click);
	}

	function click(e) {
		const p = e.target.querySelector("p");

		if (p.style.display === "none") {
			p.style.display = "";
		} else {
			p.style.display = "none";
		}
	}
}
