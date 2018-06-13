import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);