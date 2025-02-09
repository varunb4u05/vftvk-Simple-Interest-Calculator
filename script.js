function compute()
{
    // To get principal amount
    var principal = document.getElementById("principal").value;
    // Verify if principal amount entered is negative or zero.
    if(principal <= 0){
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return false;
    }
    // To get Rate
    var rate = document.getElementById("rate").value;
    // To get years
    var years = document.getElementById("years").value;
    // Calcculate interest
    var interest = principal * years * rate/100;
    //Convert year to YYYY formt
    var year = new Date().getFullYear() + parseInt(years);
    // Printing calculated interest in page as per valid selection
	document.getElementById("result").innerHTML = "If you deposit <strong> "+principal+
	" </strong>,<br> at an interest rate of <strong> "+rate+
	" </strong>.<br> You will receive an amount of <strong> "+interest+
	" </strong>,<br> in the year <strong> "+year+" </strong>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        