namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    mat1 = 0
    mat2 = 0
    hasil = 0
    if (sprite == NPC1) {
        story.setSoundEnabled(true)
        mat2 += randint(1, 10)
        mat2 += randint(0, 10)
        story.spriteSayText(NPC1, "Berapkah\\n" + mat1 + "+" + mat2, 15)
        story.showPlayerChoices(convertToText(mat1 + mat2), convertToText(mat1 - mat2))
        hasil = mat1 + mat2
        if (story.checkLastAnswer(convertToText(hasil))) {
            info.changeLifeBy(1)
            mat1 = 0
            mat2 = 0
            hasil = 0
        }
    } else {
        info.changeScoreBy(1)
        music.baDing.play()
    }
    tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleRedCrystal)
    tiles.placeOnRandomTile(NPC2, sprites.dungeon.darkGroundNorthWest1)
})
let hasil = 0
let mat2 = 0
let mat1 = 0
let NPC2: Sprite = null
let NPC1: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let Pelajar = sprites.create(assets.image`Dzakir`, SpriteKind.Player)
NPC1 = sprites.create(assets.image`NPC`, SpriteKind.NPC)
NPC2 = sprites.create(assets.image`NPCLive`, SpriteKind.NPC)
info.setLife(3)
info.setScore(0)
info.startCountdown(120)
tiles.placeOnRandomTile(Pelajar, sprites.dungeon.collectibleBlueCrystal)
tiles.placeOnRandomTile(NPC1, sprites.dungeon.collectibleRedCrystal)
tiles.placeOnRandomTile(NPC2, sprites.dungeon.darkGroundNorthWest1)
controller.moveSprite(Pelajar, 100, 100)
scene.cameraFollowSprite(Pelajar)
