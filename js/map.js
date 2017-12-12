var map;
var latlng = {
	lat: 19.0760,
	lng: 72.8777
}

function initMap() {}

$(document).ready(function() {
	
	console.log(1);
	initMap = function() {
		console.log(2);
		map = new google.maps.Map(document.getElementById('map'), {
			center: latlng,
			zoom: 10
		});
		console.log(3);
	}
	console.log(5);
});
