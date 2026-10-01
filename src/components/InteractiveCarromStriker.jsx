import React, { useState, useRef, useEffect, useCallback } from 'react';

// Web Audio API synthesized realistic carrom striker strike & bounce sound
function playCarromClack(intensity = 1) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!window.__carromAudioCtx) {
      window.__carromAudioCtx = new AudioCtx();
    }
    const ctx = window.__carromAudioCtx;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const t = ctx.currentTime;
    const gainNode = ctx.createGain();
    const clampedIntensity = Math.min(Math.max(intensity, 0.2), 1.5);
    const volume = 0.25 * clampedIntensity;

    gainNode.gain.setValueAtTime(volume, t);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, t);
    filter.Q.setValueAtTime(3.5, t);

    // Deep body thud + snap
    const oscBody = ctx.createOscillator();
    oscBody.type = 'triangle';
    oscBody.frequency.setValueAtTime(450 + Math.random() * 80, t);
    oscBody.frequency.exponentialRampToValueAtTime(80, t + 0.06);

    const oscSnap = ctx.createOscillator();
    oscSnap.type = 'square';
    oscSnap.frequency.setValueAtTime(2000 + Math.random() * 200, t);
    oscSnap.frequency.exponentialRampToValueAtTime(200, t + 0.03);

    const snapGain = ctx.createGain();
    snapGain.gain.setValueAtTime(0.45, t);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);

    oscBody.connect(gainNode);
    oscSnap.connect(snapGain);
    snapGain.connect(gainNode);

    gainNode.connect(filter);
    filter.connect(ctx.destination);

    oscBody.start(t);
    oscSnap.start(t);
    oscBody.stop(t + 0.09);
    oscSnap.stop(t + 0.09);
  } catch (err) {
    // Audio context fallback
  }
}

export default function InteractiveCarromStriker({ isDark = true }) {
  const containerRef = useRef(null);

  // Position relative to resting anchor (px)
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const angleRef = useRef(0);
  const angVelRef = useRef(0.2);
  const isDraggingRef = useRef(false);
  const dragStartPosRef = useRef({ x: 0, y: 0 });
  const dragVectorRef = useRef({ dx: 0, dy: 0, powerRatio: 0, angle: 0 });
  const boundsRef = useRef({ minX: -800, maxX: 100, minY: -400, maxY: 400 });

  // Visual state
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0, rot: 0 });
  const [isAiming, setIsAiming] = useState(false);
  const [aimVector, setAimVector] = useState({ dx: 0, dy: 0, length: 0 });
  const [sparks, setSparks] = useState([]);
  const [powerPct, setPowerPct] = useState(0);

  // Calculate exact visible dot field boundary so striker stays contained inside visible dot areas (center of fading gradient)
  const getBounds = useCallback(() => {
    if (!containerRef.current) return boundsRef.current;
    const parentSection = containerRef.current.closest('.section-home') || document.body;
    const dotfieldEl = parentSection.querySelector('.section-home-dotfield-bg') || parentSection;
    const dotRect = dotfieldEl.getBoundingClientRect();
    const stampRect = containerRef.current.getBoundingClientRect();

    const strikerRadius = (stampRect.width && stampRect.width > 0) ? stampRect.width / 2 : 84;
    const anchorX = stampRect.left - posRef.current.x;
    const anchorY = stampRect.top - posRef.current.y;

    // The dotfield gradient fade runs from 0% to 7% on left/top and 93% to 100% on right/bottom.
    // Center of this fading gradient is at ~3.5% (with fully visible dots starting at ~5-7%).
    // Using a 5% inset guarantees the striker stays inside the visible dot area and bounces right at the gradient edge.
    const insetX = dotRect.width * 0.05;
    const insetY = dotRect.height * 0.05;

    return {
      minX: dotRect.left + insetX + strikerRadius - anchorX,
      maxX: dotRect.right - insetX - strikerRadius - anchorX,
      minY: dotRect.top + insetY + strikerRadius - anchorY,
      maxY: dotRect.bottom - insetY - strikerRadius - anchorY,
    };
  }, []);

  const updateBounds = useCallback(() => {
    boundsRef.current = getBounds();
  }, [getBounds]);

  const triggerSpark = (x, y, vx, vy) => {
    const id = Math.random();
    const stampEl = containerRef.current;
    const radius = stampEl ? stampEl.offsetWidth / 2 : 84;
    const newSpark = { id, x: x + radius, y: y + radius, vx, vy };
    setSparks((prev) => [...prev.slice(-6), newSpark]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id));
    }, 450);
  };

  // Pure 60fps high-precision physics simulation loop
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const physicsLoop = (time) => {
      // Normalizing delta-time to 60fps baseline
      const dt = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;
      const timeScale = dt * 60; // 1.0 at 60fps

      if (!isDraggingRef.current) {
        const vel = velRef.current;
        const pos = posRef.current;
        const speed = Math.hypot(vel.x, vel.y);

        if (speed > 1.2) {
          // Extremely smooth, authentic carrom powder glide
          const frictionPerFrame = 0.988;
          const decay = Math.pow(frictionPerFrame, timeScale);
          vel.x *= decay;
          vel.y *= decay;

          // Gentle linear felt resistance at low speeds
          if (speed < 15) {
            const drag = 0.3 * timeScale;
            vel.x -= Math.sign(vel.x) * Math.min(drag, Math.abs(vel.x));
            vel.y -= Math.sign(vel.y) * Math.min(drag, Math.abs(vel.y));
          }

          pos.x += vel.x * timeScale;
          pos.y += vel.y * timeScale;

          // Angular spin smoothly linked to linear motion
          angVelRef.current = (vel.x * 0.4 + vel.y * 0.25) * 0.25;
          angleRef.current += angVelRef.current * timeScale;

          // Dynamically check actual boundary edges
          const b = getBounds();
          boundsRef.current = b;
          const bounceRestitution = 0.82;
          let collided = false;
          let hitVx = 0;
          let hitVy = 0;

          if (pos.x < b.minX) {
            pos.x = b.minX;
            vel.x = Math.abs(vel.x) * bounceRestitution;
            collided = true;
            hitVx = 1;
          } else if (pos.x > b.maxX) {
            pos.x = b.maxX;
            vel.x = -Math.abs(vel.x) * bounceRestitution;
            collided = true;
            hitVx = -1;
          }

          if (pos.y < b.minY) {
            pos.y = b.minY;
            vel.y = Math.abs(vel.y) * bounceRestitution;
            collided = true;
            hitVy = 1;
          } else if (pos.y > b.maxY) {
            pos.y = b.maxY;
            vel.y = -Math.abs(vel.y) * bounceRestitution;
            collided = true;
            hitVy = -1;
          }

          if (collided && speed > 15) {
            playCarromClack(Math.min(speed / 280, 1.4));
            triggerSpark(pos.x, pos.y, hitVx, hitVy);
          }
        } else {
          // Striker came to a complete, crisp stop
          vel.x = 0;
          vel.y = 0;
          angVelRef.current += (0.22 - angVelRef.current) * 0.05;
          angleRef.current += angVelRef.current;
        }

        setRenderPos({
          x: pos.x,
          y: pos.y,
          rot: angleRef.current,
        });
      } else {
        // While dragging: striker responds with elastic pull (moves with cursor pull)
        angleRef.current += 0.15;
        const dragV = dragVectorRef.current;
        const pullOffset = dragV ? {
          x: Math.min(Math.max(-dragV.dx * 0.25, -35), 35),
          y: Math.min(Math.max(-dragV.dy * 0.25, -35), 35),
        } : { x: 0, y: 0 };

        setRenderPos({
          x: posRef.current.x + pullOffset.x,
          y: posRef.current.y + pullOffset.y,
          rot: angleRef.current,
        });
      }

      animId = requestAnimationFrame(physicsLoop);
    };

    animId = requestAnimationFrame(physicsLoop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer Aim & Flick Handlers
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    updateBounds();

    isDraggingRef.current = true;
    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    dragVectorRef.current = { dx: 0, dy: 0, powerRatio: 0, angle: 0 };
    velRef.current = { x: 0, y: 0 };
    setIsAiming(true);
    setAimVector({ dx: 0, dy: 0, length: 0 });
    setPowerPct(0);

    const onPointerMove = (moveEvt) => {
      if (!isDraggingRef.current) return;

      // Pull offset: vector from drag point to initial click point
      const pullX = dragStartPosRef.current.x - moveEvt.clientX;
      const pullY = dragStartPosRef.current.y - moveEvt.clientY;
      const rawDist = Math.hypot(pullX, pullY);

      // Max pull cap for aiming (180px)
      const maxPull = 180;
      const clampedDist = Math.min(rawDist, maxPull);
      const angle = Math.atan2(pullY, pullX);
      const powerRatio = clampedDist / maxPull;

      dragVectorRef.current = {
        dx: pullX,
        dy: pullY,
        powerRatio,
        angle,
      };

      // Trajectory visual line projects forward
      const aimLen = powerRatio * 200;
      setAimVector({
        dx: Math.cos(angle) * aimLen,
        dy: Math.sin(angle) * aimLen,
        length: aimLen,
      });

      setPowerPct(Math.round(powerRatio * 100));
    };

    const onPointerUp = () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);

      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsAiming(false);

      const { powerRatio, angle } = dragVectorRef.current;

      // Proportional flick force directly determined by pull distance!
      if (powerRatio > 0.04) {
        // Linear & proportional: small pull = gentle roll, big pull = powerful blast
        // Range: ~200 px/sec to ~2600 px/sec
        const baseForce = 2500;
        const strikeSpeed = powerRatio * baseForce;

        velRef.current = {
          x: Math.cos(angle) * (strikeSpeed * 0.05),
          y: Math.sin(angle) * (strikeSpeed * 0.05),
        };

        // Striking clack audio volume directly proportional to flick force
        playCarromClack(0.4 + powerRatio * 1.0);
      } else {
        velRef.current = { x: 0, y: 0 };
      }

      setAimVector({ dx: 0, dy: 0, length: 0 });
      setPowerPct(0);
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  useEffect(() => {
    // Keep bounds fresh on resize
    const handleResize = () => {
      boundsRef.current = getBounds();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getBounds]);

  return (
    <div
      ref={containerRef}
      className={`circular-stamp-container carrom-striker ${isAiming ? 'striker-aiming' : ''}`}
      style={{
        transform: `translate3d(${renderPos.x}px, ${renderPos.y}px, 0)`,
        cursor: isAiming ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
      }}
      onPointerDown={handlePointerDown}
      title="Pull back to aim, release to strike!"
    >
      {/* Aiming Laser Line (Starts from striker center and projects in shot direction) */}
      {isAiming && (
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{
            position: 'absolute',
            overflow: 'visible',
            left: '50%',
            top: '50%',
            zIndex: 15,
          }}
        >
          {/* Laser trajectory beam */}
          <line
            x1="0"
            y1="0"
            x2={aimVector.dx}
            y2={aimVector.dy}
            stroke="#00ff73"
            strokeWidth="3"
            strokeDasharray="6 4"
            strokeLinecap="round"
            filter="drop-shadow(0 0 8px rgba(0,255,115,0.9))"
          />
          {/* Glowing Arrowhead pointer */}
          <circle
            cx={aimVector.dx}
            cy={aimVector.dy}
            r="5"
            fill="#00ff73"
            filter="drop-shadow(0 0 10px #00ff73)"
          />
        </svg>
      )}

      {/* Power HUD Indicator */}
      {isAiming && (
        <div className="striker-power-hud">
         
          <div className="hud-bar-track">
            <div className="hud-bar-fill" style={{ width: `${powerPct}%` }} />
          </div>
        </div>
      )}

      {/* Wall Impact Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="striker-bounce-spark"
          style={{
            transform: `translate(${spark.vx * 15}px, ${spark.vy * 15}px) scale(1.6)`,
          }}
        />
      ))}

      {/* Rotating Outer Text Ring */}
      <div
        className="stamp-rotating-text-ring"
        style={{
          transform: `rotate(${renderPos.rot}deg)`,
          animation: 'none',
        }}
      >
        <svg viewBox="0 0 160 160" className="stamp-svg-ring">
          <defs>
            <path
              id="stampCirclePath"
              d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            />
          </defs>
          <text fontSize="10.5" fontWeight="700" letterSpacing="3.5">
            <textPath href="#stampCirclePath">
            MOBILE APP DEVELOPER • FLUTTER • UI/UX •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Concentric Wireframe Carrom Striker Core */}
      <div className="stamp-center-wireframe">
        <div className="ellipse-ring e1" />
        <div className="ellipse-ring e2" />
        <div className="ellipse-ring e3" />
        <div className="ellipse-ring e4" />
        <div className="striker-core-dot" />
      </div>

      {/* Flick Me Tooltip when idle */}
      {/* {!isAiming && Math.hypot(velRef.current.x, velRef.current.y) < 1 && (
        <div className="striker-drag-hint">
          <span>flick me</span>
        </div>
      )} */}
    </div>
  );
}
