import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'Neon Grid Commerce',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Hologram Analytics',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Quantum Dashboard',
    img: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aurora UI System',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
];

function useFollowPointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return { x: springX, y: springY };
}

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { x, y } = useFollowPointer();

  return (
    <section id="showcase" className="relative w-full bg-[#05050a] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Selected work
          </h2>
        </motion.div>

        {/* Horizontal scroll-like carousel */}
        <div ref={ref} className="relative">
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none]"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-72 w-[22rem] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 hidden md:block" aria-hidden>
                  <motion.div
                    className="absolute h-64 w-64 rounded-full bg-[radial-gradient(closest-side,_rgba(99,102,241,0.25),_transparent)] blur-2xl"
                    style={{ x, y }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-medium">{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
