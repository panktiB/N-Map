var BarLoc = [
	{title: 'Tap Resto Bar', lat: 19.065185, lng: 72.833815},
	{title: 'Opa! Bar and Cafe', lat: 19.102367, lng: 72.888631},
	{title: 'Rude Lounge', lat: 19.110979, lng: 72.908253},
	{title: '145 Bandra', lat: 19.060382, lng: 72.829285},
	{title: 'R Adda', lat: 19.109223, lng: 72.825536},
	{title: 'Brew House Cafe', lat: 19.009234, lng: 73.033149},
	{title: 'The Irish House', lat: 18.994044, lng: 72.825090}
];

var bar = function(title, lat, lng) {
	this.title = title;
	this.lat = lat;
	this.lng = lng;
};

var viewModel = {
	locations : [
		new bar('Tap Resto Bar', 19.065185, 72.833815), new bar('Opa! Bar and Cafe', 19.102367, 72.888631),
		new bar('The Bar Stock Exchange', 19.105911, 19.105911), new bar('145 Bandra', 19.060382, 72.829285),
		new bar('R Adda', 19.109223, 72.825536), new bar('Brew House Cafe', 19.009234, 73.033149),
		new bar('The Irish House', 18.994044, 72.825090)
	],
	barLoc: ko.observableArray(BarLoc),

	query: ko.observable('')
};

viewModel.search = ko.computed(function() {
	var self = this;
	var search = this.query().toLowerCase();
        var searchResult = this.query().toLowerCase();
        var searchCompare = ko.utils.compareArrays(self.barLoc, self.search);

        return ko.utils.arrayFilter(self.barLoc, function(markerLocation) {
            var title = markerLocation.title.toLowerCase();
            var matched = title.indexOf(searchResult) >= 0;
            var marker = {lat: marLocation.lat, lng: markerLocation.lng};
            if (marker) {
                marker.setVisible(matched);
            }
            // console.log(markerLocation.marker);
            return matched;
        });
}, viewModel);


ko.applyBindings(viewModel);
