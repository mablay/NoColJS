import p5js from './p5.js'
import { World } from './world.js'

function sketch (p5) {
  const { innerWidth: width, innerHeight: height } = window

  let ballCount = 25
  let world
  initWorld()

  let animate = true
  let vSync = true
  let step = false

  function initWorld () {
    world = new World(p5, width, height, ballCount, 0.02)
  }

  p5.setup = function () {
    p5.createCanvas(width, height, p5.P2D)
  }

  p5.draw = function () {
    if (!animate && !step) return
    p5.background(`rgba(0, 0, 0, 0.1)`)
    if (vSync) {
      world.tick()
    } else {
      const next = Date.now() + 32
      while (Date.now() < next) {
        world.tick()
      }
    }
    world.render(p5)
    step = false
  }

  p5.keyPressed = function (event) {
    const key = event.key.toLowerCase()
    if (key === '+') return ballCount *= 2
    if (key === '-') return ballCount /= 2
    if (key === ' ') return animate = !animate
    if (key === 'e') return vSync = !vSync
    if (key === 'r') return initWorld()
    if (key === 's') {
      console.log('step')
      // vSync = true
      animate = false
      step = true
      return
    }
    if (event.key === 'Shift') return
    console.log('event', event)
  }

  p5.mouseClicked = function (event) {
    const x = p5.mouseX
    const y = p5.mouseY
    world.addBall(p5, x, y)
  }

}

const p5 = new p5js(sketch)

document.getElementById('goFS')
  .addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }, false)

if (typeof window.orientation === 'undefined') {
  document.getElementById('goFS').style.display = 'none'
}