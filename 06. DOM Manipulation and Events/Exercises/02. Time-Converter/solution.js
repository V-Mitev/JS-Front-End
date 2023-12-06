function attachEventsListeners() {
	let days = document.getElementById("days");
	let daysBtn = document.getElementById("daysBtn");

	let hours = document.getElementById("hours");
	let hoursBtn = document.getElementById("hoursBtn");

	let minutes = document.getElementById("minutes");
	let minutesBtn = document.getElementById("minutesBtn");

	let seconds = document.getElementById("seconds");
	let secondsBtn = document.getElementById("secondsBtn");

	daysBtn.addEventListener("click", convertDays);
	hoursBtn.addEventListener("click", convertHours);
	minutesBtn.addEventListener("click", convertMinutes);
	secondsBtn.addEventListener("click", convertSeconds);

	function convertDays() {
		hours.value = days.value * 24;
		minutes.value = hours.value * 60;
		seconds.value = minutes.value * 60;
	}

	function convertHours() {
		days.value = hours.value / 24;
		minutes.value = hours.value * 60;
		seconds.value = minutes.value * 60;
	}

	function convertMinutes() {
        seconds.value = minutes.value * 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
    }

	function convertSeconds() {
        minutes.value = seconds.value / 60;
        hours.value = minutes.value / 60;
        days.value = hours.value / 24;
    }
}
