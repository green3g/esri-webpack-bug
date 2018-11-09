import 'babel-polyfill';

import './config';


// // // styles
import './styles/main.scss';

const modules = {
    get(name) {
        return this[name]().then((module) => module.default);
    },
    // basemap: () => import('esri/widgets/BasemapGallery'),
    feature: () => import('esri/layers/FeatureLayer'),
    map: () => import('esri/Map'),
    view: () => import('esri/views/MapView'),
    // print: () => import('esri/widgets/Print'),
    // search: () => import('esri/widgets/Search'),
};


Promise.all([
    modules.get('map'),
    modules.get('view'),
    modules.get('feature'),
    // modules.get('basemap'),
]).then(([Map, MapView, FeatureLayer]) => {
    const fl = new FeatureLayer({
        id: 'states',
        portalItem: {
            id: 'b234a118ab6b4c91908a1cf677941702',
        },
        outFields: ['NAME', 'STATE_NAME', 'VACANT', 'HSE_UNITS'],
        title: 'U.S. counties',
    });
    const map = new Map({
        basemap: 'topo-vector',
        layers: [fl],
    });

    const el = document.createElement('div');
    document.body.appendChild(el);
    const view = new MapView({
        zoom: 10,
        map,
        container: el,
    });

    // view.ui.add(new BasemapGallery({view, useVectorBasemaps: true}), 'top-right');

    // view.map.add(new FeatureLayer({
    //     portalItem: {id: 'caa9bd9da1f4487cb4989824053bb847'},
    // }));
});
