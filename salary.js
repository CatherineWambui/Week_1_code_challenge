function calculateSalary() {
	// Get input values
	let basicSalary = parseFloat(document.getElementById("basic_salary").value);
	let benefits = parseFloat(document.getElementById("benefits").value);

	// Calculate deductions
	let nhifDeductions = calculateNHIFDeductions(basicSalary + benefits);
	let nssfDeductions = calculateNSSFDeductions(basicSalary);

	// Calculate taxable income
	let taxableIncome = basicSalary + benefits - nhifDeductions - nssfDeductions;

	// Calculate tax
	let tax = calculateTax(taxableIncome);

	// Calculate net salary
	let netSalary = basicSalary + benefits - nhifDeductions - nssfDeductions - tax;

	// Display results
	let results = document.getElementById("results");
	results.innerHTML = `
		<p><strong>Payee Tax:</strong> KES ${tax.toFixed(2)}</p>
		<p><strong>NHIF Deductions:</strong> KES ${nhifDeductions.toFixed(2)}</p>
		<p><strong>NSSF Deductions:</strong> KES ${nssfDeductions.toFixed(2)}</p>
		<p><strong>Net Salary:</strong> KES ${netSalary.toFixed(2)}</p>
	`;
}

