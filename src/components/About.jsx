import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUser, FiCode, FiDatabase, FiLayers } from 'react-icons/fi';

const highlights = [
  { icon: FiUser,     label: 'CS Student',        desc: 'B.Tech CSE at BIT Bhubaneswar, graduating 2026'         },
  { icon: FiCode,     label: 'Full Stack Dev',     desc: 'React, Django, FastAPI – end-to-end web development'    },
  { icon: FiDatabase, label: 'DSA & OOP',          desc: 'Strong foundations in algorithms and system design'     },
  { icon: FiLayers,   label: 'Lifelong Learner',   desc: 'Continuously growing with modern development practices' },
];

function fadeUpVariant(delay = 0) {
  return {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
  };
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-surface-dark2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          variants={fadeUpVariant(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-semibold text-primary-500 uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="section-heading text-slate-900 dark:text-white">About Me</h2>
          <div className="section-divider" />
          <p className="section-subheading">Passionate developer, lifelong learner, problem solver</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* Left – Story */}
          <motion.div
            variants={fadeUpVariant(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex-1 space-y-5"
          >
            <div className="card-glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <FiUser className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">My Story</h3>
              </div>

              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Stitee Pragyan Deo</span>, a Computer Science student and aspiring Full Stack Developer with a strong interest in building practical and scalable web applications.
                </p>
                <p>
                  I enjoy solving real-world problems through technology and continuously learning modern development frameworks. My technical foundation includes data structures, object-oriented programming, and core computer science fundamentals.
                </p>
                <p>
                  I am passionate about developing efficient software solutions and growing as a professional developer — turning ideas into impactful digital products that make a difference.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Bhubaneswar, Odisha' },
                  { label: 'Degree',   value: 'B.Tech CSE' },
                  { label: 'Status',   value: 'Available to Work' },
                  { label: 'Focus',    value: 'Full Stack Dev' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-slate-50 dark:bg-white/5 rounded-xl p-3">
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Highlights Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUpVariant(0.2 + i * 0.1)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="card-glass p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-500/30 dark:to-accent-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">{label}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
