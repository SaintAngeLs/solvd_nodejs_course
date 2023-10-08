import React, { useEffect, useRef } from 'react';

function JuliaSet() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Julia Set drawing logic

    let creal = -.8;
    let cimag = .156;

    for(let y = 0; y < 200; y++) {
      for(let x = 0; x < 200; x++) {
        let cx = -2 + x/50;
        let cy = -2 + y/50;
        let i = 0;
        let xt;

        do {
          xt = cx * cx - cy * cy + creal;
          cy = 2 * cx * cy + cimag;
          cx = xt;
          i++;
        } while (cx * cx + cy * cy < 4 && i < 255);

        i = i.toString(16);
        context.beginPath();
        context.rect(x * 4, y * 4, 4, 4);
        context.fillStyle = '#' + i + i + i;
        context.fill();
      }
    }

  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width="800" height="800"></canvas>
    </div>
  );
}

export default JuliaSet;