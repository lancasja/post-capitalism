# Post Capitalism

Our piece [Post-capitalism](https://en.wikipedia.org/wiki/Post-capitalism) explores potential outcomes of what that future might look like using the [P5.play](http://molleindustria.github.io/p5.play/) [Virtual Camera](http://molleindustria.github.io/p5.play/examples/index.html?fileName=camera.js) and [Sprite](http://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite.js) class. Players collect various resources that determine the outcome of their Post-Capitalist world.

---

## Development

Run `node -v` to check if you have [node.js](https://nodejs.org/en/) installed. If not download and install it, then you might want to restart your computer.

Open a terminal and run:

1. `npm i` to install dependencies
2. `npm start` to start server and load browser

The server will watch your files and automatically reload the browser when you save a file.

The main file to edit is `index.js`.

If everything is working you'll see a green creature thing move with your mouse on top of an image of a city.

---

## Adding sprites

Create a sprite animation by making a series of images whose filename ends in sequential numbers to the `assets` directory.

```
sprite_action0001.png
sprite_action0002.png
sprite_action0003.png
sprite_action0004.png
sprite_action0005.png
sprite_action0006.png
sprite_action0007.png
```

Make a global variable at the top of `index.js`.   
```
let sprite;
```

Create a sprite for the character in the `setup()` function.
```
function setup() {
    ...
    sprite = createSprite(400, 200, 50, 100);
}
```

 Create and add animation to the sprite with the assets you loaded.
 ```
 const spriteAnimation = sprite.addAnimation(
    'action', // label
    'assets/sprite_action0001.png', // path to first frame
    'assets/sprite_action0007.png' // path last frame
);
```

Draw the new sprite in the `draw()` function (put this last to render on top of other sprites).
```
function draw() {
    // Draw all sprites
    drawSprites();

    ...

    // Draw a specific sprite
    drawSprite(sprite);
}
```

---

## Loading images

Create a global variable at the top of `index.js` to hold the image.
```
let image;
```

Assign it a path to an image in `assets` inside the `preload()` function.
```
function preload() {
    ...
    image = loadImage('assets/image_file_name.ext');
}
```

Put the image on the canvas with the `image()` function inside `draw()`.  
Put if before other assets if you want it to be in the background.
```
function draw() {
    image(image, x, y, width, height);
}
```

---

## Resources

### Free sprite sheets

> [itch.io](https://itch.io/game-assets/free)

> [opengameart.org](https://opengameart.org/)

### Library references

> [P5.js](https://p5js.org/reference/)

> [P5.play](http://molleindustria.github.io/p5.play/)

> [Morpher.js](https://jembezmamy.github.io/morpher-js/demos.html)

### Inspiration

> [We Make Money Not Art](http://we-make-money-not-art.com/)

> [Post-capitalist design](https://medium.com/@awright249/post-capitalist-design-ff044cb1d195)

> [A New Art Project Imagines a Post-capitalist World and Reimagines Museums](https://nonprofitquarterly.org/2017/06/19/new-art-project-imagines-post-capitalist-world-reimagines-museums/)

> [ICOs: The Beginning Of Post-Capitalism? Some Say Yes — Here’s Why](https://medium.com/the-mission/icos-the-beginning-of-post-capitalism-some-say-yes-heres-why-564c8395dc08)

> [Music and the Decline of Capitalism](https://socialistrevolution.org/music-and-the-decline-of-capitalism)

> [Paul Mason: "PostCapitalism" | Talks at Google](https://www.youtube.com/watch?v=cQyr9l22fLE&feature=youtu.be)

> [We're Living Through a Rare Economic Transformation](https://www.peakprosperity.com/blog/81365/peter-drucker-post-capitalist-economic-transformation)

> [Five postcapitalist projects that offer a blueprint for a new world](https://www.huckmag.com/perspectives/five-postcapitalist-projects-offer-blueprint-new-world/)