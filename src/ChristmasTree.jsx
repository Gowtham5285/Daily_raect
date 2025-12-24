import { useEffect, useRef } from "react";

export default function TreeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const topY = 120;
    const height = 420;

    let t = 0;

    function drawStar() {
      ctx.save();
      ctx.translate(centerX, topY - 50);
      ctx.fillStyle = "gold";
      ctx.shadowColor = "gold";
      ctx.shadowBlur = 30;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos((18 + i * 72) * Math.PI / 180) * 20,
          -Math.sin((18 + i * 72) * Math.PI / 180) * 20
        );
        ctx.lineTo(
          Math.cos((54 + i * 72) * Math.PI / 180) * 8,
          -Math.sin((54 + i * 72) * Math.PI / 180) * 8
        );
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function drawBulb(x, y, r, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStar();

      // Spiral ribbons
      for (let i = 0; i < 120; i++) {
        const progress = i / 120;
        const angle = progress * Math.PI * 6 + t;
        const radius = progress * 160;
        const x = centerX + Math.cos(angle) * radius;
        const y = topY + progress * height;

        drawBulb(x, y, 3 + Math.sin(t + i) * 1.5, "#00ffff");
      }

      // Random glowing lights
      for (let i = 0; i < 160; i++) {
        const p = Math.random();
        const r = p * 180;
        const a = Math.random() * Math.PI * 2;

        drawBulb(
          centerX + Math.cos(a) * r,
          topY + p * height,
          Math.random() * 3 + 2,
          Math.random() > 0.5 ? "#ffcc00" : "#00ffaa"
        );
      }

      t += 0.01;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ background: "#000", display: "block" }}
    />
  );
}
