import { useRef, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
    <a className="skip-link fixed left-3 top-3 z-20 -translate-y-[150%] bg-forest-deep px-4 py-3 text-white transition-transform focus:translate-y-0" href="#main">Skip to content</a>

    <header className="site-header sticky top-0 z-10 border-b border-ink/10 bg-paper/95 backdrop-blur-md" onKeyDown={(event) => { if (event.key === "Escape" && menuOpen) { setMenuOpen(false); menuButtonRef.current?.focus(); } }}>
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Šarūnas Simanaitis, home">
          <span className="brand-mark" aria-hidden="true">Š</span>
          <span className="brand-name">Šarūnas <span>Simanaitis</span></span>
        </a>

        <button
          ref={menuButtonRef} className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="primary-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>

        <nav id="primary-nav" className="primary-nav" aria-label="Main navigation" data-open={menuOpen ? "true" : "false"} onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section id="top" className="hero section-wrap grid grid-cols-1 items-center gap-12 py-[4.2rem] lg:min-h-[680px] lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-[clamp(2.5rem,7vw,6.5rem)] lg:py-24 lg:pb-[6.2rem]" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-index">01</span> Front-end developer <span className="eyebrow-dot">/</span> Rybnik, Poland</p>
          <h1 className="mb-6 font-serif text-[clamp(3.55rem,14vw,5.3rem)] font-normal leading-[0.94] tracking-[-0.055em] md:text-[clamp(3.6rem,8vw,5.3rem)] lg:text-[clamp(3.8rem,7vw,6.35rem)]" id="hero-title">Made with care.<br /><em>Made better.</em></h1>
          <p className="hero-intro">
            I’m Šarūnas, a junior front-end developer who likes getting the details right. I build
            clear, responsive interfaces with React, TypeScript, and JavaScript—and keep refining
            them until they feel right.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:sarunassimanaitis@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta" aria-label="Current details">
            <div>
              <span className="meta-label">Currently</span>
              <span className="meta-value"><span className="status-dot" aria-hidden="true"></span> Open to junior roles</span>
            </div>
            <div>
              <span className="meta-label">I work with</span>
              <span className="meta-value">React · TypeScript · JavaScript</span>
            </div>
          </div>
        </div>

        <aside className="iteration-panel" aria-label="My working loop: notice, make, refine">
          <div className="panel-heading">
            <span>MY WORKING LOOP</span>
            <span className="panel-number">01—03</span>
          </div>
          <div className="loop-graphic" aria-hidden="true">
            <svg className="loop-lines" viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M97 89C143 22 267 16 332 67C392 114 394 221 338 275C280 331 174 330 113 283C53 236 48 161 97 89Z" />
              <path className="loop-dash" d="M97 89C143 22 267 16 332 67C392 114 394 221 338 275C280 331 174 330 113 283C53 236 48 161 97 89Z" />
              <path className="loop-connector" d="M122 102L171 128M341 105L292 135M324 262L279 228" />
              <circle className="loop-node node-one" cx="97" cy="89" r="6" />
              <circle className="loop-node node-two" cx="332" cy="67" r="6" />
              <circle className="loop-node node-three" cx="338" cy="275" r="6" />
            </svg>
            <div className="loop-center">
              <span className="loop-center-small">GOOD WORK IS</span>
              <span className="loop-center-large">iterative<span>.</span></span>
            </div>
            <span className="loop-label label-notice">01&nbsp; notice</span>
            <span className="loop-label label-make">02&nbsp; make</span>
            <span className="loop-label label-refine">03&nbsp; refine</span>
          </div>
          <div className="panel-foot">
            <span>Curious enough to question it.</span>
            <span>Patient enough to improve it.</span>
          </div>
        </aside>
      </section>

      <section className="experience-strip border-y border-line bg-white/20" aria-label="Experience and education">
        <div className="experience-inner grid grid-cols-1 gap-0 py-2 md:flex md:min-h-[104px] md:items-center md:justify-between md:gap-6 md:py-0">
          <p className="grid grid-cols-[96px_1fr] items-baseline gap-[0.6rem] border-b border-line py-[0.9rem] md:grid-cols-1 md:gap-[0.35rem] md:border-0 md:py-0"><span className="strip-label">RECENTLY</span><span>Front-End Developer Intern <span className="strip-muted">at TechIn</span></span></p>
          <span className="strip-divider" aria-hidden="true"></span>
          <p className="grid grid-cols-[96px_1fr] items-baseline gap-[0.6rem] border-b border-line py-[0.9rem] md:grid-cols-1 md:gap-[0.35rem] md:border-0 md:py-0"><span className="strip-label">EDUCATION</span><span>JavaScript Developer <span className="strip-muted">at KITM</span></span></p>
          <span className="strip-divider" aria-hidden="true"></span>
          <p className="grid grid-cols-[96px_1fr] items-baseline gap-[0.6rem] py-[0.9rem] md:grid-cols-1 md:gap-[0.35rem] md:py-0"><span className="strip-label">GROUNDING</span><span>Clear interfaces <span className="strip-muted">and thoughtful teamwork</span></span></p>
        </div>
      </section>

      <section id="work" className="work-section section-wrap py-[5.6rem] lg:py-[8.3rem] lg:pb-32" aria-labelledby="work-title">
        <div className="section-heading block lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="eyebrow"><span className="eyebrow-index">02</span> Selected work</p>
            <h2 id="work-title">Useful things,<br /><em>thoughtfully built.</em></h2>
          </div>
          <p className="section-intro">A mix of independent product work and full-stack projects. Each one taught me something worth carrying forward.</p>
        </div>

        <article className="featured-project grid grid-cols-1 gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-[clamp(2rem,6vw,5.3rem)] lg:p-[clamp(2rem,4vw,3.7rem)]">
          <div className="featured-copy">
            <div className="project-kicker"><span>INDEPENDENT PROJECT</span><span>2026 — NOW</span></div>
            <h3>Mooscles<span>Pro</span></h3>
            <p className="featured-summary">A workout tracker built around a simple loop: plan a session, log every set, then learn from the history.</p>
            <p className="project-detail">I designed and built the product end to end—from reusable routines and in-session logging to saved history and training statistics. The data belongs to the signed-in user, and the workout flow stays resumable while you move around the app.</p>
            <ul className="tag-list" aria-label="Technologies used">
              <li>React</li>
              <li>TypeScript</li>
              <li>Better Auth</li>
              <li>MongoDB</li>
              <li>Vercel</li>
            </ul>
            <a className="project-link" href="https://github.com/SarunasSimanaitis/MoosclesPro" target="_blank" rel="noreferrer">
              Explore the source <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="workout-loop" aria-label="MoosclesPro’s workout flow">
            <div className="workout-loop-top">
              <span>THE TRAINING LOOP</span>
              <span className="loop-icon" aria-hidden="true">↻</span>
            </div>
            <div className="workout-step">
              <span className="step-number">01</span>
              <div><strong>Plan</strong><small>Routines &amp; programs</small></div>
              <span className="step-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="workout-step">
              <span className="step-number">02</span>
              <div><strong>Log</strong><small>Sets, reps &amp; rest</small></div>
              <span className="step-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="workout-step">
              <span className="step-number">03</span>
              <div><strong>Review</strong><small>History &amp; progress</small></div>
              <span className="step-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="workout-loop-bottom"><span>ONE SESSION AT A TIME</span><span>BUILD / NOTICE / REPEAT</span></div>
          </div>
        </article>

        <div className="project-grid mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="project-card project-card-amber">
            <div className="card-topline"><span>FULL-STACK PROJECT</span><span>02</span></div>
            <div className="project-art art-finance" aria-hidden="true">
              <span className="art-line art-line-one"></span>
              <span className="art-line art-line-two"></span>
              <span className="art-line art-line-three"></span>
              <span className="art-node"></span>
              <span className="art-spark">+</span>
            </div>
            <h3>Finance tracker</h3>
            <p>A personal finance app for recording expenses and seeing where money goes. Includes account flows, category management, and expense statistics.</p>
            <ul className="tag-list" aria-label="Technologies used">
              <li>React</li><li>Node.js</li><li>Express</li><li>MongoDB</li>
            </ul>
            <a className="project-link" href="https://github.com/SarunasSimanaitis/Finans-program-l-projektas" target="_blank" rel="noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="project-card project-card-sage">
            <div className="card-topline"><span>FULL-STACK PROJECT</span><span>03</span></div>
            <div className="project-art art-students" aria-hidden="true">
              <span className="student-card student-card-one"></span>
              <span className="student-card student-card-two"></span>
              <span className="student-card student-card-three"></span>
              <span className="student-dot student-dot-one"></span>
              <span className="student-dot student-dot-two"></span>
            </div>
            <h3>Student registration</h3>
            <p>A student and course management app with search, course filtering, student records, and subject assignment over a REST API.</p>
            <ul className="tag-list" aria-label="Technologies used">
              <li>React</li><li>JavaScript</li><li>Express</li><li>MongoDB</li>
            </ul>
            <a className="project-link" href="https://github.com/SarunasSimanaitis/Student-Registration-System" target="_blank" rel="noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </section>

      <section id="approach" className="approach-section bg-forest-deep text-paper-bright" aria-labelledby="approach-title">
        <div className="section-wrap approach-inner grid grid-cols-1 gap-4 py-[5.7rem] md:grid-cols-[0.8fr_1.2fr] md:gap-[clamp(3rem,10vw,9rem)] md:py-[7.4rem]">
          <div className="approach-heading">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-index">03</span> How I work</p>
            <h2 id="approach-title">I stay with<br />the problem.</h2>
          </div>
          <div className="approach-copy">
            <p className="approach-lead">I can spend an afternoon nudging a layout into place. That patience works best when it’s paired with listening: the person using the interface should feel understood, not impressed.</p>
            <div className="approach-details">
              <p>At TechIn, I turned Figma designs into responsive React interfaces, worked from Jira user stories, and collaborated with front-end and back-end developers during sprints.</p>
              <p>I’m early in my career, so I ask questions, take feedback seriously, and stay curious about the parts I don’t know yet. I want to grow into someone people trust with the hard, careful work.</p>
            </div>
            <div className="approach-note"><span className="note-mark" aria-hidden="true">↳</span><span>Notice what’s off. Find out why. Improve it with care.</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-wrap grid grid-cols-1 gap-6 py-[5.7rem] md:grid-cols-[0.9fr_1.1fr] md:gap-[clamp(3rem,9vw,8.5rem)] md:py-[8.4rem]" aria-labelledby="about-title">
        <div className="about-title-block">
          <p className="eyebrow"><span className="eyebrow-index">04</span> A little context</p>
          <h2 id="about-title">Steady work.<br /><em>Open mind.</em></h2>
        </div>
        <div className="about-copy">
          <p>I’m Lithuanian and recently made a new home in Rybnik, Poland. Starting over has made me more deliberate about what I want to build—and more patient with the work it takes to get there.</p>
          <p>Outside the code, I like learning how things fit together. Inside it, I care about readable structure, responsive behavior, and the small choices that make a product easier to use.</p>
          <div className="about-details">
            <div><span className="meta-label">Languages</span><span>English · Lithuanian · Russian · Croatian</span></div>
            <div><span className="meta-label">Elsewhere</span><a href="https://github.com/SarunasSimanaitis" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section bg-clay text-white" aria-labelledby="contact-title">
        <div className="section-wrap contact-inner grid grid-cols-1 items-center gap-5 py-[5.5rem] md:grid-cols-[1fr_0.8fr] md:gap-16 md:py-[6.6rem]">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-index">05</span> Next chapter</p>
            <h2 id="contact-title">Let’s make<br /><em>something matter.</em></h2>
          </div>
          <div className="contact-copy">
            <p>I’m looking for a junior front-end role where I can contribute, keep learning, and do careful work with good people.</p>
            <a className="contact-email" href="mailto:sarunassimanaitis@gmail.com">sarunassimanaitis@gmail.com <span aria-hidden="true">↗</span></a>
            <span className="contact-location"><span className="status-dot" aria-hidden="true"></span> Based in Rybnik, Poland · Open to opportunities</span>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#top">Š<span>.</span> <span>Thoughtful work, in progress.</span></a>
        <p>Designed and built by Šarūnas Simanaitis · 2026</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </div>
    </footer>
    </>
  );
}
