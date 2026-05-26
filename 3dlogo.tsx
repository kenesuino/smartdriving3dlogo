import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const SVG3D = ({ svg, smoothness = 0.5, color = '#4f46e5' }: { svg: string; smoothness?: number; color?: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    
    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 600); 
    camera.lookAt(0, 0, 0);

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // --- Lighting Setup ---
    scene.add(camera);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2); 
    scene.add(ambientLight);

    const cameraLight = new THREE.DirectionalLight(0xffffff, 1.5);
    cameraLight.position.set(0, 0, 1); 
    camera.add(cameraLight);

    // Key light with shadow casting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(200, 400, 300);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 100;
    keyLight.shadow.camera.far = 2000;
    keyLight.shadow.camera.left = -500;
    keyLight.shadow.camera.right = 500;
    keyLight.shadow.camera.top = 500;
    keyLight.shadow.camera.bottom = -500;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const group = new THREE.Group();
    
    try {
      const loader = new SVGLoader();
      const svgData = loader.parse(svg);
      const paths = svgData.paths;

      const frontGroup = new THREE.Group();

      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;

      paths.forEach((path, index) => {
        const material = new THREE.MeshStandardMaterial({
          color: path.color,
          roughness: 0.5,
          metalness: 0.15,
          side: THREE.FrontSide
        });

        const shapes = SVGLoader.createShapes(path);

        shapes.forEach((shape) => {
          // MORE VOLUME: 
          // Bumped the base medallion (index < 4) up to 80 depth.
          // Bumped the blue logo (index >= 4) up to 110 so it still protrudes.
          const baseDepth = index < 4 ? 80 : 110;
          
          const extrudeSettings = {
            depth: baseDepth,
            bevelEnabled: true,
            bevelThickness: smoothness * 5,
            bevelSize: smoothness * 5,
            bevelSegments: 4,
            curveSegments: 12
          };

          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
          geometry.computeBoundingBox();
          
          if (geometry.boundingBox) {
              minX = Math.min(minX, geometry.boundingBox.min.x);
              maxX = Math.max(maxX, geometry.boundingBox.max.x);
              minY = Math.min(minY, geometry.boundingBox.min.y);
              maxY = Math.max(maxY, geometry.boundingBox.max.y);
          }

          const mesh = new THREE.Mesh(geometry, material);
          // Very slight Z stacking to prevent flickering and create a nice layered step effect
          mesh.position.z = index * 2;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          
          frontGroup.add(mesh);
        });
      });

      const center = {
          x: (minX + maxX) / 2,
          y: (minY + maxY) / 2
      };

      // Center the entire geometry perfectly on X and Y
      frontGroup.children.forEach(mesh => {
        mesh.position.x -= center.x;
        mesh.position.y -= center.y;
      });

      frontGroup.position.z = -(smoothness * 5); 

      // Mirror back group to create the thick, double-sided coin
      const backGroup = frontGroup.clone();
      backGroup.rotation.y = Math.PI; 
      backGroup.position.z = (smoothness * 5); 

      group.add(frontGroup);
      group.add(backGroup);

    } catch (e) {
      console.error("Failed to parse SVG:", e);
      const fallbackGeo = new THREE.BoxGeometry(30, 30, 30);
      const fallbackMat = new THREE.MeshStandardMaterial({ color });
      group.add(new THREE.Mesh(fallbackGeo, fallbackMat));
    }

    const wrapperGroup = new THREE.Group();
    wrapperGroup.add(group);
    
    wrapperGroup.scale.set(0, 0, 0);
    const targetScale = new THREE.Vector3(0.18, -0.18, 0.18);

    scene.add(wrapperGroup);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      if (wrapperGroup) {
         wrapperGroup.rotation.y += 0.001; 
         wrapperGroup.scale.lerp(targetScale, 0.04); 
      }
      
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [svg, smoothness, color]);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
};

const mySvg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 2084 2084" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.637041,0,0,0.63055,1041.666667,1041.666667)">
        <g transform="matrix(1,0,0,1,-1618.1875,-1618.1875)">
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M776.73,549.23L549.23,776.73L227.5,776.73L0,549.23L0,227.5L227.5,0L549.23,0L776.73,227.5L776.73,549.23Z" style="fill:rgb(255,0,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M714.62,523.51L523.51,714.62L253.22,714.62L62.11,523.51L62.11,253.22L253.22,62.11L523.51,62.11L714.62,253.22L714.62,523.51Z" style="fill:white;fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M701.97,518.26L518.26,701.97L258.46,701.97L74.76,518.26L74.76,258.46L258.46,74.76L518.26,74.76L701.97,258.46L701.97,518.26Z" style="fill:rgb(255,0,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M688.4,512.64L512.64,688.4L264.09,688.4L88.33,512.64L88.33,264.09L264.09,88.33L512.64,88.33L688.4,264.09L688.4,512.64Z" style="fill:rgb(255,255,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M179.89,340.16L150.55,340.16C150.11,340.27 149.63,340.32 149.08,340.32L145,340.32C143.15,340.43 141.47,340.78 139.95,341.38C138.43,341.98 137.67,343.09 137.67,344.72C137.67,346.24 138.1,347.62 138.97,348.87C139.84,350.12 140.82,351.28 141.9,352.37C142.12,352.7 142.36,353 142.63,353.27C142.9,353.54 143.14,353.78 143.36,354L167.65,380.69C171.78,385.36 175.56,390.18 178.98,395.17C182.4,400.16 184.11,405.97 184.11,412.58C184.11,414.21 183.97,415.92 183.7,417.71C183.43,419.5 182.97,421.37 182.31,423.32C180.57,428.31 177.12,432.87 171.96,436.99C166.8,441.11 158.89,443.17 148.24,443.17L107.65,443.17L99.5,413.18L136.66,413.18C138.51,413.07 140.19,412.72 141.71,412.13C143.23,411.53 143.99,410.43 143.99,408.8C143.99,407.29 143.55,405.91 142.69,404.66C141.82,403.42 140.84,402.25 139.76,401.17C139.54,400.85 139.3,400.55 139.03,400.28C138.76,400.01 138.51,399.77 138.3,399.55L114.67,372.78C110.65,368.24 106.93,363.48 103.5,358.5C100.07,353.52 98.37,347.74 98.37,341.14C98.37,339.5 98.51,337.78 98.78,335.98C99.05,334.18 99.51,332.29 100.17,330.33C101.91,325.3 105.36,320.69 110.52,316.48C115.68,312.27 123.59,310.17 134.24,310.17L171.73,310.01L179.88,340.17L179.89,340.16Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M320.56,443.17L285.68,443.17L285.68,362.65L285.35,362.65L258.45,398.51L232.21,362.65L231.88,362.65L231.88,443.17L197,443.17L197,310L230.09,310L258.45,349.12L287.46,310L320.55,310L320.55,443.17L320.56,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M444.93,443.17L410.05,443.17L410.05,400.95L371.91,400.95C372.02,408.56 373.32,415.92 375.82,423.04C378.32,430.16 381.47,436.87 385.27,443.17L356.91,461.92C350.5,452.25 345.44,441.76 341.75,430.44C338.05,419.13 336.21,407.59 336.21,395.84C336.21,394.54 336.24,393.2 336.29,391.84C336.34,390.48 336.42,389.15 336.53,387.84C337.29,377.51 339.57,367.44 343.38,357.65C347.18,347.86 352.78,339.26 360.17,331.87C369.52,322.51 379.62,316.53 390.49,313.92C401.36,311.31 413.04,310 425.53,310L442.65,309.84L450.8,340L423.42,340C410.27,340.11 400.54,342.2 394.24,346.28C387.94,350.36 383.32,354.84 380.39,359.73C379.3,361.69 378.35,363.67 377.54,365.68C376.73,367.69 375.99,369.51 375.34,371.14L410.06,371.14L410.06,344.08L444.94,344.08L444.94,443.18L444.93,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M533.76,310C546.8,310.11 556.28,312.89 562.2,318.35C568.12,323.81 571.84,329.87 573.37,336.53C573.59,337.84 573.78,339.21 573.94,340.62C574.1,342.04 574.18,343.4 574.18,344.71C574.18,354.37 571.35,362.56 565.7,369.28C560.05,376.01 553.37,381.81 545.65,386.69C550.76,396.89 556.6,406.71 563.17,416.15C569.74,425.59 576.78,434.59 584.28,443.16L555.1,463.37C544.34,451.2 534.78,438.09 526.41,424.04C518.04,409.99 510.54,395.54 503.92,380.67C505.55,379.37 507.56,377.91 509.95,376.28C512.34,374.65 514.78,372.92 517.28,371.07C521.62,367.82 525.62,364.26 529.26,360.41C532.9,356.56 534.72,352.63 534.72,348.61C534.72,345.46 533.6,343.34 531.38,342.25C529.15,341.17 526.73,340.57 524.13,340.46C523.26,340.35 522.42,340.3 521.6,340.3L517.93,340.3L461.37,340.14L469.52,309.98L533.74,309.98L533.76,310ZM502.79,443.17L467.91,443.17L467.91,344.23L502.79,344.23L502.79,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M682.59,339.99L645.42,339.99L645.42,443.17L610.54,443.17L610.54,339.99L573.38,339.99L581.53,310L674.44,310L682.59,339.99Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
            </g>
        </g>
    </g>
</svg>`;

// ─────────────────────────────────────────────────────────────────────────────
// Canvas BackgroundFX — 10 effects, hover-reactive, smooth cross-fade, dark mode
// ─────────────────────────────────────────────────────────────────────────────
interface Mouse          { x: number; y: number; }
interface BubbleParticle { x: number; y: number; r: number; speed: number; opacity: number; hue: number; }
interface DropParticle   { x: number; y: number; age: number; maxAge: number; hue: number; }
interface StarNode       { x: number; y: number; vx: number; vy: number; hue: number; }
interface SwarmParticle  { x: number; y: number; vx: number; vy: number; hue: number; }

const EFFECT_NAMES = ['blueprint','plasma','bubbles','drops','dotted','aurora','constellation','hexgrid','waves','swarm'] as const;
type EffectName = typeof EFFECT_NAMES[number];
const EFFECT_HOLD_MS  = 10_000;
const EFFECT_TRANS_MS =  3_000;
const EFFECT_CYCLE_MS = EFFECT_HOLD_MS + EFFECT_TRANS_MS;
// Shared palette: golden yellow, warm red, medium blue, amber
const ACCENT_HUES = [44, 4, 216, 28];

// ── 1. Blueprint ─────────────────────────────────────────────────────────────
function drawBlueprint(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#0d1018' : '#f6f3ed'; ctx.fillRect(0, 0, W, H);
  const vg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*0.65);
  if (dark) { vg.addColorStop(0,'rgba(30,40,80,0.18)'); vg.addColorStop(1,'rgba(0,0,0,0.25)'); }
  else { vg.addColorStop(0,'rgba(255,250,200,0.18)'); vg.addColorStop(1,'rgba(200,215,255,0.08)'); }
  ctx.fillStyle = vg; ctx.fillRect(0,0,W,H);
  const gM = 30, gMa = 150;
  ctx.strokeStyle = dark ? 'rgba(180,140,40,0.22)' : 'rgba(190,140,30,0.22)'; ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (let x = 0; x <= W; x += gM)  { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 0; y <= H; y += gM)  { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  ctx.strokeStyle = dark ? 'rgba(80,140,255,0.32)' : 'rgba(70,120,255,0.30)'; ctx.lineWidth = 1;
  ctx.beginPath();
  for (let x = 0; x <= W; x += gMa) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 0; y <= H; y += gMa) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  ctx.strokeStyle = dark ? 'rgba(255,80,80,0.60)' : 'rgba(220,45,45,0.50)'; ctx.lineWidth = 1;
  for (let x = gMa; x <= W; x += gMa) for (let y = gMa; y <= H; y += gMa) {
    ctx.beginPath(); ctx.moveTo(x-8,y); ctx.lineTo(x+8,y); ctx.moveTo(x,y-8); ctx.lineTo(x,y+8); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI*2); ctx.stroke();
  }
  const sy = ((t * 0.00005) % 1) * H;
  const sg = ctx.createLinearGradient(0, sy-50, 0, sy+50);
  sg.addColorStop(0,'transparent'); sg.addColorStop(0.5,`rgba(255,190,30,${dark?0.38:0.22})`); sg.addColorStop(1,'transparent');
  ctx.fillStyle = sg; ctx.fillRect(0, sy-50, W, 100);
  if (mouse.x >= 0) {
    const mx = Math.round(mouse.x/gM)*gM, my = Math.round(mouse.y/gM)*gM;
    const p = 0.5 + 0.5*Math.sin(t*0.004);
    ctx.shadowBlur = dark ? 20 : 14; ctx.shadowColor = dark ? 'rgba(255,160,40,0.9)' : 'rgba(255,130,60,0.85)';
    ctx.strokeStyle = `rgba(255,120,40,${p})`; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(mx, my, 18+8*Math.sin(t*0.003), 0, Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(mx-14,my); ctx.lineTo(mx+14,my); ctx.moveTo(mx,my-14); ctx.lineTo(mx,my+14); ctx.stroke();
    for (let r = 60; r <= 180; r += 60) {
      ctx.strokeStyle = `rgba(80,140,255,${(1-r/200)*0.30*p*(dark?1.5:1)})`;
      ctx.beginPath(); ctx.arc(mouse.x, mouse.y, r, 0, Math.PI*2); ctx.stroke();
    }
    ctx.shadowBlur = 0;
  }
}

// ── 2. Plasma ────────────────────────────────────────────────────────────────
function drawPlasma(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#0a0812' : '#f4f2ef'; ctx.fillRect(0, 0, W, H);
  const T = t * 0.0004;
  const blobs = [
    {x:W*(0.5+0.38*Math.sin(T*0.7)),   y:H*(0.5+0.38*Math.cos(T*0.5)),   r:W*0.52, hue:44},
    {x:W*(0.5+0.32*Math.cos(T*0.4)),   y:H*(0.5+0.38*Math.sin(T*0.6)),   r:W*0.46, hue:4},
    {x:W*(0.5+0.30*Math.sin(T*0.9+1)), y:H*(0.5+0.28*Math.cos(T*0.7+2)), r:W*0.40, hue:216},
    {x:W*(0.5+0.20*Math.cos(T*1.1)),   y:H*(0.5+0.32*Math.sin(T*0.8+1)), r:W*0.34, hue:28},
  ];
  if (mouse.x >= 0) blobs.push({x:mouse.x, y:mouse.y, r:260, hue:44});
  const sat = dark ? 88 : 82, lit = dark ? 60 : 52, ba = dark ? 0.65 : 0.55;
  for (const b of blobs) {
    const g = ctx.createRadialGradient(b.x,b.y,0,b.x,b.y,b.r);
    g.addColorStop(0,    `hsla(${b.hue},${sat}%,${lit}%,${ba})`);
    g.addColorStop(0.50, `hsla(${b.hue},${sat-10}%,${lit+8}%,${ba*0.45})`);
    g.addColorStop(1,    'transparent');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
  if (mouse.x >= 0) {
    const mg = ctx.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,100);
    mg.addColorStop(0, dark ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.55)');
    mg.addColorStop(1,'transparent');
    ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);
  }
}

// ── 3. Bubbles ───────────────────────────────────────────────────────────────
function initBubbles(W: number, H: number, n = 22): BubbleParticle[] {
  return Array.from({length:n}, (_, i) => ({
    x: Math.random()*W, y: Math.random()*H,
    r: 40 + Math.random()*90,
    speed: 0.18 + Math.random()*0.32,
    opacity: 0.32 + Math.random()*0.28,
    hue: ACCENT_HUES[i % ACCENT_HUES.length],
  }));
}
function drawBubbles(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, bubbles: BubbleParticle[], dark: boolean) {
  ctx.fillStyle = dark ? '#080c16' : '#eff2f8'; ctx.fillRect(0, 0, W, H);
  const vg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*0.55);
  if (dark) { vg.addColorStop(0,'rgba(20,30,60,0.22)'); vg.addColorStop(1,'rgba(0,0,0,0.15)'); }
  else { vg.addColorStop(0,'rgba(255,255,255,0.28)'); vg.addColorStop(1,'rgba(210,220,250,0.06)'); }
  ctx.fillStyle = vg; ctx.fillRect(0,0,W,H);
  const T = t * 0.0008, sat = dark ? 90 : 85, lit = dark ? 62 : 52;
  for (const b of bubbles) {
    b.y -= b.speed;
    b.x += Math.sin(T + b.r * 0.04) * 0.45;
    if (mouse.x >= 0) {
      const dx = b.x-mouse.x, dy = b.y-mouse.y, dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 180 && dist > 0) { const f=(180-dist)/180; b.x+=(dx/dist)*f*2.5; b.y+=(dy/dist)*f*2.5; }
    }
    if (b.y < -b.r*2) { b.y = H+b.r; b.x = Math.random()*W; }
    if (b.x < -b.r)  b.x = W+b.r;
    if (b.x > W+b.r) b.x = -b.r;
    ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${b.hue},${sat}%,${lit}%,${b.opacity})`;
    ctx.fill();
    ctx.strokeStyle = `hsla(${b.hue},${sat-20}%,${lit-8}%,${b.opacity*0.55})`;
    ctx.lineWidth = 1.5; ctx.stroke();
  }
}

// ── 4. Drops ─────────────────────────────────────────────────────────────────
function spawnDrop(x: number, y: number): DropParticle {
  return {x, y, age:0, maxAge:100+Math.random()*70, hue:ACCENT_HUES[Math.floor(Math.random()*ACCENT_HUES.length)]};
}
function drawDrops(ctx: CanvasRenderingContext2D, _t: number, mouse: Mouse, W: number, H: number, drops: DropParticle[], fc: number, dark: boolean) {
  ctx.fillStyle = dark ? '#060810' : '#f0f4f8'; ctx.fillRect(0, 0, W, H);
  const bg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*0.65);
  if (dark) { bg.addColorStop(0,'rgba(10,15,35,0.22)'); bg.addColorStop(1,'rgba(0,0,0,0.18)'); }
  else { bg.addColorStop(0,'rgba(255,255,255,0.28)'); bg.addColorStop(1,'rgba(195,215,250,0.06)'); }
  ctx.fillStyle = bg; ctx.fillRect(0,0,W,H);
  if (fc%45===0) drops.push(spawnDrop(Math.random()*W, Math.random()*H));
  if (mouse.x>=0 && fc%14===0) drops.push(spawnDrop(mouse.x+(Math.random()-0.5)*24, mouse.y+(Math.random()-0.5)*24));
  const sat = dark ? 88 : 80, lit = dark ? 65 : 52;
  for (let i = drops.length-1; i >= 0; i--) {
    const d = drops[i]; d.age++;
    if (d.age >= d.maxAge) { drops.splice(i,1); continue; }
    const p = d.age/d.maxAge;
    for (let ring = 0; ring < 3; ring++) {
      const rp = Math.max(0, p-ring*0.14); if (rp <= 0) continue;
      ctx.beginPath(); ctx.arc(d.x, d.y, rp*90, 0, Math.PI*2);
      ctx.strokeStyle = `hsla(${d.hue},${sat}%,${lit}%,${(1-rp)*0.65*(1-ring*0.28)})`; ctx.lineWidth = 1.5-ring*0.4; ctx.stroke();
    }
    if (p < 0.18) {
      ctx.beginPath(); ctx.arc(d.x, d.y, 2.5, 0, Math.PI*2);
      ctx.fillStyle = `hsla(${d.hue},${sat}%,${lit}%,${(1-p/0.18)*0.9})`; ctx.fill();
    }
  }
}

// ── 5. Dotted ────────────────────────────────────────────────────────────────
function drawDotted(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#0a0a0a' : '#f5f5f5'; ctx.fillRect(0, 0, W, H);
  const sp = 26, T = t*0.001, cols = Math.ceil(W/sp)+1, rows = Math.ceil(H/sp)+1;
  const sat = dark ? 88 : 85, lit = dark ? 65 : 52;
  for (let row = 0; row < rows; row++) for (let col = 0; col < cols; col++) {
    const x = col*sp, y = row*sp, wave = Math.sin(col*0.32+T*2.0)*Math.cos(row*0.28+T*1.6);
    let r = 1.8+wave*1.4, alpha = (dark ? 0.45 : 0.36)+wave*0.22;
    if (mouse.x >= 0) {
      const dx = x-mouse.x, dy = y-mouse.y, infl = Math.max(0, 1-Math.sqrt(dx*dx+dy*dy)/130);
      r += infl*5; alpha += infl*0.65;
    }
    const hue = ACCENT_HUES[(col + row) % ACCENT_HUES.length];
    ctx.beginPath(); ctx.arc(x, y, Math.max(0.4,r), 0, Math.PI*2);
    ctx.fillStyle = `hsla(${hue},${sat}%,${lit}%,${Math.min(1,alpha)})`; ctx.fill();
  }
}

// ── 6. Aurora ────────────────────────────────────────────────────────────────
function drawAurora(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#060a12' : '#f0f4ef'; ctx.fillRect(0, 0, W, H);
  const T = t * 0.0005;
  const bands = [
    {hue:44,  sat:dark?90:82, lit:dark?62:52, y0:0.25, amp:0.12, freq:2.4, speed:0.7, bw:0.22},
    {hue:4,   sat:dark?88:80, lit:dark?65:50, y0:0.50, amp:0.10, freq:3.1, speed:0.5, bw:0.18},
    {hue:216, sat:dark?92:85, lit:dark?60:48, y0:0.70, amp:0.14, freq:1.8, speed:0.9, bw:0.20},
    {hue:28,  sat:dark?85:75, lit:dark?68:54, y0:0.38, amp:0.08, freq:4.2, speed:0.4, bw:0.14},
  ];
  for (const b of bands) {
    const yC = H*b.y0 + Math.sin(T*b.speed)*H*b.amp, hw = H*b.bw*0.5;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, yC - hw + Math.sin(T*b.speed*1.4)*H*0.04);
    for (let px = 0; px <= W; px += 4) {
      ctx.lineTo(px, yC - hw + Math.sin(px*0.008*b.freq + T*b.speed*1.4)*H*0.04);
    }
    for (let px = W; px >= 0; px -= 4) {
      ctx.lineTo(px, yC + hw + Math.sin(px*0.008*b.freq + T*b.speed*1.4 + Math.PI)*H*0.04);
    }
    ctx.closePath(); ctx.clip();
    const g = ctx.createLinearGradient(0, yC-hw, 0, yC+hw);
    g.addColorStop(0, 'transparent');
    g.addColorStop(0.5, `hsla(${b.hue},${b.sat}%,${b.lit}%,${dark?0.72:0.50})`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }
  if (mouse.x >= 0) {
    const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
    mg.addColorStop(0, dark ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.52)');
    mg.addColorStop(0.5, dark ? 'rgba(255,210,60,0.14)' : 'rgba(255,210,60,0.18)');
    mg.addColorStop(1, 'transparent');
    ctx.fillStyle = mg; ctx.fillRect(0, 0, W, H);
  }
}

// ── 7. Constellation ─────────────────────────────────────────────────────────
function initConstellation(W: number, H: number, count = 80): StarNode[] {
  return Array.from({length:count}, (_, i) => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35,
    hue: ACCENT_HUES[i % ACCENT_HUES.length],
  }));
}
function drawConstellation(ctx: CanvasRenderingContext2D, _t: number, mouse: Mouse, W: number, H: number, nodes: StarNode[], dark: boolean) {
  ctx.fillStyle = dark ? '#080b14' : '#f2f4f8'; ctx.fillRect(0, 0, W, H);
  const sat = dark ? 90 : 82, lit = dark ? 65 : 50;
  for (const nd of nodes) {
    nd.x += nd.vx; nd.y += nd.vy;
    if (nd.x < 0 || nd.x > W) nd.vx *= -1;
    if (nd.y < 0 || nd.y > H) nd.vy *= -1;
  }
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i+1; j < nodes.length; j++) {
      const dx = nodes[i].x-nodes[j].x, dy = nodes[i].y-nodes[j].y, d = Math.sqrt(dx*dx+dy*dy);
      if (d < 130) {
        ctx.strokeStyle = `hsla(${nodes[i].hue},${sat}%,${lit}%,${(1-d/130)*(dark?0.32:0.20)})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
      }
    }
  }
  const hovered: StarNode[] = [];
  if (mouse.x >= 0) {
    for (const nd of nodes) {
      const dx = nd.x-mouse.x, dy = nd.y-mouse.y;
      if (Math.sqrt(dx*dx+dy*dy) < 160) hovered.push(nd);
    }
    for (const nd of hovered) {
      ctx.strokeStyle = `hsla(${nd.hue},${sat}%,${lit}%,0.48)`;
      ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(nd.x, nd.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
    }
  }
  for (const nd of nodes) {
    const isH = hovered.includes(nd);
    const r = isH ? 3.5 : 2, alpha = isH ? 0.95 : (dark ? 0.65 : 0.55);
    if (dark && isH) { ctx.shadowBlur = 8; ctx.shadowColor = `hsla(${nd.hue},90%,65%,0.8)`; }
    ctx.beginPath(); ctx.arc(nd.x, nd.y, r, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${nd.hue},${sat}%,${lit}%,${alpha})`; ctx.fill();
    ctx.shadowBlur = 0;
  }
}

// ── 8. HexGrid ───────────────────────────────────────────────────────────────
function drawHexGrid(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#0a0d14' : '#f4f2f0'; ctx.fillRect(0, 0, W, H);
  const T = t*0.001, sz = 36, cw = sz*1.5, rh = sz*Math.sqrt(3);
  const cols = Math.ceil(W/cw)+3, rows = Math.ceil(H/rh)+3;
  const sat = dark ? 88 : 82, baseLit = dark ? 15 : 92;
  for (let col = -1; col < cols; col++) {
    for (let row = -1; row < rows; row++) {
      const odd = ((col % 2) + 2) % 2 === 1;
      const cx = col*cw, cy = row*rh + (odd ? rh*0.5 : 0);
      const wave = 0.5 + 0.5*Math.sin(col*0.4 + row*0.35 + T*2.0);
      let infl = 0;
      if (mouse.x >= 0) {
        const dx = cx-mouse.x, dy = cy-mouse.y;
        infl = Math.max(0, 1-Math.sqrt(dx*dx+dy*dy)/200);
      }
      const hue = ACCENT_HUES[((col*3+row*2) % ACCENT_HUES.length + ACCENT_HUES.length) % ACCENT_HUES.length];
      const litV = baseLit + wave*(dark ? 42 : -42) + infl*(dark ? 16 : -12);
      const alpha = dark ? (0.16+wave*0.34+infl*0.46) : (0.10+wave*0.28+infl*0.38);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = i*Math.PI/3;
        const hx = cx + sz*Math.cos(a), hy = cy + sz*Math.sin(a);
        i === 0 ? ctx.moveTo(hx, hy) : ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue},${sat}%,${Math.max(0,Math.min(100,litV))}%,${Math.min(1,alpha)})`; ctx.fill();
      ctx.strokeStyle = `hsla(${hue},${sat}%,${dark?50:40}%,${dark?(0.08+infl*0.28):(0.06+infl*0.22)})`; ctx.lineWidth = 0.8; ctx.stroke();
    }
  }
}

// ── 9. Waves ─────────────────────────────────────────────────────────────────
function drawWaves(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, dark: boolean) {
  ctx.fillStyle = dark ? '#080c12' : '#f2f4f0'; ctx.fillRect(0, 0, W, H);
  const T = t*0.0006;
  const waveDefs = [
    {hue:44,  freq:0.008, amp:0.10, phase:0,   speed:1.0, oy:0.20},
    {hue:4,   freq:0.006, amp:0.12, phase:1.5, speed:0.8, oy:0.38},
    {hue:216, freq:0.010, amp:0.09, phase:3.0, speed:1.2, oy:0.55},
    {hue:28,  freq:0.007, amp:0.11, phase:0.8, speed:0.6, oy:0.70},
    {hue:44,  freq:0.012, amp:0.07, phase:2.2, speed:1.5, oy:0.85},
  ];
  for (const w of waveDefs) {
    const by = H*w.oy, hw = H*0.09;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, by + Math.sin(T*w.speed + w.phase)*H*w.amp);
    for (let x = 0; x <= W; x += 3) {
      let dy = Math.sin(x*w.freq + T*w.speed + w.phase)*H*w.amp;
      if (mouse.x >= 0) {
        const md = Math.sqrt((x-mouse.x)**2 + (by-mouse.y)**2);
        dy += Math.max(0, 1-md/200)*42*Math.sin((x-mouse.x)*0.05);
      }
      ctx.lineTo(x, by + dy);
    }
    for (let x = W; x >= 0; x -= 3) {
      let dy = Math.sin(x*w.freq + T*w.speed + w.phase)*H*w.amp;
      if (mouse.x >= 0) {
        const md = Math.sqrt((x-mouse.x)**2 + (by-mouse.y)**2);
        dy += Math.max(0, 1-md/200)*42*Math.sin((x-mouse.x)*0.05);
      }
      ctx.lineTo(x, by + dy + hw);
    }
    ctx.closePath(); ctx.clip();
    const g = ctx.createLinearGradient(0, by-hw*0.5, 0, by+hw*1.5);
    g.addColorStop(0, 'transparent');
    g.addColorStop(0.5, `hsla(${w.hue},${dark?90:82}%,${dark?62:52}%,${dark?0.68:0.50})`);
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.restore();
  }
}

// ── 10. Swarm ────────────────────────────────────────────────────────────────
function initSwarm(W: number, H: number, count = 120): SwarmParticle[] {
  return Array.from({length:count}, (_, i) => ({
    x: Math.random()*W, y: Math.random()*H,
    vx: (Math.random()-0.5)*2, vy: (Math.random()-0.5)*2,
    hue: ACCENT_HUES[i % ACCENT_HUES.length],
  }));
}
function drawSwarm(ctx: CanvasRenderingContext2D, t: number, mouse: Mouse, W: number, H: number, particles: SwarmParticle[], dark: boolean) {
  ctx.fillStyle = dark ? '#060810' : '#f0f2f5'; ctx.fillRect(0, 0, W, H);
  const T = t*0.001;
  const attrs = [
    {x: W/2 + Math.cos(T*0.7)*W*0.28,  y: H/2 + Math.sin(T*0.5)*H*0.28},
    {x: W/2 + Math.cos(T*0.4+2)*W*0.22, y: H/2 + Math.sin(T*0.6+1)*H*0.22},
  ];
  const sat = dark ? 90 : 85, lit = dark ? 65 : 52;
  for (const p of particles) {
    let ax = 0, ay = 0;
    for (const a of attrs) {
      const dx = a.x-p.x, dy = a.y-p.y, d = Math.sqrt(dx*dx+dy*dy)+1;
      ax += (dx/d)*Math.min(d*0.005, 0.8); ay += (dy/d)*Math.min(d*0.005, 0.8);
    }
    if (mouse.x >= 0) {
      const dx = p.x-mouse.x, dy = p.y-mouse.y, d = Math.sqrt(dx*dx+dy*dy)+1;
      if (d < 140) { ax += (dx/d)*(140-d)*0.04; ay += (dy/d)*(140-d)*0.04; }
    }
    p.vx = p.vx*0.92 + ax; p.vy = p.vy*0.92 + ay;
    const sp = Math.sqrt(p.vx*p.vx+p.vy*p.vy); if (sp > 3.5) { p.vx=p.vx/sp*3.5; p.vy=p.vy/sp*3.5; }
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    ctx.beginPath(); ctx.arc(p.x, p.y, dark ? 2.2 : 2.0, 0, Math.PI*2);
    ctx.fillStyle = `hsla(${p.hue},${sat}%,${lit}%,${dark?0.72:0.60})`; ctx.fill();
  }
  for (const a of attrs) {
    const g = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, 60);
    g.addColorStop(0, dark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.25)');
    g.addColorStop(1, 'transparent');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  }
}

// ── Dispatcher ───────────────────────────────────────────────────────────────
function drawEffect(ctx: CanvasRenderingContext2D, name: EffectName, t: number, mouse: Mouse, W: number, H: number, bubbles: BubbleParticle[], drops: DropParticle[], fc: number, constellation: StarNode[], swarm: SwarmParticle[], dark: boolean) {
  switch (name) {
    case 'blueprint':    drawBlueprint(ctx,t,mouse,W,H,dark); break;
    case 'plasma':       drawPlasma(ctx,t,mouse,W,H,dark); break;
    case 'bubbles':      drawBubbles(ctx,t,mouse,W,H,bubbles,dark); break;
    case 'drops':        drawDrops(ctx,t,mouse,W,H,drops,fc,dark); break;
    case 'dotted':       drawDotted(ctx,t,mouse,W,H,dark); break;
    case 'aurora':       drawAurora(ctx,t,mouse,W,H,dark); break;
    case 'constellation':drawConstellation(ctx,t,mouse,W,H,constellation,dark); break;
    case 'hexgrid':      drawHexGrid(ctx,t,mouse,W,H,dark); break;
    case 'waves':        drawWaves(ctx,t,mouse,W,H,dark); break;
    case 'swarm':        drawSwarm(ctx,t,mouse,W,H,swarm,dark); break;
  }
}

// ── BackgroundFX component ───────────────────────────────────────────────────
const EFFECT_LABELS: Record<EffectName, string> = {
  blueprint:'Blueprint', plasma:'Plasma', bubbles:'Bubbles', drops:'Drops', dotted:'Dotted',
  aurora:'Aurora', constellation:'Stars', hexgrid:'Hex', waves:'Waves', swarm:'Swarm',
};

const BackgroundFX: React.FC = () => {
  const canvasRef        = useRef<HTMLCanvasElement>(null);
  const mouseRef         = useRef<Mouse>({x:-9999,y:-9999});
  const bubblesRef       = useRef<BubbleParticle[]>([]);
  const dropsRef         = useRef<DropParticle[]>([]);
  const constellationRef = useRef<StarNode[]>([]);
  const swarmRef         = useRef<SwarmParticle[]>([]);
  const frameRef         = useRef(0);
  const fcRef            = useRef(0);
  const effectIdxRef     = useRef(0);
  const phaseStartRef    = useRef(-1);
  const lockedRef        = useRef(false);
  const darkRef          = useRef(false);
  const lastEffRef       = useRef<EffectName>(EFFECT_NAMES[0]);
  const [displayEff, setDisplayEff] = useState<EffectName>(EFFECT_NAMES[0]);
  const [locked, setLocked] = useState(false);
  const [dark, setDark] = useState(false);

  const handleNext = () => {
    effectIdxRef.current = (effectIdxRef.current + 1) % EFFECT_NAMES.length;
    phaseStartRef.current = -1;
  };
  const handleLock = () => {
    const nl = !lockedRef.current;
    lockedRef.current = nl;
    if (!nl) phaseStartRef.current = -1;
    setLocked(nl);
  };
  const handleDark = () => {
    const nd = !darkRef.current;
    darkRef.current = nd;
    setDark(nd);
  };

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const offA = document.createElement('canvas');
    const offB = document.createElement('canvas');
    const ctxA = offA.getContext('2d')!;
    const ctxB = offB.getContext('2d')!;

    const resize = () => {
      const W = window.innerWidth, H = window.innerHeight;
      canvas.width=W; canvas.height=H; offA.width=W; offA.height=H; offB.width=W; offB.height=H;
      if (bubblesRef.current.length===0) bubblesRef.current = initBubbles(W,H);
      if (constellationRef.current.length===0) constellationRef.current = initConstellation(W,H);
      if (swarmRef.current.length===0) swarmRef.current = initSwarm(W,H);
    };
    resize();
    window.addEventListener('resize', resize);

    // Track mouse globally so hover works over the 3D logo layer too
    const onMove  = (e: MouseEvent) => { mouseRef.current = {x:e.clientX, y:e.clientY}; };
    const onLeave = ()               => { mouseRef.current = {x:-9999, y:-9999}; };
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);

    const render = (ts: number) => {
      if (phaseStartRef.current < 0) phaseStartRef.current = ts;
      let phaseT = ts - phaseStartRef.current;
      const W = canvas.width, H = canvas.height;
      const mouse = mouseRef.current, fc = fcRef.current++, isDark = darkRef.current;

      if (lockedRef.current) {
        phaseT = Math.min(phaseT, EFFECT_HOLD_MS);
      } else if (phaseT >= EFFECT_CYCLE_MS) {
        effectIdxRef.current = (effectIdxRef.current + 1) % EFFECT_NAMES.length;
        phaseStartRef.current = ts;
        phaseT = 0;
      }

      const curEff  = EFFECT_NAMES[effectIdxRef.current];
      const nextEff = EFFECT_NAMES[(effectIdxRef.current + 1) % EFFECT_NAMES.length];

      if (curEff !== lastEffRef.current) {
        lastEffRef.current = curEff;
        setDisplayEff(curEff);
      }

      let trans = 0;
      if (phaseT > EFFECT_HOLD_MS) {
        const raw = (phaseT - EFFECT_HOLD_MS) / EFFECT_TRANS_MS;
        trans = Math.min(1, raw * raw * (3 - 2 * raw));
      }

      drawEffect(ctxA, curEff,  ts, mouse, W, H, bubblesRef.current, dropsRef.current, fc, constellationRef.current, swarmRef.current, isDark);
      if (trans > 0) drawEffect(ctxB, nextEff, ts, mouse, W, H, bubblesRef.current, dropsRef.current, fc, constellationRef.current, swarmRef.current, isDark);
      ctx.clearRect(0,0,W,H);
      ctx.globalAlpha = 1-trans; ctx.drawImage(offA,0,0);
      if (trans > 0) { ctx.globalAlpha = trans; ctx.drawImage(offB,0,0); }
      ctx.globalAlpha = 1;
      frameRef.current = requestAnimationFrame(render);
    };
    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  const iBtn: React.CSSProperties = {
    background:'none', border:'none', padding:'0 3px',
    cursor:'pointer', fontSize:10, lineHeight:1, display:'flex', alignItems:'center',
  };
  const sep: React.CSSProperties = {
    width:1, height:12, margin:'0 2px', display:'inline-block',
    background: dark ? 'rgba(180,180,200,0.22)' : 'rgba(180,180,180,0.32)',
  };

  return (
    <div style={{position:'absolute',inset:0}}>
      <canvas ref={canvasRef} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}} />
      <div style={{
        position:'absolute', top:8, right:8, zIndex:10,
        display:'flex', alignItems:'center',
        background: dark ? 'rgba(18,18,26,0.80)' : 'rgba(255,255,255,0.65)',
        backdropFilter:'blur(5px)',
        border: dark ? '1px solid rgba(80,90,130,0.38)' : '1px solid rgba(200,185,165,0.28)',
        borderRadius:12, padding:'1px 2px',
        fontFamily:'system-ui,sans-serif',
        boxShadow:'0 1px 4px rgba(0,0,0,0.10)',
        userSelect:'none',
      }}>
        <button onClick={handleDark} title={dark ? 'Light mode' : 'Dark mode'}
          style={{...iBtn, color: dark ? '#ffd060' : '#666', fontSize:11, paddingRight:4}}>
          {dark ? '☀' : '🌙'}
        </button>
        <span style={sep}/>
        <button onClick={handleNext} title="Next background" style={{...iBtn, color: dark ? '#aab' : '#aaa'}}>↻</button>
        <span style={{padding:'0 3px', color: dark ? '#99a' : '#888', fontSize:10, letterSpacing:'0.01em'}}>{EFFECT_LABELS[displayEff]}</span>
        <button onClick={handleLock} title={locked ? 'Resume cycling' : 'Pin background'}
          style={{...iBtn, color: locked ? '#d05040' : (dark ? '#556' : '#ccc'), fontSize:9}}>
          {locked ? '●' : '○'}
        </button>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', background: '#fefce8', color: '#0f172a' }}>
          <div style={{ padding: '2rem', background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '0.5rem', maxWidth: '32rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#b91c1c' }}>Application Error</h2>
            <p style={{ color: '#334155', marginBottom: '1rem' }}>The renderer encountered an issue. Try reloading the preview.</p>
            <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#ef4444', wordBreak: 'break-word' }}>{this.state.error?.toString()}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{position:'relative',width:'100vw',height:'100vh',overflow:'hidden'}}>
        <BackgroundFX />
        <div style={{position:'relative',zIndex:1,width:'100%',height:'100%'}}>
          <SVG3D svg={mySvg} smoothness={0.6} color="#4f46e5" />
        </div>
      </div>
    </ErrorBoundary>
  );
}