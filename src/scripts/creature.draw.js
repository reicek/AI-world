'use strict';
/**
 * @module DrawCreature
 */
/**
 * Methods to draw creature
 */
class DrawCreature {
    /**
     * Initializes canvas settings and moves starting point to the creature's position
     */
    static base(
        size,
        angle,
        location,
        color,
        world
    ) {
        world.ctx.fillStyle = 'rgba(0,0,0)';
        world.ctx.strokeStyle = color;
        world.ctx.beginPath();
    }

    /**
     * Creates creature's shape
     */
    static shape(
        size,
        angle,
        location,
        world
    ) {
        world.ctx.moveTo(
            location.x, // x1
            location.y  // y1
        );
        world.ctx.arc(
            location.x,
            location.y,
            size,
            0,
            Math.PI * 2,
            true
        );

        world.ctx.stroke();
        world.ctx.fill();
    }
}
