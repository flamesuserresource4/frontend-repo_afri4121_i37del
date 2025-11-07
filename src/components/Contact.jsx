import { motion } from 'framer-motion';
import { Mail, Linkedin, Globe, Dribbble } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s create something meaningful</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">I’m open to freelance, contract, and product design roles.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-blue-500 dark:border-neutral-800 dark:bg-neutral-950" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-blue-500 dark:border-neutral-800 dark:bg-neutral-950" placeholder="you@email.com" />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 outline-none ring-0 transition placeholder:text-neutral-400 focus:border-blue-500 dark:border-neutral-800 dark:bg-neutral-950" placeholder="Tell me about your project" />
            </div>
            <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100">
              Send Message
            </motion.button>
          </form>

          <div className="space-y-4">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
              <Mail className="h-5 w-5" /> hello@example.com
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
              <Dribbble className="h-5 w-5" /> Dribbble
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900">
              <Globe className="h-5 w-5" /> Portfolio Deck
            </a>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-12 flex max-w-7xl items-center justify-between px-2 text-sm text-neutral-500 dark:text-neutral-400">
        <span>© {new Date().getFullYear()} Avery Lee</span>
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </footer>
    </section>
  );
}
