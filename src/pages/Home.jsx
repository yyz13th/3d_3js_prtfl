import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/loader/loader.component'
import Island from '../models/island.model'

const Home = () => {

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, islandRotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      {/* <div className='absolute top-20 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

      <Canvas 
        className='w-full h-screen bg-transparent' 
        camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}> {/* Loader component is showing while models loading*/}
          <directionalLight />
          <ambientLight />
            <Island 
              scale = {islandScale} 
              position = {islandPosition}
              rotation = {islandRotation}
            />
          </Suspense>

      </Canvas>
    </section>
  )
}

export default Home