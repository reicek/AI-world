import { simulation } from '../../simulation';

/**
 * Methods to draw creature
 */
class Draw {
  /**
   * Creates creature's shape
   */
  static shape(size, color, location) {
    simulation.ctx.fillStyle = 'rgb(0,0,0)';
    simulation.ctx.strokeStyle = color;
    simulation.ctx.beginPath();

    simulation.ctx.arc(location.x, location.y, size, 0, Math.PI * 2, true);

    simulation.ctx.stroke();
    simulation.ctx.fill();
  }
}

export default Draw;
