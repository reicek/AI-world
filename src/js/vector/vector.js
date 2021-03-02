/**
 * 2D Matrix position
 * @module
 * @requires lodash
 */
export default class Vector {
  /**
   * Create vector
   * @param {number} [x = 0] Initial X position value
   * @param {number} [y = 0] Initial Y position value
   * @example
   *     const x = 1;
   *     const y = 1;
   *     const vector = new Vector(x, y);
   */
  constructor(x = 0, y = 0) {
    /** X position value */
    this.x = x;
    /** Y position value */
    this.y = y;
  }

  /**
   * Set position
   * @param {number} [x = 0] X position value
   * @param {number} [y = 0] Y position value
   * @return {Vector}
   */
  set(x = 0, y = 0) {
    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Set random angle
   * @return {Vector}
   */
  random() {
    return this.set().setAngle(_.random(0, Math.PI * 2));
  }

  /**
   * Add to vector
   * @param {Vector} vector Addend
   * @return {Vector}
   */
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  /**
   * Substract from vector
   * @param {Vector} vector Subtrahend
   * @return {Vector}
   */
  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  /**
   * Multiply vector
   * @param {number} factor Multiplication factor
   * @return {Vector}
   */
  mul(factor) {
    this.x *= factor;
    this.y *= factor;

    return this;
  }

  /**
   * Divide vector
   * @param {number} divisor Division divisor
   * @return {Vector}
   */
  div(divisor) {
    this.x /= divisor;
    this.y /= divisor;

    return this;
  }

  /**
   * Vector's magnitude
   * @return {number}
   */
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Normalize
   * @return {Vector}
   */
  normalize() {
    return this.div(this.mag());
  }

  /**
   * Vector's angle
   * @return {number}
   */
  angle() {
    return Math.atan2(this.y, this.x);
  }

  /**
   * Set magnitude
   * @return {Vector}
   */
  setMag(m) {
    this.angleValue = this.angle();

    this.x = m * Math.cos(this.angleValue);
    this.y = m * Math.sin(this.angleValue);

    return this;
  }

  /**
   * Set Angle
   * @return {Vector}
   */
  setAngle(a) {
    this.magValue = this.mag();

    this.x = this.magValue * Math.cos(a);
    this.y = this.magValue * Math.sin(a);

    return this;
  }

  /**
   * Rotate vector
   * @return {Vector}
   */
  rotate(a) {
    return this.setAngle(this.angle() + a);
  }

  /**
   * Limit magnitude to 1
   * @return {Vector}
   */
  limit(l) {
    if (this.mag() > l) this.setMag(l);

    return this;
  }

  /**
   * @return {number}
   */
  angleBetween(v) {
    return this.angle() - v.angle();
  }

  /**
   * @return {number}
   */
  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  /**
   * @return {Vector}
   */
  lerp(v, amt) {
    this.x += (v.x - this.x) * amt;
    this.y += (v.y - this.y) * amt;

    return this;
  }

  /**
   * Calculates distance between current vector and the target
   * @return {number}
   */
  dist(target) {
    this.dx = this.x - target.x;
    this.dy = this.y - target.y;

    return Math.sqrt(_.add(this.dx * this.dx, this.dy * this.dy));
  }

  /**
   * Builds a new vector with the same caractestics as this
   * @return {Vector}
   */
  copy() {
    return new Vector(this.x, this.y);
  }
}
