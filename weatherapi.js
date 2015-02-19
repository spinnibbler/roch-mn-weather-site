if(geo_position_js.init()) {
            geo_position_js.getCurrentPosition(success_callback, error_callback, {
                enableHighAccuracy: true
            });
        } else {
            alert("Sorry we can't get your current location");
        }

        function success_callback(p) {

            /*	alert('lat='+p.coords.latitude.toFixed(2)+
                  ';lon='+p.coords.longitude.toFixed(2));*/

            var apiKey = 'bf9ece433d3c64b82ee633014173a8b4';
            var url = 'https://api.forecast.io/forecast/';
            var lati = p.coords.latitude.toFixed(2);
            var longi = p.coords.longitude.toFixed(2);
            var data;

            $.getJSON(url + apiKey + "/" + lati + "," + longi + "?callback=?", function (data) {
                //console.log(data);
                $('#temp').html(' ' + data.currently.temperature + ' ºF');
                $('#feelslike').html(' ' + data.currently.apparentTemperature + ' ºF');
                $('#nowsummary').html(' ' + data.currently.summary);
                $('#high').html(' ' + data.daily.temperatureMin);
                $('#low').html(' ' + data.TemperatureMinTime);
                $('#daysum').html(' ' + data.daily.summary);
                $('#icon').html('<div id=' + data.currently.icon + '></div>');
            });

            console.log(url + apiKey + "/" + p.coords.latitude.toFixed(2) + "," + p.coords.longitude.toFixed(2) + "?callback=?");

        }

        function error_callback(p) {
            alert('error=' + p.code);
        }