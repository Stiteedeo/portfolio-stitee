import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Bhubaneswar Institute of Technology',
    location: 'Bhubaneswar, Odisha',
    period: '2023 – 2026',
    status: 'Current',
    statusColor: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400',
    icon: '🎓',
    gradient: 'from-primary-500 to-purple-600',
    highlights: ['Computer Science Engineering', 'Full Stack Development', 'AI & Machine Learning'],
  },
  {
    degree: 'Diploma in Information Technology',
    field: 'Information Technology',
    institution: 'Government Polytechnic Bhubaneswar',
    location: 'Bhubaneswar, Odisha',
    period: '2020 – 2023',
    status: 'Completed',
    statusColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400',
    icon: '📘',
    gradient: 'from-blue-500 to-cyan-500',
    highlights: ['Information Technology', 'Web Fundamentals', 'Programming Basics'],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} className="py-24 bg-slate-50 dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-semibold text-primary-500 uppercase tracking-widest mb-3">Academic background</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Education</h2>
          <div className="section-divider" />
          <p className="section-subheading">My academic journey and educational milestones</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-accent-500 opacity-30 hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex gap-6 items-start timeline-item"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 hidden sm:flex">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-xl shadow-lg ring-4 ring-white dark:ring-surface-dark relative z-10`}>
                    {edu.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card-glass rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300 group">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">{edu.field}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${edu.statusColor} flex-shrink-0`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FiAward className="w-3.5 h-3.5 text-primary-500" />
                      {edu.institution}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5 text-accent-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5 text-purple-500" />
                      {edu.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${edu.gradient} text-white opacity-90`}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
