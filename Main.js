//游戏入口,初始化游戏
import {ResourcesLoader} from "./js/base/ResourcesLoader.js";

export class Main {
    constructor(){
        this.canvas = document.getElementById('game_canvas');
        this.ctx = this.canvas.getContext('2d');
        const loader = ResourcesLoader.create();
        loader.onLoad(map => this.onResourcesFirstLoaded(map));
    }

    onResourcesFirstLoaded(map){
        console.log(map);
    }
}