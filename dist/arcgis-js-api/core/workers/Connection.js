define(["require","exports","../promiseUtils"],function(t,n,o){return function(){function t(t){this._clientIdx=0,this._clients=t}return t.prototype.broadcast=function(t,n){for(var e=[],i=0,r=this._clients;i<r.length;i++){var s=r[i];e.push(s.invoke(t,n))}return e},t.prototype.close=function(){for(var t=0,n=this._clients;t<n.length;t++)n[t].close();this._clients=[]},t.prototype.invoke=function(t,n,e,i){var r=i&&i.client;if(!this._clients||!this._clients.length)return o.reject(new Error("Connection closed"));null!=r&&-1!==this._clients.indexOf(r)||this._clients.some(function(t){return!t.isBusy()&&(r=t,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,r=this._clients[this._clientIdx]);var s=r.invoke(t,n,e);return i&&(i.client=r),s},t.prototype.openPorts=function(){return o.all(this._clients.map(function(t){return t.openPort()}))},t}()});