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
let projectile: Sprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
effects.clouds.startScreenEffect()
tiles.setTilemap(tiles.createTilemap(hex`100010000802090202020202020202090202020a070101010101010101010101010101030701010101010101010101010101010307010101010101010101010101010103070101010101010101010101010101030701010101010101010101010101010307010101010101010101010101010103070101010101010101010101010101030701010101010101010101010101010307010101010101010101010101010103070101010101010101010101010101030701010101010101010101010101010307010101010101010101010101010103070101010101010101010101010101030701010101010101010101010101010306050505050505050505050505050504`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterNorthEast], TileScale.Sixteen))
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
