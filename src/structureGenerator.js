import { nanoid } from 'nanoid';

export const generateRandomStructure = () => {
  const structure = [];
  const size = 3; 
  const offset = 5; 

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        if (Math.random() > 0.5) {
          structure.push({
            id: nanoid(),
            pos: [x + offset, y + offset, z + offset],
            texture: Math.random() > 0.5 ? 'dirt' : 'log', 
          });
        }
      }
    }
  }

  return structure;
};