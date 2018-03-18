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
        world.ctx.fillStyle = color;
        world.ctx.strokeStyle = color;
        world.ctx.beginPath();

        world.ctx.moveTo(
            location.x + Math.cos(angle) * size * 3, // x1
            location.y + Math.sin(angle) * size * 3  // y1
        );
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
        world.ctx.lineTo(
            location.x + Math.cos(angle + (Math.PI / 2)) * size,
            location.y + Math.sin(angle + (Math.PI / 2)) * size
        );

        world.ctx.stroke();
        world.ctx.fill();
    }
}
