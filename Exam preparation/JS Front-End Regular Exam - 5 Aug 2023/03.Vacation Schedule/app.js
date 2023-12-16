const baseURL = "http://localhost:3030/jsonstore/tasks";

let form = document.querySelector("#form form");
let buttonLoadVacation = document.getElementById("load-vacations");
let vacationList = document.getElementById("list");
let addVacationButton = document.getElementById("add-vacation");
let editVacationButton = document.getElementById("edit-vacation");
let nameInput = document.getElementById("name");
let numDaysInput = document.getElementById("num-days");
let dateInput = document.getElementById("from-date");

buttonLoadVacation.addEventListener("click", loadVacation);

addVacationButton.addEventListener("click", (e) => {
	e.preventDefault();

	let newVacation = {
		name: nameInput.value,
		days: numDaysInput.value,
		date: dateInput.value,
	};

	fetch(baseURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newVacation),
	})
		.then(loadVacation)
        
        clearForm();
});

editVacationButton.addEventListener("click", (e) => {
	e.preventDefault();

	let vacationId = form.dataset.vacation;

	let vacation = {
		_id: vacationId,
		name: nameInput.value,
		days: numDaysInput.value,
		date: dateInput.value,
	};

	fetch(`${baseURL}/${vacationId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(vacation),
	})
		.then(loadVacation)
		.then(() => {
			editVacationButton.setAttribute("disabled", "true");
			addVacationButton.removeAttribute("disabled");

			clearForm();

			delete form.dataset.vacation;
		});
});

function clearForm() {
	nameInput.value = "";
	numDaysInput.value = "";
	dateInput.value = "";
}

function loadVacation() {
	return fetch(baseURL)
		.then((res) => res.json())
		.then((data) => renderVacations(Object.values(data)));
}

function renderVacations(vacations) {
	vacationList.innerHTML = "";

	vacations
		.map(renderVacation)
		.forEach((vacationElement) => vacationList.appendChild(vacationElement));
}

function renderVacation(vacation) {
	let container = document.createElement("div");
	container.classList.add("container");

	let h2Element = document.createElement("h2");
	h2Element.textContent = vacation.name;

	let h3DateElement = document.createElement("h3");
	h3DateElement.textContent = vacation.date;

	let h3DaysElement = document.createElement("h3");
	h3DaysElement.textContent = vacation.days;

	let changeBtn = document.createElement("button");
	changeBtn.classList.add("change-btn");
	changeBtn.textContent = "Change";

	changeBtn.addEventListener("click", () => {
		nameInput.value = vacation.name;
		numDaysInput.value = vacation.days;
		dateInput.value = vacation.date;

		container.remove();

		addVacationButton.setAttribute("disabled", "true");
		editVacationButton.removeAttribute("disabled");

		form.dataset.vacation = vacation._id;
	});

	let doneBtn = document.createElement("button");
	doneBtn.classList.add("done-btn");
	doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", (e) => {
        fetch(`${baseURL}/${vacation._id}`, {
            method: "DELETE",
        })
        .then(loadVacation);
    });

	container.appendChild(h2Element);
	container.appendChild(h3DateElement);
	container.appendChild(h3DaysElement);
	container.appendChild(changeBtn);
	container.appendChild(doneBtn);

	return container;
}
