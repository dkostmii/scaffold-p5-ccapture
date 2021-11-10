/* Capturer setup */
let capture = true

/* use 1080px for FullHD video */
let baseSize = 1080
const fps = 30
const captureFrames = 30

/* 
  Count frames captured 
  Will be useful with manual looping */
let framesCaptured

if (!CCapture) {
  throw new Error('CCapture is not loaded')
}

let canvas
const capturer = CCapture({ format: 'png', framerate: fps })

/* Define your globals here */
// let angle = 0.0

function preload() {
  /* load images, fonts etc. here */
}

function setup() {
  canvas = createCanvas(baseSize, baseSize).canvas;
  frameRate(fps);

  framesCaptured = 0
  /* loop must be enabled in order to capture frames
     alternatively you can call redraw() manually from your events */

  /* for that comment the line below */
  loop()

  /* and uncomment this */
  // noLoop()

  /* framesCaptured will count the frames for you */
}

/*
function mousePressed() {
  redraw()
}
*/

function draw() {
  if (capturer && frameCount === 1) {
    capturer.start()
  }


  // TODO: write your sketch here
  

  if (capture) {
      capturer.capture(canvas)
      framesCaptured++
      if (framesCaptured === captureFrames + 1) {
        capturer.stop()
        capturer.save()
        capture = false

        /* Stop loop when finished */
        noLoop()
      }
  }
}
