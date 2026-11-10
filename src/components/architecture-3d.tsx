"use client";
import { useEffect, useRef, useState } from "react";

/** A small procedural scene: no downloaded models, textures, post-processing, or shadow maps. */
export function Architecture3D({
  active = 0,
  playing = true,
  compact = false,
}: {
  active?: number;
  playing?: boolean;
  compact?: boolean;
}) {
  const host = useRef<HTMLDivElement>(null);
  const controls = useRef({ active, playing });
  const invalidate = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);
  useEffect(() => {
    controls.current = { active, playing };
    invalidate.current();
  }, [active, playing]);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false,
      loading = false,
      visible = false;
    let teardown = () => {};
    const load = async () => {
      if (loading) return;
      loading = true;
      try {
        const T = await import("three");
        if (disposed) return;
        const renderer = new T.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
        renderer.setClearColor(0x0b0d10, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.outputColorSpace = T.SRGBColorSpace;
        renderer.toneMapping = T.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.45;
        renderer.domElement.setAttribute("aria-hidden", "true");
        element.appendChild(renderer.domElement);
        teardown = () => {
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
        };
        const scene = new T.Scene();
        const camera = new T.PerspectiveCamera(34, 1, 0.1, 40);
        camera.position.set(5.2, 4.5, 6.4);
        camera.lookAt(0, 0.15, 0);
        scene.add(new T.HemisphereLight(0xdce8ff, 0x222a36, 2.3));
        const key = new T.DirectionalLight(0xf0f4ff, 4);
        key.position.set(-3, 6, 4);
        scene.add(key);
        const rim = new T.DirectionalLight(0xa9c7ff, 2.5);
        rim.position.set(4, 1, -3);
        scene.add(rim);
        const fill = new T.DirectionalLight(0xffffff, 1);
        fill.position.set(-4, -1, -2);
        scene.add(fill);
        const assembly = new T.Group();
        scene.add(assembly);
        const geometry = new Set<import("three").BufferGeometry>();
        const materials = new Set<import("three").Material>();
        teardown = () => {
          scene.traverse((object) => {
            if (object instanceof T.InstancedMesh) object.dispose();
          });
          geometry.forEach((g) => g.dispose());
          materials.forEach((m) => m.dispose());
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
        };
        const ownGeometry = <G extends import("three").BufferGeometry>(
          g: G,
        ) => {
          geometry.add(g);
          return g;
        };
        const ownMaterial = <M extends import("three").Material>(m: M) => {
          materials.add(m);
          return m;
        };
        const shape = new T.Shape();
        const w = 1.5,
          r = 0.13;
        shape.moveTo(-w + r, -w);
        shape.lineTo(w - r, -w);
        shape.quadraticCurveTo(w, -w, w, -w + r);
        shape.lineTo(w, w - r);
        shape.quadraticCurveTo(w, w, w - r, w);
        shape.lineTo(-w + r, w);
        shape.quadraticCurveTo(-w, w, -w, w - r);
        shape.lineTo(-w, -w + r);
        shape.quadraticCurveTo(-w, -w, -w + r, -w);
        const slab = ownGeometry(
          new T.ExtrudeGeometry(shape, {
            depth: 0.16,
            bevelEnabled: true,
            bevelThickness: 0.035,
            bevelSize: 0.035,
            bevelSegments: 2,
            steps: 1,
            curveSegments: 5,
          }),
        );
        slab.center();
        slab.rotateX(-Math.PI / 2);
        const chipGeo = ownGeometry(new T.BoxGeometry(0.74, 0.12, 0.74));
        const pinGeo = ownGeometry(new T.BoxGeometry(0.06, 0.035, 0.19));
        const screwGeo = ownGeometry(
          new T.CylinderGeometry(0.038, 0.038, 0.018, 8),
        );
        const metal = ownMaterial(
          new T.MeshStandardMaterial({
            color: 0x63758c,
            metalness: 0.7,
            roughness: 0.3,
          }),
        );
        const chipMat = ownMaterial(
          new T.MeshStandardMaterial({
            color: 0x111822,
            metalness: 0.35,
            roughness: 0.35,
          }),
        );
        const layers: import("three").Group[] = [];
        const bands: import("three").MeshStandardMaterial[] = [];
        const baseMaterials: import("three").MeshStandardMaterial[] = [];
        for (let i = 0; i < 3; i++) {
          const layer = new T.Group();
          layer.position.y = (1 - i) * 0.94;
          assembly.add(layer);
          layers.push(layer);
          const material = ownMaterial(
            new T.MeshStandardMaterial({
              color: i === 0 ? 0x344356 : 0x26313f,
              metalness: 0.55,
              roughness: 0.38,
            }),
          );
          baseMaterials.push(material);
          layer.add(new T.Mesh(slab, material));
          const chip = new T.Mesh(chipGeo, chipMat);
          chip.position.y = 0.17;
          layer.add(chip);
          const edgeMat = ownMaterial(
            new T.MeshStandardMaterial({
              color: 0xa9c7ff,
              emissive: 0x6585b0,
              emissiveIntensity: 0.25,
              metalness: 0.4,
              roughness: 0.32,
            }),
          );
          bands.push(edgeMat);
          const strip = new T.Mesh(
            ownGeometry(new T.BoxGeometry(1.8, 0.022, 0.025)),
            edgeMat,
          );
          strip.position.set(0, 0.01, 1.536);
          layer.add(strip);
          const pins = new T.InstancedMesh(pinGeo, metal, 24);
          const screws = new T.InstancedMesh(screwGeo, metal, 4);
          const dummy = new T.Object3D();
          let k = 0;
          for (let j = 0; j < 6; j++)
            for (const side of [-1, 1]) {
              dummy.position.set((j - 2.5) * 0.105, 0.13, side * 0.46);
              dummy.rotation.y = 0;
              dummy.updateMatrix();
              pins.setMatrixAt(k++, dummy.matrix);
              dummy.position.set(side * 0.46, 0.13, (j - 2.5) * 0.105);
              dummy.rotation.y = Math.PI / 2;
              dummy.updateMatrix();
              pins.setMatrixAt(k++, dummy.matrix);
            }
          k = 0;
          dummy.rotation.y = 0;
          for (const x of [-1.28, 1.28])
            for (const z of [-1.28, 1.28]) {
              dummy.position.set(x, 0.12, z);
              dummy.updateMatrix();
              screws.setMatrixAt(k++, dummy.matrix);
            }
          pins.instanceMatrix.needsUpdate = true;
          screws.instanceMatrix.needsUpdate = true;
          layer.add(pins, screws);
          const traces = new T.BufferGeometry().setFromPoints([
            new T.Vector3(-1.1, 0.116, -1.1),
            new T.Vector3(1.1, 0.116, -1.1),
            new T.Vector3(1.1, 0.116, 1.1),
            new T.Vector3(-1.1, 0.116, 1.1),
          ]);
          layer.add(
            new T.LineLoop(
              ownGeometry(traces),
              ownMaterial(
                new T.LineBasicMaterial({
                  color: 0x657184,
                  transparent: true,
                  opacity: 0.55,
                }),
              ),
            ),
          );
        }
        // A single analytic contact shadow, drawn without a shadow-map render pass.
        const shadow = new T.Mesh(
          ownGeometry(new T.PlaneGeometry(6.5, 6.5)),
          ownMaterial(
            new T.ShaderMaterial({
              transparent: true,
              depthWrite: false,
              uniforms: {},
              vertexShader:
                "varying vec2 uvShadow; void main(){uvShadow=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
              fragmentShader:
                "varying vec2 uvShadow; void main(){float a=exp(-15.0*dot(uvShadow-.5,uvShadow-.5))*.5;gl_FragColor=vec4(0.,0.,0.,a);}",
            }),
          ),
        );
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.y = -1.65;
        scene.add(shadow);
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        let frame = 0,
          last = 0,
          time = 0,
          px = 0,
          py = 0,
          rx = 0,
          ry = 0,
          settle = 0,
          lost = false;
        const wake = () => {
          if (!disposed && !lost && visible && !document.hidden && !frame)
            frame = requestAnimationFrame(draw);
        };
        const draw = (now: number) => {
          frame = 0;
          if (disposed || lost || !visible || document.hidden) return;
          const interacting =
            Math.abs(px - rx) > 0.002 || Math.abs(py - ry) > 0.002;
          if (now - last < 1000 / (interacting ? 60 : 30)) {
            wake();
            return;
          }
          const dt = Math.min((now - last) / 1000, 0.05);
          last = now;
          const animated = controls.current.playing && !reduced.matches;
          if (animated) time += dt;
          rx += (px - rx) * 0.1;
          ry += (py - ry) * 0.1;
          assembly.rotation.y = reduced.matches
            ? 0
            : rx + Math.sin(time * 0.22) * 0.09;
          assembly.rotation.x = reduced.matches ? 0 : ry;
          let moving = false;
          layers.forEach((layer, i) => {
            const desired =
              (1 - i) * 0.94 + (controls.current.active === i ? 0.08 : 0);
            layer.position.y = reduced.matches
              ? desired
              : T.MathUtils.lerp(
                  layer.position.y,
                  desired + (animated ? Math.sin(time * 0.8 + i) * 0.035 : 0),
                  0.12,
                );
            moving ||= Math.abs(layer.position.y - desired) > 0.001;
            bands[i].emissiveIntensity =
              controls.current.active === i ? 0.65 : 0.12;
            baseMaterials[i].roughness =
              controls.current.active === i ? 0.3 : 0.42;
          });
          renderer.render(scene, camera);
          if (
            animated ||
            moving ||
            Math.abs(px - rx) > 0.001 ||
            Math.abs(py - ry) > 0.001 ||
            settle-- > 0
          )
            wake();
        };
        invalidate.current = () => {
          settle = 12;
          wake();
        };
        const resize = () => {
          const width = element.clientWidth,
            height = element.clientHeight;
          if (!width || !height) return;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          settle = 2;
          wake();
        };
        const ro = new ResizeObserver(resize);
        ro.observe(element);
        const pointer = (event: PointerEvent) => {
          if (reduced.matches || event.pointerType !== "mouse") return;
          const rect = element.getBoundingClientRect();
          px = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
          py = ((event.clientY - rect.top) / rect.height - 0.5) * 0.14;
          wake();
        };
        const leave = () => {
          px = py = 0;
          wake();
        };
        const visibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(frame);
            frame = 0;
          } else wake();
        };
        const contextLost = (event: Event) => {
          event.preventDefault();
          lost = true;
          cancelAnimationFrame(frame);
          frame = 0;
          setReady(false);
        };
        const motionChanged = () => {
          px = py = 0;
          settle = 2;
          wake();
        };
        element.addEventListener("pointermove", pointer);
        element.addEventListener("pointerleave", leave);
        document.addEventListener("visibilitychange", visibility);
        reduced.addEventListener("change", motionChanged);
        renderer.domElement.addEventListener("webglcontextlost", contextLost);
        teardown = () => {
          cancelAnimationFrame(frame);
          ro.disconnect();
          element.removeEventListener("pointermove", pointer);
          element.removeEventListener("pointerleave", leave);
          document.removeEventListener("visibilitychange", visibility);
          reduced.removeEventListener("change", motionChanged);
          renderer.domElement.removeEventListener(
            "webglcontextlost",
            contextLost,
          );
          scene.traverse((object) => {
            if (object instanceof T.InstancedMesh) object.dispose();
          });
          geometry.forEach((g) => g.dispose());
          materials.forEach((m) => m.dispose());
          renderer.dispose();
          renderer.forceContextLoss();
          renderer.domElement.remove();
          invalidate.current = () => {};
        };
        resize();
        setReady(true);
        wake();
      } catch {
        if (!disposed) setReady(false);
        teardown();
      }
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          void load();
          invalidate.current();
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(element);
    return () => {
      disposed = true;
      observer.disconnect();
      teardown();
    };
  }, []);
  return (
    <div
      ref={host}
      className={`architecture-3d ${compact ? "compact" : ""}`}
      data-ready={ready}
      role="img"
      aria-label="Three solid graphite architecture layers with beveled edges and blue status lights"
    >
      <div className="architecture-fallback" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span className="scene-axis mono" aria-hidden="true">
        X / Y / Z
      </span>
    </div>
  );
}
