import { AfterViewInit, Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cosmos',
  imports: [],
  templateUrl: './cosmos.component.html',
  styleUrl: './cosmos.component.scss'
})
export class CosmosComponent implements AfterViewInit , OnDestroy{

   private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private numParticles = 100;
  private animationFrameId!: number;

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('cosmisCanvas') as HTMLCanvasElement;
    if (!this.canvas) throw new Error('Canvas not found');

    const context = this.canvas.getContext('2d');
    if (!context) throw new Error('2D context not available');
    this.ctx = context;

    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  resizeCanvas(): void {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  initParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(
        new Particle(
          Math.random() * this.canvas.width,
          Math.random() * this.canvas.height,
          Math.random() * 4 + 1,
          Math.random() * 0.5 + 0.2
        )
      );
    }
  }

  animate = (): void => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((particle) => {
      particle.update(this.canvas);
      particle.draw(this.ctx);
    });
    this.connectParticles();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  connectParticles(): void {
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a + 1; b < this.particles.length; b++) {
        const dist = Math.hypot(
          this.particles[a].x - this.particles[b].x,
          this.particles[a].y - this.particles[b].y
        );

        if (dist < 120) {
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 120})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }
}

class Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;

  constructor(x: number, y: number, radius: number, speed: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
  }

  update(canvas: HTMLCanvasElement): void {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;

    if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
    if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
  }

}
