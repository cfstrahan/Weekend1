var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered(claimArray) {
	for(var i = 0; i < claimArray.length; i++){
	switch (claimArray[i].visitType) {
		case "Optical":
			claimArray[i].coveredAmount = 0;
			break;
		case "Specialist":
			claimArray[i].coveredAmount = claimArray[i].visitCost * 0.10;
			break;
		case "Emergency":
			claimArray[i].coveredAmount = claimArray[i].visitCost;
			break;
		case "Primary Care":
			claimArray[i].coveredAmount = claimArray[i].visitCost * .50;
			break;
		default:
			claimArray[i].coveredAmount = 0;
			}
			console.log("Paid out $" + claimArray[i].coveredAmount + " for " + claimArray[i].patientName + ".");

	}
}

//function to determine amount covered

function totalCoveredCost(claimArray) {
	var payed= 0
	for(var i=0; i<claimArray.length; i++){
		payed += claimArray[i].coveredAmount;
	}
	totalPayedOut = payed;
	console.log("Payed out $" + totalPayedOut + " total.");
}
percentCovered(initialList);
totalCoveredCost(initialList);
