"use client";
import { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const Video = ({ videoRef, id, imgUrl, videoData }) => {
  useEffect(() => {
    const videoHandler = (val) => setPlayVideo(val);

    document
      ?.getElementById(id)
      ?.addEventListener("ended", () => videoHandler(true), false);

    document
      ?.getElementById(id)
      ?.addEventListener("pause", () => videoHandler(true), false);
  }, [id]);

  const [playVideo, setPlayVideo] = useState(true);
  const [buttonState, setButtonState] = useState(true);

  const handlePlay = (mainVideoRef, videoData) => {
    const otherVideoRefs = [];

    videoData?.forEach(({ refs }) => {
      if (refs !== mainVideoRef) {
        otherVideoRefs?.push(refs);
      }
    });

    mainVideoRef?.current?.play();
    otherVideoRefs?.forEach((videoRef) => {
      videoRef?.current?.pause();
    });

    setPlayVideo(false);
  };

  const handlePause = (ref) => {
    ref?.current?.pause();
    setPlayVideo(true);
  };

  return (
    <div
      className="video-box"
      onMouseEnter={() => setButtonState(true)}
      onMouseLeave={() => setButtonState(false)}
    >
      {playVideo && (
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          src="/assets/filter.png"
          alt="filter"
        />
      )}

      <video
        id={id}
        ref={videoRef}
        style={{ width: "100%" }}
        preload="metadata"
      >
        <source src={`${imgUrl}#t=0.001`} type="video/mp4" />
      </video>
      <div
        className="play-wrapper"
        style={{
          opacity: playVideo ? 1 : buttonState ? 1 : 0,
          zIndex: 1,
        }}
        onMouseEnter={() => setButtonState(true)}
        onMouseLeave={() => setButtonState(false)}
      >
        <img
          className="panda-image"
          onClick={() => {
            playVideo ? handlePlay(videoRef, videoData) : handlePause(videoRef);
          }}
          src={playVideo ? "/assets/play.svg" : "/assets/pause.png"}
          alt="play"
        />
      </div>
    </div>
  );
};

const VideoGuide = () => {
  const videoRef = useRef(null);

  const videoData = [
    {
      id: 1,
      imgUrl: "/video.mp4",
      refs: videoRef,
    },
  ];

  return (
    <>
      <div className="video-wrapper">
        <div className="video-container">
          {videoData.map(({ imgUrl, id, refs }) => (
            <Video
              key={id}
              videoRef={refs}
              id={id}
              imgUrl={imgUrl}
              videoData={videoData}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default VideoGuide;
