<template>
  <div>
    <div class="row">
      <h1 class="column">ČUČ-KÁRA</h1>
      <!--      <img class="column" src="/images/car.jpg" alt="logo" width="50" height="100px"/>-->
    </div>
    <l-map
        :zoom="zoom"
        :center="center"
        style="height: 700px; width: 100%">
      <l-tile-layer
          :url="url"
          :attribution="attribution"/>
      <l-marker
          v-for="(marker, index) in markers"
          :key="'marker-' + index"
          :lat-lng="marker.location"
          :icon="getIcon(marker)">
        <l-popup>
          <div @click="innerClick">
            I am a popup
          </div>
        </l-popup>
      </l-marker>

      <l-control
          :position="'bottomleft'"
          class="example-custom-control">
        <input
            id="checkbox"
            v-model="showEmpty"
            type="checkbox">
        <label for="checkbox">Zobraz prázdné kontejnery</label>
      </l-control>
    </l-map>
  </div>
</template>

<script>
import L, {latLng} from "leaflet";
import {LMap, LTileLayer, LMarker, LPopup, LControl} from "vue2-leaflet";

export default {
  name: "CucDashboard",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LMarker,
    LControl
  },
  data() {
    return {
      loading: false,
      showEmpty: true,
      zoom: 13,
      center: [49.19522, 16.60796],
      url: 'https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0d23b27dc5ef4960bbf23f91b76d1956',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      allMarkers: []
    };
  },
  computed: {
    markers() {
      if (this.showEmpty) {
        return this.allMarkers;
      } else {
        return this.allMarkers.filter(marker => marker.is_full);
      }
    }
  },
  methods: {
    getIcon(marker) {
      if (marker.is_full) {
        return L.icon({
          iconUrl: '/images/marker_red.png',
          iconSize: [42, 42],
          iconAnchor: [21, 42]
        })
      } else {
        return L.icon({
          iconUrl: '/images/marker_green.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        })
      }
    },
    getPopup(marker) {
      return L.popup({
        closeButton: false,
        closeOnClick: false,
        content: "<div>code:" + marker.code + "</div><div>nom: " + marker.nom + "</div>"
      });
    },
    innerClick() {
      alert("Click!");
      return false;
    },
  },
  async created() {
    this.loading = true;
    const response = await fetch("https://dull-donkey-90.loca.lt/trash_cans")
    const data = await response.json();
    this.allMarkers = data.map(marker => {
      return {
        location: latLng(marker.lat, marker.long),
        is_full: marker.is_full,
      }
    });
    this.loading = false;
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.example-custom-control {
  background: #fff;
  padding: 0 0.5em;
  border: 1px solid #aaa;
  border-radius: 0.1em;
}

label, input {
  display: inline-block;
  vertical-align: middle;
}

/*.row {*/
/*  width: 100%;*/
/*  margin: 0 auto;*/
/*}*/


/*.block {*/
/*  display:flex;*/
/*  align-items:center;*/
/*}*/

</style>
