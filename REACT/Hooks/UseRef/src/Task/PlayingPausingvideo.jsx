import React, { useRef } from "react";
import vd from '../assets/vd.mp4'

const PlayingPausingvideo = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
      videoRef.current.play();
    
  };

  const PauseVideo = ()=>
  {
    videoRef.current.pause()
  }

  return (
    <div className="flex flex-col items-center p-5  ">

      <video ref={videoRef} controls width="600">
        <source src={vd} type="video/mp4" />
      </video>
      <div className="p-4   ">
        <button className="p-1 px-4 rounded-full bg-black hover:bg-blue-500/40 hover:text-black duration-500 text-white" onClick={playVideo}>Play</button>
        <button  className="p-1 px-4 rounded-full bg-black hover:bg-blue-500/40 hover:text-black duration-500 text-white ml-2"  onClick={PauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default PlayingPausingvideo;
