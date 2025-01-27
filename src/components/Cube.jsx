import { useStore } from '../hooks/useStore.js';
import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import * as textures from '../images/textures.js';

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [removeCube, addCube] = useStore((state) => [state.removeCube, state.addCube]);

  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textures[texture + 'Texture'];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();

        if (e.button === 0) {
          removeCube(id);
        } else if (e.button === 2) {
          const [x, y, z] = position;
          addCube(x, y + 1, z);
        }
      }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? 'grey' : 'white'}
        transparent
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};
