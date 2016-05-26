//$(function() {

var map;
var infowindow;

function initMap() {
    var pyrmont = {
        lat: -33.867,
        lng: 151.195
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        type: ['store']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);

        $('#myModal').modal('show');

        //console.log('MARK CLICKED');
        //console.log(map);
    });
}


//google.maps.event.addDomListener(window, 'load', init_map);
//});

$(function() {
    console.log("test Init")

    var brand_icon = $('#nav_brand_icon');
    var left_list_group = $('#left_board');
    var right_map = $('#map');
    var filter_box = $('#filter_box');

    brand_icon.on('click', function() {
        if (left_list_group.hasClass('hidden-sm hidden-xs')) {
            left_list_group.toggleClass('hidden-sm hidden-xs');

            right_map.toggleClass('col-sm-12 col-xs-12');
            right_map.addClass('col-sm-8 col-xs-8');
        } else {
            left_list_group.toggleClass('hidden-sm hidden-xs');

            right_map.toggleClass('col-sm-8 col-xs-8');
            right_map.addClass('col-sm-12 col-xs-12');
        }
    });
}());
