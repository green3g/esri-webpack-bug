(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/tsSupport/generatorHelper":396,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/tsSupport/generatorHelper":396,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/tsSupport/awaiterHelper":400,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/asyncUtils":665,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/layers/GroupLayer":714,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/core/loadAll":993,"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/support/LayersMixin":1085})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1085:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(337),r(335),r(346),r(357),r(926),r(343),r(339),r(336),r(398)],void 0===(n=function(e,t,r,i,n,o,a,s,l,u,c){function p(e){return e&&null!=e.layers}function y(e,t,r){for(var i,n,o=0,a=e.length;o<a;o++){if((i=e.getItemAt(o))[t]===r)return i;if(p(i)&&(n=y(i.layers,t,r)))return n}}var f=o.ofType(c),d=s.getLogger("esri.support.LayersMixin");return function(e){function t(t){var r=e.call(this,t)||this;r.layers=new f;return r.layers.on("after-add",function(e){return function(e){e.parent&&e.parent!==r&&"remove"in e.parent&&e.parent.remove(e),e.parent=r,r.layerAdded(e),"elevation"===e.type&&d.error("Layer '"+e.title+", id:"+e.id+"' of type '"+e.type+"' is not supported as an operational layer and will therefore be ignored.")}(e.item)}),r.layers.on("after-remove",function(e){return function(e){e.parent=null,r.layerRemoved(e)}(e.item)}),r}return r(t,e),t.prototype.destroy=function(){this.layers.drain(this.layerRemoved,this)},Object.defineProperty(t.prototype,"layers",{set:function(e){this._set("layers",a.referenceSetter(e,this._get("layers"),f))},enumerable:!0,configurable:!0}),t.prototype.findLayerById=function(e){return y(this.layers,"id",e)},t.prototype.add=function(e,t){var r=this,i=this.layers;t=i.getNextIndex(t),e instanceof c?(e.parent===this&&this.reorder(e,t),i.add(e,t)):l.isThenable(e)?e.then(function(e){r.destroyed||r.add(e,t)}):d.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")},t.prototype.addMany=function(e,t){var r=this,i=this.layers;t=i.getNextIndex(t),e.slice().forEach(function(e){e.parent!==r?(i.add(e,t),t+=1):r.reorder(e,t)})},t.prototype.findLayerByUid=function(e){return y(this.layers,"uid",e)},t.prototype.remove=function(e){return this.layers.remove(e)},t.prototype.removeMany=function(e){return this.layers.removeMany(e)},t.prototype.removeAll=function(){return this.layers.removeAll()},t.prototype.reorder=function(e,t){return this.layers.reorder(e,t)},t.prototype.layerAdded=function(e){},t.prototype.layerRemoved=function(e){},i([u.property({type:f,cast:a.castForReferenceSetter})],t.prototype,"layers",null),i([u.subclass("esri.support.LayersMixin")],t)}(u.declared(n))}.apply(null,i))||(e.exports=n)},396:function(e,t,r){var i;void 0===(i=function(){return function(e,t){function r(e){return function(t){return i([e,t])}}function i(r){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,o&&(a=2&r[0]?o.return:r[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;switch(o=0,a&&(r=[2&r[0],a.value]),r[0]){case 0:case 1:a=r;break;case 4:return l.label++,{value:r[1],done:!1};case 5:l.label++,o=r[1],r=[0];continue;case 7:r=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){l=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){l.label=r[1];break}if(6===r[0]&&l.label<a[1]){l.label=a[1],a=r;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(r);break}a[2]&&l.ops.pop(),l.trys.pop();continue}r=t.call(e,l)}catch(e){r=[6,e],o=0}finally{n=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var n,o,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}}.apply(null,[]))||(e.exports=i)},400:function(e,t,r){var i,n;i=[r(339)],void 0===(n=function(e){function t(t){return t&&"function"==typeof t.then?t:e.resolve(t)}return function(r,i,n,o){var a=null;return e.create(function(e,n){function s(e){try{u(o.next(e))}catch(e){n(e)}}function l(e){try{u(o.throw(e))}catch(e){n(e)}}function u(r){r.done?(a=t(r.value)).then(e,n):(a=t(r.value)).then(s,l)}u((o=o.apply(r,i||[])).next())},function(e){a&&a.cancel(e)})}}.apply(null,i))||(e.exports=n)},665:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(396),r(400),r(339)],void 0===(n=function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.forEach=function(e,t,r){return n.eachAlways(e.map(function(e,i){return t.apply(r,[e,i])}))},t.map=function(e,t,r){return n.eachAlways(e.map(function(e,i){return t.apply(r,[e,i])})).then(function(e){return e.map(function(e){return e.value})})},t.maybe=function(e){return e.then(function(e){return{ok:!0,value:e}}).catch(function(e){return{ok:!1,error:e}})},t.assertMaybe=function(e){if(!0===e.ok)return e.value;throw e.error},t.safeCast=function(e){return e}}.apply(null,i))||(e.exports=n)},714:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(337),r(335),r(665),r(993),r(428),r(339),r(336),r(406),r(398),r(433),r(432),r(1085)],void 0===(n=function(e,t,i,n,o,a,s,l,u,c,p,y,f,d){return function(e){function t(t){var r=e.call(this)||this;return r._visibilityHandles={},r.fullExtent=void 0,r.operationalLayerType="GroupLayer",r.spatialReference=void 0,r.type="group",r._visibilityWatcher=r._visibilityWatcher.bind(r),r}return i(t,e),t.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},t.prototype._writeLayers=function(e,t,r,i){var n=[];if(!e)return n;e.forEach(function(e){if(e.write){var t=e.write(null,i);t&&t.layerType&&n.push(t)}}),t.layers=n},Object.defineProperty(t.prototype,"visibilityMode",{set:function(e){var t=this._get("visibilityMode")!==e;this._set("visibilityMode",e),t&&this._enforceVisibility(e,this.visible)},enumerable:!0,configurable:!0}),t.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]})),this.when()},t.prototype.loadAll=function(){var e=this;return o.safeCast(a.loadAll(this,function(t){t(e.layers)}))},t.prototype.layerAdded=function(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this._visibilityHandles[e.uid]=e.watch("visible",this._visibilityWatcher,!0)},t.prototype.layerRemoved=function(e){var t=this._visibilityHandles[e.uid];t&&(t.remove(),delete this._visibilityHandles[e.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":case"3d":return l.create(function(e){r.e(99).then(function(){var t=[r(1513)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._turnOffOtherLayers=function(e){this.layers.forEach(function(t){t!==e&&(t.visible=!1)})},t.prototype._enforceVisibility=function(e,t){if(c.getProperties(this).initialized){var r=this.layers,i=r.find(function(e){return e.visible});switch(e){case"exclusive":r.length&&!i&&((i=r.getItemAt(0)).visible=!0),this._turnOffOtherLayers(i);break;case"inherited":r.forEach(function(e){e.visible=t})}}},t.prototype._visibleWatcher=function(e){"inherited"===this.visibilityMode&&this.layers.forEach(function(t){t.visible=e})},t.prototype._visibilityWatcher=function(e,t,r,i){var n=i;switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(n):this._isAnyLayerVisible()||(n.visible=!0);break;case"inherited":n.visible=this.visible}},t.prototype._isAnyLayerVisible=function(){return this.layers.some(function(e){return e.visible})},n([u.property()],t.prototype,"fullExtent",void 0),n([u.property({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),n([u.writer("layers")],t.prototype,"_writeLayers",null),n([u.property()],t.prototype,"operationalLayerType",void 0),n([u.property({json:{write:!1}})],t.prototype,"portalItem",void 0),n([u.property()],t.prototype,"spatialReference",void 0),n([u.property({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),n([u.property({json:{read:!1,write:!1}})],t.prototype,"url",void 0),n([u.property({type:String,value:"independent",json:{write:!0}})],t.prototype,"visibilityMode",null),n([u.subclass("esri.layers.GroupLayer")],t)}(u.declared(p,d,s,y,f))}.apply(null,i))||(e.exports=n)},993:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(396),r(400),r(665),r(357),r(623)],void 0===(n=function(e,t,r,i,n,o,a){function s(e,t){return i(this,void 0,void 0,function(){var s,l,u=this;return r(this,function(c){switch(c.label){case 0:return[4,e.load()];case 1:return c.sent(),s=[],l=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var r=0,i=e;r<i.length;r++){var n=i[r];n&&(Array.isArray(n)?l.apply(void 0,n):o.isCollection(n)?n.forEach(function(e){return l(e)}):n.isInstanceOf&&n.isInstanceOf(a)&&s.push(n))}},t(l),[4,n.map(s,function(e){return i(u,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?[4,e.loadAll()]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,e.load()];case 3:t.sent(),t.label=4;case 4:return[2]}})})})];case 2:return c.sent(),[2,e]}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAll=s,t.default=s}.apply(null,i))||(e.exports=n)}}]);