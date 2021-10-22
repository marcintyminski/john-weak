namespace SpriteKind {
    export const Collectible = SpriteKind.create()
    export const theGoal = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const x = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mainCharacter.vy = -180
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
function choose_skin () {
    let sprite = 0
    monster = sprites.create(assets.image`Monster`, SpriteKind.Enemy)
    criminal = sprites.create(assets.image`Criminal`, SpriteKind.Enemy)
    aliens = sprites.create(assets.image`Alien`, SpriteKind.Enemy)
    neighbour = sprites.create(assets.image`Neighbour`, SpriteKind.Enemy)
    ball = sprites.create(assets.image`ball`, SpriteKind.Collectible)
    collar = sprites.create(assets.image`collar`, SpriteKind.Collectible)
    bone = sprites.create(assets.image`bone`, SpriteKind.Collectible)
    leash = sprites.create(assets.image`leash`, SpriteKind.Collectible)
    TheDog = sprites.create(assets.image`Dog2`, SpriteKind.theGoal)
    mainCharacter.setPosition(80, 60)
    mainCharacter.setPosition(80, 60)
    monster.setPosition(40, 60)
    criminal.setPosition(120, 60)
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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.x, function (sprite, otherSprite) {
    otherSprite.destroy()
    enemy2 = sprites.create(assets.image`Monster`, SpriteKind.Enemy)
    enemy2.setPosition(mainCharacter.x + 80, mainCharacter.y + 0)
    enemy2.follow(mainCharacter)
})
let enemy2: Sprite = null
let mySprite: Sprite = null
let TheDog: Sprite = null
let leash: Sprite = null
let bone: Sprite = null
let collar: Sprite = null
let ball: Sprite = null
let neighbour: Sprite = null
let aliens: Sprite = null
let criminal: Sprite = null
let monster: Sprite = null
let coins: Sprite = null
let x: Sprite = null
let mainCharacter: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffff99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffeeeeeeeeeeeeeeeeeeeeeeefffffff99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeefffffff99999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeefeeefff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeefffeeeefff99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeefff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeff99999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeff99999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffeeeeeeeeeeeeff99999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeefffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeefffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    999999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeefffffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99999999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeefffffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee11111eeeeff99999999999
    9999999999999999999999999999999999999999999fffeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee11111eeeeff99999999999
    99999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeefffeeefffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee11111eeeeff99999999999
    9999999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeefffffff99999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee11111eeeeff99999999999
    99999999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeefffffff99999999999999999999ffeeeee11111eeeeeeeee11111eeefeeee11111eeeeff99999999999
    999999999999999999999999999999999999fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeffffff999999999fffffffffffffeeeee11111eeeeeeeee11111eeefeeeeeeeeeeeeeff99999999999
    99999999999999999999999999999999999ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeffffffffffffffffffffffffffffeeeee11111eeeeeeeee11111eeefeeeeeeeeeeeeeff99999999999
    999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeffffffffffffffffffffffffffffeeeee11111eeeeeeeee11111eeefeeeeeeeeeeeeeff99999999999
    999999999999999999999999999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeee11111eeefeeeeeeeeeeeeeff99999999999
    999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999999999fffeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    999999999999fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999999ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    999999999ffffeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99999999ffffeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999ffffeeeeeeeeeeeeeeeeeeeeefeeeeee111eeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999999ffeeeeeeeeeeeeeeeeeeeeeeefeeeeee111eeeeeeeeeeeeeeee111eeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99999fffeeeeeeeeeeeeeeeeeeeeeeeefeeeeee111eeeeeeeeeeeeeeee111eeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9999fffeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeee111eeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    999fffeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeefffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    99fffeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    9fffeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    fffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeee111eeeeeeeeeeeeeeeee111eeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeee111eeeeeeeeeeeeeeeee111eeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeee111eeeeeeeeeeeeeeeee111eeeeefeeeeee11111eeeeeeeeeeeeeeeeeefeeeee11111eeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeeeeeee11111eeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeeeeeee11111eeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeeeeeee11111eeeeefeeeeeeeeeeeeeff99999999999
    eeee111eeeeeeee111eeeeeeeee111eefeeeeee111eeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeeeeeee11111eeeeefeeeeeeeeeeeeeff99999999999
    eeee111eeeeeeee111eeeeeeeee111eefeeeeee111eeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeee11111eeeeefeeeeeeeeeeeeeff99999999999
    eeee111eeeeeeee111eeeeeeeee111eefeeeeee111eeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeee111eeeeeeeeeeeeeee111eeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeee111eeeeeeeeeeeeeee111eeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeee111eeeeeeeeeeeeeee111eeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    ee111eeeeeeeee111eeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeff99999999999
    ee111eeeeeeeee111eeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeff99999999999
    ee111eeeeeeeee111eeeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111efff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee11111eeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeff99999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee111eeeeeeeeeeeeeee111eeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeffffffffffffffffff9
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee111eeeeeeeeeeeeeee111eeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeefffffffffffffffffff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeee111eeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeefffffffffffffffffff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeee11111eeeeefeeeeeef9999999999999999fff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeee11111eeeeefeeeefff9999999999999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeee11111eeeeefeeefff99999999999999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeee11111eeeeefeeefff99999999999999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee111eeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeee11111eeeeefeeeff999999999999999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee111eeeeeeeeeeeeeeeeee111eeeeefeeeee11111eeeeeeeeeeeeeeeeeeefffff9999999999999999999999
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee111eeeeeeeeeeeeeeeeee111eeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff9999999999999999999999
    eeeeeeeeeeeeeee111eeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeee111eeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff9999999999999999999999
    eeeeeeeeeeeeeee111eeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffff
    eeeeeeeeeeeeeee111eeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    ee111eeeeeeeeeeeeeeeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    ee111eeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee111eeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    ee111eeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee111eeeeeeeeeeeeeee111eeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee111eeeeeeeeeeeeeee111eeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeee111eeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888881111888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8811118818881881188888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8818818818881888188881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8818818818881888188881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeeee11111eeeeff8811118818881888188881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeee111eeeeeeeeeeeeeeeeee111eeeeeeefeeeee11111eeeeeeeeee11111eeeeff8818818818881888188881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeee111eeeeeeeeeeeeeeeeee111eeeeeeefeeeee11111eeeeeeeeee11111eeeeff8818818818881888118881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee111eeeeeeefeeeee11111eeeeeeeeee11111eeeeff8818818818881888818881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee111eeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeee11111eeeeeeeeee11111eeeeff8818818811181888118881888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeee111eeeeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888111188881888
    ee111eeeeeeeeee111eeeeeeeee111eefeeee111eeeeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    ee111eeeeeeeeee111eeeeeeeee111eefeeeeeeeeeeeeeeeeeeee111eeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    ee111eeeeeeeeee111eeeeeeeee111eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff8888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff888888888888888888888888
    `)
tiles.setTilemap(tilemap`level1`)
info.setScore(0)
info.setLife(3)
mainCharacter = sprites.create(assets.image`John Weak`, SpriteKind.Player)
controller.moveSprite(mainCharacter, 100, 0)
scene.cameraFollowSprite(mainCharacter)
mainCharacter.ay = 300
tiles.placeOnRandomTile(mainCharacter, assets.tile`myTile`)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    x = sprites.create(img`
        f f f . . . . . . . . . . f f f 
        f f f f . . . . . . . . f f f f 
        f f f f f . . . . . . f f f f f 
        . f f f f f . . . . f f f f f . 
        . . f f f f f . . f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f . . f f f f f . . 
        . f f f f f . . . . f f f f f . 
        f f f f f . . . . . . f f f f f 
        f f f f . . . . . . . . f f f f 
        f f f . . . . . . . . . . f f f 
        `, SpriteKind.x)
    tiles.placeOnTile(x, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    coins = sprites.create(img`
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(coins, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
forever(function () {
	
})
