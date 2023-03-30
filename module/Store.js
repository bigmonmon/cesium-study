class Store{

    constructor(){
        this._viewer = null;
    }

    get viewer(){
        return this._viewer;
    }

    set viewer(value){
        this._viewer = value;
    }
}

export default Store;