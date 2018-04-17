//Get the current weather conditions

    function getCurrentConditions(text) {

    console.log("\n")

    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {

        if (doc.readyState == XMLHttpRequest.DONE) {
            var jsonObject = eval('(' + doc.responseText + ')');
            loadedCurrentConditions(jsonObject);
        }
    }

    doc.open("GET", "http://api.wunderground.com/api/177b201c37485d0e/forecast10day/q/CA/San_Francisco.json");

    doc.send();

}

//Get the 10 Day Forcast
function get10DayForcast(text) {

    console.log("\n")

    var doc = new XMLHttpRequest();
    doc.onreadystatechange = function() {

        if (doc.readyState == XMLHttpRequest.DONE) {
            var jsonObject = eval('(' + doc.responseText + ')');
            loaded10DayForcast(jsonObject);
        }
    }

    doc.open("GET", "http://api.wunderground.com/api/177b201c37485d0e/forecast10day/q/CA/San_Francisco.json");

    doc.send();

}

//Display to console
function showRequestInfo(text) {

    console.log(text)
}


function loadedCurrentConditions(jsonObject)

{

    showRequestInfo("Current Temp F:" + jsonObject.current_observation.temp_f);
    showRequestInfo("Weather Description:" + jsonObject.current_observation.weather);
    showRequestInfo("Icon:" + jsonObject.current_observation.icon);

}

function loaded10DayForcast(jsonObject)

{

    showRequestInfo("Today High Temp F:" + jsonObject.forecast.simpleforecast.forecastday.Forecast[0].low.fahrenheit);

}