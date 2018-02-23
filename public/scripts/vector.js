/**
 * @module Vector
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
    };

    /**
     * @method set
     * @param {number} [x = 0] - X value
     * @param {number} [y = 0] - Y value
     */
    set(
        x = 0,
        y = 0
    ) {
        vector.x = x;
        vector.y = y;

        return vector;
    };

    /**
     * @method random
     */
    random() {
        this.set();
        this.setAngle(_.random(0,  Math.PI * 2));

        return this;
    }

    /**
     * @method add
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    /**
     * @method sub
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    /**
     * @method mul
     */
    mul(s) {
        this.x *= s;
        this.y *= s;

        return this;
    }

    /**
     * @method div
     */
    div(s) {
        !s && console.log('Division by zero!');

        this.x /= s;
        this.y /= s;

        return this;
    }

    /**
     * @method mag
     */
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * @method normalize
     */
    normalize() {
        const mag = this.mag();
        mag && this.div(mag);

        return this;
    }

    /**
     * @method angle
     */
    angle() {
        return Math.atan2(this.y, this.x);
    }

    /**
     * @method setMag
     */
    setMag(m) {
        const angle = this.angle();

        this.x = m * Math.cos(angle);
        this.y = m * Math.sin(angle);

        return this;
    }

    /**
     * @method setAngle
     */
    setAngle(a) {
        const mag = this.mag();

        this.x = mag * Math.cos(a);
        this.y = mag * Math.sin(a);

        return this;
    }

    /**
     * @method rotate
     */
    rotate(a) {
        this.setAngle(this.angle() + a);

        return this;
    }

    /**
     * @method limit
     */
    limit(l) {
        if (this.mag() > l) {
            this.setMag(l);
        }

        return this;
    }

    /**
     * @method angleBetween
     */
    angleBetween(v) {
        return this.angle() - v.angle();
    }

    /**
     * @method dot
     */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }

    /**
     * @method lerp
     */
    lerp(v, amt) {
        this.x += (v.x - this.x) * amt;
        this.y += (v.y - this.y) * amt;

        return this;
    }

    /**
     * @method dist
     */
    dist(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;

        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @method copy
     */
    copy() {
        return new Vector(this.x, this.y);
    }
}
