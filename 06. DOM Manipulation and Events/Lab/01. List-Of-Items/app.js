function addItem() {
	let ulList = document.getElementById("items");
	let text = document.getElementById("newItemText");

	let newItem = document.createElement("li");

	newItem.textContent = text.value;

	ulList.appendChild(newItem);

    text.value = '';
}
