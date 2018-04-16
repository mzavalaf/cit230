
function doInputOutput () 
{
    var temp = parseInt (document.getElementById("tempInputBox").value);
    var wSpeed = parseInt (document.getElementById("wSpeedInputBox").value);
	
	
    var result = windChill (temp, wSpeed);
    document.getElementById("output").innerHTML = result.toFixed(0) + " &#x2109";	
}    
function windChill (temp, wSpeed)
{
    var f = (35.74 + 0.6215 * temp - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16));
    return f;	
}