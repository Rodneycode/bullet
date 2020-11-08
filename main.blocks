controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, mySprite, 0, -200)
    console.log("shoot")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 2 2 2 2 2 2 2 2 2 2 5 f f 
        f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
    textSprite = textsprite.create(" ")
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite)
    console.log("create character and start game")
})
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
effects.clouds.startScreenEffect()
tiles.setTilemap(tilemap`level`)
textSprite = textsprite.create("JAMS")
music.magicWand.play()
textSprite.setMaxFontHeight(20)
scene.cameraFollowSprite(textSprite)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Enemy)
mySprite2.setPosition(130, 95)
forever(function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . d d d d d d d . . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . d d d d d d d d d . . . 
        . . . . d d d d d d d . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, 50)
    projectile4 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . d d d d d d d . . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, -50, -50)
    pause(2000)
})
