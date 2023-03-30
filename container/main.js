import MapContainer from "./mapContainer.js";

class Main {

    constructor(store){
        const element = $("body");

        new MapContainer(element, store);
    }
}

export default Main;