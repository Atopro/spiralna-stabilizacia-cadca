import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { WordPullUp } from './ui/word-pull-up';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Preload video metadata
      video.load();
      
      // Set optimal playback settings
      video.playbackRate = 1.0;
      
      // Handle video loading
      const handleLoadedData = () => {
        setIsLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);


  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden mt-16 md:mt-20">
      <div className="absolute inset-0 bg-gray-900">
        {/* Video Loading Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-teal"></div>
          </div>
        )}
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            // Hardware acceleration for smoother playback without zoom
            transform: 'translateZ(0) scale(1)',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            objectFit: 'contain'
          }}
          onLoadedData={() => setIsLoaded(true)}
          onError={(e) => {
            console.error('Video loading error:', e);
            setIsLoaded(true); // Show fallback even on error
          }}
        >
          <source src="https://smsystem.b-cdn.net/videos/sm-system-hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center">
            <p className="text-white text-xl">Your browser does not support video playback.</p>
          </div>
        </video>
      </div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="space-y-2">
            <WordPullUp
              words={t('hero.title1')}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            />
            <WordPullUp
              words={t('hero.title2')}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            />
          </div>
          <div className="mt-12">
            <WordPullUp
              words={t('hero.subtitle')}
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-[90%] mx-auto"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;