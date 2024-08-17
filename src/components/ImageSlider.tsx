import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import "../index.css";

type ImageSliderProps = {
  mediaUrls: string[]; 
};

export function ImageSlider({ mediaUrls }: ImageSliderProps) {
  const [mediaIndex, setMediaIndex] = useState(0);

  function showNextMedia() {
    setMediaIndex(index => (index === mediaUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevMedia() {
    setMediaIndex(index => (index === 0 ? mediaUrls.length - 1 : index - 1));
  }

  const currentMediaUrl = mediaUrls[mediaIndex];
  const isVideo = currentMediaUrl.endsWith('.mp4');

  return (
    <div className="project-media-container">
      {isVideo ? (
        <video
          src={currentMediaUrl}
          controls
          autoPlay
          loop
          className="media-slider-media"
        />
      ) : (
        <img
          src={currentMediaUrl}
          alt={`Slide ${mediaIndex + 1}`}
          className="media-slider-media"
        />
      )}
      <div className="media-slider-btn-container">
        <button onClick={showPrevMedia} className="media-slider-btn">
          <ArrowBigLeft />
        </button>
        <button onClick={showNextMedia} className="media-slider-btn">
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
