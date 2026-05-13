const { useEffect } = React;

const caseStudies = [
  { num: '01', tag: 'Branding · 2024',      title: 'EcoEats', desc: 'Designing a Sustainable Solution to Reduce Food Waste', link: 'https://www.figma.com/proto/UyhJAAvEywqWNcCjwXBJ5O/EcoEats?node-id=230-2&t=soU3DryPxSAsx5xl-1&scaling=min-zoom&content-scaling=fixed&page-id=144%3A5', delay: '0s' },
  
  
  { num: '02', tag: 'UI Design · 2024',     title: 'Case Study Title', desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.', delay: '0.1s' },
  { num: '03', tag: 'Illustration · 2023',  title: 'Case Study Title', desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.', delay: '0.2s' },
  { num: '04', tag: 'Art Direction · 2023', title: 'Case Study Title', desc: 'A brief description of the project, the challenge faced, and the outcome achieved. Replace with your own work.', delay: '0.3s' },
];

function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">Kissa Hussain</a>
      <ul className="nav-links">
        <li><a href="#about">About Me</a></li>
        <li><a href="https://eastndwest.com" target="_blank">Art Website &nbsp;↗</a></li>
      </ul>
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

function CaseCard({ num, tag, title, desc, delay }) {
  return (
    <article className="case-card fade-in" style={{ transitionDelay: delay }}>
      <div className="case-card-thumb">
        <span className="case-number">{num}</span>
        <div className="thumb-icon">+</div>
      </div>
      <div className="case-card-info">
        <p className="case-tag">{tag}</p>
        <h3 className="case-title">{title}</h3>
        <p className="case-desc">{desc}</p>
      </div>
    </article>
  );
}

function CaseStudies() {
  return (
    <section className="case-studies">
      <p className="section-eyebrow">Selected Work</p>
      <h2 className="section-heading">Case Studies</h2>
      <div className="case-grid">
        {caseStudies.map(c => (
          <CaseCard key={c.num} {...c} />
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
      <CaseStudies />
      <About />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
