 
 import { useRef } from 'react'
import vd from './assets/vd.mp4'


function Playingandpausing() {

    const paushPlay = useRef()

    const Play = () =>
    {
        
        paushPlay.current.play()
    }

      const Pause = () => {
        paushPlay.current.pause();
      };

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      <video
        ref={paushPlay}
        src={vd}
        controls
        className="w-full max-w-md border border-gray-300 rounded shadow"
      />
      <div className="flex space-x-4">
        <button
          onClick={Play}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Play
        </button>
        <button
          onClick={Pause}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default Playingandpausing
