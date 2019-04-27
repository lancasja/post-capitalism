# Post Capitalism

Our piece [Post-capitalism](https://en.wikipedia.org/wiki/Post-capitalism) explores potential outcomes of what that future might look like using the [P5.play](http://molleindustria.github.io/p5.play/) [Virtual Camera](http://molleindustria.github.io/p5.play/examples/index.html?fileName=camera.js) and [Sprite](http://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite.js) class. Players collect various resources that determine the outcome of their Post-Capitalist world.

---

## Development

Run `node -v` to check if you have [node.js](https://nodejs.org/en/) installed. If not download and install it, then you might want to restart your computer.

Open a terminal and run:

1. `npm i` to install dependencies
2. `npm start:dev` to start server and load browser

The server will watch your files and automatically reload the browser when you save a file.

The main file to edit is `index.js`.

If everything is working you'll see a green creature thing move with your mouse on top of an image of a city.

---

## Adding sprites

Create a sprite animation by making a series of images whose filename ends in sequential numbers to the `assets` directory.

```
player_standing0001.png
player_standing0002.png
player_standing0003.png
player_standing0004.png
player_standing0005.png
player_standing0006.png
player_standing0007.png
```

Make a global variable at the top of `index.js`.   
```
let player;
```

Create a sprite for the character in the `setup()` function.
```
function setup() {
    ...
    player = createSprite(400, 200, 50, 100);
}
```

 Create and add animation to the sprite with the assets you loaded.
 ```
 const playerAnimation = player.addAnimation(
    'floating', // label
    'assets/player_standing0001.png', // path to first frame
    'assets/player_standing0007.png' // path last frame
);
```

Draw the new sprite in the `draw()` function (put this last to render on top of other sprites).
```
function draw() {
    // Draw all sprites
    drawSprites();

    ...

    // Draw a specific sprite
    drawSprite(player);
}
```