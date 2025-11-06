import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Sparkles, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Performance First',
    desc: 'Motion designed for speed — GPU-accelerated animations with graceful fallbacks.',
  },
  {
    icon: Sparkles,
    title: 'Micro-Interactions',
    desc: 'Delightful hovers, taps, and scroll-tied reveals that elevate usability.',
  },
  { icon: Shield, title: 'Secure & Reliable', desc: 'Best practices by default across build, deploy, and monitoring.' },
  { icon: Cpu, title: '3D & Parallax', desc: 'Cinematic depth using Spline scenes, parallax layers, and WebGL.' },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative w-full bg-[#07070c] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Capabilities that move people
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.06 * i, duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] ring-1 ring-transparent backdrop-blur-sm transition-all hover:shadow-[0_10px_40px_rgba(99,102,241,0.25)]"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(400px_200px_at_100%_100%,rgba(16,185,129,0.15),transparent)]" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
