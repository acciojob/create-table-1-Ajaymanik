function insert_Row() {
	const table = document.getElementById('sampleTable')  ;
	// create a new rows 
	const newRow = table.insertRow(0); 
	// insert the new rows in the 
	const cell1 = newRow.insertCell(0);
	const cell2 = newRow.insertCell(1);
	
	// set the cells t
	cell1.innerText = "New Cell1";
	cell2.innerText = "New Cell2";
	
}
