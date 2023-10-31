function roadRadar(speed, area) {
	let speedDif = 0;
	let areaSpeedLimit = 0;
	let status = "";

	if (area === "motorway") {
		areaSpeedLimit = 130;
	} else if (area === "interstate") {
		areaSpeedLimit = 90;
	} else if (area === "city") {
		areaSpeedLimit = 50;
	} else if (area === "residential") {
		areaSpeedLimit = 20;
	}

	speedDif = speed - areaSpeedLimit;

	if (speedDif > 0 && speedDif <= 20) {
		status = "speeding";
		console.log(
			`The speed is ${speedDif} km/h faster than the allowed speed of ${areaSpeedLimit} - ${status}`
		);
	} else if (speedDif > 0 && speedDif <= 40) {
		status = "excessive speeding";
		console.log(
			`The speed is ${speedDif} km/h faster than the allowed speed of ${areaSpeedLimit} - ${status}`
		);
	} else if (speedDif > 0 && speedDif > 40) {
		status = "reckless driving";
		console.log(
			`The speed is ${speedDif} km/h faster than the allowed speed of ${areaSpeedLimit} - ${status}`
		);
	} else {
		console.log(`Driving ${speed} km/h in a ${areaSpeedLimit} zone`);
	}
}

roadRadar(200, 'motorway');
