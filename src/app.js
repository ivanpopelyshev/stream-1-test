import PIXI from 'pixi.js';
global.PIXI = PIXI;
require('pixi-layers');

class Application {
  constructor() {
    this.renderer = new PIXI.Renderer({ width: 800, height: 600});
  }
}