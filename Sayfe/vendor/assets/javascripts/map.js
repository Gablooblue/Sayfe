function()
{
    var mapStyle = 
    [
      {
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#f5f5f5"
	  }
	]
      },
      {
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#616161"
	  }
	]
      },
      {
	"elementType": "labels.text.stroke",
	"stylers": [
	  {
	    "color": "#f5f5f5"
	  }
	]
      },
      {
	"featureType": "landscape.man_made",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#ffffff"
	  }
	]
      },
      {
	"featureType": "landscape.man_made",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#6e6e6e"
	  }
	]
      },
      {
	"featureType": "landscape.natural",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#488c00"
	  }
	]
      },
      {
	"featureType": "landscape.natural",
	"elementType": "labels.text.stroke",
	"stylers": [
	  {
	    "color": "#ffffff"
	  }
	]
      },
      {
	"featureType": "poi",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#eeeeee"
	  }
	]
      },
      {
	"featureType": "poi",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#757575"
	  }
	]
      },
      {
	"featureType": "poi.business",
	"elementType": "labels.icon",
	"stylers": [
	  {
	    "weight": 0.5
	  }
	]
      },
      {
	"featureType": "poi.business",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#a8a8a8"
	  }
	]
      },
      {
	"featureType": "poi.government",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#e661f5"
	  },
	  {
	    "weight": 1
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#ffc3c3"
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "geometry.stroke",
	"stylers": [
	  {
	    "color": "#ff0000"
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "labels.icon",
	"stylers": [
	  {
	    "weight": 8
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "labels.text",
	"stylers": [
	  {
	    "weight": 8
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#ff0000"
	  },
	  {
	    "weight": 8
	  }
	]
      },
      {
	"featureType": "poi.medical",
	"elementType": "labels.text.stroke",
	"stylers": [
	  {
	    "color": "#ffffff"
	  },
	  {
	    "weight": 8
	  }
	]
      },
      {
	"featureType": "poi.school",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#b3b07e"
	  }
	]
      },
      {
	"featureType": "road",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#ffffff"
	  }
	]
      },
      {
	"featureType": "road.arterial",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#b7b7b7"
	  }
	]
      },
      {
	"featureType": "road.arterial",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#757575"
	  }
	]
      },
      {
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#dadada"
	  }
	]
      },
      {
	"featureType": "road.highway",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#aaacab"
	  }
	]
      },
      {
	"featureType": "road.highway",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#616161"
	  }
	]
      },
      {
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#ffffe4"
	  }
	]
      },
      {
	"featureType": "road.local",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#d6d6d6"
	  }
	]
      },
      {
	"featureType": "road.local",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#9e9e9e"
	  }
	]
      },
      {
	"featureType": "transit.line",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#e5e5e5"
	  }
	]
      },
      {
	"featureType": "water",
	"elementType": "geometry",
	"stylers": [
	  {
	    "color": "#c9c9c9"
	  }
	]
      },
      {
	"featureType": "water",
	"elementType": "geometry.fill",
	"stylers": [
	  {
	    "color": "#d1e7ff"
	  }
	]
      },
      {
	"featureType": "water",
	"elementType": "labels.text.fill",
	"stylers": [
	  {
	    "color": "#9e9e9e"
	  }
	]
      }
    ];
    handler = Gmaps.build('Google');
    handler.buildMap({ provider: { styles: mapStyle }, internal: {id: 'map'}}, function(){
      markers = handler.addMarkers(<%=raw @hash.to_json %>);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });
}
