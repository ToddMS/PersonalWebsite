import React, { useState } from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import styles from './ImageSlider.module.css';

type ImageSliderProps = {
  mediaUrls: string[];
};

export function ImageSlider({ mediaUrls }: ImageSliderProps) {
  const [mediaIndex, setMediaIndex] = useState(0);

  function showNextMedia() {
    setMediaIndex((index) => (index === mediaUrls.length - 1 ? 0 : index + 1));
  }

  function showPrevMedia() {
    setMediaIndex((index) => (index === 0 ? mediaUrls.length - 1 : index - 1));
  }

  return (
    <div className={styles.projectMediaContainer}>
      <div
        className={styles.mediaSideBySide}
        style={{ transform: `translateX(-${mediaIndex * 100}%)` }}
      >
        {mediaUrls.map((url, index) => {
          const isVideo = url.endsWith('.mp4');

          return isVideo ? (
            <video
              key={url}
              src={url}
              controls
              autoPlay
              loop
              className={styles.mediaSliderMedia}
            />
          ) : (
            <img
              key={url}
              src={url}
              alt={`Slide ${index + 1}`}
              className={styles.mediaSliderMedia}
            />
          );
        })}
      </div>

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
