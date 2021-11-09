/* Capturer setup */
let capture = true

/* use 1080px for FullHD video */
let baseSize = 1080
const fps = 30
const captureFrames = 30

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

  /* loop must be enabled in order to capture frames
     alternatively you can call draw() manually inside draw()
     for that comment the line below */
  loop()
}

function draw() {
  if (capture && frameCount === 1) {
    capturer.start()
  }

  // TODO: write your sketch here
  
  if (capture) {
      capturer.capture(canvas)
      if (frameCount === captureFrames) {
        capturer.stop()
        capturer.save()
        capture = false

        /* Stop loop when finished */
        noLoop()
      }
  }

  /* manual frame looping
     uncomment line below to enable */
  // draw()
}
