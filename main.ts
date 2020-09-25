scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(1)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000303000000000000000000000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000000000000000000000000030300000000000000000000000000000000000000000303000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000000000202000000000000000303000000000000000000000003030000000000000000000000000000000000000000000001010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    . 2 2 . . . . . . . . . . . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 . . . . . . . 2 2 . . . 
    . . . . . . . . 2 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.rock2,sprites.dungeon.floorLight2], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . d . . . f f f f f f f . . . 
    . d 2 1 . f f f f f f f f f . . 
    d b 2 b d f f f f f f f f f . . 
    b 2 2 b f f f f f f 1 1 f f f . 
    b 2 4 2 f f f f f f 1 e f f f . 
    2 4 4 2 f f 1 f f f f f f f f . 
    2 2 4 4 f f 1 1 d f f f f 4 4 4 
    2 4 4 4 f f 1 1 d d d d 1 2 4 4 
    2 2 4 4 f f 1 1 d d d d 1 f f . 
    2 2 4 4 f f 1 1 d d d d 1 f f . 
    b 2 4 4 f f f 1 1 d d d 1 f f . 
    b 2 4 4 f f f 1 1 1 d d 1 f f . 
    2 2 4 4 f f f 1 1 1 1 1 1 f f . 
    2 5 4 4 f f f f 1 1 1 1 f f f . 
    5 1 1 1 f f f f f f 1 1 f f f . 
    5 5 5 5 f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.ay = 300
let max_height = scene.screenHeight() * 2
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (max_height > mySprite.y) {
        max_height = mySprite.y
    }
})
forever(function () {
    if (mySprite.y < max_height - scene.screenHeight()) {
        console.log(max_height)
        console.log(mySprite.y)
        game.over(false)
        mySprite.destroy()
    }
})
