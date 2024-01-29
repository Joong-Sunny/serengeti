import Map from '@/components/THREE/Map';
import { Box, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useScrollDrivenCameraMovement } from '@/hooks/use-scroll-driven-camera-movement.ts';
import Character from '@/components/THREE/Character';
import { useScrollDrivenCharacterMovement } from '@/hooks/use-scroll-driven-character-movement.ts';
import { useCharacterRotation } from '@/hooks/use-character-rotation.ts';
import sectionRatioStore from '@/store/sectionRatio.store.ts';
import InformationBoard from './InformationBoard';
import CameraSetting from './CameraSetting';
import { SpotLight, DirectionalLightLookingAtOrigin } from './Light';

const Scene = () => {
  const { sectionRatio } = sectionRatioStore;
  useScrollDrivenCameraMovement({ sectionRatio });
  const { characterPosition } = useScrollDrivenCharacterMovement({ sectionRatio });
  const characterRotation = useCharacterRotation(characterPosition);

  return (
    <Canvas shadows flat style={canvasStyle}>
      <PerspectiveCamera makeDefault />
      <CameraSetting />
      {/*<OrbitControls />*/}
      <Character position={characterPosition} rotation={characterRotation} />
      <InformationBoard />
      <ambientLight intensity={0.7} />
      <SpotLight
        position={[characterPosition.x + 3, characterPosition.y + 18, characterPosition.z + 3]}
        lookAt={characterPosition}
        color="#e35ce8"
      />
      <SpotLight
        position={[characterPosition.x - 3, characterPosition.y + 18, characterPosition.z - 3]}
        lookAt={characterPosition}
        color="#8ed1ee"
      />
      <SpotLight
        position={[characterPosition.x + 3, characterPosition.y + 18, characterPosition.z - 3]}
        lookAt={characterPosition}
        color="#a2ed51"
      />
      <SpotLight
        position={[characterPosition.x - 3, characterPosition.y + 18, characterPosition.z + 3]}
        lookAt={characterPosition}
        color="#a2ed51"
      />
      <DirectionalLightLookingAtOrigin position={[-35, 50, 175]} lookAt={characterPosition} />
      {/*<DirectionalLightLookingAtOrigin position={[25, -10, 150]} lookAt={characterPosition} />*/}
      {/*<DirectionalLightLookingAtOrigin position={[25, -10, 50]} lookAt={characterPosition} />*/}
      <Box args={[30, 30, 30]} position={[0, -20, 0]} receiveShadow>
        <meshStandardMaterial color="#ffffff" />
      </Box>
      {/*<Box args={[10, 10, 10]} position={[characterPosition.x, characterPosition.y, characterPosition.z]}>*/}
      {/*  <meshStandardMaterial color="#ffffff" />*/}
      {/*</Box>*/}
      <Map />
    </Canvas>
  );
};
export default Scene;

const canvasStyle: React.CSSProperties = {
  zIndex: 1,
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  backgroundColor: '#B8F5AE',
};
