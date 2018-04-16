'use strict';
import {MDCComponent, MDCFoundation} from '@material/base';
import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import $ from 'jquery';

  const ripple = new MDCRipple(document.querySelector('.mdc-button'));
  const textfield = new MDCTextField(document.querySelector('.mdc-text-field'));

  // Locate user by IP request
  const latLng = $.getJSON('http://ip-api.com/json').done(data => {
    let myLat = data.lat;
    let myLng = data.lon;
    locate(myLat, myLng);

    // Map instantiation made with coords from JSON return
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: myLat,
        lng: myLng
      },
      zoom: 8,
      disableDoubleClickZoom: true
    });

    // Marker placed at users approximate location
    let marker = new google.maps.Marker({
      position: {
        lat: myLat,
        lng: myLng
      },
      map: map,
      draggable: true
    });

    // Event listener for drag event to get new coords
    google.maps.event.addListener(marker, 'dragend', e => {
      let newLat = marker.getPosition().lat();
      let newLng = marker.getPosition().lng();
      locate(newLat, newLng);
    });

    // Event listener to drop new pin on location with dblclick
    google.maps.event.addListener(map, 'dblclick', e => {
      map.setCenter(addMarker(e.latLng, map));
      let newLat = marker.getPosition().lat();
      let newLng = marker.getPosition().lng();
      locate(newLat, newLng);
      google.maps.event.addListener(marker, 'dragend', e => {
        let newLat = marker.getPosition().lat();
        let newLng = marker.getPosition().lng();
        locate(newLat, newLng);
      });
    });

    // Captures #searchLoc value and send to geocoder
    $('#searchLoc').keypress(e => {
      if (e.keyCode == '13') {
        let geocoder = new google.maps.Geocoder();
        geo(geocoder, map);
        console.log(geo(geocoder,map));

      }
    });

    // Reset existing marker values and replaces with geolocated values
    const addMarker = (location, map) => {
      marker.setMap(null);
      marker = null;
      marker = new google.maps.Marker({
        position: location,
        map: map,
        draggable: true
      });
    };

    // Centers map based on geolcated values
    const geo = (geocoder, map) => {
      let address = $('#searchLoc').val();
      geocoder.geocode({
        'address': address
      }, (results, status) => {
        if (status === 'OK') {
          $('#title').html(`<h1>Weather for ${results[0].address_components[0].long_name}</h1>`);
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
    return thisLat = results[2].location.lat;
            thisLng = results[2].location.lng;
  });

  // JSON request to get weatherData passed on geolocated position
  const locate = (lat, lng) => {
    $('#title').html('');
    $('#main-content').html('');
    $.get('http://api.openweathermap.org/data/2.5/forecast', {
      APPID: 'a280d317b70b41271ed25f8e6649645e',
      lat: lat,
      lon: lng,
      cnt: 3,
      units: 'imperial'
    }).done(data => buildHTML(data));
  };

  // Builds supporting HTML based on data gathered from geolocated JSON request.


  const buildHTML = data => {
    // Users date information
    let date = new Date();
    let weatherData = '';

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    let thirdDay = new Date();
    thirdDay.setDate(thirdDay.getDate() + 2);

    for (var i = 0; i < 3; i++) {
      (i === 0) ? weatherData += `<div class='mdc-card'><p>${date.toDateString().slice(0, 4)}</p>`
      : (i === 1) ? weatherData += `<div class='mdc-card'><p>${tomorrow.toDateString().slice(0, 4)}</p>`
      : weatherData += `<div class='mdc-card'><p>${thirdDay.toDateString().slice(0, 4)}</p>`;
      weatherData += `<div class='weather-img'>
      <img src='http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png' alt='Weather'/></div>`;
      weatherData += `<p>Temp: ${data.list[i].main.temp.toFixed(0)}</p>`;
      weatherData += `<p>Lo: ${data.list[i].main.temp_min.toFixed(0)} / `;
      weatherData += `Hi: ${data.list[i].main.temp_max.toFixed(0)}</p>`;
      weatherData += `<p>Wind: ${data.list[i].wind.speed.toFixed(0)}mph</p>`;
      weatherData += `<p>Humid: ${data.list[i].main.humidity}</p></div>`;
    }
    $('#title').html(`<h1>Weather for ${data.city.name}</h1>`);
    $('#main-content').append(weatherData);
  };
