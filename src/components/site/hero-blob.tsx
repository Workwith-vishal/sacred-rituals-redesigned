import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Subtle abstract oil-droplet form. One mesh, one custom shader,
 * low segment count — reacts gently to pointer and scroll.
 */
const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uPointer;
  uniform float uScroll;
  varying float vRim;
  varying vec3 vNormalW;

  void main() {
    vec3 p = position;
    float wave =
      sin(p.x * 2.0 + uTime * 0.5) * 0.10 +
      sin(p.y * 2.6 - uTime * 0.42) * 0.09 +
      sin(p.z * 2.2 + uTime * 0.33) * 0.08;
    p += normal * (wave * (0.55 + uPointer * 0.5) + uScroll * 0.12);
    vNormalW = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vRim = 1.0 - abs(dot(normalize(vNormalW), normalize(-mv.xyz)));
    gl_Position = projectionMatrix * mv;
  }
`;

const fragment = /* glsl */ `
  precision mediump float;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vRim;
  varying vec3 vNormalW;

  void main() {
    float light = clamp(dot(normalize(vNormalW), normalize(vec3(0.4, 0.8, 0.6))), 0.0, 1.0);
    vec3 base = mix(uColorA, uColorB, light);
    base += pow(vRim, 2.2) * 0.55;
    gl_FragColor = vec4(base, 0.86 * (0.35 + pow(vRim, 1.4)));
  }
`;

function Droplet() {
  const mesh = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const pointer = useRef(0);
  const target = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: 0 },
      uScroll: { value: 0 },
      uColorA: { value: new THREE.Color("#8a4a24") },
      uColorB: { value: new THREE.Color("#e8c9a0") },
    }),
    [],
  );

  useFrame((state, delta) => {
    const p = state.pointer;
    target.current = Math.min(1, Math.hypot(p.x, p.y));
    pointer.current += (target.current - pointer.current) * Math.min(1, delta * 3);
    uniforms.uTime.value += delta;
    uniforms.uPointer.value = pointer.current;
    uniforms.uScroll.value =
      typeof window !== "undefined" ? Math.min(1, window.scrollY / (size.height || 800)) : 0;
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.09;
      mesh.current.rotation.x = p.y * 0.18;
      mesh.current.position.x = p.x * 0.22;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[1.35, 64, 48]} />
      <shaderMaterial
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroBlob() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 4], fov: 42 }}
      style={{ pointerEvents: "none" }}
    >
      <Droplet />
    </Canvas>
  );
}
