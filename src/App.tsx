import { useRef, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header
        className="site-header sticky top-0 z-10"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
      >
        <div className="content-width header-inner">
          <a className="brand" href="#top" aria-label="Šarūnas Simanaitis, home">
            <span className="brand-initials" aria-hidden="true">ŠS</span>
            <span>Šarūnas Simanaitis</span>
          </a>

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="primary-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>

          <nav
            id="primary-nav"
            className="primary-nav"
            aria-label="Main navigation"
            data-open={menuOpen ? "true" : "false"}
            onClick={() => setMenuOpen(false)}
          >
            <a href="#work">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="content-width hero grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-index">01</span> Front-end developer <span aria-hidden="true">/</span> Rybnik, Poland</p>
            <h1 id="hero-title">Front-end developer building useful web apps.</h1>
            <p className="hero-intro">
              I build responsive web interfaces with React, TypeScript, and JavaScript.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View projects</a>
              <a className="text-link" href="mailto:sarunassimanaitis@gmail.com">Email me</a>
            </div>
            <p className="availability"><span className="availability-mark" aria-hidden="true"></span> Open to junior front-end roles</p>
          </div>

          <aside className="stack-panel" aria-labelledby="stack-title">
            <div className="stack-panel-header">
              <div>
                <p className="panel-label">WHAT I USE</p>
                <h2 id="stack-title">Core stack</h2>
              </div>
              <span className="stack-version">01 / 04</span>
            </div>
            <dl className="stack-list">
              <div>
                <dt>Frontend</dt>
                <dd>React · TypeScript · JavaScript</dd>
              </div>
              <div>
                <dt>Styling</dt>
                <dd>Tailwind CSS · Responsive CSS</dd>
              </div>
              <div>
                <dt>Server & data</dt>
                <dd>Node.js · Express · MongoDB</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>Git · REST APIs · Vercel</dd>
              </div>
            </dl>
            <a className="stack-link" href="https://github.com/SarunasSimanaitis" target="_blank" rel="noreferrer">See my GitHub profile</a>
          </aside>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="content-width section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-index">02</span> Selected work</p>
                <h2 id="work-title">Projects</h2>
              </div>
              <p className="section-intro">A few things I’ve built and the tools behind them.</p>
            </div>

            <article className="featured-project">
              <div className="featured-copy">
                <p className="project-kicker">Independent project <span>01</span></p>
                <h3>MoosclesPro</h3>
                <p className="featured-summary">Plan workouts. Log each set. Track progress over time.</p>
                <p className="project-detail">Built end to end with reusable routines, account-based data, and sessions that can be paused and resumed.</p>
                <ul className="tag-list" aria-label="MoosclesPro technologies">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Better Auth</li>
                  <li>MongoDB</li>
                  <li>Vercel</li>
                </ul>
                <div className="project-links">
                  <a className="button button-primary" href="https://mooscles-pro.vercel.app" target="_blank" rel="noreferrer">Open live app</a>
                  <a className="text-link" href="https://github.com/SarunasSimanaitis/MoosclesPro" target="_blank" rel="noreferrer">View source on GitHub</a>
                </div>
              </div>
            </article>

            <div className="project-grid grid grid-cols-1 gap-4 md:grid-cols-2">
              <article className="project-card">
                <div className="card-topline"><span>Full-stack project</span><span>02</span></div>
                <h3>Finance tracker</h3>
                <p>Record expenses, manage categories, and review spending statistics in a personal finance app.</p>
                <ul className="tag-list" aria-label="Finance tracker technologies">
                  <li>React</li><li>Node.js</li><li>Express</li><li>MongoDB</li>
                </ul>
                <a className="text-link" href="https://github.com/SarunasSimanaitis/Finans-program-l-projektas" target="_blank" rel="noreferrer">View repository</a>
              </article>

              <article className="project-card">
                <div className="card-topline"><span>Full-stack project</span><span>03</span></div>
                <h3>Student registration</h3>
                <p>Manage student records and courses with search, course filters, and subject assignments through a REST API.</p>
                <ul className="tag-list" aria-label="Student registration technologies">
                  <li>React</li><li>JavaScript</li><li>Express</li><li>MongoDB</li>
                </ul>
                <a className="text-link" href="https://github.com/SarunasSimanaitis/Student-Registration-System" target="_blank" rel="noreferrer">View repository</a>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="experience-section" aria-labelledby="experience-title">
          <div className="content-width section-space">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="eyebrow-index">03</span> Background</p>
                <h2 id="experience-title">Experience & education</h2>
              </div>
              <p className="section-intro">Where I’ve learned and worked with a development team.</p>
            </div>

            <div className="background-grid grid grid-cols-1 gap-4 md:grid-cols-2">
              <article className="background-card">
                <p className="panel-label">EXPERIENCE</p>
                <h3>Front-End Developer Intern</h3>
                <p className="background-meta">TechIn</p>
                <p>Built responsive React interfaces and worked through sprint tasks with front-end and back-end developers.</p>
              </article>
              <article className="background-card">
                <p className="panel-label">EDUCATION</p>
                <h3>JavaScript Developer</h3>
                <p className="background-meta">KITM</p>
                <p>Studied JavaScript development and the fundamentals of building web applications.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="content-width about-inner grid grid-cols-1 gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-24">
            <div>
              <p className="eyebrow"><span className="eyebrow-index">04</span> About</p>
              <h2 id="about-title">A little about me</h2>
            </div>
            <div className="about-copy">
              <p>I’m Lithuanian and recently made a new home in Rybnik, Poland. I’m building my front-end career through projects, feedback, and steady practice.</p>
              <p>I like understanding what isn’t working and staying with it until it’s clearer. I value empathy, communication, and readable code.</p>
              <dl className="about-details">
                <div><dt>Languages</dt><dd>English · Lithuanian · Russian · Croatian</dd></div>
                <div><dt>Based in</dt><dd>Rybnik, Poland</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="content-width contact-inner grid grid-cols-1 items-end gap-8 py-16 md:grid-cols-[1fr_auto] md:py-20">
            <div>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-index">05</span> Contact</p>
              <h2 id="contact-title">Let’s work together.</h2>
              <p className="contact-copy">I’m open to junior front-end roles and ready to contribute to a team.</p>
            </div>
            <div className="contact-links">
              <a className="button button-light" href="mailto:sarunassimanaitis@gmail.com">sarunassimanaitis@gmail.com</a>
              <a className="contact-github" href="https://github.com/SarunasSimanaitis" target="_blank" rel="noreferrer">GitHub profile</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-inner">
          <a className="footer-brand" href="#top">Šarūnas Simanaitis</a>
          <p>Front-end developer · Rybnik, Poland</p>
          <a className="back-to-top" href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
