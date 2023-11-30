function addItem() {
    
	let ulList = document.getElementById("items");
	let text = document.getElementById("newItemText");

	let newItem = document.createElement("li");

	let a = document.createElement("a");

	a.textContent = "[Delete]";
	a.href = "#";

	newItem.textContent = text.value;
	newItem.appendChild(a);

	ulList.appendChild(newItem);

	text.value = "";

	a.addEventListener("click", deleteElement);

	function deleteElement() {
		newItem.remove();
	}
}
