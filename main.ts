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
