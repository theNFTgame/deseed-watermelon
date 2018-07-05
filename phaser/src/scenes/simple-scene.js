export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.crossOrigin = 'anonymous'; // 设置跨域
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('seed', 'assets/seed.png');
    this.load.image('bg', 'assets/bg.jpg');
  }

  create() {
    let bg = this.add.image(160, 100, 'bg');
    bg.width = game.world.width;
    bg.height = game.world.height;
    this.add.text(100, 100, 'Deseed!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
    this.add.image(200, 200, 'seed');
  }
}