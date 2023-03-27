function checkSpeed() {
	//we use DOM to get the speed using the id we defined in the form
	let speed = document.getElementById("speed-input").value;
    let demeritPoints = Math.floor((speed - 70) / 5);
	//the conditional statements below determine what gets printed out
	if (speed <= 70) {
		return document.getElementById("output").innerHTML = "Ok";
	} else{
		if(demeritPoints <= 12){
			return document.getElementById("output").innerHTML = "Demerit points: " + demeritPoints;
		}else{
			return document.getElementById("output").innerHTML = "Demerit points: " + demeritPoints + " License Suspended";

		}
		
        
	}};
