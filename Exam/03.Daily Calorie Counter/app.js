let baseURL = "http://localhost:3030/jsonstore/tasks";

let form = document.querySelector("#form form");
let mealList = document.getElementById("list");
let loadMealsButton = document.getElementById("load-meals");
let addMealButton = document.getElementById("add-meal");
let editMealButton = document.getElementById("edit-meal");
let foodInput = document.getElementById("food");
let timeInput = document.getElementById("time");
let caloriesInput = document.getElementById("calories");

loadMealsButton.addEventListener("click", loadMeals);

addMealButton.addEventListener("click", (e) => {
	e.preventDefault();

	let newMeal = {
		food: foodInput.value,
		time: timeInput.value,
		calories: caloriesInput.value,
	};

	fetch(baseURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newMeal),
	}).then(loadMeals);

	clearForm();
});

editMealButton.addEventListener("click", (e) => {
	e.preventDefault();

	let mealId = form.dataset.meal;

	let meal = {
		_id: mealId,
		food: foodInput.value,
		time: timeInput.value,
		calories: caloriesInput.value,
	};

	fetch(`${baseURL}/${mealId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(meal),
	})
		.then(loadMeals)
		.then(() => {
			editMealButton.setAttribute("disabled", "true");
			addMealButton.removeAttribute("disabled");

			clearForm();

			delete form.dataset.meal;
		});
});

function clearForm() {
	foodInput.value = "";
	timeInput.value = "";
	caloriesInput.value = "";
}

function loadMeals() {
	return fetch(baseURL)
		.then((res) => res.json())
		.then((data) => renderMeals(Object.values(data)));
}

function renderMeals(meals) {
	mealList.innerHTML = "";

	meals
		.map(renderMeal)
		.forEach((mealElement) => mealList.appendChild(mealElement));
}

function renderMeal(meal) {
	let div = document.createElement("div");
	div.classList.add("meal");

	let food = document.createElement("h2");
	food.textContent = meal.food;

	let time = document.createElement("h3");
	time.textContent = meal.time;

	let calories = document.createElement("h3");
	calories.textContent = meal.calories;

	let divBtns = document.createElement("div");
	divBtns.id = "meal-buttons";

	let changeMealButton = document.createElement("button");
	changeMealButton.classList.add("change-meal");
	changeMealButton.textContent = "Change";

    changeMealButton.addEventListener("click", () => {
        foodInput.value = meal.food;
		timeInput.value = meal.time;
		caloriesInput.value = meal.calories;

		div.remove();

		addMealButton.setAttribute("disabled", "true");
		editMealButton.removeAttribute("disabled");

		form.dataset.meal = meal._id;
    });

	let deleteMealButton = document.createElement("button");
	deleteMealButton.classList.add("delete-meal");
	deleteMealButton.textContent = "Delete";

	deleteMealButton.addEventListener("click", () => {
		fetch(`${baseURL}/${meal._id}`, {
			method: "DELETE",
		}).then(loadMeals);
	});

	divBtns.appendChild(changeMealButton);
	divBtns.appendChild(deleteMealButton);

	div.appendChild(food);
	div.appendChild(time);
	div.appendChild(calories);
	div.appendChild(divBtns);

	return div;
}
