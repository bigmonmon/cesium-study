import Main from '../container/main.js';
import Store from '../module/Store.js'
$(() => {
    const store = new Store();
    new Main(store);
})



