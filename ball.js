import p5js from './p5.js'
const { Vector } = p5js

export default class Ball {
  static createBall (p5, width, height, radius) {
    const pos = p5.createVector(p5.random(width), p5.random(height))
    const size = Math.min(width, height) / 15
    const vel = Vector.random2D().mult(size)
    const acc = p5.createVector(0, 0)
    return new Ball(pos, vel, acc, radius)
  }

  constructor(pos, vel, acc, radius) {
    this.pos = pos
    this.vel = vel
    this.acc = acc
    this.radius = radius
    this.free = true

    this.maxspeed = 200    // Maximum speed
    this.maxforce = 0.05  // Maximum steering force
  }
  
  // Forces go into acceleration
  // applyForce(force) {
  //   this.acc.add(force)
  // }
    
  // Method to update location
  update(dt) {
    // Update velocity
    this.vel.add(Vector.mult(this.acc, dt))
    // Limit speed
    this.vel.limit(this.maxspeed)
    this.pos.add(Vector.mult(this.vel, dt))
    // Reset acceleration to 0 each cycle
    this.acc.mult(0)
  }

  render (p5) {
    const { x, y } = this.pos
    const r = this.radius
    const col = this.free ? 77 : 205
    p5.fill(col, 255)
    p5.stroke(col + 50)
    p5.ellipse(x, y, r * 2, r * 2)
    this.free = true
  }
}
