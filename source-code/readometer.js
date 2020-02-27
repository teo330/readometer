function calcTime() {
	console.clear();
	var textbox = document.getElementById("textbox").value;
	console.log("textbox: '" + textbox + "'");

	var str1 = textbox.trim();
	console.log("str1: '" + str1 + "'");

	if (str1.includes("\n") == true) {
		console.log("switching new lines with whitespaces...");

		var strLines = str1.replace(/\n+/g, " ");

		console.log("temp Lines: '" + strLines + "'");
	}
	else {
		console.log("no new line to be switched\nstrLines = str1");
		strLines = str1;
	}

	if (strLines.includes("  ") == true) {
		console.log("removing redundant whitespaces...");

		var str2 = strLines.replace(/\s\s+/g, " ");
		console.log("temp Rep: '" + str2 + "'");
	}
	else {
		console.log("no redundant whitespaces\nstr2 = strLines");
		str2 = strLines;
	}


	console.log("strLines: '" + str2 + "'");

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

	var minRead = document.getElementById("minRead");
	console.log(minRead);
	minRead.innerHTML = "~" + (parseInt(totWords / wpmMin) + 1);

	var maxRead = document.getElementById("maxRead");
	console.log(maxRead);
	maxRead.innerHTML = "~" + (parseInt(totWords / wpmMax) + 1);
}
