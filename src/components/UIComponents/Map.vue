<template>
    <div class='map'>
      <div id='map'></div>
    </div>
</template>

<script>
  export default {
    name: 'mapCities',
    mounted() {
      const myLatlng = new window.google.maps.LatLng(20.5937, 78.9629);
      const mapOptions = {
        zoom: 5,
        center: myLatlng,
        scrollwheel: false,
        styles: [ // adapted from https://snazzymaps.com/style/38/shades-of-grey
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [
              {
                saturation: 36
              },
              {
                color: '#000000'
              },
              {
                lightness: 40
              }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                visibility: 'on'
              },
              {
                color: '#000000'
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              },
              {
                lightness: 17
              }
            ]
          }
        ]

      };
      const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      //
      // const marker = new window.google.maps.Marker({
      //   position: myLatlng,
      //   title: 'Cities'
      // });

      const locations = [{
        name: 'Mumbai',
        state: 'Maharashtra',
        lat: '18.975',
        lon: '72.825833'
      }, {
        name: 'Delhi',
        state: 'Delhi',
        lat: '28.666667',
        lon: '77.216667'
      }, {
        name: 'Bangalore',
        state: 'Karnataka',
        lat: '12.983333',
        lon: '77.583333'
      }, {
        name: 'Hyderabad',
        state: 'Telangana',
        lat: '17.375278',
        lon: '78.474444'
      }, {
        name: 'Ahmedabad',
        state: 'Gujarat',
        lat: '23.033333',
        lon: '72.616667'
      }, {
        name: 'Chennai',
        state: 'Tamil Nadu',
        lat: '13.083333',
        lon: '80.283333'
      }];
      const markers = locations.map(location => new window.google.maps.Marker({
        position: { lat: parseFloat(location.lat, 10), lng: parseFloat(location.lon, 10) },
      }));


      // To add the marker to the map, call setMap();
      markers.map(marker => marker.setMap(map));
    }
  };

</script>
<style lang='scss' scoped >
  .map{
    & #map{
      width: 100%;
      height: 375px;
      border-radius: 5px;
      margin: 0 auto;
      position: relative;
    }
  }
</style>
