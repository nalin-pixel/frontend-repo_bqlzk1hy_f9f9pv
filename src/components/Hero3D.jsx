import React from 'react';
import Spline from '@splinetool/react-spline';
import { Heart } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1O0PjQyAFQx2i9sV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-200/20 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
          <Heart className="h-4 w-4 text-rose-600" />
          <span className="text-xs font-medium tracking-wide text-rose-700">You are cordially invited</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-rose-700">
          Aditi
          <span className="mx-3 inline-block align-middle text-rose-400">&amp;</span>
          Arjun
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700 max-w-xl">
          Join us as we celebrate our wedding with love, laughter, and blessings.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/80 px-5 py-3 shadow backdrop-blur">
          <span className="text-sm font-semibold text-rose-700">Sunday, 14 December 2025</span>
          <span className="text-neutral-400">•</span>
          <span className="text-sm text-neutral-700">Jaipur, Rajasthan</span>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
