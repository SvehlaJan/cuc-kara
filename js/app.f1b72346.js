(function(){"use strict";var t={8745:function(t,r,n){var e=n(8935),o=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"app"}},[n("CucDashboard"),n("Footer")],1)},a=[],i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[t._m(0),n("l-map",{staticStyle:{height:"700px",width:"100%"},attrs:{zoom:t.zoom,center:t.center}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.markers,(function(r,e){return n("l-marker",{key:"marker-"+e,attrs:{"lat-lng":r.location,icon:t.getIcon(r)}},[n("l-popup",[n("div",{on:{click:function(n){return t.innerClick(r)}}},[n("img",{attrs:{src:r.photo_url,width:"150px",height:"110px"}}),n("div",{staticClass:"map__window"},[n("h2",[t._v("Absolonova x Hlavní")]),n("h3",[t._v("Papír")]),t._v("Objem: 1100"),n("br"),t._v("Počet: 2"),n("br"),t._v("Svoz: pondělí, čtvrtek, sobota"),n("br"),t._v("Četnost: 3x týdně"),n("br"),n("h3",[t._v("Plast")]),t._v("Objem: 1100"),n("br"),t._v("Počet: 2"),n("br"),t._v("Svoz: úterý, středa, pátek, neděle"),n("br"),t._v("Četnost: 4x týdně"),n("br")])])])],1)})),n("l-control",{staticClass:"example-custom-control",attrs:{position:"bottomleft"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.showEmpty,expression:"showEmpty"}],attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.showEmpty)?t._i(t.showEmpty,null)>-1:t.showEmpty},on:{change:function(r){var n=t.showEmpty,e=r.target,o=!!e.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);e.checked?i<0&&(t.showEmpty=n.concat([a])):i>-1&&(t.showEmpty=n.slice(0,i).concat(n.slice(i+1)))}else t.showEmpty=o}}}),n("label",{attrs:{for:"checkbox"}},[t._v("Zobraz prázdné kontejnery")])])],2)],1)},c=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"row"},[n("h1",{staticClass:"column"},[t._v("ČUČ-KÁRA")])])}],l=n(9014),s=n.n(l),u=n(5148),p=n(6512),f=n(4774),h=n(9118),m=n(9253),v={name:"CucDashboard",components:{LMap:u.Z,LTileLayer:p.Z,LPopup:f.Z,LMarker:h.Z,LControl:m.Z},data(){return{loading:!1,showEmpty:!0,zoom:13,center:[49.19522,16.60796],url:"https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=0d23b27dc5ef4960bbf23f91b76d1956",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',allMarkers:[]}},computed:{markers(){return this.showEmpty?this.allMarkers:this.allMarkers.filter((t=>t.is_full))}},methods:{getIcon(t){return t.is_full?s().icon({iconUrl:"/images/marker_red.png",iconSize:[42,42],iconAnchor:[21,42]}):s().icon({iconUrl:"/images/marker_green.png",iconSize:[32,32],iconAnchor:[16,32]})},innerClick(t){return alert("Click! "+t.code),!1}},async created(){this.loading=!0;const t="http://7a11-62-44-1-203.ngrok.io",r=await fetch(`${t}/trash_cans`),n=await r.json();this.allMarkers=n.map((t=>({location:(0,l.latLng)(t.lat,t.long),is_full:t.is_full,photo_url:t.photo_url}))),this.loading=!1}},d=v,_=n(1001),b=(0,_.Z)(d,i,c,!1,null,null,null),y=b.exports,k=function(){var t=this,r=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[n("h3",[t._v("O projektu")]),n("p",[t._v(" Vytvořené týmem DataScentics + Honza na "),n("b",[t._v("#HackujBrno")])])])])])])}],w={name:"Footer"},x=w,C=(0,_.Z)(x,k,g,!1,null,"64db84a6",null),E=C.exports,Z={name:"App",components:{CucDashboard:y,Footer:E}},O=Z,j=(0,_.Z)(O,o,a,!1,null,null,null),z=j.exports;e.Z.config.productionTip=!1,e.Z.component("l-map",u.Z),e.Z.component("l-tile-layer",p.Z),e.Z.component("l-marker",h.Z),new e.Z({render:t=>t(z)}).$mount("#app")}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(r,e,o,a){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],o=t[u][1],a=t[u][2];for(var c=!0,l=0;l<e.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[l])}))?e.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(u--,1);var s=o();void 0!==s&&(r=s)}}return r}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[e,o,a]}}(),function(){n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,{a:r}),r}}(),function(){n.d=function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};n.O.j=function(r){return 0===t[r]};var r=function(r,e){var o,a,i=e[0],c=e[1],l=e[2],s=0;if(i.some((function(r){return 0!==t[r]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n)}for(r&&r(e);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},e=self["webpackChunkcucfaro"]=self["webpackChunkcucfaro"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(8745)}));e=n.O(e)})();
//# sourceMappingURL=app.f1b72346.js.map