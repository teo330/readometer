let specialCharacters = [
	".",
	",",
	"-",
	":",
	";",
	"·",
	"@",
	"#",
	"?",
	"'",
	"$",
	"%",
	"£",
	'"',
	"!",
	"€",
	"^",
	"<",
	">",
	"~",
	"-",
	"°",
	"+",
	"=",
	"¿",
	"¡",
	"¦",
	"¬",
	"±",
	"`",
	"*",
	"_",
	"/",
	"\\",
	"|",
	"(",
	")",
	"[",
	"]",
	"{",
	"}"
];

console.log(specialCharacters.length);

function calcTime() {
	console.clear();
	let textbox = document.getElementById("textbox").value;
	console.log("textbox: '" + textbox + "'");

	if (textbox.includes("\n") == true) {
		console.log("replacing new lines with whitespace...");

		textbox = textbox.replace(/\n+/g, " ");

		console.log("textbox: '" + textbox + "'");
	}

	console.log("ENTERING FOR LOOP...");

	for (let i = 0; i < specialCharacters.length; i++) {

		if (textbox.includes(specialCharacters[i]) == true) {
			console.log("replacing special characters...");

			textbox = textbox.replace(/[.,-:;·@#?'$%£"!€^<>~-°+=¿¡¦¬±`*\_\/\\\|\(\)\[\]\{\}]+/g, " ");

			console.log("textbox: '" + textbox + "'");
		}

	}


	if (textbox.includes("  ") == true) {
		console.log("removing redundant whitespaces...");

		textbox = textbox.replace(/\s\s+/g, " ");

		console.log("textbox '" + textbox + "'");
	}

	console.log("trimming the whitespaces...");
	textbox = textbox.trim();
	console.log("textbox: '" + textbox + "'");

	let totWords = textbox.split(" ")/*.length*/;
	console.log("totWords: " + totWords);
	totWords = totWords.length;
	console.log("totWords length: " + totWords);

	let spanWords = document.getElementById("spanWords");
	spanWords.innerHTML = totWords;

	let wpmAvg = 200;
	let wpmMin = 220;
	let wpmMax = 180;

	let avgRead = document.getElementById("avgRead");
	console.log(avgRead);
	avgRead.innerHTML = "~" + (parseInt(totWords / wpmAvg) + 1);

	console.log("going to choose avg MIN/MINS...");
	let areAvgMins = document.getElementById("areAvgMins");
	if (parseInt(totWords / wpmAvg) == 0) {
		console.log("joined avg loop MIN...");

		areAvgMins.innerHTML = "min";
	} else {
		console.log("joined avg loop MINS...");

		areAvgMins.innerHTML = "mins";
	}

	let minRead = document.getElementById("minRead");
	console.log(minRead);
	minRead.innerHTML = "~" + (parseInt(totWords / wpmMin) + 1);

	console.log("going to choose min MIN/MINS...");
	let areMinMins = document.getElementById("areMinMins");
	if (parseInt(totWords / wpmMin) == 0) {
		console.log("joined min loop MIN...");

		areMinMins.innerHTML = "min";
	} else {
		console.log("joined min loop MINS...");

		areMinMins.innerHTML = "mins";
	}

	let maxRead = document.getElementById("maxRead");
	console.log(maxRead);
	maxRead.innerHTML = "~" + (parseInt(totWords / wpmMax) + 1);

	console.log("going to choose max MIN/MINS...");
	let areMaxMins = document.getElementById("areMaxMins");
	if (parseInt(totWords / wpmMax) == 0) {
		console.log("joined max loop MIN...");

		areMaxMins.innerHTML = "min";
	} else {
		console.log("joined max loop MINS...");

		areMaxMins.innerHTML = "mins";
	}
}
