(function(){(this||window).webpackJsonp.registerAbsMids({"C:/Users/roemh/web/datafi/node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D":2391})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{2391:function(e,t,a){var r,i;r=[a.dj.c(e.i),t,a(344),a(345),a(335),a(365),a(343),a(339),a(336),a(1506),a(982),a(981),a(768),a(1551),a(667)],void 0===(i=function(e,t,a,r,i,n,s,o,p,h,u,c,d,l,m){var g=s.getLogger("esri.views.2d.layers.MapImageLayerView2D");return function(e){function t(){var t=e.call(this)||this;return t._handles=new n,t.container=new c,t.container.hidpi=!0,t}return r(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer,a=t.imageMaxWidth,r=t.imageMaxHeight,i=t.version,n=i>=10.3,s=i>=10;this.strategy=new l({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:a,imageMaxHeight:r,imageRotationSupported:n,imageNormalizationSupported:s,hidpi:!0}),this._exportImageParameters=new h({layer:this.layer}),this._handles.add(this._exportImageParameters.watch("version",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.getPopupData=function(e){var t=this.view.scale;return this.layer.allSublayers.toArray().filter(function(e){var a=0===e.minScale||t<=e.minScale,r=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&a&&r}).map(function(t){var a=t.createQuery();return a.geometry=e,a.outFields=t.popupTemplate.requiredFields,t.queryFeatures(a).then(function(e){return e.features})})},t.prototype.fetchImage=function(e,t,r,i){var n=this;return this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version),i=a({timestamp:this.refreshTimestamp},i),this.layer.fetchImage(e,t,r,i).then(function(e){return n.notifyChange("updating"),new u.default(e)}).catch(function(e){return"cancel"!==e.dojoType&&g.error(e),n.notifyChange("updating"),o.reject(e)})},i([p.subclass("esri.views.2d.layers.MapImageLayerView2D")],t)}(p.declared(d,m))}.apply(null,r))||(e.exports=i)}}]);