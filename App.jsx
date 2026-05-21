const { useEffect } = React;

const caseStudies = [
  {
    num: '01',
    tag: 'Branding · 2024',
    title: 'EcoEats',
    desc: 'Designing a Sustainable Solution to Reduce Food Waste',
    link: 'https://www.figma.com/proto/UyhJAAvEywqWNcCjwXBJ5O/EcoEats?node-id=230-2&t=soU3DryPxSAsx5xl-1&scaling=min-zoom&content-scaling=fixed&page-id=144%3A5',
    embed: 'https://embed.figma.com/proto/UyhJAAvEywqWNcCjwXBJ5O/EcoEats?node-id=328-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=144%3A5&starting-point-node-id=328%3A2&embed-host=share',
    delay: '0s'
  },
  {
    num: '02',
    tag: 'UI Design · 2024',
    title: 'Case Study Title',
    desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.',
    delay: '0.1s'
  },
  {
    num: '03',
    tag: 'Illustration · 2023',
    title: 'Case Study Title',
    desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.',
    delay: '0.2s'
  },
  {
    num: '04',
    tag: 'Art Direction · 2023',
    title: 'Case Study Title',
    desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.',
    delay: '0.3s'
  },
];

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <a href="#" className="nav-logo">Kissa Hussain</a>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#case-studies">Case Studies</a></li>
          <li><a href="https://eastndwest.com" target="_blank" rel="noreferrer">Art Website &nbsp;↗</a></li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-social">
          <a href="mailto:hello@example.com" aria-label="Email" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><polyline points="4,4 12,13 20,4"/></svg>
          </a>
          <a href="https://github.com/username" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .5-1.5 1-1.5s1 .5 1 1.5V22m-2-6c3 0 5-2.5 5-5.5S17 5 14 5 9 7.5 9 10.5 11 16 14 16zm0 0c-2 0-4-1.5-4-4"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v8h-4v-8a2 2 0 0 0-4 0v8h-4v-8a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://medium.com/@username" target="_blank" rel="noreferrer" aria-label="Medium" title="Medium">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h3l5 14 4-12 4 12 5-14h3"/></svg>
          </a>
        </div>
      </div>
    </nav>
  );
}


function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I enjoy being</h1> 
        <h1>creative!</h1>
        <p className="tagline">Design &ensp;&middot;&ensp; Art &ensp;&middot;&ensp; Creative Work</p>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="chevron"></div>
      </div>
    </section>
  );
}

function CaseCard({ num, tag, title, desc, delay, link }) {
  const card = (
    <article className="case-card fade-in" style={{ transitionDelay: delay }}>
      <div className="case-card-thumb">
        <span className="case-number">{num}</span>
        <div className="thumb-icon">+</div>
      </div>
      <div className="case-card-info">
        <p className="case-tag">{tag}</p>
        <h3 className="case-title">{title}</h3>
        <p className="case-desc">{desc}</p>
        {link ? <span className="case-card-cta">View case study</span> : null}
      </div>
    </article>
  );

  return link ? (
    <a href={link} className="case-card-link" target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : card;
}

function CaseStudies() {
  const embeddedCase = caseStudies.find(c => c.embed);

  return (
    <>
      <section id="case-studies" className="case-studies">
        <p className="section-eyebrow">Selected Work</p>
        <h2 className="section-heading">Case Studies</h2>
        <div className="case-grid">
          {caseStudies.map(c => (
            <CaseCard key={c.num} {...c} />
          ))}
        </div>
      </section>

      {embeddedCase ? (
        <section className="prototype-embed">
          <p className="section-eyebrow">Prototype</p>
          <h2 className="section-heading">{embeddedCase.title} Interactive Prototype</h2>
          <div className="embed-frame">
            <iframe
              src={embeddedCase.embed}
              title={`${embeddedCase.title} prototype`}
              allowFullScreen
              frameBorder="0"
            />
          </div>
          <p className="embed-note">Explore the interactive prototype for this case study directly within the page. Use the Figma controls inside the frame to preview screens and flows.</p>
        </section>
      ) : null}
    </>
  );
}

const experienceItems = [
  {
    role: 'Product Designer',
    company: 'EcoEats',
    period: '2024 – Present',
    desc: 'Crafting sustainable digital experiences with a focus on usability, accessibility, and visual storytelling.'
  },
  {
    role: 'Visual Designer',
    company: 'Creative Studio',
    period: '2022 – 2024',
    desc: 'Delivered branding, digital campaigns, and art direction for lifestyle and cultural clients.'
  },
  {
    role: 'Freelance Designer',
    company: 'Independent',
    period: '2020 – 2022',
    desc: 'Worked across web, editorial, and experiential design projects for emerging brands.'
  }
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <p className="section-eyebrow">Work</p>
      <h2 className="section-heading">Experience</h2>
      <div className="experience-grid">
        {experienceItems.map(item => (
          <article key={`${item.role}-${item.company}`} className="experience-card fade-in">
            <div className="experience-meta">
              <p className="experience-role">{item.role}</p>
              <p className="experience-company">{item.company}</p>
            </div>
            <p className="experience-period">{item.period}</p>
            <p className="experience-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="about-inner fade-in">
        <p className="section-eyebrow">About</p>
        <h2 className="section-heading">About Me</h2>
        <p>Hello — I'm a creative professional based in [Location]. I work at the intersection of design, art, and storytelling, bringing thoughtful and visually compelling work to every project.</p>
        <p>With a background in [your background], I specialise in [your specialties]. Each project is an opportunity to explore new ideas and push creative boundaries.</p>
        <a href="#" className="btn-outline" target="_blank">Visit My Art Website &nbsp;↗</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Kissa Hussain. All rights reserved.</p>
      <p>Portfolio</p>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <CaseStudies />
      <About />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
