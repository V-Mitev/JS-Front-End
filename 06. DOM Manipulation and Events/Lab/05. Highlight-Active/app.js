function focused() {
	let inputs = Array.from(document.querySelectorAll("input"));

	for (const input of inputs) {
		input.addEventListener("focus", focused);
		input.addEventListener("blur", blured);
	}

	function focused(e) {
		e.target.parentElement.classList = "focused";
	}

	function blured(e) {
		e.target.parentElement.classList.remove("focused");
	}
}
