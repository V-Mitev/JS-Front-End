function extractText() {
	let liItems = document.querySelectorAll("#items li");

	let textArea = document.querySelector("#result");

	for (const li of liItems) {
		textArea.value += li.textContent + "\n";
	}
}