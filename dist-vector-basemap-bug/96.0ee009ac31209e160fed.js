(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/lazyLayerLoader":751,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/arcgisLayers":782})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{751:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(339)],void 0===(a=function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.layerLookupMap={CSVLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(22)]).then(function(){var n=[r(911)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ElevationLayer:function(){return t.create(function(e){return r.e(35).then(function(){var n=[r(703)];e.apply(null,n)}.bind(this)).catch(r.oe)})},FeatureLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(25)]).then(function(){var n=[r(331)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GroupLayer:function(){return t.create(function(e){return r.e(17).then(function(){var n=[r(714)];e.apply(null,n)}.bind(this)).catch(r.oe)})},GeoRSSLayer:function(){return t.create(function(e){return r.e(36).then(function(){var n=[r(912)];e.apply(null,n)}.bind(this)).catch(r.oe)})},ImageryLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(26),r.e(48)]).then(function(){var n=[r(908)];e.apply(null,n)}.bind(this)).catch(r.oe)})},KMLLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(14),r.e(31),r.e(49)]).then(function(){var n=[r(913)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapImageLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(21)]).then(function(){var n=[r(909)];e.apply(null,n)}.bind(this)).catch(r.oe)})},MapNotesLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(73)]).then(function(){var n=[r(1035)];e.apply(null,n)}.bind(this)).catch(r.oe)})},OpenStreetMapLayer:function(){return t.create(function(e){return r.e(39).then(function(){var n=[r(914)];e.apply(null,n)}.bind(this)).catch(r.oe)})},PointCloudLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(28),r.e(50)]).then(function(){var n=[r(915)];e.apply(null,n)}.bind(this)).catch(r.oe)})},SceneLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(23)]).then(function(){var n=[r(795)];e.apply(null,n)}.bind(this)).catch(r.oe)})},IntegratedMeshLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(43)]).then(function(){var n=[r(763)];e.apply(null,n)}.bind(this)).catch(r.oe)})},StreamLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(24)]).then(function(){var n=[r(910)];e.apply(null,n)}.bind(this)).catch(r.oe)})},TileLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(2),r.e(71)]).then(function(){var n=[r(691)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnknownLayer:function(){return t.create(function(e){return r.e(100).then(function(){var n=[r(1036)];e.apply(null,n)}.bind(this)).catch(r.oe)})},UnsupportedLayer:function(){return t.create(function(e){return r.e(101).then(function(){var n=[r(1037)];e.apply(null,n)}.bind(this)).catch(r.oe)})},VectorTileLayer:function(){return t.create(function(e){return Promise.all([r.e(16),r.e(37)]).then(function(){var n=[r(736)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WebTileLayer:function(){return t.create(function(e){return r.e(40).then(function(){var n=[r(796)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMSLayer:function(){return t.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(34),r.e(51)]).then(function(){var n=[r(916)];e.apply(null,n)}.bind(this)).catch(r.oe)})},WMTSLayer:function(){return t.create(function(e){return r.e(87).then(function(){var n=[r(1038)];e.apply(null,n)}.bind(this)).catch(r.oe)})},BingMapsLayer:function(){return t.create(function(e){return r.e(10).then(function(){var n=[r(772)];e.apply(null,n)}.bind(this)).catch(r.oe)})}}}.apply(null,t))||(e.exports=a)},782:function(e,n,r){var t,a;t=[r.dj.c(e.i),n,r(344),r(693),r(350),r(341),r(339),r(394),r(394),r(751)],void 0===(a=function(e,n,t,a,u,i,o,c,l,s){function f(e){return(0,s.layerLookupMap[e])()}function y(e){return u(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(n,"__esModule",{value:!0}),n.fromUrl=function(e){return function(e){var n=l.parse(e);if(!n)return o.reject(new i("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e}));var r,t=n.serverType,u=n.sublayer;switch(t){case"MapServer":r=null!=u?"FeatureLayer":function(e){return y(e).then(function(e){return e.tileInfo})}(e).then(function(e){return e?"TileLayer":"MapImageLayer"});break;case"ImageServer":r=y(e).then(function(e){var n=e.tileInfo&&e.tileInfo.format;return e.tileInfo?n&&"LERC"===n.toUpperCase()&&e.cacheType&&"elevation"===e.cacheType.toLowerCase()?"ElevationLayer":"TileLayer":"ImageryLayer"});break;case"SceneServer":r=y(n.url.path).then(function(e){var n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer"};if(e&&Array.isArray(e.layers)&&e.layers.length>0){var r=e.layers[0].layerType;if(null!=n[r])return n[r]}return"SceneLayer"});break;default:r={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"}[t]}var c,s={FeatureLayer:!0,SceneLayer:!0},p={parsedUrl:n,Constructor:null,sublayerIds:null};return a(r).then(function(n){if(c=n,s[n]&&null==u)return function(e){return y(e).then(function(e){return e&&Array.isArray(e.layers)?e.layers.map(function(e){return e.id}).reverse():[]})}(e).then(function(e){1!==e.length&&(p.sublayerIds=e)})}).then(function(){return f(c)}).then(function(e){return p.Constructor=e,p})}(e.url).then(function(n){var a=function(e,n){var r=e.Constructor.prototype.declaredClass;return"esri.layers.FeatureLayer"===r||"esri.layers.StreamLayer"===r?t({outFields:["*"]},n):n}(n,t({},e.properties,{url:e.url}));return n.sublayerIds?o.create(function(e){return r.e(17).then(function(){var n=[r(714)];e.apply(null,n)}.bind(this)).catch(r.oe)}).then(function(e){var r=new e({title:n.parsedUrl.title});return function(e,n){return e.sublayerIds.map(function(r){return new e.Constructor(t({},n,{layerId:r,sublayerTitleMode:"service-name"}))})}(n,a).forEach(function(e){return r.add(e)}),o.resolve(r)}):o.resolve(new n.Constructor(a))})},n.fetchServerVersion=function(e){if(!c.test(e))return o.reject();var n=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return u(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data&&e.data.currentVersion?e.data.currentVersion:o.reject()})}}.apply(null,t))||(e.exports=a)}}]);