var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'http://api.wunderground.com/api/177b201c37485d0e/conditions/q/SC/Greenville.json',true );

weatherObject.send();

weatherObject.onload = function() { 
	
	var weatherInfo = JSON.parse(weatherObject.responseText); 
    console.log(weatherInfo);
	
	document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
	
	
	document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
	
	document.getElementById('currentTempFa').innerHTML = weatherInfo.current_observation.temp_f;
	
	document.getElementById('currentTempCen').innerHTML = weatherInfo.current_observation.temp_c;
	
	document.getElementById('day').innerHTML = weatherInfo.current_observation.weather;
	
	document.getElementById('wind-speed').innerHTML = weatherInfo.current_observation.wind_mph;
	
	document.getElementById('chill-factor').innerHTML = weatherInfo.current_observation.windchill_f;
	
	
	
	
}