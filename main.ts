namespace SpriteKind {
    export const Collectible = SpriteKind.create()
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
let mySprite2 = sprites.create(assets.image`John Weak`, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let ball = sprites.create(assets.image`ball`, SpriteKind.Collectible)
mySprite2.setPosition(80, 60)
mySprite2.setPosition(80, 60)
mySprite3.setPosition(40, 60)
mySprite4.setPosition(120, 60)
forever(function () {
    if (sprite == 0) {
        mySprite = mySprite2
    } else if (sprite == 1) {
        mySprite2.setPosition(80, 60)
        mySprite3.setPosition(40, 60)
        mySprite4.setPosition(120, 60)
        mySprite2.setPosition(120, 60)
        mySprite3.setPosition(80, 60)
        mySprite4.setPosition(40, 60)
        mySprite = mySprite3
    } else if (sprite == 2) {
        mySprite2.setPosition(40, 60)
        mySprite3.setPosition(120, 60)
        mySprite4.setPosition(80, 60)
        mySprite = mySprite4
    }
    mySprite.setPosition(80, 100)
})
