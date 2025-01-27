import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { FPV } from './components/FPV';
import { Player } from './components/Player';

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 100]} />
        <ambientLight />
        <FPV />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>
  );
}

export default App;
