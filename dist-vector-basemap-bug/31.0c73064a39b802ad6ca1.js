(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/screenUtils":354,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/screenUtils":354,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/Symbol":371,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Domain":374,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/watchUtils":377,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/tasks/support/FeatureSet":392,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Field":395,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/domains":399,"esri/symbols/SimpleLineSymbol":402,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/SimpleLineSymbol":402,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/renderers/support/LegendOptions":424,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer":426,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/mixins/RefreshableLayer":438,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/FillSymbol":457,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/MarkerSymbol":458,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/support/urlUtils":586,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/LineSymbol":592,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/CodedValueDomain":597,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/InheritedDomain":598,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/RangeDomain":599,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/fieldType":600,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/geometry/support/graphicsUtils":613,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/PictureMarkerSymbol":701,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/symbols/SimpleFillSymbol":702,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/CollectionFlattener":721,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/KMLLayer":913,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/kmlUtils":1508,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/KMLSublayer":2290})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1508:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(124),t(669),t(350),t(338),t(423),t(392)],void 0===(o=function(e,r,t,n,o,i,a,s){function l(e,r,t){t.forEach(function(t){e.set(t.attributes[r],t)})}Object.defineProperty(r,"__esModule",{value:!0});var u={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=function(e){var r=e.folders.slice(),t=new Map,n=new Map,o=new Map,a=new Map,s=new Map,p={esriGeometryPoint:n,esriGeometryPolyline:o,esriGeometryPolygon:a};return e.featureCollection.layers.forEach(function(e){var r=i.clone(e);r.featureSet.features=[];var s=e.featureSet.geometryType;t.set(s,r);var u=e.layerDefinition.objectIdField;"esriGeometryPoint"===s?l(n,u,e.featureSet.features):"esriGeometryPolyline"===s?l(o,u,e.featureSet.features):"esriGeometryPolygon"===s&&l(a,u,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(function(e){s.set(e.id,e)}),e.folders.forEach(function(t){t.networkLinkIds.forEach(function(n){var o=function(e,r,t){var n=function(e,r){var t;return r.some(function(r){return r.id===e&&(t=r,!0)}),t}(e,t);return n&&(n.parentFolderId=r,n.networkLink=n),n}(n,t.id,e.networkLinks);o&&r.push(o)})}),r.forEach(function(e){e.featureInfos&&(e.points=i.clone(t.get("esriGeometryPoint")),e.polylines=i.clone(t.get("esriGeometryPolyline")),e.polygons=i.clone(t.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=p[r.type].get(r.id);t&&e[u[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var n=s.get(r.id);n&&e.mapImages.push(n)}}))}),{folders:e.folders,sublayers:r}},r.fetchService=function(e,r,n){var i=t.kmlServiceUrl;return o(i,{query:{url:e,model:"simple",folders:"",refresh:0!==n||void 0,outSR:JSON.stringify(r)},responseType:"json"})},r.sublayersFromJSON=function(e,r,t,n){void 0===t&&(t=null),void 0===n&&(n=[]);var o=[],i={},a=r.sublayers,s=r.folders.map(function(e){return e.id});return a.forEach(function(r){var a=new e;if(t?a.read(r,t):a.read(r),n.length&&s.indexOf(a.id)>-1&&(a.visible=-1!==n.indexOf(a.id)),i[r.id]=a,null!=r.parentFolderId&&-1!==r.parentFolderId){var l=i[r.parentFolderId];l.sublayers||(l.sublayers=[]),l.sublayers.unshift(a)}else o.unshift(a)}),o},r.getGraphics=function(e){var r=s.fromJSON(e.featureSet).features,t=e.layerDefinition,o=a.fromJSON(t.drawingInfo.renderer),i=n.fromJSON(e.popupInfo);return r.map(function(e){var r=o.getSymbol(e);return e.symbol=r,e.popupTemplate=i,e})}}.apply(null,n))||(e.exports=o)},2290:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(388),t(357),t(340),t(623),t(377),t(336),t(360),t(1508)],void 0===(o=function(e,r,t,n,o,i,a,s,l,u,p,c){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r}var o;return t(r,e),o=r,r.prototype.initialize=function(){var e=this;l.whenOnce(this,"networkLink").then(function(r){return l.whenTrueOnce(e,"visible")}).then(function(){return e.load()})},r.prototype.load=function(){var e=this;if(!this.networkLink)return this.when();var r=this._fetchService(this._get("networkLink").href).then(function(r){var t=p.default(i.ofType(o),c.sublayersFromJSON(o,r));e.sublayers?e.sublayers.addMany(t):e.sublayers=t,e.layer&&e.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),this.when()},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(r){return r.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=r,e.layer=r.layer}),this._sublayersHandles=[e.on("after-add",function(e){var t=e.item;t.parent=r,t.layer=r.layer}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return p.default(i.ofType(o),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},r.prototype._fetchService=function(e){return c.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval).then(function(e){return c.parseKML(e.data)})},n([u.property()],r.prototype,"description",void 0),n([u.property()],r.prototype,"id",void 0),n([u.property({value:null})],r.prototype,"layer",null),n([u.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),n([u.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),n([u.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),n([u.cast("sublayers")],r.prototype,"castSublayers",null),n([u.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),n([u.property({value:!0})],r.prototype,"visible",null),n([u.reader("visible",["visibility"])],r.prototype,"readVisible",null),o=n([u.subclass("esri.layers.support.KMLSublayer")],r)}(u.declared(a,s))}.apply(null,n))||(e.exports=o)},354:function(e,r,t){var n,o;n=[t.dj.c(e.i),r],void 0===(o=function(e,r){function t(e){return e?72*e/r.DPI:0}Object.defineProperty(r,"__esModule",{value:!0});var n=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,o="screenUtils.toPt: input not recognized!";r.DPI=96,r.pt2px=function(e){return e?e/72*r.DPI:0},r.px2pt=t,r.toPt=function(e){if("string"==typeof e){if(n.test(e)){var r=e.match(n),i=Number(r[1]),a=r[3]&&r[3].toLowerCase(),s="-"===e.charAt(0),l="px"===a?t(i):i;return s?-l:l}return console.warn(o),null}return e}}.apply(null,n))||(e.exports=o)},371:function(e,r,t){var n,o;n=[t(347),t(340),t(358)],void 0===(o=function(e,r,t){var n=e({esriSMS:"simple-marker",esriPMS:"picture-marker",esriSLS:"simple-line",esriSFS:"simple-fill",esriPFS:"picture-fill",esriTS:"text",esriSHD:"shield-label-symbol",PointSymbol3D:"point-3d",LineSymbol3D:"line-3d",PolygonSymbol3D:"polygon-3d",MeshSymbol3D:"mesh-3d",LabelSymbol3D:"label-3d"}),o=0;return r.createSubclass({declaredClass:"esri.symbols.Symbol",constructor:function(){this.id="sym"+o++},properties:{type:{type:String,value:null,json:{read:n.read,write:{ignoreOrigin:!0,writer:n.write}}},color:{type:t,value:new t([0,0,0,1]),json:{read:function(e){return e&&null!=e[0]?[e[0],e[1],e[2],e[3]/255]:e},write:{allowNull:!0}}}}})}.apply(null,n))||(e.exports=o)},374:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(340),t(347),t(336)],void 0===(o=function(e,r,t,n,o,i,a){var s=i({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(e){function r(r){var t=e.call(this,r)||this;return t.name=null,t.type=null,t}return t(r,e),n([a.property({json:{write:!0}})],r.prototype,"name",void 0),n([a.property({json:{read:s.read,write:s.write}})],r.prototype,"type",void 0),n([a.subclass("esri.layers.support.Domain")],r)}(a.declared(o))}.apply(null,n))||(e.exports=o)},377:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(380),t(631)],void 0===(o=function(e,r,t,n){function o(e,r,t,n,o){var i=e.watch(r,function(r,o,i,a){n&&!n(r)||t.call(e,r,o,i,a)},o);if(Array.isArray(r))for(var a=0,s=r;a<s.length;a++){var l=s[a],u=e.get(l);n&&n(u)&&t.call(e,u,u,r,e)}else{u=e.get(r);n&&n(u)&&t.call(e,u,u,r,e)}return i}function i(e,r,i,a,s){function l(){u&&(u.remove(),u=null)}var u,p=!1,c=new t(l),d=new n;return d.cancel=c.cancel,d.isCanceled=c.isCanceled,d.isFulfilled=c.isFulfilled,d.isRejected=c.isRejected,d.isResolved=c.isResolved,d.then=c.then,d.remove=l,Object.freeze(d),u=o(e,r,function(r,t,n,o){p=!0,l(),i&&i.call(e,r,t,n,o),c.resolve({value:r,oldValue:t,propertyName:n,target:o})},a,s),p&&l(),d}function a(e){return!!e}function s(e){return!e}function l(e){return!0===e}function u(e){return!1===e}function p(e){return void 0!==e}function c(e){return void 0===e}function d(e,r,t,n){for(var o=Array.isArray(r)?r:r.indexOf(",")>-1?r.split(","):[r],i=y(e,r,t,n),a=0,s=o;a<s.length;a++){var l=s[a].trim(),u=e.get(l);t.call(e,u,u,l,e)}return i}function y(e,r,t,n){return e.watch(r,t,n)}Object.defineProperty(r,"__esModule",{value:!0}),r.init=d,r.watch=y,r.once=function(e,r,t,n){return i(e,r,t,null,n)},r.when=function(e,r,t,n){return o(e,r,t,a,n)},r.whenOnce=function(e,r,t,n){return i(e,r,t,a,n)},r.whenNot=function(e,r,t,n){return o(e,r,t,s,n)},r.whenNotOnce=function(e,r,t,n){return i(e,r,t,s,n)},r.whenTrue=function(e,r,t,n){return o(e,r,t,l,n)},r.whenTrueOnce=function(e,r,t,n){return i(e,r,t,l,n)},r.whenFalse=function(e,r,t,n){return o(e,r,t,u,n)},r.whenFalseOnce=function(e,r,t,n){return i(e,r,t,u,n)},r.whenDefined=function(e,r,t,n){return o(e,r,t,p,n)},r.whenDefinedOnce=function(e,r,t,n){return i(e,r,t,p,n)},r.whenUndefined=function(e,r,t,n){return o(e,r,t,c,n)},r.whenUndefinedOnce=function(e,r,t,n){return i(e,r,t,c,n)},r.pausable=function(e,r,t,n){var o=!1,i=e.watch(r,function(r,n,i,a){o||t.call(e,r,n,i,a)},n);return{remove:function(){i.remove()},pause:function(){o=!0},resume:function(){o=!1}}},r.on=function(e,r,t,n,o,i,a){function s(r){var n=l[r];n&&(i&&i(n.target,r,e,t),n.handle.remove(),delete l[r])}var l={},u=d(e,r,function(r,i,a){s(a),r&&"function"==typeof r.on&&(l[a]={handle:r.on(t,n),target:r},o&&o(r,a,e,t))},a);return{remove:function(){for(var e in u.remove(),l)s(e)}}}}.apply(null,n))||(e.exports=o)},392:function(e,r,t){var n,o;n=[t(347),t(340),t(338),t(383),t(395),t(362),t(613),t(422)],void 0===(o=function(e,r,t,n,o,i,a,s){var l=e({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"});return r.createSubclass({declaredClass:"esri.tasks.support.FeatureSet",getDefaults:function(){return t.mixin(this.inherited(arguments),{features:[]})},properties:{displayFieldName:null,exceededTransferLimit:null,features:{value:null,json:{read:function(e,r){for(var t=i.fromJSON(r.spatialReference),o=[],a=0;a<e.length;a++){var s=e[a],l=n.fromJSON(s),u=s.geometry&&s.geometry.spatialReference;l.geometry&&!u&&(l.geometry.spatialReference=t),o.push(l)}return r.transform&&this._hydrate(r.transform,r.geometryType,o),o}}},fields:{value:null,type:[o]},geometryType:{value:null,json:{read:l.read}},spatialReference:{type:i}},toJSON:function(e){var r={hasZ:this.hasZ,hasM:this.hasM};return this.displayFieldName&&(r.displayFieldName=this.displayFieldName),this.fields&&(r.fields=this.fields.map(function(e){return e.toJSON()})),this.spatialReference?r.spatialReference=this.spatialReference.toJSON():this.features[0]&&this.features[0].geometry&&(r.spatialReference=this.features[0].geometry.spatialReference.toJSON()),this.features[0]&&(this.features[0].geometry&&(r.geometryType=s.getJsonType(this.features[0].geometry)),r.features=a._encodeGraphics(this.features,e)),r.exceededTransferLimit=this.exceededTransferLimit,r.transform=this.transform,t.fixJson(r)},quantize:function(e){var r,t,n=e.translate[0],o=e.translate[1],i=e.scale[0],a=e.scale[1],s=this.features,l=function(e,r,t){var n,o,i,a,s,l,u,p=[];for(n=0,o=e.length;n<o;n++)i=e[n],n>0?(l=r(i[0]),u=t(i[1]),l===a&&u===s||(p.push([l-a,u-s]),a=l,s=u)):(a=r(i[0]),s=t(i[1]),p.push([a,s]));return p.length>0?p:null},u=function(e,r,t){return"point"===e?function(e){return e.x=r(e.x),e.y=t(e.y),e}:"polyline"===e||"polygon"===e?function(e){var n,o,i,a,s,u;for(u=[],n=0,o=(i=e.rings||e.paths).length;n<o;n++)a=i[n],(s=l(a,r,t))&&u.push(s);return u.length>0?(e.rings?e.rings=u:e.paths=u,e):null}:"multipoint"===e?function(e){var n;return(n=l(e.points,r,t)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:void 0}(this.geometryType,function(e){return Math.round((e-n)/i)},function(e){return Math.round((o-e)/a)});for(r=0,t=s.length;r<t;r++)u(s[r].geometry)||(s.splice(r,1),r--,t--);return this.transform=e,this},_hydrate:function(e,r,t){if(e){var n,o,i=e.translate[0],a=e.translate[1],s=e.scale[0],l=e.scale[1],u=function(e,r,t){return"esriGeometryPoint"===e?function(e){e.x=r(e.x),e.y=t(e.y)}:"esriGeometryPolyline"===e||"esriGeometryPolygon"===e?function(e){var n,o,i,a,s,l,u,p,c=e.rings||e.paths;for(n=0,o=c.length;n<o;n++)for(i=0,a=(s=c[n]).length;i<a;i++)l=s[i],i>0?(u+=l[0],p+=l[1]):(u=l[0],p=l[1]),l[0]=r(u),l[1]=t(p)}:"esriGeometryEnvelope"===e?function(e){e.xmin=r(e.xmin),e.ymin=t(e.ymin),e.xmax=r(e.xmax),e.ymax=t(e.ymax)}:"esriGeometryMultipoint"===e?function(e){var n,o,i,a,s,l=e.points;for(n=0,o=l.length;n<o;n++)i=l[n],n>0?(a+=i[0],s+=i[1]):(a=i[0],s=i[1]),i[0]=r(a),i[1]=t(s)}:void 0}(r,function(e){return e*s+i},function(e){return a-e*l});for(n=0,o=t.length;n<o;n++)t[n].geometry&&u(t[n].geometry)}}})}.apply(null,n))||(e.exports=o)},395:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(345),t(335),t(340),t(336),t(399),t(600)],void 0===(o=function(e,r,t,n,o,i,a,s){return function(e){function r(r){var t=e.call(this)||this;return t.alias=null,t.defaultValue=void 0,t.domain=null,t.editable=!0,t.length=-1,t.name=null,t.nullable=!0,t.type=null,t}var o;return t(r,e),o=r,r.prototype.clone=function(){return new o({alias:this.alias,defaultValue:this.defaultValue,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})},n([i.property({type:String,json:{write:!0}})],r.prototype,"alias",void 0),n([i.property({json:{write:{allowNull:!0}}})],r.prototype,"defaultValue",void 0),n([i.property({types:a.types,json:{read:{reader:a.fromJSON},write:!0}})],r.prototype,"domain",void 0),n([i.property({type:Boolean,json:{write:!0}})],r.prototype,"editable",void 0),n([i.property({type:Number,json:{write:!0}})],r.prototype,"length",void 0),n([i.property({type:String,json:{write:!0}})],r.prototype,"name",void 0),n([i.property({type:Boolean,json:{write:!0}})],r.prototype,"nullable",void 0),n([i.property({type:String,json:{read:s.kebabDict.read,write:s.kebabDict.write}})],r.prototype,"type",void 0),o=n([i.subclass("esri.layers.support.Field")],r)}(i.declared(o))}.apply(null,n))||(e.exports=o)},399:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(597),t(374),t(598),t(599)],void 0===(o=function(e,r,t,n,o,i){function a(e,r){switch(e.type){case"range":var t="range"in e?e.range[0]:e.minValue,n="range"in e?e.range[1]:e.maxValue;if(+r<t||+r>n)return s.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(function(e){return null==e||e.code!==r}))return s.INVALID_CODED_VALUE}return null}var s;Object.defineProperty(r,"__esModule",{value:!0}),r.CodedValueDomain=t,r.DomainBase=n,r.InheritedDomain=o,r.RangeDomain=i,function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(s=r.DomainValidationError||(r.DomainValidationError={})),r.isValidDomainValue=function(e,r){return null===a(e,r)},r.validateDomainValue=a,r.types={key:"type",base:r.DomainBase,typeMap:{range:r.RangeDomain,"coded-value":r.CodedValueDomain}},r.getDomainRange=function(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}},r.fromJSON=function(e){return e&&e.type?"range"===e.type?r.RangeDomain.fromJSON(e):"codedValue"===e.type?r.CodedValueDomain.fromJSON(e):null:null}}.apply(null,n))||(e.exports=o)},402:function(e,r,t){var n,o;n=[t(351),t(338),t(354),t(592)],void 0===(o=function(e,r,t,n){var o={STYLE_SOLID:"solid",STYLE_DASH:"dash",STYLE_DOT:"dot",STYLE_DASHDOT:"dash-dot",STYLE_DASHDOTDOT:"long-dash-dot-dot",STYLE_NULL:"none",STYLE_SHORTDASH:"short-dash",STYLE_SHORTDOT:"short-dot",STYLE_SHORTDASHDOT:"short-dash-dot",STYLE_SHORTDASHDOTDOT:"short-dash-dot-dot",STYLE_LONGDASH:"long-dash",STYLE_LONGDASHDOT:"long-dash-dot",CAP_BUTT:"butt",CAP_ROUND:"round",CAP_SQUARE:"square",JOIN_MITER:"miter",JOIN_ROUND:"round",JOIN_BEVEL:"bevel"},i={color:[0,0,0,1],style:o.STYLE_SOLID,width:.75,cap:o.CAP_ROUND,join:o.JOIN_ROUND,miterLimit:7.5},a=e(n,{declaredClass:"esri.symbols.SimpleLineSymbol",properties:{type:"simple-line",style:{value:o.STYLE_SOLID,json:{read:function(e,t){return r.valueOf(this._jsonStyles,e)||void 0},write:function(e,r){r.style=this._jsonStyles[e]}}},cap:{value:o.CAP_ROUND,json:{write:{overridePolicy:function(e,r,t){return{enabled:"round"!==e&&(null==t||null==t.origin)}}}}},join:{value:o.JOIN_ROUND,json:{write:{overridePolicy:function(e,r,t){return{enabled:"round"!==e&&(null==t||null==t.origin)}}}}},miterLimit:{value:7.5,cast:t.toPt,json:{read:!1,write:!1}}},_jsonStyles:{solid:"esriSLSSolid",dash:"esriSLSDash",dot:"esriSLSDot","dash-dot":"esriSLSDashDot","long-dash-dot-dot":"esriSLSDashDotDot",none:"esriSLSNull","inside-frame":"esriSLSInsideFrame","short-dash":"esriSLSShortDash","short-dot":"esriSLSShortDot","short-dash-dot":"esriSLSShortDashDot","short-dash-dot-dot":"esriSLSShortDashDotDot","long-dash":"esriSLSLongDash","long-dash-dot":"esriSLSLongDashDot"},getDefaults:function(){return r.mixin(this.inherited(arguments),i)},normalizeCtorArgs:function(e,r,n,o,i,a){if(e&&"string"!=typeof e)return e;var s={};return null!=e&&(s.style=e),null!=r&&(s.color=r),null!=n&&(s.width=t.toPt(n)),null!=o&&(s.cap=o),null!=i&&(s.join=i),null!=a&&(s.miterLimit=t.toPt(a)),s},clone:function(){return new a({color:r.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit})}});return r.mixin(a,o),a.defaultProps=i,a}.apply(null,n))||(e.exports=o)},424:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(340),t(336)],void 0===(o=function(e,r,t,n,o,i){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.title=null,r}var o;return t(r,e),o=r,r.prototype.clone=function(){return new o({title:this.title})},n([i.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),o=n([i.subclass("esri.renderers.support.LegendOptions")],r)}(i.declared(o));r.LegendOptions=a,r.default=a}.apply(null,n))||(e.exports=o)},426:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(346),t(336)],void 0===(o=function(e,r,t,n,o,i){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.minScale=0,r.maxScale=0,r}return t(r,e),n([i.property({type:Number,json:{write:!0}})],r.prototype,"minScale",void 0),n([i.property({type:Number,json:{write:!0}})],r.prototype,"maxScale",void 0),n([i.subclass("esri.layers.mixins.ScaleRangeLayer")],r)}(i.declared(o))}.apply(null,n))||(e.exports=o)},438:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(346),t(336)],void 0===(o=function(e,r,t,n,o,i){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t(r,e),r.prototype.refresh=function(){this.emit("refresh")},n([i.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0}})],r.prototype,"refreshInterval",void 0),n([i.subclass("esri.layers.mixins.RefreshableLayer")],r)}(i.declared(o))}.apply(null,n))||(e.exports=o)},457:function(e,r,t){var n,o;n=[t(371),t(402)],void 0===(o=function(e,r){return e.createSubclass({declaredClass:"esri.symbols.FillSymbol",properties:{outline:{type:r,json:{read:{default:null},write:!0}},type:null}})}.apply(null,n))||(e.exports=o)},458:function(e,r,t){var n,o;n=[t(351),t(354),t(371)],void 0===(o=function(e,r,t){return e(t,{declaredClass:"esri.symbols.MarkerSymbol",properties:{angle:{value:0,json:{read:function(e){return e&&-1*e},write:function(e,r){r.angle=e&&-1*e}}},type:{},xoffset:{value:0,cast:r.toPt,json:{write:!0}},yoffset:{value:0,cast:r.toPt,json:{write:!0}},size:{value:9,cast:function(e){return"auto"===e?e:r.toPt(e)},json:{write:!0}}}})}.apply(null,n))||(e.exports=o)},586:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(349)],void 0===(o=function(e,r,t){function n(e,r,n){return r.imageData?t.makeData({mediaType:r.contentType||"image/png",isBase64:!0,data:r.imageData}):o(r.url,n)}function o(e,r){return function(e){return e&&("service"===e.origin||"portal-item"===e.origin)&&e.layer&&("feature"===e.layer.type||"stream"===e.layer.type)}(r)&&!t.isAbsolute(e)&&r.layer.parsedUrl?t.join(r.layer.parsedUrl.path,"images",e):t.read(e,r)}function i(e,r,n,o){if(t.isDataProtocol(e)){var i=t.dataComponents(e);r.contentType=i.mediaType,r.imageData=i.data,n&&n.imageData===r.imageData&&n.url&&(r.url=a(n.url,o))}else r.url=a(e,o)}function a(e,r){return t.write(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.readImageDataOrUrl=n,r.read=o,r.writeImageDataAndUrl=i,r.write=a,r.urlPropertyDefinition={json:{read:{source:["imageData","url"],reader:n},write:{writer:function(e,r,t,n){i(e,r,this.source,n)}}}},r.sourcePropertyDefinition={readOnly:!0,json:{read:{source:["imageData","url"],reader:function(e,r,t){var n={};return r.imageData&&(n.imageData=r.imageData),r.contentType&&(n.contentType=r.contentType),r.url&&(n.url=o(r.url,t)),n}}}}}.apply(null,n))||(e.exports=o)},592:function(e,r,t){var n,o;n=[t(351),t(354),t(371)],void 0===(o=function(e,r,t){return e(t,{declaredClass:"esri.symbols.LineSymbol",properties:{color:{},type:"simple-line",width:{value:.75,cast:r.toPt,json:{write:!0}}}})}.apply(null,n))||(e.exports=o)},597:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(338),t(336),t(374)],void 0===(o=function(e,r,t,n,o,i,a){return function(e){function r(r){var t=e.call(this,r)||this;return t.codedValues=null,t.type="coded-value",t}var a;return t(r,e),a=r,r.prototype.writeCodedValues=function(e,r){var t=null;e&&(t=e.map(function(e){return o.fixJson(o.clone(e))})),r.codedValues=t},r.prototype.getName=function(e){var r=null;if(this.codedValues){var t=String(e);this.codedValues.some(function(e){return String(e.code)===t&&(r=e.name),!!r})}return r},r.prototype.clone=function(){return new a({codedValues:o.clone(this.codedValues),name:this.name})},n([i.property({json:{write:!0}})],r.prototype,"codedValues",void 0),n([i.writer("codedValues")],r.prototype,"writeCodedValues",null),n([i.enumeration.serializable()({codedValue:"coded-value"})],r.prototype,"type",void 0),a=n([i.subclass("esri.layers.support.CodedValueDomain")],r)}(i.declared(a))}.apply(null,n))||(e.exports=o)},598:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(336),t(374)],void 0===(o=function(e,r,t,n,o,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.type="inherited",t}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i},n([o.enumeration.serializable()({inherited:"inherited"})],r.prototype,"type",void 0),i=n([o.subclass("esri.layers.support.InheritedDomain")],r)}(o.declared(i))}.apply(null,n))||(e.exports=o)},599:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(336),t(374)],void 0===(o=function(e,r,t,n,o,i){return function(e){function r(r){var t=e.call(this,r)||this;return t.maxValue=null,t.minValue=null,t.type="range",t}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({maxValue:this.maxValue,minValue:this.minValue,name:this.name})},n([o.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[1]}},write:{target:"range",writer:function(e,r,t){r[t]=[this.minValue,e]}}}})],r.prototype,"maxValue",void 0),n([o.property({json:{read:{source:"range",reader:function(e,r){return r.range&&r.range[0]}},write:{target:"range",writer:function(e,r,t){r[t]=[e,this.maxValue]}}}})],r.prototype,"minValue",void 0),n([o.enumeration.serializable()({range:"range"})],r.prototype,"type",void 0),i=n([o.subclass("esri.layers.support.RangeDomain")],r)}(o.declared(i))}.apply(null,n))||(e.exports=o)},600:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(347)],void 0===(o=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.kebabDict=t({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}.apply(null,n))||(e.exports=o)},613:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(357),t(363)],void 0===(o=function(e,r,t,n){Object.defineProperty(r,"__esModule",{value:!0}),r.graphicsExtent=function(e){if(!e||!e.length)return null;var r=t.isCollection(e)?e.getItemAt(0).geometry:e[0].geometry,o=r.extent,i=r;null===o&&(o=new n(i.x,i.y,i.x,i.y,r.spatialReference));for(var a=1;a<e.length;a++){i=r=t.isCollection(e)?e.getItemAt(a).geometry:e[a].geometry;var s=r.extent;null===s&&(s=new n(i.x,i.y,i.x,i.y,r.spatialReference)),o=o.clone().union(s)}return o.width<0&&o.height<0?null:o},r.getGeometries=function(e){return e.map(function(e){return e.geometry})},r._encodeGraphics=function(e,r){var t=[];return e.forEach(function(e,n){var o=e.toJSON(),i={};if(o.geometry){var a=r&&r[n];i.geometry=a&&a.toJSON()||o.geometry}o.attributes&&(i.attributes=o.attributes),t[n]=i}),t}}.apply(null,n))||(e.exports=o)},701:function(e,r,t){var n,o;n=[t(351),t(338),t(354),t(458),t(586)],void 0===(o=function(e,r,t,n,o){var i={width:12,height:12,angle:0,xoffset:0,yoffset:0},a=e(n,{declaredClass:"esri.symbols.PictureMarkerSymbol",properties:{color:{json:{write:!1}},type:"picture-marker",url:o.urlPropertyDefinition,source:o.sourcePropertyDefinition,height:{json:{read:{source:["height","size"],reader:function(e,r){return r.size||e}},write:!0},cast:t.toPt},width:{json:{read:{source:["width","size"],reader:function(e,r){return r.size||e}},write:!0},cast:t.toPt},size:{json:{write:!1}}},getDefaults:function(){return r.mixin(this.inherited(arguments),i)},normalizeCtorArgs:function(e,r,n){if(e&&"string"!=typeof e&&null==e.imageData)return e;var o={};return e&&(o.url=e),null!=r&&(o.width=t.toPt(r)),null!=n&&(o.height=t.toPt(n)),o},clone:function(){var e=new a({angle:this.angle,height:this.height,url:this.url,width:this.width,xoffset:this.xoffset,yoffset:this.yoffset});return e._set("source",r.clone(this.source)),e}});return a.defaultProps=i,a}.apply(null,n))||(e.exports=o)},702:function(e,r,t){var n,o;n=[t(351),t(338),t(457),t(402)],void 0===(o=function(e,r,t,n){var o={style:"solid",outline:new n,color:[0,0,0,.25]},i=e(t,{declaredClass:"esri.symbols.SimpleFillSymbol",properties:{color:{},type:"simple-fill",style:{value:"solid",type:String,json:{read:function(e){return r.valueOf(this._styles,e)||void 0},write:function(e,r){r.style=this._styles[e]}}}},_styles:{solid:"esriSFSSolid",none:"esriSFSNull",horizontal:"esriSFSHorizontal",vertical:"esriSFSVertical","forward-diagonal":"esriSFSForwardDiagonal","backward-diagonal":"esriSFSBackwardDiagonal",cross:"esriSFSCross","diagonal-cross":"esriSFSDiagonalCross"},getDefaults:function(){return r.mixin(this.inherited(arguments),o)},normalizeCtorArgs:function(e,r,t){if(e&&"string"!=typeof e)return e;var n={};return e&&(n.style=e),r&&(n.outline=r),t&&(n.color=t),n},clone:function(){return new i({color:r.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}});return r.mixin(i,{STYLE_SOLID:"solid",STYLE_NULL:"none",STYLE_HORIZONTAL:"horizontal",STYLE_VERTICAL:"vertical",STYLE_FORWARD_DIAGONAL:"forward-diagonal",STYLE_BACKWARD_DIAGONAL:"backward-diagonal",STYLE_CROSS:"cross",STYLE_DIAGONAL_CROSS:"diagonal-cross"}),i.defaultProps=o,i}.apply(null,n))||(e.exports=o)},721:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(337),t(335),t(357),t(365),t(336)],void 0===(o=function(e,r,t,n,o,i,a){return function(e){function r(r){var t=e.call(this)||this;return t._handles=new i,t.root=null,t.refresh=t.refresh.bind(t),t.updateCollections=t.updateCollections.bind(t),t}return t(r,e),r.prototype.initialize=function(){var e=this;this._handles.add(this.rootCollectionNames.map(function(r){return e.watch("root."+r,e.updateCollections,!0)})),this.updateCollections()},r.prototype.destroy=function(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null},r.prototype.updateCollections=function(){var e=this;this._collections=this.rootCollectionNames.map(function(r){return e.get("root."+r)}).filter(function(e){return null!=e}),this.refresh()},r.prototype.refresh=function(){var e=this._handles;e.remove("collections"),this.removeAll();for(var r=this._collections.slice(),t=0,n=this._collections;t<n.length;t++){var o=n[t];this._processCollection(r,this,o)}for(var i=0,a=r;i<a.length;i++){var s=a[i];e.add(s.on("after-changes",this.refresh),"collections")}},r.prototype._createNewInstance=function(e){return new o(e)},r.prototype._processCollection=function(e,r,t){var n=this;t&&(e.push(t),t.forEach(function(t){t&&(r.push(t),n._processCollection(e,r,n.getChildrenFunction(t)))}))},n([a.property()],r.prototype,"rootCollectionNames",void 0),n([a.property()],r.prototype,"root",void 0),n([a.property()],r.prototype,"getChildrenFunction",void 0),n([a.subclass("esri.core.CollectionFlattener")],r)}(a.declared(o))}.apply(null,n))||(e.exports=o)},913:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(344),t(337),t(335),t(357),t(721),t(341),t(339),t(336),t(362),t(398),t(433),t(432),t(438),t(426),t(2290),t(1508)],void 0===(o=function(e,r,n,o,i,a,s,l,u,p,c,d,y,f,h,m,v,g){return function(e){function r(r,t){var n=e.call(this)||this;return n._visibleFolders=[],n.allSublayers=new s({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.outSpatialReference=c.WGS84,n.operationalLayerType="KML",n.sublayers=null,n.type="kml",n.url=null,n.watch("sublayers",function(e,r){r&&r.forEach(function(e){e.parent=null,e.layer=null}),e&&e.forEach(function(e){e.parent=n,e.layer=n})},!0),n}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n({url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){return g.sublayersFromJSON(v,r,t,this._visibleFolders)},r.prototype.writeSublayers=function(e,r,t,n){for(var o=[],i=e.toArray();i.length;){var a=i[0];a.networkLink||(a.visible&&o.push(a.id),a.sublayers&&i.push.apply(i,a.sublayers.toArray())),i.shift()}r.visibleFolders=o},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[],t=function(e){e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),r.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]}).then(function(){return e._fetchService()})),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return u.create(function(e){return Promise.all([t.e(3),t.e(5),t.e(9),t.e(91)]).then(function(){var r=[t(2401)];e.apply(null,r)}.bind(this)).catch(t.oe)});case"3d":return u.reject(new l("kml-layer:view-not-supported","KMLLayer is only supported in 2D"))}},r.prototype._fetchService=function(){var e=this;return u.resolve().then(function(){return e.resourceInfo?{ssl:!1,data:e.resourceInfo}:g.fetchService(e.url,e.outSpatialReference,e.refreshInterval)}).then(function(r){var t=g.parseKML(r.data);t&&e.read(t,{origin:"service"})})},i([p.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([p.property({type:c})],r.prototype,"outSpatialReference",void 0),i([p.property()],r.prototype,"operationalLayerType",void 0),i([p.property({type:a.ofType(v),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),i([p.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),i([p.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),i([p.writer("sublayers")],r.prototype,"writeSublayers",null),i([p.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([p.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),i([p.property()],r.prototype,"url",void 0),i([p.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),i([p.subclass("esri.layers.KMLLayer")],r)}(p.declared(d,y,f,h,m))}.apply(null,n))||(e.exports=o)}}]);