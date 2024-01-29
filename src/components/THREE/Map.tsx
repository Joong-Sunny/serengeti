import { useGLTFLoader } from '@/hooks/use-loader';
import * as THREE from 'three';

function Map() {
  const { scene } = useGLTFLoader('/models/free_low_poly_forest.glb');

  scene.traverse(child => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;

      if (material.isMeshStandardMaterial) {
        material.roughness = 1.5;
        material.metalness = 0.0;
      }
    }
  });

  return <primitive object={scene} />;
}
export default Map;
