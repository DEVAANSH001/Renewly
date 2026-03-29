import React, { useEffect, useRef, memo } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  src: string;
  className?: string;
  opacity?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className, opacity = 0.3 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxBufferLength: 30,
        enableWorker: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("Video play failed", e));
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari native HLS support
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.error("Video play failed", e));
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        muted
        loop
        playsInline
        style={{ opacity }}
      />
    </div>
  );
};

export default memo(VideoPlayer);
