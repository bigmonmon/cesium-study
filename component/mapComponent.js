class MapComponent{

    constructor(){
        this.viewer = null;
        this.init();
    }

    init(){
        this.createMap();
        this.createBuildLayer();
    }

    getView(){
        return this.viewer;
    }

    createMap(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiZTZiOTFiYy03ZWM1LTQzZTctYTEwMC03YjI0ODAxOWM5ODgiLCJpZCI6MTMxMTYzLCJpYXQiOjE2ODAwODg5MTZ9.QbDSl81_6gzGm_1l8ggIHv9UQ0i8TUvuawxnp7uhoGg';

        //맵 생성 및 viewer 초기화
        const viewer = new Cesium.Viewer('cesiumContainer', {
            terrainProvider: Cesium.createWorldTerrain()
        });
        this.viewer = viewer;
    }

    createBuildLayer(){
        //건물레이어 생성
        const osmBuildings = this.viewer.scene.primitives.add(Cesium.createOsmBuildings());
    }
}

export default MapComponent;