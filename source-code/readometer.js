function calcTime() {
	console.clear();
	var textbox = document.getElementById("textbox").value;
	console.log("textbox: '" + textbox + "'");

	var strTrim = textbox.trim();
	console.log("strTrim: '" + strTrim + "'");

	if (strTrim.includes("\n") == true) {
		console.log("switching new lines with whitespaces...");

		var strLines = strTrim.replace(/\n+/g, " ");

		console.log("temp Lines: '" + strLines + "'");
	}
	else {
		console.log("no new line to be switched\nstrLines = strTrim");
		strLines = strTrim;
	}

	if (strLines.includes("  ") == true) {
		console.log("removing redundant whitespaces...");

		var strRep = strLines.replace(/\s\s+/g, " ");
		console.log("temp Rep: '" + strRep + "'");
	}
	else {
		console.log("no redundant whitespaces\nstrRep = strLines");
		strRep = strLines;
	}


	console.log("strLines: '" + strRep + "'");

	var totWords = strRep.split(" ")/*.length*/;
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

	var minRead = document.getElementById("minRead");
	console.log(minRead);
	minRead.innerHTML = "~" + (parseInt(totWords / wpmMin) + 1);

	var maxRead = document.getElementById("maxRead");
	console.log(maxRead);
	maxRead.innerHTML = "~" + (parseInt(totWords / wpmMax) + 1);
}
