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
          <div @click="innerClick(marker)">
            <img :src="marker.photo_url" width="150px" height="110px"/>

            <div class="map__window"><h2>Absolonova x Hlavní</h2>
              <h3>Papír</h3>Objem: 1100<br>Počet: 2<br>Svoz: pondělí, čtvrtek, sobota<br>Četnost: 3x týdně<br>
              <h3>Plast</h3>Objem: 1100<br>Počet: 2<br>Svoz: úterý, středa, pátek, neděle<br>Četnost: 4x týdně<br>
            </div>
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
    innerClick(marker) {
      alert("Click! " + marker.photo_url);
      return false;
    },
  },
  async created() {
    this.loading = true;
    const baseUrl = 'https://7a11-62-44-1-203.ngrok.io';
    const response = await fetch(`${baseUrl}/trash_cans`)
    const data = await response.json();
    this.allMarkers = data.map(marker => {
      return {
        location: latLng(marker.lat, marker.long),
        is_full: marker.is_full,
        photo_url: marker.photo_url,
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
