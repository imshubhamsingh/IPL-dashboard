<template>
    <div class='map'>
      <div id='map' style="width: 316px;height: 381px;"></div>
    </div>
</template>

<script>
  import AppLoader from './Loader';

  export default {
    name: 'mapCities',
    data() {
      return {
        loaded: false
      };
    },
    components: {
      AppLoader
    },
    props: {
      places: {
        type: Array,
        required: true
      }
    },
    mounted() {
    // eslint-disable-next-line max-len
      const myLatlng = new window.google.maps.LatLng(this.places[0].Coordinates.lat, this.places[0].Coordinates.lng);
      const mapOptions = {
        zoom: 2,
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

      const markers = this.places.map((location) => {
        const { lat, lng } = location.Coordinates;
        return new window.google.maps.Marker({
          position: { lat, lng }
        });
      });

      const vm = this;

      // To add the marker to the map, call setMap();
      markers.map((marker, index) => {
        marker.setMap(map);
        const contentString = `<div id="content" style="color:black"> \
         ${vm.places[index].Venue_Name}<br/>${vm.places[index].City_Name}<br/>${vm.places[index].Host_Country}<br/>
         ${vm.places[index].Match_Date}
        </div>`;

        const infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });
        window.google.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close();
        });
        return window.google.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.open(map, marker);
        });
      });
    },
    watch: {
      places: (newVal) => {
        // eslint-disable-next-line max-len
        const myLatlng = new window.google.maps.LatLng(newVal[0].Coordinates.lat, newVal[0].Coordinates.lng);
        const mapOptions = {
          zoom: 4,
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

        const markers = newVal.map((location) => {
          const { lat, lng } = location.Coordinates;
          return new window.google.maps.Marker({
            position: { lat, lng }
          });
        });

        const vm = newVal;

        // To add the marker to the map, call setMap();
        markers.map((marker, index) => {
          marker.setMap(map);
          const contentString = `<div id="content" style="color:black"> \
         ${vm[index].Venue_Name}<br/>${vm[index].City_Name}<br/>${vm[index].Host_Country}<br/>
         ${vm[index].Match_Date}
        </div>`;

          const infowindow = new window.google.maps.InfoWindow({
            content: contentString
          });
          window.google.maps.event.addListener(marker, 'click', () => {
            infowindow.close();
          });
          return window.google.maps.event.addListener(marker, 'click', () => {
            infowindow.open(map, marker);
          });
        });
      }
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
