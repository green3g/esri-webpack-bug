# Steps to reproduce

1. Clone this repo
2. `npm i` && `npm i` (we need to do this twice so that dojo installs in the right place).
3. `npm start`
4. Watch the app work. Sometimes it works initially.
5. kill the npm start task.
6. Run `npm start` again. Errors should be produced:

```
VM112364:1 Access to XMLHttpRequest at 'file:///C:/Users/<username>/web/datafi/node_modules/arcgis-js-api/core/workers/worker.js' from origin 'http://lvh.me:9000' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.

Logger.js?aac4:25 [esri.core.workers] Failed to create Worker. Fallback to execute module in main thread t {name: "request:server", message: "Unable to load C:/Users/<username>/web/datafi/node_modules/arcgis-js-api/core/workers/worker.js status: 0", details: {…}}

....
```