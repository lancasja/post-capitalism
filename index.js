/**
 * Global variables
 * - Keep track of values
 */
const width = window.innerWidth;
const height = window.innerHeight;

/**
 * Setup function
 * - Runs once at the start
 * - Initialize things
 */
function setup() {
    createCanvas(width, height);
    createSprite(400, 200, 50, 50);
}

/**
 * Draw function
 * - Runs statements in order once per frame
 * - Default frameRate is 60fps
 */
function draw() {
    drawSprites();
}