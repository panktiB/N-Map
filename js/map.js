var map;
var infowindow;
var markers = [];
var latlng = {
	lat: 19.0760,
	lng: 72.8777
}

function initMap() {

	var styles = [
          {
            featureType: 'water',
            stylers: [
              { color: '#19a0d8' }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [
              { color: '#ffffff' },
              { weight: 6 }
            ]
          },{
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
              { color: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -40 }
            ]
          },{
            featureType: 'transit.station',
            stylers: [
              { weight: 9 },
              { hue: '#e85113' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'labels.icon',
            stylers: [
              { visibility: 'off' }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
              { lightness: 100 }
            ]
          },{
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              { lightness: -100 }
            ]
          },{
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              { visibility: 'on' },
              { color: '#f0e4d3' }
            ]
          },{
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              { color: '#efe9e4' },
              { lightness: -25 }
            ]
          }
        ];

	if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
		map = new google.maps.Map(document.getElementById('map'), {
			center: latlng,
			zoom: 11
		});
	}

	infowindow = new google.maps.InfoWindow();
	var defaultIcon = makeMarkerIcon('800000');
	var highlightedIcon = makeMarkerIcon('FFFF24');

	var barList = viewModel.locations; 
	for(var i = 0; i < barList.length; i++) {

		var position = {lat: barList[i].lat, lng: barList[i].lng};
		var title = barList[i].title;
		var marker = new google.maps.Marker({
			position: position,
			map: map,
			title: title,
			animation: google.maps.Animation.DROP,
			icon: defaultIcon,
			id: i
		});
		markers.push(marker);
		marker.addListener('click', function () {
			populateInfoWindow(this, infowindow);
		});

		marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);
        });
        marker.addListener('mouseout', function() {
            this.setIcon(defaultIcon);
        });
	}

	function populateInfoWindow(marker, infowindow) {
		if (infowindow.marker != marker) {
          infowindow.marker = marker;

          infowindow.setContent('<div>' + marker.title + '</div>');

          infowindow.open(map, marker);
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
	}

	function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
    }

}
//c832f44fa6521dcb56fa89ef74fc3282