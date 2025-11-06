import { motion } from 'framer-motion';
import { User, Mail, Send } from 'lucide-react';

const team = [
  {
    name: 'Avery Quinn',
    role: 'Creative Director',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Kai Rivera',
    role: 'Lead Engineer',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Nova Patel',
    role: 'Product Strategist',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function TeamContact() {
  return (
    <section id="team" className="relative w-full bg-[#06060b] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Team */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
            >
              Meet the team
            </motion.h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {team.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <User className="h-4 w-4" />
                      <span>{m.role}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-medium">{m.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
            >
              Let’s build something extraordinary
            </motion.h2>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.1, duration: 0.6 }}
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-white/70">Your Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
                    placeholder="Alex Johnson"
                    required
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-white/70">Email</label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                    <input
                      type="email"
                      className="w-full rounded-md border border-white/10 bg-black/30 px-9 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Project Brief</label>
                <textarea
                  rows="4"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
                  placeholder="Tell us about your goals, timeline, and scope."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(16,185,129,0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <span>Request a proposal</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
