export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
    this.load.image('seed', 'assets/seed.png');
  }

  create() {
    this.add.text(100, 100, 'Deseed!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
    this.add.image(200, 200, 'seed');
  }
}