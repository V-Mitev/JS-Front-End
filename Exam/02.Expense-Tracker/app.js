window.addEventListener("load", solve);

function solve() {
	let addBtn = document.getElementById("add-btn");
	let previewList = document.getElementById("preview-list");
	let expensesList = document.getElementById("expenses-list");
	let expenseInput = document.getElementById("expense");
	let amountInput = document.getElementById("amount");
	let dateInput = document.getElementById("date");
	let deleteButton = document.querySelector("#expenses .btn.delete");

	deleteButton.addEventListener("click", () => {
		location.reload();
	});

	addBtn.addEventListener("click", () => {
		let li = document.createElement("li");
		li.classList.add("expense-item");

		let article = document.createElement("article");

		let isValidInput =
			expenseInput.value !== "" &&
			amountInput.value != "" &&
			dateInput.value != "";

		if (!isValidInput) {
			return;
		}

		let typeParagraph = document.createElement("p");
		typeParagraph.textContent = `Type: ${expenseInput.value}`;

		let amountParagraph = document.createElement("p");
		amountParagraph.textContent = `Amount: ${amountInput.value}$`;

		let dateParagraph = document.createElement("p");
		dateParagraph.textContent = `Date: ${dateInput.value}`;

		let div = document.createElement("div");
		div.classList.add("buttons");

		let editButton = document.createElement("button");
		editButton.classList.add("btn");
		editButton.classList.add("edit");
		editButton.textContent = "edit";

		editButton.addEventListener("click", () => {
			let expense = typeParagraph.textContent.split(": ")[1];
			expenseInput.value = expense;

			let amount = amountParagraph.textContent.split(": ")[1];
			amount = amount.slice(0, -1);
			amountInput.value = amount;

			let date = dateParagraph.textContent.split(": ")[1];
			dateInput.value = date;

			li.innerHTML = "";
			addBtn.removeAttribute("disabled");
		});

		let okButton = document.createElement("button");
		okButton.classList.add("btn");
		okButton.classList.add("ok");
		okButton.textContent = "ok";

		okButton.addEventListener("click", () => {
			li.removeChild(div);

			expensesList.appendChild(li);

			addBtn.removeAttribute("disabled");
		});

		div.appendChild(editButton);
		div.appendChild(okButton);

		article.appendChild(typeParagraph);
		article.appendChild(amountParagraph);
		article.appendChild(dateParagraph);

		li.appendChild(article);
		li.appendChild(div);

		previewList.appendChild(li);

		addBtn.setAttribute("disabled", "true");

		expenseInput.value = "";
		amountInput.value = "";
		dateInput.value = "";
	});
}
