function calculate() {
	const python = parseFloat(document.getElementById("python").value);
	const math = parseFloat(document.getElementById("math").value);
	const art = parseFloat(document.getElementById("art").value);

	// Calculate the average
	const average = (python + math + art) / 3;

	// Determine the grade based on the average
	let grade;
	if (average >= 80) {
		grade = "A";
	} else if (average >= 60) {
		grade = "B";
	} else if (average >= 50) {
		grade = "C";
	} else if (average >= 40) {
		grade = "D";
	} else {
		grade = "E";
	}

	// Output the result
	document.getElementById("result").innerHTML = `The average is ${average.toFixed(2)} and the grade is ${grade}.`;
}
