function search() {
	let listItems = document.getElementsByTagName("li");
	let searchText = document.getElementById("searchText").value;
	let result = document.getElementById("result");
	let matches = 0;

	for (const li of listItems) {
		li.style.fontWeight = "normal";
		li.style.textDecoration = "none";
	}

	for (const li of listItems) {
		if (li.innerText.includes(searchText)) {
			matches++;

			li.style.fontWeight = "bold";
			li.style.textDecoration = "underline";
		}
	}

	result.innerHTML = `${matches} matches found`;
}
