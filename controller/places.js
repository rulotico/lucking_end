var http = require('http');
var request = require('request');


var places= function places(lat,long,categories,cost,distance,req,res){


// var lat=;
// var long=;
// Get categorie ***************


categories=categories.split(",");
var categories = categories[Math.floor(Math.random()*categories.length)];

// Get cost ***************

if (cost=="2") {cost="1,2"}
if (cost=="3") {cost="1,2,3"}
if (cost=="4") {cost="1,2,3,4"}




// Get cost ***************




// var cost=;
// var distance=;

//------------------------------------------------







var url='https://api.foursquare.com/v2/venues/explore?'+
'll='+lat+
','+long+
'&client_id=RYLVPNQXGVQ5TJTYBO3PHEFMRPG0KAFFSE4N5T0VE0ZIPPNJ'+
'&client_secret=DMNKRIOUMQNZQPA4GK5M1HUAQV3CIV4IPSWUZTNQV5PVK2IR'+
'&v=20172002'+
'&query='+categories+
'&openNow=1'+
'&radius='+distance+
'&price='+cost;


request(url, function (error, response, body) {

				var obj = JSON.parse(body);
				

				
				var venues=obj.response.groups[0].items


				random=venues[Math.floor(Math.random()*venues.length)];

				console.log("*****************")
				console.log(random.venue.name);
				console.log(random.venue.location.address);
				console.log("*****************")
				console.log("*****************")


				var lucky={
					name:random.venue.name,
					venue:random.venue.location.address
				}

				res.send(lucky);

				});

}








module.exports.places = places;
