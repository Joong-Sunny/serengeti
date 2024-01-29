import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';

type DirectionalLightProps = {
  position: [number, number, number];
  lookAt: THREE.Vector3;
  color?: string;
};

export const DirectionalLightLookingAtOrigin = ({ position, lookAt, color = '#ffffff' }: DirectionalLightProps) => {
  const light = new THREE.DirectionalLight(color, 0.7);
  light.position.set(...position);
  light.castShadow = true;
  light.shadow.bias = -0.0001;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.left = -50;
  light.shadow.camera.right = 50;
  light.shadow.camera.top = 50;
  light.shadow.camera.bottom = -50;

  // 원점을 바라보도록 설정
  light.target.position.set(lookAt.x, lookAt.y, lookAt.z);
  // light.target(Character)

  return <primitive object={light} />;
};

export const SpotLight = ({ position, lookAt, color = '#ffffff' }: DirectionalLightProps) => {
  const spotLightRef = useRef<THREE.SpotLight>(null);
  // const spotLightHelperRef = useRef<THREE.SpotLightHelper | null>(null);
  const { scene } = useThree();

  useEffect(() => {
    if (spotLightRef.current) {
      // spotLightRef.current.lookAt(lookAt);
      spotLightRef.current.target.position.set(lookAt.x, lookAt.y, lookAt.z);

      // SpotLightHelper 생성 및 씬에 추가
      const helper = new THREE.SpotLightHelper(spotLightRef.current);
      scene.add(helper);

      // 컴포넌트가 언마운트될 때 Helper를 씬에서 제거
      return () => {
        scene.remove(helper);
      };
    }
  }, [lookAt, scene]);

  return (
    <spotLight
      ref={spotLightRef}
      args={[color, 40]}
      angle={Math.PI / 10} // 예시로, 30도를 라디안으로 변환한 값
      penumbra={0.2}
      position={position}
      castShadow
      shadow-bias={-0.0001}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  );
};
