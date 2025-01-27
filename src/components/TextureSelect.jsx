import { useStore } from '../hooks/useStore.js';
import * as images from '../images/images.js';
import { useKeyboard } from '../hooks/useKeyboard.js';
import { useEffect, useState } from 'react';

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore((state) => [state.texture, state.setTexture]);

  const { dirt, grass, glass, wood, log, briones } = useKeyboard();

  // Oculta el selector después de 1 segundo
  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 10000);

    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [texture]);

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
      briones,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log, briones]);

  // Orden de las texturas ACTIONS_KEYBOARD_MAP
  const textureOrder = ['briones', 'log', 'dirt', 'grass', 'glass', 'wood'];

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {textureOrder.map((textureName) => {
        const imgKey = `${textureName}Img`;
        const img = images[imgKey];

        return (
          <img
            className={texture === textureName ? 'selected' : ''}
            key={textureName}
            src={img}
            alt={textureName}
            onClick={() => setTexture(textureName)}
          />
        );
      })}
    </div>
  );
};