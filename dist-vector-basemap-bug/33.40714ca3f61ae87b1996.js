(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Domain":374,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/Field":395,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/domains":399,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/fieldUtils":447,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/CodedValueDomain":597,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/InheritedDomain":598,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/RangeDomain":599,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/fieldType":600,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/support/FeatureProcessing":652,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/libs/gl-matrix/common":655,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/libs/gl-matrix/vec2":683,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/QueueProcessor":793,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/tiling/TileQueue":863,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/Queue":864,"esri/core/HandleOwner":904,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/HandleOwner":904,"esri/views/2d/tiling":1096,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/tiling":1096,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController":1427,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue":1645})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1096:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(749),r(441),r(863),r(876)],void 0===(i=function(e,t,r,n,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.TileInfoView=r,t.TileKey=n,t.TileQueue=i,t.TileStrategy=o}.apply(null,n))||(e.exports=i)},1427:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(346),r(904),r(336)],void 0===(i=function(e,t,r,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return r(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),t.prototype.enableEvent=function(e){},n([s.property()],t.prototype,"processor",void 0),n([s.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),n([s.property({constructOnly:!0})],t.prototype,"service",void 0),n([s.property({dependsOn:["tileStore.spatialReference"]})],t.prototype,"spatialReference",null),n([s.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),n([s.property({constructOnly:!0})],t.prototype,"tileStore",void 0),n([s.subclass()],t)}(s.declared(i,o));t.default=a}.apply(null,n))||(e.exports=i)},1645:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(346),r(462),r(336),r(1096),r(683)],void 0===(i=function(e,t,r,n,i,o,s,a,u){Object.defineProperty(t,"__esModule",{value:!0});var l=[0,0],p=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=new Map,r._onGoingTile=null,r._onGoingPromise=null,r._isPaused=!1,r._scheduledNextHandle=null,r._timestamp=Date.now(),r.tileInfoView=null,r._next=r._next.bind(r),r._finalize=r._finalize.bind(r),r}return r(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){this._queue.has(e)||(this._queue.set(e,{tileId:e,key:a.TileKey.pool.acquire(e),timestamp:t||this._timestamp}),this._scheduleNext(),this.notifyChange("updating"))},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;if(e){var t=e.tileId;this.push(t,this._timestamp)}this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=o.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)this._scheduledNextHandle=null;else{this._scheduledNextHandle=null;var e=this._peek(),t=e.tileId,r=e.key;a.TileKey.pool.release(r),this._queue.delete(t),this._onGoingTile=e,this._onGoingPromise=this.process(t,this._timestamp),function(e){return e&&"function"==typeof e.then}(this._onGoingPromise)?this._onGoingPromise.then(this._finalize,this._finalize):this._finalize(),this.notifyChange("updating")}},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,r=this.state.center,n=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY,o=null;return this._queue.forEach(function(s,a){t.getTileCoords(l,s.key);var p=e._timestamp-s.timestamp;if(isNaN(p))(c=u.distance(l,r))<i&&(i=c,o=s);else if(p===n){var c;(c=u.distance(l,r))<i&&(i=c,o=s)}else p>n&&(n=p,i=Number.POSITIVE_INFINITY,o=s)}),o},n([s.property({readOnly:!0})],t.prototype,"length",null),n([s.property({constructOnly:!0})],t.prototype,"process",void 0),n([s.property()],t.prototype,"state",void 0),n([s.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),n([s.property({readOnly:!0})],t.prototype,"updating",null),n([s.subclass()],t)}(s.declared(i));t.default=p}.apply(null,n))||(e.exports=i)},374:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(340),r(347),r(336)],void 0===(i=function(e,t,r,n,i,o,s){var a=o({inherited:"inherited",codedValue:"coded-value",range:"range"});return function(e){function t(t){var r=e.call(this,t)||this;return r.name=null,r.type=null,r}return r(t,e),n([s.property({json:{write:!0}})],t.prototype,"name",void 0),n([s.property({json:{read:a.read,write:a.write}})],t.prototype,"type",void 0),n([s.subclass("esri.layers.support.Domain")],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)},395:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(345),r(335),r(340),r(336),r(399),r(600)],void 0===(i=function(e,t,r,n,i,o,s,a){return function(e){function t(t){var r=e.call(this)||this;return r.alias=null,r.defaultValue=void 0,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r}var i;return r(t,e),i=t,t.prototype.clone=function(){return new i({alias:this.alias,defaultValue:this.defaultValue,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type})},n([o.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),n([o.property({json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),n([o.property({types:s.types,json:{read:{reader:s.fromJSON},write:!0}})],t.prototype,"domain",void 0),n([o.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),n([o.property({type:Number,json:{write:!0}})],t.prototype,"length",void 0),n([o.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),n([o.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),n([o.property({type:String,json:{read:a.kebabDict.read,write:a.kebabDict.write}})],t.prototype,"type",void 0),i=n([o.subclass("esri.layers.support.Field")],t)}(o.declared(i))}.apply(null,n))||(e.exports=i)},399:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(597),r(374),r(598),r(599)],void 0===(i=function(e,t,r,n,i,o){function s(e,t){switch(e.type){case"range":var r="range"in e?e.range[0]:e.minValue,n="range"in e?e.range[1]:e.maxValue;if(+t<r||+t>n)return a.VALUE_OUT_OF_RANGE;break;case"coded-value":case"codedValue":if(null==e.codedValues||e.codedValues.every(function(e){return null==e||e.code!==t}))return a.INVALID_CODED_VALUE}return null}var a;Object.defineProperty(t,"__esModule",{value:!0}),t.CodedValueDomain=r,t.DomainBase=n,t.InheritedDomain=i,t.RangeDomain=o,function(e){e.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range",e.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"}(a=t.DomainValidationError||(t.DomainValidationError={})),t.isValidDomainValue=function(e,t){return null===s(e,t)},t.validateDomainValue=s,t.types={key:"type",base:t.DomainBase,typeMap:{range:t.RangeDomain,"coded-value":t.CodedValueDomain}},t.getDomainRange=function(e){if(e&&"range"===e.type)return{min:"range"in e?e.range[0]:e.minValue,max:"range"in e?e.range[1]:e.maxValue}},t.fromJSON=function(e){return e&&e.type?"range"===e.type?t.RangeDomain.fromJSON(e):"codedValue"===e.type?t.CodedValueDomain.fromJSON(e):null:null}}.apply(null,n))||(e.exports=i)},447:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(587),r(405),r(399)],void 0===(i=function(e,t,r,n,i){function o(e,t,r){if(e)for(var i=0,o=e;i<o.length;i++){var a=o[i],u=n.getDeepValue(a,t),l=u&&"function"!=typeof u&&s(u,r);l&&n.setDeepValue(a,l.name,t)}}function s(e,t){if("string"!=typeof e)return null;if(null!=t){e=e.toLowerCase();for(var r=0,n=t;r<n.length;r++){var i=n[r];if(i&&i.name.toLowerCase()===e)return i}}return null}function a(e){return"number"==typeof e&&!isNaN(e)&&isFinite(e)}function u(e){return null===e||a(e)}function l(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function p(e){return null===e||l(e)}function c(e){return null!=e&&"string"==typeof e}function d(e){return null===e||c(e)}function h(e){return!0}function f(e,t){var r;switch(e.type){case"date":case"integer":case"long":case"small-integer":case"esriFieldTypeDate":case"esriFieldTypeInteger":case"esriFieldTypeLong":case"esriFieldTypeSmallInteger":r=e.nullable?p:l;break;case"double":case"single":case"esriFieldTypeSingle":case"esriFieldTypeDouble":r=e.nullable?u:a;break;case"string":case"esriFieldTypeString":r=e.nullable?d:c;break;default:r=h}return 1===arguments.length?r:r(t)}function y(e){return null!=e&&T.has(e.type)}function m(e,t){return e.nullable&&null===t?null:y(e)&&!g(e.type,t)?v.OUT_OF_RANGE:f(e,t)?e.domain?i.validateDomainValue(e.domain,t):null:b.INVALID_TYPE}function g(e,t){var r=_(e);return!!r&&t>=r.min&&t<=r.max}function _(e){switch(e){case"esriFieldTypeSmallInteger":case"small-integer":return{min:-32768,max:32767};case"esriFieldTypeInteger":case"integer":return{min:-2147483648,max:2147483647};case"esriFieldTypeSingle":case"single":return{min:-3.4e38,max:1.2e38};case"esriFieldTypeDouble":case"double":var t=Number.MAX_VALUE;return{min:-Number.MAX_VALUE,max:t}}}Object.defineProperty(t,"__esModule",{value:!0}),t.fixRendererFields=function(e,r){if(null!=e&&null!=r)for(var n=0,i=Array.isArray(e)?e:[e];n<i.length;n++){var s=i[n];if(o(t.rendererFields,s,r),s.visualVariables)for(var a=0,u=s.visualVariables;a<u.length;a++){var l=u[a];o(t.visualVariableFields,l,r)}}},t.getField=s,t.getFieldDefaultValue=function(e){var t=e.defaultValue;return void 0!==t&&f(e,t)?t:e.nullable?null:void 0},t.isValueMatchingFieldType=f,t.rendererFields=["field","field2","field3","normalizationField","rotationInfo.field","proportionalSymbolInfo.field","proportionalSymbolInfo.normalizationField","colorInfo.field","colorInfo.normalizationField"],t.visualVariableFields=["field","normalizationField"],t.numericTypes=["integer","small-integer","single","double"];var v,b,T=new r.default(t.numericTypes.concat(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]));t.isNumericField=y,t.isStringField=function(e){return null!=e&&("string"===e.type||"esriFieldTypeString"===e.type)},t.isDateField=function(e){return null!=e&&("date"===e.type||"esriFieldTypeDate"===e.type)},t.isValidFieldValue=function(e,t){return null===m(e,t)},(v=t.NumericRangeValidationError||(t.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range",(b=t.TypeValidationError||(t.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type",t.validateFieldValue=m,t.isNumberInRange=g,t.getFieldRange=function(e){var t=i.getDomainRange(e.domain);return t||(y(e)?_(e.type):void 0)},t.validationErrorToString=function(e,t,r){switch(e){case i.DomainValidationError.INVALID_CODED_VALUE:return"Value "+r+" is not in the coded domain - field: "+t.name+", domain: "+JSON.stringify(t.domain);case i.DomainValidationError.VALUE_OUT_OF_RANGE:return"Value "+r+" is out of the range of valid values - field: "+t.name+", domain: "+JSON.stringify(t.domain);case b.INVALID_TYPE:return"Value "+r+" is not a valid value for the field type - field: "+t.name+", type: "+t.type+", nullable: "+t.nullable;case v.OUT_OF_RANGE:var n=_(t.type),o=n.min,s=n.max;return"Value "+r+" is out of range for the number type - field: "+t.name+", type: "+t.type+", value range is "+o+" to "+s}}}.apply(null,n))||(e.exports=i)},597:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(338),r(336),r(374)],void 0===(i=function(e,t,r,n,i,o,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.codedValues=null,r.type="coded-value",r}var s;return r(t,e),s=t,t.prototype.writeCodedValues=function(e,t){var r=null;e&&(r=e.map(function(e){return i.fixJson(i.clone(e))})),t.codedValues=r},t.prototype.getName=function(e){var t=null;if(this.codedValues){var r=String(e);this.codedValues.some(function(e){return String(e.code)===r&&(t=e.name),!!t})}return t},t.prototype.clone=function(){return new s({codedValues:i.clone(this.codedValues),name:this.name})},n([o.property({json:{write:!0}})],t.prototype,"codedValues",void 0),n([o.writer("codedValues")],t.prototype,"writeCodedValues",null),n([o.enumeration.serializable()({codedValue:"coded-value"})],t.prototype,"type",void 0),s=n([o.subclass("esri.layers.support.CodedValueDomain")],t)}(o.declared(s))}.apply(null,n))||(e.exports=i)},598:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(336),r(374)],void 0===(i=function(e,t,r,n,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="inherited",r}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o},n([i.enumeration.serializable()({inherited:"inherited"})],t.prototype,"type",void 0),o=n([i.subclass("esri.layers.support.InheritedDomain")],t)}(i.declared(o))}.apply(null,n))||(e.exports=i)},599:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(336),r(374)],void 0===(i=function(e,t,r,n,i,o){return function(e){function t(t){var r=e.call(this,t)||this;return r.maxValue=null,r.minValue=null,r.type="range",r}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({maxValue:this.maxValue,minValue:this.minValue,name:this.name})},n([i.property({json:{read:{source:"range",reader:function(e,t){return t.range&&t.range[1]}},write:{target:"range",writer:function(e,t,r){t[r]=[this.minValue,e]}}}})],t.prototype,"maxValue",void 0),n([i.property({json:{read:{source:"range",reader:function(e,t){return t.range&&t.range[0]}},write:{target:"range",writer:function(e,t,r){t[r]=[e,this.maxValue]}}}})],t.prototype,"minValue",void 0),n([i.enumeration.serializable()({range:"range"})],t.prototype,"type",void 0),o=n([i.subclass("esri.layers.support.RangeDomain")],t)}(i.declared(o))}.apply(null,n))||(e.exports=i)},600:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(347)],void 0===(i=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.kebabDict=r({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}.apply(null,n))||(e.exports=i)},652:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(346),r(338),r(336),r(395),r(447)],void 0===(i=function(e,t,r,n,i,o,s,a,u){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var i;return r(t,e),i=t,t.fromWorker=function(e){if(!e)return null;var t=JSON.parse(e),r=new i;return r.fields=t.fields&&t.fields.map(function(e){return a.fromJSON(e)}),r.options=t.options,r.process=new(Function.bind.apply(Function,[void 0].concat(t.process.args,[t.process.body]))),r},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i(o.clone({fields:this.fields,options:this.options,process:this.process}))},t.prototype.getField=function(e){return u.getField(e,this.fields)},t.prototype.refresh=function(){this.notifyChange("version")},t.prototype.toWorker=function(){var e=this.process.toString();return JSON.stringify({fields:this.fields,options:this.options,process:{body:e.substring(e.indexOf("{")+1,e.lastIndexOf("}")),args:e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)}})},n([s.property({type:[a]})],t.prototype,"fields",void 0),n([s.property()],t.prototype,"options",void 0),n([s.property()],t.prototype,"process",void 0),n([s.property({readOnly:!0,dependsOn:["process","options","fields"]})],t.prototype,"version",null),i=n([s.subclass("esri.layers.support.FeatureProcessing")],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)},655:function(e,t,r){var n;void 0===(n=function(){if(!e)var e=1e-6;if(!t)var t="undefined"!=typeof Float32Array?Float32Array:Array;if(!r)var r=Math.random;var n={GLMAT_EPSILON:e,GLMAT_ARRAY_TYPE:t,GLMAT_RANDOM:r,setMatrixArrayType:function(e){n.GLMAT_ARRAY_TYPE=e}},i=Math.PI/180,o=180/Math.PI;return n.toRadian=function(e){return e*i},n.toDegree=function(e){return e*o},n.setMatrixArrayType(Array),n}.apply(null,[]))||(e.exports=n)},683:function(e,t,r){var n,i;n=[r(655)],void 0===(i=function(e){var t=e.GLMAT_ARRAY_TYPE,r=e.GLMAT_RANDOM,n={create:function(){var e=new t(2);return e[0]=0,e[1]=0,e},clone:function(e){var r=new t(2);return r[0]=e[0],r[1]=e[1],r},fromValues:function(e,r){var n=new t(2);return n[0]=e,n[1]=r,n},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e},set:function(e,t,r){return e[0]=t,e[1]=r,e},add:function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e},subtract:function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e}};return n.sub=n.subtract,n.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e},n.mul=n.multiply,n.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e},n.div=n.divide,n.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e},n.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e},n.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e},n.scaleAndAdd=function(e,t,r,n){return e[0]=t[0]+r[0]*n,e[1]=t[1]+r[1]*n,e},n.distance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)},n.dist=n.distance,n.squaredDistance=function(e,t){var r=t[0]-e[0],n=t[1]-e[1];return r*r+n*n},n.sqrDist=n.squaredDistance,n.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)},n.len=n.length,n.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r},n.sqrLen=n.squaredLength,n.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e},n.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},n.normalize=function(e,t){var r=t[0],n=t[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e},n.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]},n.cross=function(e,t,r){var n=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=n,e},n.lerp=function(e,t,r,n){var i=t[0],o=t[1];return e[0]=i+n*(r[0]-i),e[1]=o+n*(r[1]-o),e},n.random=function(e,t){t=t||1;var n=2*r()*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},n.transformMat2=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i,e[1]=r[1]*n+r[3]*i,e},n.transformMat2d=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[2]*i+r[4],e[1]=r[1]*n+r[3]*i+r[5],e},n.transformMat3=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[3]*i+r[6],e[1]=r[1]*n+r[4]*i+r[7],e},n.transformMat4=function(e,t,r){var n=t[0],i=t[1];return e[0]=r[0]*n+r[4]*i+r[12],e[1]=r[1]*n+r[5]*i+r[13],e},n.forEach=function(){var e=n.create();return function(t,r,n,i,o,s){var a,u;for(r||(r=2),n||(n=0),u=i?Math.min(i*r+n,t.length):t.length,a=n;a<u;a+=r)e[0]=t[a],e[1]=t[a+1],o(e,e,s),t[a]=e[0],t[a+1]=e[1];return t}}(),n.str=function(e){return"vec2("+e[0]+", "+e[1]+")"},n}.apply(null,n))||(e.exports=i)},793:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(380),r(864),r(462)],void 0===(i=function(e,t,r,n,i){return function(){function e(e){this._apiPromises=new Map,this._processingItems=new Map,this._isPaused=!1,this._scheduledNextHandle=null,this.concurrency=1,this.ordered=!1,e.concurrency&&(this.concurrency=e.concurrency),this.ordered=!!e.ordered,this._queue=new n(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._processingItems.forEach(function(t){return e.push(t.resultPromise)}),this._processingItems.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(t){return e.push(t)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._cancelNext()},e.prototype.find=function(e,t){var r=this,n=void 0;return this._apiPromises.forEach(function(i,o){e.call(t,o)&&(n=r._apiPromises.get(o).promise)}),n},e.prototype.get=function(e){var t=this._apiPromises.get(e);return t&&t.promise||void 0},e.prototype.isOngoing=function(e){return this._processingItems.has(e)},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){var t=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var n=new r(function(r){var n=t._processingItems.get(e);n?n.resultPromise.cancel(r):(t._remove(e),t._scheduleNext())});return this._add(e,n),this._scheduleNext(),n.promise},e.prototype.reset=function(){var e=[];this._processingItems.forEach(function(t){return e.push(t)}),this._processingItems.clear();for(var t=0,r=e;t<r.length;t++){var n=r[t];n.resultPromise.isFulfilled()?this._processReset(n):(n.isReset=!0,n.resultPromise.cancel())}},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._scheduleNext=function(){var e=this;this._isPaused||this._scheduledNextHandle||(this._scheduledNextHandle=i.schedule(function(){e._scheduledNextHandle=null,e._next()}))},e.prototype._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},e.prototype._processResult=function(e,t){this._remove(e.item),this._scheduleNext(),e.dfd.resolve(t)},e.prototype._processError=function(e,t){e.isReset?this._processReset(e):(this._remove(e.item),this._scheduleNext(),e.dfd.reject(t))},e.prototype._processReset=function(e){this._remove(e.item),this._add(e.item,e.dfd),this._scheduleNext()},e.prototype._processOrdered=function(e,t){var r=this,n=!1;if(e.isReset)this._processReset(e);else{e.result=t,this._itemsToProcess||(this._itemsToProcess=[]),this._processingItems.forEach(function(e){n||(e.result?r._itemsToProcess.push(e):n=!0)});for(var i=0,o=this._itemsToProcess;i<o.length;i++){var s=o[i];!1===s.result.ok?this._processError(s,s.result.error):this._processResult(s,s.result.value)}this._itemsToProcess.length=0}},e.prototype._process=function(e){var t=this;if(null!=e){var r=this._apiPromises.get(e),n=this.process(e);if(function(e){return e&&"function"==typeof e.then}(n)){var i={item:e,resultPromise:n,result:null,dfd:r,isReset:!1};this._processingItems.set(e,i),this.ordered?n.then(function(e){return t._processOrdered(i,{ok:!0,value:e})},function(e){return t._processOrdered(i,{ok:!1,error:e})}):n.then(function(e){return t._processResult(i,e)},function(e){return t._processError(i,e)})}else r.resolve(n),this._remove(e)}},e.prototype._add=function(e,t){this._apiPromises.set(e,t),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises.delete(e),this._processingItems.delete(e)},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e}()}.apply(null,n))||(e.exports=i)},863:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(346),r(793),r(336),r(683)],void 0===(i=function(e,t,r,n,i,o,s,a){var u=new Set,l=[],p=new Map,c=[0,0];return function(e){function t(t){var r=e.call(this,t)||this;return r._keysToRequests=new Map,r.concurrency=6,r.process=null,r.strategy="scale-first",r.tileInfoView=null,r.tileServers=null,r}return r(t,e),t.prototype.initialize=function(){var e=this,t="scale-first"===this.strategy?this._peekByScaleFirst.bind(this):this._peekByCenterFirst.bind(this),r=this,n=r.tileServers,i=r.concurrency,s=r.process;n&&n.length>0?this._queues=n.map(function(r){return new o({concurrency:i,process:function(t){var n=e._keysToRequests.get(t);return s(n,r)},peeker:t})}):this._queues=[new o({concurrency:i,process:function(t){var r=e._keysToRequests.get(t);return s(r)},peeker:t})]},Object.defineProperty(t.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this.length>0||this.onGoingCount>0},enumerable:!0,configurable:!0}),t.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].clear();this._keysToRequests.clear(),this.notifyChange("updating")},t.prototype.find=function(e,t){for(var r=this,n=0,i=this._queues;n<i.length;n++){var o=i[n].find(function(t){return e(r._keysToRequests.get(t).key)});if(o)return o}},t.prototype.getPromise=function(e){for(var t="string"==typeof e?e:e.id,r=0,n=this._queues;r<n.length;r++){var i=n[r].get(t);if(i)return i}},t.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},t.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},t.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some(function(e){return e.isOngoing(t)})},t.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].pause()},t.prototype.push=function(e){var t=this,r=e.key.id;if(this.has(r))return this.getPromise(r);var n=this._queues[e.key.row%this._queues.length].push(r),i=function(){t._keysToRequests.delete(r),t.notifyChange("updating")};return this._keysToRequests.set(r,e),n.then(i,i),this.notifyChange("updating"),n},t.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].reset();this.notifyChange("updating")},t.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].resume()},t.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=0,o=e;i<o.length;i++){var s=o[i],a=this._keysToRequests.get(s),c=this.tileInfoView.getTileScale(a.key);p.has(c)||(p.set(c,[]),r=Math.max(c,r),n=Math.min(c,n)),p.get(c).push(a.key),u.add(c)}var d=this.state.scale;p.has(d)||(function(e,t){e.length=0,t.forEach(function(t){return e.push(t)})}(l,u),l.sort(),d=l.reduce(function(e,t,r,n){return Math.abs(t-d)<Math.abs(e-d)?t:e},l[0])),d=Math.min(d,r),d=Math.max(d,n);var h=p.get(d),f=t.getClosestInfoForScale(d),y=f.getColumnForX(this.state.center[0]),m=f.getRowForY(this.state.center[1]);return h.sort(function(e,t){var r=f.denormalizeCol(e.col,e.world),n=f.denormalizeCol(t.col,t.world);return Math.sqrt((y-r)*(y-r)+(m-e.row)*(m-e.row))-Math.sqrt((y-n)*(y-n)+(m-t.row)*(m-t.row))}),u.clear(),p.clear(),h[0].id},t.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,r=this.state.center,n=Number.POSITIVE_INFINITY,i=null,o=0,s=e;o<s.length;o++){var u=s[o],l=this._keysToRequests.get(u);t.getTileCoords(c,l.key);var p=a.distance(c,r);p<n&&(n=p,i=l.key)}return i.id},n([s.property({constructOnly:!0})],t.prototype,"concurrency",void 0),n([s.property({constructOnly:!0})],t.prototype,"process",void 0),n([s.property()],t.prototype,"state",void 0),n([s.property({constructOnly:!0})],t.prototype,"strategy",void 0),n([s.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),n([s.property({constructOnly:!0})],t.prototype,"tileServers",void 0),n([s.property({readOnly:!0})],t.prototype,"updating",null),n([s.subclass()],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)},864:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){return function(){function e(e){this._items=[],this._itemSet=new Set,this._peeker=function(e){return e[0]},this._length=0,e&&e.peeker&&(this._peeker=e.peeker)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},e.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)},e.prototype.push=function(e){this.contains(e)||this._add(e)},e.prototype.contains=function(e){return this._length>0&&this._itemSet.has(e)},e.prototype.pop=function(){if(0!==this._length){var e=this.peek();return this._remove(e),e}},e.prototype.remove=function(e){this.contains(e)&&this._remove(e)},e.prototype._add=function(e){this._items.push(e),this._itemSet.add(e),this._length++},e.prototype._remove=function(e){this._itemSet.delete(e),this._items.splice(this._items.indexOf(e),1),this._length--},e}()}.apply(null,n))||(e.exports=i)},904:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(337),r(335),r(346),r(365),r(336)],void 0===(i=function(e,t,r,n,i,o,s){return function(e){function t(){var t=e.call(this)||this;return t.handles=new o,t}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},n([s.property({readOnly:!0})],t.prototype,"handles",void 0),n([s.subclass("esri.core.HandleOwner")],t)}(s.declared(i))}.apply(null,n))||(e.exports=i)}}]);