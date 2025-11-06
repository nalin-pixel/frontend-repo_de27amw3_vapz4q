import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms for subtle depth as user scrolls
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#0a0a0f]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and glow layers */}
      <motion.div
        style={{ y: y1, opacity }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/40 to-[#0a0a0f]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,_rgba(120,119,255,0.35),_transparent)] blur-2xl"/>
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,_rgba(0,255,199,0.25),_transparent)] blur-2xl"/>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
          <span className="text-xs font-medium tracking-widest text-emerald-300/90">LAUNCHING THE FUTURE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Your Startup. Supercharged.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          A premium, cyber-futuristic experience that blends 3D motion, parallax, and storytelling as you scroll.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-7 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.45)]"
          >
            <span className="relative z-10">Explore the vision</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-0.5">→</span>
            <span className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(200px_200px_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.25),_transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
