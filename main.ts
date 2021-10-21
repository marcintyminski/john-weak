namespace SpriteKind {
    export const Collectible = SpriteKind.create()
    export const theGoal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.halo)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite += -1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprite += 1
})
let sprite = 0
let mySprite: Sprite = null
scene.setBackgroundColor(7)
let mainCharacter = sprites.create(assets.image`John Weak`, SpriteKind.Player)
let monster = sprites.create(assets.image`Monster`, SpriteKind.Enemy)
let criminal = sprites.create(assets.image`Criminal`, SpriteKind.Enemy)
let aliens = sprites.create(assets.image`Alien`, SpriteKind.Enemy)
let neighbour = sprites.create(assets.image`Neighbour`, SpriteKind.Enemy)
let ball = sprites.create(assets.image`ball`, SpriteKind.Collectible)
let collar = sprites.create(assets.image`collar`, SpriteKind.Collectible)
let bone = sprites.create(assets.image`bone`, SpriteKind.Collectible)
let leash = sprites.create(assets.image`leash`, SpriteKind.Collectible)
let TheDog = sprites.create(assets.image`Dog2`, SpriteKind.theGoal)
mainCharacter.setPosition(80, 60)
mainCharacter.setPosition(80, 60)
monster.setPosition(40, 60)
criminal.setPosition(120, 60)
forever(function () {
    if (sprite == 0) {
        mySprite = mainCharacter
    } else if (sprite == 1) {
        mainCharacter.setPosition(80, 60)
        monster.setPosition(40, 60)
        criminal.setPosition(120, 60)
        mainCharacter.setPosition(120, 60)
        monster.setPosition(80, 60)
        criminal.setPosition(40, 60)
        mySprite = monster
    } else if (sprite == 2) {
        mainCharacter.setPosition(40, 60)
        monster.setPosition(120, 60)
        criminal.setPosition(80, 60)
        mySprite = criminal
    }
    mySprite.setPosition(80, 100)
})
