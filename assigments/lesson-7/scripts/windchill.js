(function() {
  function chillFactor(t, s) {
    var pow = Math.pow(s, 0.16);
    var cf = 35.74 + 0.6215*t - 35.75*pow + 0.4275*t*pow;
    return Math.round(cf * 10) / 10;
  }

  var highTemp = 90;
  var lowTemp = 66;
  var precipitation = 0;
  var windSpeed = 5;
  var windDirection = 'SW';
  var avgTemp = (highTemp + lowTemp) / 2;
  var chillFactor = chillFactor(avgTemp, windSpeed);
  document.getElementById('high-temp').innerHTML = highTemp;
  document.getElementById('low-temp').innerHTML = lowTemp;
  document.getElementById('precipitation').innerHTML = precipitation;
  document.getElementById('wind-speed').innerHTML = windSpeed;
  document.getElementById('wind-direction').innerHTML = windDirection;
  document.getElementById('chill-factor').innerHTML = chillFactor;
})();
function doInputOutput () 
{
    var temp = parseInt (document.getElementById("tempInputBox").value);
    var wSpeed = parseInt (document.getElementById("wSpeedInputBox").value);
	
	// rounded to the nearest whole number and added degrees F.
    var result = windChill (temp, wSpeed);
    document.getElementById("output").innerHTML = result.toFixed(0) + " &#x2109";	
}    
function windChill (temp, wSpeed)
{
    var f = (35.74 + 0.6215 * temp - 35.75 * Math.pow(wSpeed, 0.16) + 0.4275 * temp * Math.pow(wSpeed, 0.16));
    return f;	
}