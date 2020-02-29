function calcTime() {
	console.clear();
	var textbox = document.getElementById("textbox").value;
	console.log("textbox: '" + textbox + "'");

	if (textbox.includes("\n") == true) {
		console.log("replacing new lines with whitespace from textbox (then str1)...");

		var str1 = textbox.replace(/\n+/g, " ");

		console.log("str1: '" + str1 + "'");
	} else {
		console.log("no new line to be replaced\nstr1 = textbox");
		str1 = textbox;
	}

	if (str1.includes(".") || str1.includes(",") || str1.includes("-") == true) {
		console.log("replacing special characters from str1 (then str2)...");

		var str2 = str1.replace(/\.+|\,+|\s\-+|\-+\s|\s\-+\s/g, " ");
		console.log("str2: '" + str2 + "'");
	} else {
		console.log("no special characters to be replaced\nstr2 = str1");
		str2 = str1
	}

	if (str2.includes("  ") == true) {
		console.log("removing redundant whitespaces from str2 (then str1)...");

		var str1 = str2.replace(/\s\s+/g, " ");
		console.log("str1 '" + str1 + "'");
	} else {
		console.log("no redundant whitespaces to be removed\nstr1 = str2");
		str1 = str2;
	}

	console.log("trimming the whitespaces from str1 (then str2)...");
	var str2 = str1.trim();
	console.log("str2: '" + str2 + "'");

	var totWords = str2.split(" ")/*.length*/;
	console.log("totWords: " + totWords);

	totWords = totWords.length;
	console.log("totWords length: " + totWords);

	var spanWords = document.getElementById("spanWords");
	spanWords.innerHTML = totWords;

	var wpmAvg = 200;
	var wpmMin = 220;
	var wpmMax = 180;

	var avgRead = document.getElementById("avgRead");
	console.log(avgRead);
	avgRead.innerHTML = "~" + (parseInt(totWords / wpmAvg) + 1);

	console.log("going to choose avg MIN/MINS...");
	var areAvgMins = document.getElementById("areAvgMins");
	if (parseInt(totWords / wpmAvg) == 0) {
		console.log("joined avg loop MIN...");

		areAvgMins.innerHTML = "min";
	} else {
		console.log("joined avg loop MINS...");

		areAvgMins.innerHTML = "mins";
	}

	var minRead = document.getElementById("minRead");
	console.log(minRead);
	minRead.innerHTML = "~" + (parseInt(totWords / wpmMin) + 1);

	console.log("going to choose min MIN/MINS...");
	var areMinMins = document.getElementById("areMinMins");
	if (parseInt(totWords / wpmMin) == 0) {
		console.log("joined min loop MIN...");

		areMinMins.innerHTML = "min";
	} else {
		console.log("joined min loop MINS...");

		areMinMins.innerHTML = "mins";
	}

	var maxRead = document.getElementById("maxRead");
	console.log(maxRead);
	maxRead.innerHTML = "~" + (parseInt(totWords / wpmMax) + 1);

	console.log("going to choose max MIN/MINS...");
	var areMaxMins = document.getElementById("areMaxMins");
	if (parseInt(totWords / wpmMax) == 0) {
		console.log("joined max loop MIN...");

		areMaxMins.innerHTML = "min";
	} else {
		console.log("joined max loop MINS...");

		areMaxMins.innerHTML = "mins";
	}
}
