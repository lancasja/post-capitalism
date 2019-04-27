# Post Capitalism

[Post-capitalism](https://en.wikipedia.org/wiki/Post-capitalism) is an interactive experience that explores potential outcomes of what a post-capitalist future might look like using the [P5.play](http://molleindustria.github.io/p5.play/) [Virtual Camera](http://molleindustria.github.io/p5.play/examples/index.html?fileName=camera.js) and [Sprite](http://molleindustria.github.io/p5.play/examples/index.html?fileName=sprite.js) class. Players collect various resources that determine the outcome of their Post-Capitalist world.

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

## Tips and tricks:

- Format documents (`option + shift + F` in VSCode)
- Check `package.json` for how to get things running
- Use the VSCode terminal if you're using VSCode (`command + ~`)
- Node and `live-server` makes life easier
- Useful VSCode extensions
  - [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
  - [p5js Snippets](https://marketplace.visualstudio.com/items?itemName=acidic9.p5js-snippets)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

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

---

## Starting a project from scratch

`cd [working/directory]`

`./mkdir [project-name]`

`cd [project-name]`

`npm init -y`

`npm i -D live-server`

`touch server.js index.js index.html style.css lib`  
Download [**P5.js**](https://p5js.org/download/) and [**P5.play**](http://molleindustria.github.io/p5.play/) libraries and put into `lib` directory.

Open `server.js` and paste the following:
```
const liveServer = require("live-server");

const params = {
    // Port number
    port: 8181,
    // Host IP, 127.0.0.1 is localhost
    host: "127.0.0.1",
    // Main directory
    root: "./",
    // Load browser on start
    open: true,
    // Directories to ignore (comma, separated)
    ignore: 'node_modules',
    // file: "index.html",
    // Delay reload to wait for files to update
    wait: 1000,
    // 0 = errors only, 1 = some, 2 = lots
    logLevel: 2,
};

liveServer.start(params);
```

Open `index.html` and paste the following:
```
<html lang="en">
<head>
    <!-- Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Pevent the double-tap zoom on mobile -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Title in browser tab -->
    <title>Post Capitalism</title>

    <!-- Stylesheet -->
    <link rel="stylesheet" href="styles.css" />
    
    <!--                         -->
    <!-- JavaScript dependencies -->
    <!--                         -->
    
    <!-- P5.js -->
    <script src="lib/p5/p5.min.js"></script>
    <script src="lib/p5/addons/p5.dom.min.js"></script>
    <script src="lib/p5/addons/p5.sound.min.js"></script>

    <!-- P5.play -->
    <script src="lib/p5.play.js"></script>
</head>
<body>
    
    <!-- Post-Capitalism Scripts -->
    <script src="index.js"></script>
</body>
</html>
```

Open `index.js` and paste the following:
```
/**
    * Global variables
    * - Keep track of values
    */

// Width of browser window
const width = window.innerWidth;
// Height of browser window
const height = window.innerHeight;

/**
    * Setup function
    * - Runs once at the start
    * - Initialize things
    */
function setup() {
        // Create a P5 canvas
    createCanvas(width, height);
        background(55);
}

/**
    * Draw function
    * - Runs statements in order once per frame
    * - Default frameRate is 60fps
    */
function draw() {
    // statements
}
```

`npm start`
