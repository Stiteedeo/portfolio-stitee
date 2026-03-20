import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

const certifications = [
  {
    title: 'Basic Networking Fundamentals',
    issuer: 'Cisco Networking Academy (NetAcad)',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Cisco',
  },
  {
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy (NetAcad)',
    icon: '🐍',
    color: 'from-yellow-500 to-orange-500',
    badge: 'Cisco',
  },
];

const internships = [
  {
    role: 'Frontend Development Intern',
    company: 'Summer Internship Program',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
    type: 'Internship',
  },
  {
    role: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    icon: '🚀',
    color: 'from-primary-500 to-indigo-500',
    type: 'Internship',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" ref={ref} className="py-24 bg-white dark:bg-surface-dark2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-semibold text-primary-500 uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Certifications & Internships</h2>
          <div className="section-divider" />
          <p className="section-subheading">Professional development achievements and hands-on experience</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <FiAward className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  className="card-glass rounded-2xl p-5 flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300 group"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {cert.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm leading-snug">{cert.title}</h4>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white`}>
                        {cert.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <FiCheckCircle className="w-3.5 h-3.5 text-accent-500" />
                      <span className="text-xs font-medium text-accent-600 dark:text-accent-400">Verified Certificate</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Internships Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                <FiBriefcase className="text-white w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Internships</h3>
            </div>

            <div className="space-y-5">
              {internships.map((intern, i) => (
                <motion.div
                  key={intern.role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="card-glass rounded-2xl p-5 flex gap-4 items-start hover:-translate-y-1 transition-transform duration-300 group"
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${intern.color} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {intern.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h4 className="font-bold text-slate-800 dark:text-white text-sm leading-snug">{intern.role}</h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-400">
                        {intern.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{intern.company}</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <FiBriefcase className="w-3.5 h-3.5 text-primary-500" />
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400">Professional Experience</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
