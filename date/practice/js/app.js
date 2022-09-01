"use strict";

function countDownLogic (endTime) {
	const total = Date.parse(endTime) - Date.parse(new Date());
	const days = Math.floor( total / (1000 * 60 * 60 * 24) );
	const seconds = Math.floor( (total / 1000) % 60 );
	const minutes = Math.floor( (total / 1000 / 60) % 60 )
	const hours = Math.floor( (total / (1000 * 60 * 60)) % 24 );

	return {
		"total" : total,
		"days" : days,
		"seconds" : seconds,
		"minutes" : minutes,
		"hours" : hours
	}
}

function countDownIsNeedZeero (n) {
	return n >= 0 && n < 10 ? `0${n}` : n;
}

function countDownCreateHTML (elementType, days, hours, minutes, seconds) {
	const parent = document.querySelector("#count-down-app");
	parent.innerHTML = `
		<${elementType}>${days}</${elementType}>
		<${elementType}>${hours}</${elementType}>
		<${elementType}>${minutes}</${elementType}>
		<${elementType}>${seconds}</${elementType}>
	`;

	return elementType;
}

function countDownUpdate (elementType, endTime) {
	const timer = setInterval(() => {
		const data = countDownLogic(endTime);
		countDownCreateHTML(
			elementType, 
			countDownIsNeedZeero(data.days),
			countDownIsNeedZeero(data.hours),
			countDownIsNeedZeero(data.minutes),
			countDownIsNeedZeero(data.seconds)
		);

		if (data.total <= 0) {
			clearInterval(timer);
		}
	}, 1000);
}

function countDownAppInit (elementType, endTime) {
	countDownUpdate(elementType, endTime);
}

countDownAppInit("strong", "2022-09-02");