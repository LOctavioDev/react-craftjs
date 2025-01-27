import { nanoid } from 'nanoid';
import create from 'zustand';
import { generateRandomStructure } from '../structureGenerator';

const generateInitialState = () => {
  const randomStructures = generateRandomStructure();
  return {
    texture: 'dirt',
    cubes: randomStructures,
  };
};

export const useStore = create((set) => ({
  ...generateInitialState(),
  addCube: (x, y, z) => {
    set((state) => ({
      cubes: [
        ...state.cubes,
        {
          id: nanoid(),
          texture: state.texture,
          pos: [x, y, z],
        },
      ],
    }));
  },
  removeCube: (id) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => cube.id !== id),
    }));
  },
  setTexture: (texture) => {
    set(() => ({ texture }));
  },
  saveWorld: () => {},
  resetWorld: () => {
    set(generateInitialState());
  },
}));
