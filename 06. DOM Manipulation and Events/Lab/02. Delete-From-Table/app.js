function deleteByEmail() {
	let rows = Array.from(document.querySelectorAll("tbody tr"));
	let input = (emailInput = document.getElementsByName("email")[0].value);
	let result = document.getElementById("result");

	for (const row of rows) {
		let email = row.children[1].textContent;

		if (email === input) {
			row.remove();
			result.textContent = "Deleted.";
		} else {
			result.textContent = "Not found.";
		}
	}
}
