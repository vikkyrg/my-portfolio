import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createRef, useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { Line } from "@react-three/drei";
import { Vector3 } from "three";

const LABELS = [
  {
    id: "react",
    text: "React.js",
    className: "px-2 py-0.5 rounded-md bg-[#00f3ff]/10 border border-[#00f3ff]/30 text-[#00f3ff] text-[10px] font-bold font-mono whitespace-nowrap shadow-[0_0_8px_rgba(0,243,255,0.2)] select-none"
  },
  {
    id: "mongodb",
    text: "MongoDB",
    className: "px-2 py-0.5 rounded-md bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-[10px] font-bold font-mono whitespace-nowrap shadow-[0_0_8px_rgba(16,185,129,0.2)] select-none"
  },
  {
    id: "nodejs",
    text: "Node.js",
    className: "px-2 py-0.5 rounded-md bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[10px] font-bold font-mono whitespace-nowrap shadow-[0_0_8px_rgba(34,197,94,0.2)] select-none"
  },
  {
    id: "express",
    text: "Express.js",
    className: "px-2 py-0.5 rounded-md bg-[#ec4899]/10 border border-[#ec4899]/30 text-[#ec4899] text-[10px] font-bold font-mono whitespace-nowrap shadow-[0_0_8px_rgba(236,72,153,0.2)] select-none"
  },
  ...[
    "GET /api/projects",
    "POST /api/contact",
    "mongoose.connect()",
    "express.Router()",
    "useState()",
    "useEffect()",
    "STATUS: 200 OK"
  ].map((text, index) => ({
    id: `floating-${index}`,
    text,
    className: "text-[#a78bfa]/50 font-mono text-[9px] sm:text-[10px] whitespace-nowrap select-none bg-[#a78bfa]/5 px-2 py-0.5 rounded border border-[#a78bfa]/15 shadow-xs"
  }))
];

function ProjectedLabel({ labelRef, position, distanceFactor = 6 }) {
  const groupRef = useRef(null);
  const { camera, size } = useThree();
  const worldPosition = useMemo(() => new Vector3(), []);
  const cameraPosition = useMemo(() => new Vector3(), []);
  const cameraDirection = useMemo(() => new Vector3(), []);

  useFrame(() => {
    const group = groupRef.current;
    const element = labelRef.current;
    if (!group || !element) return;

    group.getWorldPosition(worldPosition);
    camera.getWorldPosition(cameraPosition);
    camera.getWorldDirection(cameraDirection);

    const directionX = worldPosition.x - cameraPosition.x;
    const directionY = worldPosition.y - cameraPosition.y;
    const directionZ = worldPosition.z - cameraPosition.z;
    if (
      directionX * cameraDirection.x +
      directionY * cameraDirection.y +
      directionZ * cameraDirection.z <= 0
    ) {
      element.style.visibility = "hidden";
      return;
    }

    const distance = worldPosition.distanceTo(cameraPosition);
    worldPosition.project(camera);
    const x = worldPosition.x * size.width / 2 + size.width / 2;
    const y = -worldPosition.y * size.height / 2 + size.height / 2;
    const scale = camera.isOrthographicCamera
      ? camera.zoom
      : 1 / (2 * Math.tan(camera.fov * Math.PI / 360) * distance);

    element.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale * distanceFactor})`;
    element.style.visibility = "visible";
  });

  return <group ref={groupRef} position={position} />;
}

// Animated Data Packet traveling between nodes
const DataPacket = ({ start, end, color, speed, delay = 0 }) => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = ((state.clock.getElapsedTime() * speed) + delay) % 1;

    // Smooth easing function for realistic data flow
    const easeT = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const x = start[0] + (end[0] - start[0]) * easeT;
    const y = start[1] + (end[1] - start[1]) * easeT;
    const z = start[2] + (end[2] - start[2]) * easeT;

    meshRef.current.position.set(x, y, z);
    // Pulse size
    const scale = 1 + Math.sin(t * Math.PI * 4) * 0.3;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

// Sub-component: 3D React Atom Node
const ReactNode = ({ position, labelRef }) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.1;
  });

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]}>
      {/* Central Sphere */}
      <mesh>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.8} roughness={0.1} />
      </mesh>

      {/* Orbit 1 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[0.65, 0.015, 8, 48]} />
        <meshBasicMaterial color="#00f3ff" transparent opacity={0.6} />
      </mesh>

      {/* Orbit 2 */}
      <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[0.65, 0.015, 8, 48]} />
        <meshBasicMaterial color="#00f3ff" transparent opacity={0.6} />
      </mesh>

      {/* Orbit 3 */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.65, 0.015, 8, 48]} />
        <meshBasicMaterial color="#00f3ff" transparent opacity={0.6} />
      </mesh>

      <ProjectedLabel labelRef={labelRef} position={[0, 0.8, 0]} />
    </group>
  );
};

// Sub-component: 3D MongoDB Stack Node
const MongoNode = ({ position, labelRef }) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.cos(t * 1.2) * 0.08;
  });

  const stackMaterial = (
    <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.6} roughness={0.2} metalness={0.8} />
  );

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]}>
      {/* Stack Cylinder 1 */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
        {stackMaterial}
      </mesh>
      {/* Stack Cylinder 2 */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
        {stackMaterial}
      </mesh>
      {/* Stack Cylinder 3 */}
      <mesh position={[0, -0.04, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.08, 16]} />
        {stackMaterial}
      </mesh>

      <ProjectedLabel labelRef={labelRef} position={[0, 0.8, 0]} />
    </group>
  );
};

// Sub-component: 3D Node.js Node with satellites
const NodeJsNode = ({ position, labelRef }) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.sin(t * 1.0) * 0.08;
    groupRef.current.rotation.y = t * 0.4;
  });

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]}>
      {/* Central Node */}
      <mesh>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.7} roughness={0.1} />
      </mesh>

      {/* Satellite 1 */}
      <mesh position={[0.4, 0.2, 0.1]}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#4ade80" />
      </mesh>

      {/* Satellite 2 */}
      <mesh position={[-0.3, -0.3, -0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#4ade80" />
      </mesh>

      {/* Connection link to satellite */}
      <Line points={[[0, 0, 0], [0.4, 0.2, 0.1]]} color="#4ade80" lineWidth={0.8} transparent opacity={0.5} />
      <Line points={[[0, 0, 0], [-0.3, -0.3, -0.2]]} color="#4ade80" lineWidth={0.8} transparent opacity={0.5} />

      <ProjectedLabel labelRef={labelRef} position={[0, 0.8, 0]} />
    </group>
  );
};

// Sub-component: 3D Express.js Node
const ExpressNode = ({ position, labelRef }) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = position[1] + Math.cos(t * 1.4) * 0.09;
    groupRef.current.rotation.x = t * 0.5;
  });

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]}>
      <mesh>
        <dodecahedronGeometry args={[0.2]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} roughness={0.2} />
      </mesh>

      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[0.38, 0.012, 8, 32]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
      </mesh>

      <ProjectedLabel labelRef={labelRef} position={[0, 0.8, 0]} />
    </group>
  );
};

// Floating Code snippets particles as HTML badges
const FloatingText = ({ position, speed, range, labelRef: projectedLabelRef }) => {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    groupRef.current.position.y = position[1] + Math.sin(t) * range;
  });

  return (
    <group ref={groupRef} position={position}>
      <ProjectedLabel labelRef={projectedLabelRef} />
    </group>
  );
};

// Main constellation coordinator
const MernConstellation = ({ isMobile, labelRefs }) => {
  const constellationRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Positions of main MERN nodes inside the group
  const reactPos = [0, 1.2, 0];
  const mongoPos = [1.5, -0.6, 0.2];
  const nodePos = [-1.5, -0.6, -0.2];
  const expressPos = [0, -1.8, 0];

  // Scroll mapping path (translates group position/scale from section to section)
  const xCoords = isMobile
    ? [0, 0, 0, 0, 0, 0]
    : [0, 2.0, -2.0, 1.8, -1.5, 0];

  const yCoords = isMobile
    ? [0.2, -0.6, 0.6, -0.2, 0.4, 0.2]
    : [0.2, -0.2, 0.3, 0.2, -0.4, 0.2];

  const zCoords = isMobile
    ? [-1.8, -2.6, -2.8, -2.4, -2.0, -1.8]
    : [0, -0.8, -1.0, -0.6, -0.8, 0];

  const scales = isMobile
    ? [0.9, 0.7, 0.65, 0.7, 0.65, 0.9]
    : [1.3, 1.1, 0.95, 1.1, 0.9, 1.2];

  const scrollSteps = [0, 0.22, 0.42, 0.65, 0.82, 1.0];

  const rawX = useTransform(scrollYProgress, scrollSteps, xCoords);
  const rawY = useTransform(scrollYProgress, scrollSteps, yCoords);
  const rawZ = useTransform(scrollYProgress, scrollSteps, zCoords);
  const rawScale = useTransform(scrollYProgress, scrollSteps, scales);

  // Auto spin
  const rawRx = useTransform(scrollYProgress, scrollSteps, [0, 0.8, 1.6, 2.4, 3.2, 6.28]);
  const rawRy = useTransform(scrollYProgress, scrollSteps, [0, 1.2, 2.4, 1.0, 2.0, 6.28]);

  const springConfig = { stiffness: 50, damping: 20, mass: 1 };

  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);
  const springZ = useSpring(rawZ, springConfig);
  const springScale = useSpring(rawScale, springConfig);

  const springRx = useSpring(rawRx, springConfig);
  const springRy = useSpring(rawRy, springConfig);

  useFrame((state) => {
    if (!constellationRef.current) return;

    const t = state.clock.getElapsedTime();
    const autoRotateY = t * 0.15; // Faster auto-rotation
    const floatY = Math.sin(t * 0.6) * 0.25; // Dramatic vertical floating
    const floatX = Math.cos(t * 0.4) * 0.2; // Horizontal sway
    const pulseScale = Math.sin(t * 2) * 0.03; // Gentle breathing effect

    // Read spring values safely to avoid NaN-corruption crashes in ThreeJS matrix calculations
    const x = springX.get();
    const y = springY.get();
    const z = springZ.get();
    const rx = springRx.get();
    const ry = springRy.get();
    const scaleVal = springScale.get();

    // Check if values are valid numbers
    const validX = (typeof x === "number" && !isNaN(x)) ? x : 0;
    const validY = (typeof y === "number" && !isNaN(y)) ? y : 0;
    const validZ = (typeof z === "number" && !isNaN(z)) ? z : 0;
    const validRx = (typeof rx === "number" && !isNaN(rx)) ? rx : 0;
    const validRy = (typeof ry === "number" && !isNaN(ry)) ? ry : 0;
    const validScale = (typeof scaleVal === "number" && !isNaN(scaleVal)) ? scaleVal : 1;

    // Apply scroll springs + dynamic ambient animations
    constellationRef.current.position.x = validX + floatX;
    constellationRef.current.position.y = validY + floatY;
    constellationRef.current.position.z = validZ + Math.sin(t * 0.3) * 0.2;

    constellationRef.current.rotation.x = validRx + Math.sin(t * 0.2) * 0.1;
    constellationRef.current.rotation.y = validRy + autoRotateY;
    constellationRef.current.rotation.z = Math.cos(t * 0.15) * 0.1;

    constellationRef.current.scale.setScalar(validScale + pulseScale);
  });

  return (
    <group ref={constellationRef}>
      {/* 3D Nodes */}
      <ReactNode position={reactPos} labelRef={labelRefs[0]} />
      <MongoNode position={mongoPos} labelRef={labelRefs[1]} />
      <NodeJsNode position={nodePos} labelRef={labelRefs[2]} />
      <ExpressNode position={expressPos} labelRef={labelRefs[3]} />

      {/* Constellation Link Lines representing network routes / API calls */}
      <Line points={[reactPos, mongoPos]} color="#00f3ff" lineWidth={1} transparent opacity={0.3} />
      <Line points={[reactPos, nodePos]} color="#00f3ff" lineWidth={1} transparent opacity={0.3} />
      <Line points={[nodePos, expressPos]} color="#22c55e" lineWidth={1} transparent opacity={0.3} />
      <Line points={[mongoPos, expressPos]} color="#10b981" lineWidth={1} transparent opacity={0.3} />
      <Line points={[reactPos, expressPos]} color="#a78bfa" lineWidth={0.7} dashed dashScale={1.5} transparent opacity={0.25} />
      <Line points={[nodePos, mongoPos]} color="#a78bfa" lineWidth={0.7} dashed dashScale={1.5} transparent opacity={0.25} />

      {/* Ambient Data Packets Traveling on Lines */}
      <DataPacket start={reactPos} end={mongoPos} color="#00f3ff" speed={0.2} delay={0} />
      <DataPacket start={mongoPos} end={reactPos} color="#10b981" speed={0.2} delay={0.5} />

      <DataPacket start={reactPos} end={nodePos} color="#00f3ff" speed={0.25} delay={0.2} />
      <DataPacket start={nodePos} end={expressPos} color="#22c55e" speed={0.3} delay={0.1} />

      <DataPacket start={expressPos} end={mongoPos} color="#ec4899" speed={0.22} delay={0.3} />
      <DataPacket start={mongoPos} end={expressPos} color="#10b981" speed={0.22} delay={0.8} />

      <DataPacket start={reactPos} end={expressPos} color="#a78bfa" speed={0.15} delay={0.4} />
      <DataPacket start={nodePos} end={mongoPos} color="#22c55e" speed={0.18} delay={0.7} />

      {/* Floating API / Code Labels */}
      <FloatingText position={[-2.2, 0.5, 0.5]} speed={0.9} range={0.15} labelRef={labelRefs[4]} />
      <FloatingText position={[2.2, 0.5, -0.5]} speed={0.7} range={0.2} labelRef={labelRefs[5]} />
      <FloatingText position={[2.0, -1.5, 0.3]} speed={0.8} range={0.12} labelRef={labelRefs[6]} />
      <FloatingText position={[-1.9, -1.6, -0.3]} speed={0.6} range={0.18} labelRef={labelRefs[7]} />
      <FloatingText position={[-0.8, 1.9, 0.4]} speed={1.1} range={0.15} labelRef={labelRefs[8]} />
      <FloatingText position={[0.8, 1.9, -0.4]} speed={1.0} range={0.1} labelRef={labelRefs[9]} />
      <FloatingText position={[0, -2.6, 0.2]} speed={0.5} range={0.1} labelRef={labelRefs[10]} />
    </group>
  );
};

export const ThreeDCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const labelRefs = useMemo(() => LABELS.map(() => createRef()), []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />

        {/* Lights setup to accent the neon nodes */}
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#00f3ff" />
        <directionalLight position={[-5, -8, 5]} intensity={1.2} color="#ec4899" />
        <pointLight position={[0, 4, -3]} intensity={2.0} color="#10b981" />
        <pointLight position={[0, -4, 3]} intensity={2.0} color="#8b5cf6" />

        {/* MERN Constellation */}
        <MernConstellation isMobile={isMobile} labelRefs={labelRefs} />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {LABELS.map((label, index) => (
          <div
            key={label.id}
            ref={labelRefs[index]}
            className="absolute top-0 left-0"
            style={{ transformOrigin: "0 0", visibility: "hidden" }}
          >
            <div className={label.className} style={{ transform: "translate3d(-50%, -50%, 0)" }}>
              {label.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCanvas;

