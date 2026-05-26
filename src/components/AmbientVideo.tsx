import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster: string;
  alt?: string;
  className?: string;
  overlayClassName?: string;
}

/**
 * Lazy-loaded ambient background video.
 * - Uses IntersectionObserver to defer loading until visible.
 * - Falls back to the poster image if `src` is empty or fails.
 * - Video file MUST be hosted on an external CDN (Cloudinary, etc.) — never bundled.
 */
export function AmbientVideo({ src, poster, alt = "", className = "", overlayClassName = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src || !ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [src]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={poster}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {show && src && !failed && (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
}
