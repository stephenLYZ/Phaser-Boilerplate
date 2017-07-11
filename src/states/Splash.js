
import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    this.loaderBg.anchor.setTo(0.5, 0.5)
    this.loaderBar.anchor.setTo(0.5, 0.5)

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('mushroom', './assets/images/mushroom.png')
  }

  create () {
    this.state.start('Game')
  }
}
