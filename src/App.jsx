import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground.jsx';
import { FPV as Fpv } from './components/FPV.jsx';
import { Player } from './components/Player.jsx';
import { Cubes } from './components/Cubes.jsx';
import { TextureSelector } from './components/TextureSelect.jsx';
import backgroundMusic from './assets/c418.mp3';
import { useState } from 'react';

function App() {
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />

        <Physics>
          <Cubes />
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className="pointer">+</div>
      <TextureSelector />
      <audio
        src={backgroundMusic}
        autoPlay
        loop
        volume={volume}
        muted={!isPlaying}
      />
      <div className="volume-control">
        <label htmlFor="volume">Volume: </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={toggleMusic}>{isPlaying ? 'Mute' : 'Unmute'}</button>
      </div>
    </>
  );
}

export default App;
