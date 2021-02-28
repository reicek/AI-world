/**
 * Methods to draw creature
 */
export default class Draw {
  /**
   * Creates creature's shape
   */
  static shape(size, color, location, world) {
    world.ctx.fillStyle = 'rgb(0,0,0)';
    world.ctx.strokeStyle = color;
    world.ctx.beginPath();

    world.ctx.arc(location.x, location.y, size, 0, Math.PI * 2, true);

    world.ctx.stroke();
    world.ctx.fill();
  }
}
