// validate principal and calculate interest
function compute()
{
    var principal = document.getElementById("principal").value;

    // detects lack of input and prevents user from entering non-positive numbers
    if (principal == '' || parseInt(principal) <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);  // calculates the end year
    //var amount = parseInt(principal) + parseInt(interest);
    
    // formats the message to be displayed
    var message = "</br>If you deposit <mark>" + principal + "</mark>,<br/>" + 
        "at an interest rate of <mark>" + rate + "%</mark>.<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" + year + "</mark></br>";

    document.getElementById("result").innerHTML = message;

}

// displays the interest rate entered through the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}



