import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Atom, BarChart3, Check, ChevronRight, Code2, Cpu, Globe2, Layers3, Menu, MoveUpRight, ShieldCheck, Sparkles, X } from 'lucide-react'

const services = [
  { icon: Layers3, number: '01', title: 'Digital product\n& experience', text: 'We turn complex ideas into intuitive products people love to use—and teams love to grow.' },
  { icon: Code2, number: '02', title: 'Engineering\n& platforms', text: 'Thoughtful architecture and resilient software, built for your next chapter and the ones after.' },
  { icon: Cpu, number: '03', title: 'AI & intelligent\nautomation', text: 'Practical intelligence that takes the friction out of work and unlocks what comes next.' },
  { icon: BarChart3, number: '04', title: 'Data & digital\ntransformation', text: 'A clearer view of your business, with the tools and confidence to make every move count.' },
]

const projects = [
  { type: 'FINTECH · DIGITAL PRODUCT', name: 'A better way to\nmove money.', client: 'Northline Financial', image: 'photo-1551288049-bebda4e38f71', className: 'project-blue', metric: '+38% user activation' },
  { type: 'HEALTHCARE · PLATFORM', name: 'Care that moves\nyou forward.', client: 'Forma Health', image: 'photo-1576091160399-112ba8d25d1d', className: 'project-mint', metric: '2.4× faster onboarding' },
  { type: 'CLIMATE · DATA INTELLIGENCE', name: 'A brighter grid\nstarts here.', client: 'Solstice Energy', image: 'photo-1473341304170-971dccb5ac1e', className: 'project-sand', metric: '12k tonnes saved' },
]

const reasons = [
  ['One accountable team', 'Strategy, design, and engineering under one roof. No handoffs, no gaps—just good people doing their best work together.'],
  ['Built for what’s next', 'We solve the real problem beneath the brief, then build foundations flexible enough to keep up as you grow.'],
  ['Outcomes over output', 'Beautiful work matters. Business impact matters more. We measure success by what changes for you.'],
]

function BrandMark({ footer = false }) {
  return <a className={`brand ${footer ? 'brand-light' : ''}`} href="#home" aria-label="Nova Tech home"><span className="brand-symbol"><span /><span /><span /><span /></span><span>NOVA<span className="brand-tech">TECH</span></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.14 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <BrandMark />
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>What we do</a><a href="#work" onClick={closeMenu}>Our work</a><a href="#about" onClick={closeMenu}>About us</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> YOUR PARTNER IN PROGRESS</div>
            <h1>Clarity for<br />what’s <span className="hero-accent">next.</span></h1>
            <p className="hero-description">We bring strategy, design, and technology together to solve your most important challenges—and make your next move your best one.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Build what’s next <ArrowRight size={17} /></a><a className="text-link" href="#work">Explore our work <ArrowDown size={15} /></a></div>
            <div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>Good people.</strong><br />Better things, together.</p></div>
          </div>
          <div className="hero-visual" aria-label="Abstract architecture and digital experience">
            <div className="hero-image"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1100&q=85" alt="Sculptural glass architecture reaching into a clear sky" /></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-chip"><span className="chip-icon"><Sparkles size={17} /></span><span><b>Possibility,</b><br />made practical.</span><ArrowUpRight size={17} /></div>
            <div className="hero-number"><span>01</span><i /><small>STRATEGY · DESIGN · TECH</small></div>
          </div>
          <div className="hero-bottom"><span>INDEPENDENT BY DESIGN</span><span>NEW YORK · LONDON · EVERYWHERE</span><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span></div>
        </section>

        <section className="trust-strip" aria-label="Trusted by ambitious teams"><div className="trust-inner"><span>IN GOOD COMPANY</span><b className="wordmark wordmark-arc">arc<span>well</span></b><b className="wordmark wordmark-north">NORTHLINE</b><b className="wordmark wordmark-forma">forma</b><b className="wordmark wordmark-kin">KIN<span>+</span></b><b className="wordmark wordmark-sol">solstice</b></div></section>

        <section className="section section-shell services-section" id="services">
          <div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> THE GOOD STUFF</div><h2>Big challenges.<br /><span className="muted-heading">Meet clear thinking.</span></h2></div><p>We connect the dots between where you are and where you could be—with the right mix of expertise to get you there.</p></div>
          <div className="service-grid">{services.map(({ icon: Icon, number, title, text }, index) => <article className="service-card reveal" key={number} style={{ '--delay': `${index * 90}ms` }}><div className="service-card-top"><span className="service-icon"><Icon size={20} strokeWidth={1.7} /></span><span className="service-number">{number}</span></div><h3>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{text}</p><a className="round-link" href="#contact" aria-label={`Ask us about ${title.replace('\n', ' ')}`}><ArrowUpRight size={17} /></a></article>)}</div>
          <div className="services-foot"><span>BUILT AROUND YOUR AMBITION</span><a href="#contact">See how we can help <ArrowRight size={15} /></a></div>
        </section>

        <section className="work-section" id="work"><div className="section-shell">
          <div className="section-heading work-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED PARTNERSHIPS</div><h2>Good work.<br /><span className="muted-heading">Real-world impact.</span></h2></div><a className="text-link" href="#contact">Have a challenge? <ArrowUpRight size={16} /></a></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.className} reveal`} key={project.client} style={{ '--delay': `${index * 100}ms` }}><a href="#contact" aria-label={`Discuss a project like ${project.client}`}><div className="project-image"><img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1000&q=85`} alt="" /><span className="project-arrow"><ArrowUpRight size={21} /></span><div className="project-image-label"><span>CASE STUDY</span><span>0{index + 1} / 03</span></div></div><div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><div className="project-meta"><span>{project.client}</span><span><Check size={14} /> {project.metric}</span></div></div></a></article>)}</div>
        </div></section>

        <section className="why-section" id="about"><div className="section-shell why-layout"><div className="why-lead reveal"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> THE NOVA DIFFERENCE</div><h2>Technology<br />is the tool.<br /><span>People are<br />the point.</span></h2><p>We’re an independent team of curious minds who believe the best solutions start with listening—and end with a real difference made.</p><a className="button button-light" href="#contact">Get to know us <ArrowRight size={16} /></a></div><div className="why-content"><div className="why-art reveal"><div className="why-art-ring ring-a" /><div className="why-art-ring ring-b" /><div className="why-art-center"><Atom size={40} strokeWidth={1.1} /><span>BETTER<br />BY DESIGN</span></div><div className="why-art-caption"><span>FIG. 01</span><span>PEOPLE × IDEAS × IMPACT</span></div></div>{reasons.map(([title, text], index) => <article className="reason reveal" key={title} style={{ '--delay': `${index * 100}ms` }}><span className="reason-no">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronRight size={18} /></article>)}</div></div></section>

        <section className="testimonial-section section-shell"><div className="testimonial-top reveal"><div className="eyebrow"><span className="eyebrow-line" /> WORDS FROM THE WORK</div><span className="testimonial-index">01 — 03</span></div><div className="testimonial-content reveal"><span className="quote-mark">“</span><blockquote>Nova didn’t just deliver a new platform. They helped us see our business differently—and gave us the confidence to move forward.</blockquote><div className="quote-credit"><div className="quote-avatar">SL</div><div><b>Sarah Lin</b><span>Chief Product Officer, Northline Financial</span></div></div><div className="quote-controls"><button aria-label="Previous testimonial">←</button><button aria-label="Next testimonial">→</button></div></div><div className="testimonial-stats reveal"><div><b>4.9<span>/5</span></b><small>PARTNER SATISFACTION</small></div><div><b>86<span>%</span></b><small>OF WORK FROM REFERRALS</small></div><div><b>12<span>yrs</span></b><small>MAKING WHAT’S NEXT</small></div></div></section>

        <section className="contact-section" id="contact"><div className="section-shell contact-layout"><div className="contact-copy reveal"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR NEXT CHAPTER</div><h2>Let’s make<br />it <span>happen.</span></h2><p>Big idea, tricky problem, or just a feeling that there’s a better way? We’d love to hear about it.</p><a className="contact-email" href="mailto:hello@novatech.studio">hello@novatech.studio <ArrowUpRight size={17} /></a><div className="contact-note"><Globe2 size={16} /> Based everywhere. Here for you.</div></div><form className="contact-form reveal" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><div className="form-heading"><span>START A CONVERSATION</span><span>01 / 02</span></div><label>Your name<input required name="name" placeholder="Jane Smith" autoComplete="name" /></label><label>Work email<input required name="email" type="email" placeholder="jane@company.com" autoComplete="email" /></label><label>What are you working on?<textarea required name="message" rows="3" placeholder="A little context goes a long way..."></textarea></label><button className="button button-form" type="submit">{sent ? <>Message received <Check size={16} /></> : <>Send your note <ArrowRight size={16} /></>}</button>{sent && <p className="form-success" role="status">Thanks for reaching out. Our team will be in touch soon.</p>}<small>By sending this, you agree to our privacy policy. Your details stay with us.</small></form></div></section>
      </main>

      <footer className="site-footer"><div className="section-shell footer-main"><div className="footer-brand"><BrandMark footer /><p>Good technology should make life<br />a little more human.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#services">What we do</a><a href="#work">Our work</a><a href="#about">About us</a></div><div><span>SAY HELLO</span><a href="mailto:hello@novatech.studio">Email us</a><a href="#contact">Start a project</a><a href="#home">LinkedIn <MoveUpRight size={12} /></a></div></div><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15} /></a></div><div className="section-shell footer-bottom"><span>© 2025 NOVA TECH STUDIO</span><span>INDEPENDENTLY MINDED. INTENTIONALLY HUMAN.</span><span>PRIVACY · COOKIES</span></div></footer>
    </>
  )
}

export default App
