import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Placeholder portrait block; users can replace with an actual image later. */}
          <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-600">
            <User className="h-16 w-16" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className=""
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            I design thoughtful, human-centered products. My process blends research, systems thinking, and high-craft visuals to ship experiences that feel effortless.
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            I’ve collaborated with startups and SaaS teams to shape intuitive apps used by 50k+ users. I thrive in cross-functional teams and love turning ambiguity into clarity.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {['Figma', 'Miro', 'Notion', 'Maze', 'Zeplin', 'Adobe XD'].map((tool) => (
              <div key={tool} className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                {tool}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
