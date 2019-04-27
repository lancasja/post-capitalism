/**
 * Global variables
 * - Keep track of values
 */
const width = window.innerWidth;
const height = window.innerHeight;
const sceneWidth = width * 2;
const sceneHeight = height * 2;

let player;
let city;
let score = 0;
//let bg;
let collectibles;

/**
 * Preload funtion
 * - Load assets before anything starts
 */
function preload() {
    bkg = loadImage('assets/bg.jpg');
    city = loadImage('assets/NorthBroadSt_Landscape.jpg');
}

/**
 * Setup function
 * - Runs once at the start
 * - Initialize things
 */
function setup() {
    createCanvas(width, height);

    // Create a sprite
    // (x, y, width, height)
    player = createSprite(400, 200, 50, 100);

    // Create an animation
    const playerAnimation = player.addAnimation(
        'floating', // label
        'assets/player01.png', // path to first frame
        'assets/player32.png' // path last frame
    );

    playerAnimation.offY = 18; // ?

    collectibles = new Group();
    //bg = new Group();

    //create some background for visual reference
    for (let i = 0; i < 80; i++) {
        // Create salt fat acid heat (sfah) sprite for background at a random location
        const sfah = createSprite(
            random(-width, sceneWidth + width),
            random(-height, sceneHeight + height)
        );

        // Add sfah assets
        sfah.addAnimation('normal', `assets/thing${i % 7}.png`);

        // Add to background group (can only add sprites to groups)
        collectibles.add(sfah);
    }
}

/**
 * Draw function
 * - Runs statements in order once per frame
 * - Default frameRate is 60fps
 */
function draw() {
    background(bkg);

    /**
     * Player follows mouse
     */
    player.velocity.x = (camera.mouseX - player.position.x) / 20;
    player.velocity.y = (camera.mouseY - player.position.y) / 20;

    // Zoom camera out if mouse is pressed down
    if (mouseIsPressed) {
        camera.zoom = 0.5;
    }
    else {
        camera.zoom = 1;
    }

    // Set camera position to player position
    camera.position.x = player.position.x;
    camera.position.y = player.position.y;

    // Limit player movements
    if (player.position.x < 0) {
        player.position.x = 0;
    }

    if (player.position.y < 0) {
        player.position.y = 0;
    }

    if (player.position.x > sceneWidth) {
        player.position.x = sceneWidth;
    }

    if (player.position.y > sceneHeight) {
        player.position.y = sceneHeight;
    }

    // Withithout this the background moves with the mouse
    // camera.off();
    //image(city, 0, 0, sceneWidth, sceneHeight);

   player.overlap(collectibles, collect);

    drawSprites();

    // Player shadow
    noStroke();
    fill(0, 0, 0, 20);
    ellipse(player.position.x, player.position.y + 90, 80, 30);

    // Player on top
    drawSprite(player);
}
// call function to remove objects
function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  //collector.changeAnimation('stretch');
  //collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered
  //the event
  collected.remove();
}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
drawScore();
