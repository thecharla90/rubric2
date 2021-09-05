var operatingsystem= prompt ("What is your computers operating system?")
switch(operatingsystem) {
		case "Mac OS", "Mac", "mac", "mac os":
		alert("Apple");
		break;
		
		case"Windows", "PC", "pc", "windows":
		alert("Microsoft");
		break;
		
		default:
		alert("Cool!");
}


function returnfunct(name) {
  return "" + name;
}
document.getElementById("returnfunct").innerHTML = returnfunct("Charline");


const myObject = {
  cityinPR:"Mayaguez",
  PR: "Puerto Rico",
  ccityinPRR: function() {
    return this.cityinPR + ", " + this.PR;
  }
}
document.getElementById("callfunct").innerHTML = myObject.ccityinPRR();


function myFunction(a, b) {
  var addedTotal= a+b;
	return (addedTotal);
}
document.getElementById("createfunct").innerHTML= myFunction(4, 3);


function passfunct(x, y) {
  if (y === undefined) {
    y = 5;
  }  
  return x * y;
}
document.getElementById("passinfofunct").innerHTML = passfunct(5);


