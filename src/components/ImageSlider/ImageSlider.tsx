import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import styles from './ImageSlider.module.css';

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
    <div className={styles.projectMediaContainer}>
      {isVideo ? (
        <video
          src={currentMediaUrl}
          controls
          autoPlay
          loop
          className={styles.mediaSliderMedia}
        />
      ) : (
        <img
          src={currentMediaUrl}
          alt={`Slide ${mediaIndex + 1}`}
          className={styles.mediaSliderMedia}
        />
      )}
      <div className={styles.mediaSliderBtnContainer}>
        <button onClick={showPrevMedia} className={styles.mediaSliderBtn}>
          <ArrowBigLeft />
        </button>
        <button onClick={showNextMedia} className={styles.mediaSliderBtn}>
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
