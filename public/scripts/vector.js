/**
 * @class Vector
 */
function Vector (x, y) {
    const vector = {
        x,
        y
    };

    vector.set = (x, y) => {
        vector.x = x;
        vector.y = y;

        return vector;
    };

    vector.random = () => {
        vector.set(1, 1);
        vector.setAngle(_.random(0,  Math.PI * 2));

        return vector;
    };

    vector.add = v => {
        vector.x += v.x;
        vector.y += v.y;

        return vector;
    };

    vector.sub = v => {
        vector.x -= v.x;
        vector.y -= v.y;

        return vector;
    };

    vector.mul = s => {
        vector.x *= s;
        vector.y *= s;

        return vector;
    };

    vector.div = s => {
        !s && console.log('Division by zero!');

        vector.x /= s;
        vector.y /= s;

        return vector;
    };

    vector.mag = () =>
        Math.sqrt(vector.x * vector.x + vector.y * vector.y);

    vector.normalize = () => {
        const mag = vector.mag();
        mag && vector.div(mag);

        return vector;
    };

    vector.angle = () =>
        Math.atan2(vector.y, vector.x);

    vector.setMag = m => {
        const angle = vector.angle();

        vector.x = m * Math.cos(angle);
        vector.y = m * Math.sin(angle);

        return vector;
    };

    vector.setAngle = a => {
        const mag = vector.mag();

        vector.x = mag * Math.cos(a);
        vector.y = mag * Math.sin(a);

        return vector;
    };

    vector.rotate = a => {
        vector.setAngle(vector.angle() + a);

        return vector;
    };

    vector.limit = l => {
        if (vector.mag() > l)
            vector.setMag(l);

        return vector;
    };

    vector.angleBetween = v =>
        vector.angle() - v.angle();

    vector.dot = v =>
        vector.x * v.x + vector.y * v.y;

    vector.lerp = (v, amt) => {
        vector.x += (v.x - vector.x) * amt;
        vector.y += (v.y - vector.y) * amt;

        return vector;
    };

    vector.dist = v => {
        const dx = vector.x - v.x;
        const dy = vector.y - v.y;

        return Math.sqrt(dx * dx + dy * dy);
    };

    vector.copy = () =>
        new Vector(vector.x, vector.y);

    return vector;
}
