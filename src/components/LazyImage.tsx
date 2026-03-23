import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

/**
 * Componente de imagen con lazy loading nativo y fade-in
 * Usa Intersection Observer para cargar imágenes solo cuando son visibles
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholderSrc,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Cargar un poco antes de que sea visible
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder o skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse">
          {placeholderSrc && (
            <img
              src={placeholderSrc}
              alt=""
              className="w-full h-full object-cover blur-sm opacity-50"
            />
          )}
        </div>
      )}

      {/* Imagen real con lazy loading */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={handleLoad}
          onError={onError}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

/**
 * Hook para lazy loading de imágenes con Intersection Observer
 */
export function useLazyImage(src: string) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView, isLoaded, setIsLoaded };
}
