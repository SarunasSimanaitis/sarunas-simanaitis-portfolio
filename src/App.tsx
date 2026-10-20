export default function App() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-ink focus:shadow-lg"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-700 bg-ink/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-4">
          <a
            aria-label="Šarūnas Simanaitis, home"
            className="flex items-center gap-3 font-semibold tracking-tight"
            href="#top"
          >
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-md bg-brand font-mono text-sm font-medium text-white">
              ŠS
            </span>
            <span>Šarūnas Simanaitis</span>
          </a>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
            <a className="transition-colors hover:text-white" href="#work">Work</a>
            <a className="transition-colors hover:text-white" href="#about">About</a>
            <a className="transition-colors hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section aria-labelledby="hero-title" className="scroll-mt-20 bg-ink text-white" id="top">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
            <div>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs font-medium uppercase tracking-[0.12em] text-slate-300 sm:text-sm">
                <span className="size-2 rounded-full bg-emerald-400" aria-hidden="true" />
                Front-end developer
                <span className="text-slate-500" aria-hidden="true">/</span>
                Rybnik, Poland
              </p>

              <h1 className="mt-8 max-w-4xl text-[clamp(3.75rem,9vw,7.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]" id="hero-title">
                Front-end<br className="hidden sm:block" /> developer<span className="text-brand">.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                I build responsive web apps with React and TypeScript.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-500" href="#work">
                  See my work
                </a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-600 px-5 py-3 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-white/5" href="https://github.com/SarunasSimanaitis" rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </div>

              <p className="mt-7 text-sm font-medium text-slate-300">
                Open to junior front-end roles
              </p>
            </div>

            <aside aria-labelledby="stack-title" className="overflow-hidden rounded-xl border border-slate-700 bg-panel shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4 sm:px-6">
                <h2 className="font-mono text-sm font-medium text-slate-200" id="stack-title">src / stack.ts</h2>
                <span className="font-mono text-xs text-slate-500">TypeScript</span>
              </div>

              <pre className="overflow-x-auto px-5 py-6 font-mono text-sm leading-8 sm:px-6 sm:text-base"><code><span className="text-violet-300">const</span>{" stack = {"}<br />
                {"  "}<span className="text-sky-300">frontend</span>: ["React", "TypeScript"],<br />
                {"  "}<span className="text-sky-300">styling</span>: "Tailwind CSS",<br />
                {"  "}<span className="text-sky-300">tools</span>: ["Git", "Vercel"],<br />
                {"  "}<span className="text-sky-300">focus</span>: "responsive UI",<br />
                {"};"}
              </code></pre>

              <div className="border-t border-slate-700 px-5 py-4 font-mono text-xs text-slate-400 sm:px-6">
                <span className="text-emerald-400">●</span> Available for a junior role
              </div>
            </aside>
          </div>
        </section>

        <section aria-labelledby="work-title" className="scroll-mt-20 bg-paper text-ink" id="work">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-brand sm:text-sm">Selected work</p>
                <h2 className="mt-3 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl" id="work-title">Projects</h2>
              </div>
              <p className="max-w-sm text-base text-muted sm:text-lg">React, TypeScript, and JavaScript projects.</p>
            </div>

            <article className="mt-10 grid gap-8 rounded-xl bg-ink p-6 text-white sm:p-9 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:p-11">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-blue-200">01 / Featured project</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">MoosclesPro</h3>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
                  Workout planning, set tracking, and progress history in one app.
                </p>

                <ul aria-label="MoosclesPro technologies" className="mt-6 flex flex-wrap gap-2">
                  <li className="rounded border border-slate-600 px-3 py-1.5 font-mono text-xs text-slate-200">React</li>
                  <li className="rounded border border-slate-600 px-3 py-1.5 font-mono text-xs text-slate-200">TypeScript</li>
                  <li className="rounded border border-slate-600 px-3 py-1.5 font-mono text-xs text-slate-200">Better Auth</li>
                  <li className="rounded border border-slate-600 px-3 py-1.5 font-mono text-xs text-slate-200">MongoDB</li>
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand px-4 py-2.5 font-semibold text-white transition-colors hover:bg-blue-500" href="https://mooscles-pro.vercel.app" rel="noreferrer" target="_blank">
                    Live project
                  </a>
                  <a className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-600 px-4 py-2.5 font-semibold text-white transition-colors hover:border-slate-400 hover:bg-white/5" href="https://github.com/SarunasSimanaitis/MoosclesPro" rel="noreferrer" target="_blank">
                    Source code
                  </a>
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-3 border-t border-slate-700 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="rounded-lg bg-white/5 p-3 sm:p-4">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-400 sm:text-xs">Plan</dt>
                  <dd className="mt-2 text-sm font-semibold text-white sm:text-base">Routines</dd>
                </div>
                <div className="rounded-lg bg-white/5 p-3 sm:p-4">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-400 sm:text-xs">Log</dt>
                  <dd className="mt-2 text-sm font-semibold text-white sm:text-base">Each set</dd>
                </div>
                <div className="rounded-lg bg-white/5 p-3 sm:p-4">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-slate-400 sm:text-xs">Review</dt>
                  <dd className="mt-2 text-sm font-semibold text-white sm:text-base">Progress</dd>
                </div>
              </dl>
            </article>

            <div className="mt-12">
              <h3 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl">More projects</h3>

              <article className="grid gap-4 border-t border-line py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                  <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">Finance tracker</h4>
                  <p className="mt-1 text-base text-muted">Personal expenses and spending summaries.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                  <p className="font-mono text-xs text-muted">React · Node.js · MongoDB</p>
                  <a className="font-semibold text-brand underline decoration-transparent underline-offset-4 transition hover:decoration-current" href="https://github.com/SarunasSimanaitis/Finans-program-l-projektas" rel="noreferrer" target="_blank">
                    GitHub repo
                  </a>
                </div>
              </article>

              <article className="grid gap-4 border-t border-line py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div>
                  <h4 className="text-xl font-semibold tracking-tight sm:text-2xl">Student registration</h4>
                  <p className="mt-1 text-base text-muted">Student records, courses, and subject assignments.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                  <p className="font-mono text-xs text-muted">React · JavaScript · Express</p>
                  <a className="font-semibold text-brand underline decoration-transparent underline-offset-4 transition hover:decoration-current" href="https://github.com/SarunasSimanaitis/Student-Registration-System" rel="noreferrer" target="_blank">
                    GitHub repo
                  </a>
                </div>
              </article>
              <div className="border-t border-line" />
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="scroll-mt-20 border-t border-line bg-white text-ink" id="about">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-brand sm:text-sm">A little about me</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl" id="about-title">Background</h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">Lithuanian, based in Rybnik, Poland.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="border-t-2 border-brand pt-4">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">Experience</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">Front-End Developer Intern</h3>
                <p className="mt-2 text-base text-muted">TechIn</p>
              </div>
              <div className="border-t-2 border-brand pt-4">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted">Education</p>
                <h3 className="mt-4 text-xl font-semibold leading-snug sm:text-2xl">JavaScript Developer</h3>
                <p className="mt-2 text-base text-muted">KITM</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="scroll-mt-20 bg-brand text-white" id="contact">
          <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-14 sm:py-16 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-blue-100 sm:text-sm">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl" id="contact-title">Let’s talk.</h2>
              <p className="mt-3 text-base text-blue-50 sm:text-lg">Open to junior front-end roles.</p>
            </div>
            <a className="inline-flex min-h-12 w-fit max-w-full items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-ink transition-colors hover:bg-blue-50" href="mailto:sarunassimanaitis@gmail.com">
              Email Šarūnas
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm">
          <p>Šarūnas Simanaitis · Front-end developer</p>
          <a className="font-medium transition-colors hover:text-white" href="https://github.com/SarunasSimanaitis" rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </footer>
    </>
  );
}
