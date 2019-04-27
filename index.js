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

/**
 * Preload funtion
 * - Load assets before anything starts
 */
function preload() {
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
        'assets/player_standing0001.png', // path to first frame
        'assets/player_standing0007.png' // path last frame
    );

    playerAnimation.offY = 18; // ?
}

/**
 * Draw function
 * - Runs statements in order once per frame
 * - Default frameRate is 60fps
 */
function draw() {
    background(255);

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

    drawSprites();

    // Withithout this the background moves with the mouse
    // camera.off();
    image(city, 0, 0, sceneWidth, sceneHeight);

    // Player shadow 
    noStroke();
    fill(0, 0, 0, 20);
    ellipse(player.position.x, player.position.y + 90, 80, 30);

    // Player on top
    drawSprite(player);
}
