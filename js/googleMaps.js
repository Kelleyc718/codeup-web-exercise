(function () {
  'use strict';

  // Map initialization centered on Yountville, CA
  const map = new google.maps.Map(document.getElementById('map'),
    {
      center: {lat: 38.401831726, lng: -122.357331904},
      zoom: 15,
      disableDoubleClickZoom: true
    });

  // Info Window content
  const theFrenchLaundry = `<div class="field field-name-body"><h2>Restaurant</h2><p>Chef Thomas Keller visited Yountville, California, in the early 1990s to find a space to fulfill a longtime culinary dream: to establish a destination for fine French cuisine in the Napa Valley. In his travels, he came across a rustic two-story stone cottage. As he walked into the restaurant’s quaint courtyard, he knew it was where he had been headed throughout his career.</p><p><span style="line-height:1.6em">The French Laundry, a 1,600 square-foot structure constructed of river rock and timbers, was built as a saloon in 1900 by a Scottish stonemason. The building later served as a residence, and during the 1920s operated as a French steam laundry. In 1978, town mayor Don Schmitt and his wife Sally renovated the structure into a restaurant, which Keller then purchased in 1994.</span></p><p><span style="line-height:1.6em">The French Laundry has received numerous honors and accolades. Most recently, the&nbsp;Michelin Guide San Francisco awarded The French Laundry their highest rating of three stars for the sixth year in a row, making Thomas Keller the only American-born chef to have two three-starred Michelin&nbsp;restaurants. In 2006, the James Beard Foundation gave The French Laundry the highly coveted “Outstanding Restaurant Award” and awarded Chef Thomas Keller “Outstanding Restaurateur” in 2007.</span></p><p><span style="line-height:1.6em">The French Laundry is a member of French-based Relais &amp; Chateaux, Relais Gourmands and Traditions &amp; Qualité; organizations recognized for their dedication to maintaining the highest international standards for hospitality and culinary excellence.</span></p><p><span style="line-height:1.6em">Through The French Laundry’s menu, which changes daily, the restaurant commits itself to creating classic French cuisine with the finest quality ingredients, along with a similarly intense focus on impeccable guest service.</span></p></div>`;

  // Info Window of my favorite restaurant
  let infowindow = new google.maps.InfoWindow(
    {
      content: theFrenchLaundry
    }
  );

  let marker;

  // instantiating Geocoder
  const geocoder = new google.maps.Geocoder();

  // Add 'click' listener on submit button to geocode location
  document.getElementById('submit').addEventListener('click', function () {
    geo(geocoder, map);
  });

  // Running the geocoder to center on my favorite restaurant
  const geo = function (geocoder, map) {
    let address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function (results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
          title: 'The French Laundry'
        });
        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let labelIndex = 0;

  google.maps.event.addListener(map, 'dblclick', function (event) {
    addMarker(event.latLng, map);
  });

  const addMarker = function (location, map) {
    let mark = new google.maps.Marker({
      position: location,
      label: labels[labelIndex++ % labels.length],
      draggable: true,
      animation: google.maps.Animation.DROP,
      map: map
    });
  };
})();
