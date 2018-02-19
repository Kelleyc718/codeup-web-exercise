(function () {
  /* global $ */
  /* global google: true */
  /* eslint no-undef: "error" */

  $(document).ready(function () {
    // Locate user by IP request
    const latLng = $.getJSON('http://ip-api.com/json').done(function (data) {
      let myLat = data.lat;
      let myLng = data.lon;
      locate(myLat, myLng);

      // Map instantiation made with coords from JSON return
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: myLat, lng: myLng},
        zoom: 8,
        disableDoubleClickZoom: true
      });

      // Marker placed at users approximate location
      let marker = new google.maps.Marker({
        position: {lat: myLat, lng: myLng},
        map: map,
        draggable: true
      });

      // Event listener for drag event to get new coords
      google.maps.event.addListener(marker, 'dragend', function (event) {
        let newLat = marker.getPosition().lat();
        let newLng = marker.getPosition().lng();
        locate(newLat, newLng);
      });

      // Event listener to drop new pin on location with dblclick
      google.maps.event.addListener(map, 'dblclick', function (event) {
        map.setCenter(addMarker(event.latLng, map));
        let newLat = marker.getPosition().lat();
        let newLng = marker.getPosition().lng();
        locate(newLat, newLng);
        google.maps.event.addListener(marker, 'dragend', function (event) {
          let newLat = marker.getPosition().lat();
          let newLng = marker.getPosition().lng();
          locate(newLat, newLng);
        });
      });

      // Function to geolocate based on address
      $('#searchLoc').keypress(function (e) {
        if (e.keyCode == '13') {
          var geocoder = new google.maps.Geocoder();
          geo(geocoder, map);
        }
      });

    // Function use to add marker to the map
      const addMarker = (location, map) => {
        marker.setMap(null);
        marker = null;
        marker = new google.maps.Marker({
          position: location,
          map: map,
          draggable: true
        });
      };

      const geo = (geocoder, map) => {
        let address = $('#searchLoc').val();
        geocoder.geocode({'address': address}, function (results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      };

    // Function that allows new requests to process through app
      function locate (lat, lng) {
        $('#title').html('');
        $('#main-content').html('');
        $.get('http://api.openweathermap.org/data/2.5/forecast', {
          APPID: 'a280d317b70b41271ed25f8e6649645e',
          lat: lat,
          lon: lng,
          cnt: 3,
          units: 'imperial'
        }).done(function (data) {
          var weatherData = '';
          for (var i = 0; i < 3; i++) {
            var date = new Date().toDateString().slice(0, 4);
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var thirdDay = new Date();
            thirdDay.setDate(thirdDay.getDate() + 2);
            (i === 0) ? weatherData += `<div class='current cards mdc-card --mdc-theme-secondary'><p style='margin: auto;'>${date}</p>`
            : (i === 1) ? weatherData += `<div class='next cards mdc-card --mdc-theme-secondary'><p style='margin: auto;'>${tomorrow.toDateString().slice(0, 4)}</p>`
            : weatherData += `<div class='twoDay cards mdc-card --mdc-theme-secondary'><p style='margin: auto;'>${thirdDay.toDateString().slice(0, 4)}</p>`;
            weatherData += `<div class='weather-img'><img style='height: 5vh; width: 5vh; 'src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' alt='Weather Image'/></div>`;
            weatherData += `<div class='temp'>Temp: ${data.list[i].main.temp.toFixed(0)}</div>`;
            weatherData += `<div class='temp-min'>Lo: ${data.list[i].main.temp_min.toFixed(0)}</div>`;
            weatherData += `<div class='temp-max'>Hi: ${data.list[i].main.temp_max.toFixed(0)}</div>`;
            weatherData += `<div class='wind'>Wind: ${data.list[i].wind.speed.toFixed(0)}mph</div>`;
            weatherData += `<div class='humidty'>Humid: ${data.list[i].main.humidity}</div></div>`;
          }
          $('#title').html(`<h1>Weather for ${data.city.name}</h1>`);
          $('#main-content').append(weatherData);
        });
      }
    });
  });
})();
