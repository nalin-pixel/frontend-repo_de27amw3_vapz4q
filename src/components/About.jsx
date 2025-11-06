import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' } }),
  };

  return (
    <section id="about" className="relative w-full bg-[#0a0a0f] py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <motion.div variants={item} custom={1} className="relative">
            <div className="absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
                We build experiences that feel alive.
              </h2>
              <p className="mt-4 text-white/70">
                Our mission is to craft immersive digital stories where every scroll reveals something new. We blend
                cutting-edge 3D, motion, and micro-interactions to keep users engaged and inspired.
              </p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Vision',
                desc:
                  'A web where interfaces respond with intention — fluid, tactile, and emotionally resonant.',
              },
              {
                title: 'Approach',
                desc:
                  'Design-first thinking, performance-aware motion, and accessible interactions across devices.',
              },
              {
                title: 'Outcome',
                desc:
                  'Premium brand presence that converts attention into action through narrative-led UX.',
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                variants={item}
                custom={i + 2}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
