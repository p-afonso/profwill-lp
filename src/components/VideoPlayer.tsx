import { useState, useRef, useEffect } from 'react';
import type React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16/9' | '9/16';
  className?: string;
  showOverlay?: boolean;
}

export default function VideoPlayer({
  videoId,
  title = 'Video',
  aspectRatio = '16/9',
  className = '',
  showOverlay = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === 'onReady') {
          setIsLoading(false);
          iframe.contentWindow?.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'playVideo',
              args: [],
            }),
            '*'
          );
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=0`;

  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative overflow-hidden bg-black rounded-2xl ${
          aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        {!isPlaying ? (
          <>
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            {showOverlay && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="bg-[#C67A30]/90 backdrop-blur rounded-full p-8 hover:bg-[#C67A30] transition-all hover:scale-110 group"
                  aria-label="Play video"
                >
                  <Play className="w-16 h-16 text-white fill-white" />
                </button>
              </div>
            )}
            {!showOverlay && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 w-full h-full cursor-pointer"
                aria-label="Play video"
              />
            )}
          </>
        ) : (
          <>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#C67A30] border-t-transparent"></div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </>
        )}
      </div>
    </div>
  );
}
