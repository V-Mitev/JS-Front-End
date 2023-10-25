function TheathrePromotion(dayOfWeek, age) {
	if (age >= 0 && age <= 18) {
		if (dayOfWeek == "Weekday") {
			console.log("12$");
		} else if (dayOfWeek == "Weekend") {
			console.log("15$");
		} else if (dayOfWeek == "Holiday") {
			console.log("5$");
		}
	} else if (age > 18 && age <= 64) {
		if (dayOfWeek == "Weekday") {
			console.log("18$");
		} else if (dayOfWeek == "Weekend") {
			console.log("20$");
		} else if (dayOfWeek == "Holiday") {
			console.log("12$");
		}
	} else if (age > 64 && age <= 122) {
		if (dayOfWeek == "Weekday") {
			console.log("12$");
		} else if (dayOfWeek == "Weekend") {
			console.log("15$");
		} else if (dayOfWeek == "Holiday") {
			console.log("10$");
		}
	} else {
		console.log("Error!");
	}
}

TheathrePromotion("Weekday", 42);
TheathrePromotion("Holiday", -12);
TheathrePromotion("Holiday", 15);
TheathrePromotion("Holiday", 155);
TheathrePromotion("Holiday", 1);
TheathrePromotion("Holiday", 19);
TheathrePromotion("Holiday", -1);
TheathrePromotion("Holiday", 0);
TheathrePromotion("Holiday", 0);

