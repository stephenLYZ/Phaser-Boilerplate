import Phaser from 'phaser'
import MushRoom from '../sprites/MushRoom'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser Boilerplate'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new MushRoom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)
  }

  render () {
    this.game.debug.spriteInfo(this.mushroom, 32, 32)
  }
}
