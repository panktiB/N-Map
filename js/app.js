/*var barLoc = [
	{title: 'Tap Resto Bar', location: {lat: 19.065185, lng: 72.833815}},
	{title: 'Opa! Bar and Cafe', location: {lat: 19.102367, lng: 72.888631}},
	{title: 'The Bar Stock Exchange', location: {lat: 19.105911, lng: 19.105911}},
	{title: '145 Bandra', location: {lat: 19.060382, lng: 72.829285}},
	{title: 'R Adda', location: {lat: 19.109223, lng: 72.825536}},
	{title: 'Brew House Cafe', location: {lat: 19.009234, lng: 73.033149}},
	{title: 'The Irish House', location: {lat: 18.994044, lng: 72.825090}}
];*/

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
	barLoc: ko.observableArray(this.locations),
};

ko.applyBindings(viewModel);
