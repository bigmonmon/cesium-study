import MapComponent from "../component/mapComponent.js";
import FlightTrackerComponent from '../component/flightTrackerComponent.js'

class MapContainer {
    
    constructor(element, store){
        this.el = this.render(element);
        store.viewer = this._viewer = new MapComponent().getView();
        new FlightTrackerComponent(store.viewer);
    }

    render(element){
        let html = `<div id="cesiumContainer"></div>`
        element.append(html);
        return element.find("#cesiumContainer");
    }
}

export default MapContainer;