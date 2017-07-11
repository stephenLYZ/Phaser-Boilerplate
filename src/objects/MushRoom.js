import Phaser from 'phaser'

class MushRoom extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
    this.angle += 1
  }
}

export default MushRoom