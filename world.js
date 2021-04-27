import p5js from './_snowpack/pkg/p5js/p5js/p5.js'
import Ball from './ball.js'
const { Vector } = p5js

export class World {
  constructor (p5, width, height, ballCount = 10, tickDuration = 0.008) {
    this.dt = tickDuration
    this.width = width
    this.height = height
    this.balls = new Array(ballCount)
    for (let i=0; i<ballCount; i++) {
      // const radius = 1 + Math.exp(Math.random() * 7) / 10
      const radius = Math.min(100, 1 / (Math.random() * 0.9 + 0.001))
      this.balls[i] = Ball.createBall(p5, width, height, radius)
    }

    this.center = p5.createVector(width / 2, height / 2)
    this.gravity = 50
    this.gravityBug = 0.01
    this.gravityThreshold = 50
  }

  addBall (p5, x, y) {
    const radius = 1 / (Math.random() * 0.9 + 0.001)
    const ball = Ball.createBall(p5, x, y, radius)
    ball.pos.x = x
    ball.pos.y = y
    this.balls.push(ball)
  }

  tick () {
    const ballCount = this.balls.length
    for (let i=0; i<ballCount; i++) {
      // apply gravitational force with some intended flaw
      const ball = this.balls[i]
      const toCenter = Vector.sub(this.center, ball.pos)
      const dist2center = toCenter.mag()
      ball.vel.add(Vector.mult(toCenter, this.gravityBug))

      // displace on collision
      for (let k=i+1; k<ballCount; k++) {
        const collider = this.balls[k]
        const relColPos = Vector.sub(ball.pos, collider.pos)
        const colDist = relColPos.mag()
        const minDist = ball.radius + collider.radius
        if (colDist < minDist) {
          ball.free = false
          collider.free = false
          const displacement = Vector.mult(relColPos, 0.50 * (minDist / colDist - 1))
          ball.pos.add(displacement)
          collider.pos.sub(displacement)
        }
      }
    }

    for (const ball of this.balls) {
      ball.update(this.dt)
    }
    // console.log(this.balls[0].pos)
  }

  render (p5) {
    for (const ball of this.balls) {
      ball.render(p5)
    }
  }
}