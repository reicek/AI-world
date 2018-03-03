'use strict';
/**
 * @module Vector
 * @see {@link https://github.com/cazala/synaptic} based on work by @cazala 's Synaptic.
 */
/**
 * @class Vector
 */
class Vector {
    /**
     * Vector constructor
     * @constructs Vector
     * @param {number} [x = 0] - X value
     * @param {number} [y = 0] - Y value
     * @example
     *     const x = 1;
     *     const y = 1;
     *     const vector = new Vector(x, y);
     */
    constructor (
        x = 0,
        y = 0
    ) {
        /**
         * X value
         * @member Vector#x
         */
        this.x = x;

        /**
         * Y value
         * @member Vector#y
         */
        this.y = y;
    }

    /**
     * @method set
     * @param {number} [x = 0] - X value
     * @param {number} [y = 0] - Y value
     * @return {Vector}
     */
    set(
        x = 0,
        y = 0
    ) {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * @method random
     * @return {Vector}
     */
    random() {
        return this.set()
            .setAngle(_.random(0,  Math.PI * 2));
    }

    /**
     * @method add
     * @param v
     * @return {Vector}
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    /**
     * @method sub
     * @param v
     * @return {Vector}
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    /**
     * @method mul
     * @param s
     * @return {Vector}
     */
    mul(s) {
        this.x *= s;
        this.y *= s;

        return this;
    }

    /**
     * @method div
     * @param s
     * @return {Vector}
     */
    div(s) {
        this.x /= s;
        this.y /= s;

        return this;
    }

    /**
     * @method mag
     * @return {number}
     */
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @method normalize
     * @return {Vector}
     */
    normalize() {
        return this.div(this.mag());
    }

    /**
     * @method angle
     * @return {number}
     */
    angle() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * @method setMag
     * @param m
     * @return {Vector}
     */
    setMag(m) {
        this.angleValue = this.angle();

        this.x = m * Math.cos(this.angleValue);
        this.y = m * Math.sin(this.angleValue);

        return this;
    }

    /**
     * @method setAngle
     * @param a
     * @return {Vector}
     */
    setAngle(a) {
        this.magValue = this.mag();

        this.x = this.magValue * Math.cos(a);
        this.y = this.magValue * Math.sin(a);

        return this;
    }

    /**
     * @method rotate
     * @param a
     * @return {Vector}
     */
    rotate(a) {
        return this.setAngle(this.angle() + a);
    }

    /**
     * @method limit
     * @param l
     * @return {Vector}
     */
    limit(l) {
        if (this.mag() > l)
            this.setMag(l);

        return this;
    }

    /**
     * @method angleBetween
     * @param v
     * @return {number}
     */
    angleBetween(v) {
        return this.angle() - v.angle();
    }

    /**
     * @method dot
     * @param v
     * @return {number}
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * @method lerp
     * @param v
     * @param amt
     * @return {Vector}
     */
    lerp(
        v,
        amt
    ) {
        this.x += (v.x - this.x) * amt;
        this.y += (v.y - this.y) * amt;

        return this;
    }

    /**
     * @method dist
     * @param v
     * @return {number}
     */
    dist(v) {
        this.dx = this.x - v.x;
        this.dy = this.y - v.y;

        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    /**
     * @method copy
     * @return {Vector}
     */
    copy() {
        return new Vector(this.x, this.y);
    }
}
