import { useEffect, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, Menu, MoveUpRight, X } from 'lucide-react'

const services = [
  { number: '01', title: 'Brand worlds', line: 'worth getting lost in.', text: 'Strategy, identity, voice, and the little details that make a brand feel like itself.' },
  { number: '02', title: 'Digital things', line: 'with a pulse.', text: 'Websites and digital experiences with equal parts personality and purpose.' },
  { number: '03', title: 'Campaigns that', line: 'leave a mark.', text: 'Ideas made to travel, get talked about, and stick around long after the scroll.' },
]
const projects = [
  { name: 'Good\nMorrow', detail: 'A brighter kind of everyday.', type: 'IDENTITY · DIGITAL', image: 'photo-1543362906-acfc16c67564', cls: 'morrow', label: '01' },
  { name: 'Offcut', detail: 'Waste less. Want more.', type: 'STRATEGY · PACKAGING', image: 'photo-1547887538-e3a2f32cb1cc', cls: 'offcut', label: '02' },
  { name: 'Casa\nLuna', detail: 'A stay with a story.', type: 'IDENTITY · CAMPAIGN', image: 'photo-1600210492486-724fe5c67fb0', cls: 'casa', label: '03' },
]
const steps = [
  { no: 'I.', name: 'Get curious', title: 'First, we listen.', text: 'We ask good questions, look closer, and find the interesting bit hiding in plain sight.' },
  { no: 'II.', name: 'Find the feeling', title: 'Then, we find it.', text: 'A sharp strategy gives a big idea somewhere meaningful to land. Everything starts to click.' },
  { no: 'III.', name: 'Make a little noise', title: 'Finally, we make it real.', text: 'We build the thing, sweat the details, and send it out into a world that needs a little more you.' },
]

function Star({ className = '' }) { return <Asterisk className={`star-icon ${className}`} strokeWidth={1.2} aria-hidden="true" /> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.appear').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="velora-header"><a className="velora-logo" href="#top" aria-label="Velora home">VEL<span>O</span>RA<i>®</i></a><button className="nav-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button><nav className={menuOpen ? 'velora-nav nav-active' : 'velora-nav'} aria-label="Main navigation"><a href="#work" onClick={closeMenu}>The work</a><a href="#studio" onClick={closeMenu}>The studio</a><a href="#services" onClick={closeMenu}>What we do</a><a className="nav-talk" href="#contact" onClick={closeMenu}>Say hello <ArrowUpRight size={15} /></a></nav></header>
    <main id="top">
      <section className="velora-hero">
        <div className="hero-index"><span>INDEPENDENT CREATIVE STUDIO</span><span>EST. 2016 — BROOKLYN / EVERYWHERE</span></div>
        <div className="hero-title-wrap"><h1>Make a little<br /><em>noise.</em></h1><div className="hero-side-note"><Star /><p>We make brands<br />feel like <em>something.</em></p></div></div>
        <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=90" alt="An immersive art installation in deep red light" /><div className="hero-image-overlay"></div><div className="hero-stamp"><span>GOOD IDEAS<br />GET AROUND</span><Star /></div><a className="hero-scroll" href="#intro"><span>SCROLL FOR THE GOOD STUFF</span><ArrowDown size={14} /></a><div className="hero-image-caption">A CREATIVE STUDIO FOR BRANDS WITH A POINT OF VIEW. <span>40°41' N — 73°59' W</span></div></div>
        <div className="hero-bottomline"><span>BRAND STRATEGY&nbsp; · &nbsp;IDENTITY&nbsp; · &nbsp;DIGITAL&nbsp; · &nbsp;CAMPAIGNS</span><span>LESS SAME. MORE YOU. <ArrowDownRight size={14} /></span></div>
      </section>

      <section className="intro-section" id="intro"><div className="intro-top appear"><span className="section-kicker"><Star /> NOT ANOTHER AGENCY</span><span className="section-number">01 — 05</span></div><div className="intro-main"><h2 className="appear">The world has<br />enough <span>ordinary.</span><br />Let’s make it<br /><em>feel something.</em></h2><div className="intro-copy appear"><p className="intro-big">Velora is a small, independent creative studio for brands ready to be a little more <em>themselves.</em></p><p>We find the thing only you can say, then give it a voice, a look, and a life of its own. No borrowed formulas. No beige-on-beige. Just thoughtful work with a pulse.</p><a className="underlined-link" href="#studio">A little about us <ArrowUpRight size={15} /></a></div></div><div className="intro-scribble" aria-hidden="true">✳</div></section>

      <section className="services-section" id="services"><div className="services-head appear"><div><span className="section-kicker"><Star /> THE THINGS WE DO</span><h2>Small studio.<br /><em>Big feelings.</em></h2></div><p>Good work starts with the right question. These are some of our favourite answers.</p></div><div className="services-list">{services.map((service) => <article className="service-row appear" key={service.number}><span className="service-count">{service.number}</span><h3>{service.title}<br /><em>{service.line}</em></h3><p>{service.text}</p><ArrowUpRight className="service-arrow" size={22} /></article>)}</div><div className="services-tail"><span>GOOD THINKING, FROM FIRST THOUGHT TO FINAL PIXEL.</span><a href="#contact">Bring us a challenge <ArrowRight size={15} /></a></div></section>

      <section className="portfolio-section" id="work"><div className="portfolio-top appear"><span className="section-kicker"><Star /> A FEW FAVOURITE THINGS</span><span>SELECTED WORK / 2022—25</span></div><div className="portfolio-heading appear"><h2>Out in the<br /><em>world.</em></h2><p>Good ideas are meant to get out there.<br />A few we helped along the way.</p></div><div className="project-list">{projects.map((project, index) => <article className={`portfolio-card ${project.cls} appear`} key={project.name}><a href="#contact" aria-label={`Discuss a project like ${project.name.replace('\n', ' ')}`}><div className="portfolio-art"><img src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1300&q=85`} alt="" /><span className="portfolio-count">{project.label} / 03</span><span className="portfolio-arrow"><ArrowUpRight size={23} /></span><div className="project-art-title">{project.name.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</div><span className="project-art-spark"><Star /></span></div><div className="portfolio-meta"><div><span>{project.type}</span><h3>{project.detail}</h3></div><ArrowUpRight size={18} /></div></a></article>)}</div><div className="portfolio-outro"><span>GOOD THINGS HAPPEN WHEN WE MAKE THEM TOGETHER.</span><a href="#contact">Have something in mind? <ArrowRight size={15} /></a></div></section>

      <section className="process-section"><div className="process-heading appear"><div><span className="section-kicker"><Star /> A GOOD WAY OF WORKING</span><h2>Feel first.<br /><em>Figure it out.</em></h2></div><p>No 87-slide decks. No mysterious process. Just good people, asking good questions, and making good things together.</p></div><div className="process-grid">{steps.map((step, index) => <article className="process-card appear" key={step.no} style={{ '--step': `${index * 130}ms` }}><div className="process-top"><span>{step.no}</span><Star /></div><span className="process-name">{step.name}</span><h3>{step.title}</h3><p>{step.text}</p><div className="process-line"><i /></div></article>)}</div><div className="process-note"><span>NO MAGIC FORMULA. JUST A GOOD PROCESS.</span><span>AND A LITTLE BIT OF MAGIC, MAYBE.</span></div></section>

      <section className="studio-section" id="studio"><div className="studio-image appear"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85" alt="Sunlit creative studio filled with plants and collected objects" /><div className="studio-image-note">A GOOD PLACE<br />TO GET LOST<br /><em>IN AN IDEA.</em></div><span className="studio-image-caption">OUR LITTLE CORNER OF THE WORLD · BROOKLYN, NY</span></div><div className="studio-copy appear"><span className="section-kicker"><Star /> A SMALL INTRODUCTION</span><h2>Good work<br />comes from<br /><em>good people.</em></h2><p>We’re a tight-knit crew of strategists, designers, and chronic idea-collectors. Big on collaboration, allergic to ego, and always up for doing the work that means something.</p><p>We stay small on purpose. It means you get the people you meet, the thinking you came for, and a studio that gives a damn about every last detail.</p><div className="studio-signoff"><span>HERE FOR THE GOOD STUFF SINCE 2016</span><span className="signature">The Velora crew <Star /></span></div></div></section>

      <section className="contact-section" id="contact">
        <div className="contact-top appear"><span className="section-kicker"><Star /> YOUR MOVE</span><span>05 — 05</span></div>
        <div className="contact-body">
          <div className="contact-lead appear"><h2>Something<br />on your <em>mind?</em></h2><p>A half-formed idea. A big, impossible brief. A brand that doesn’t feel like you anymore. We’re all ears.</p><a className="contact-direct" href="mailto:hello@velora.studio">HELLO@VELORA.STUDIO <ArrowUpRight size={16} /></a></div>
          <form className="velora-form appear" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <span className="form-intro">A NOTE IS A GOOD PLACE TO START.</span>
            <label>Your name<input name="name" autoComplete="name" placeholder="What should we call you?" required /></label>
            <label>Your email<input type="email" name="email" autoComplete="email" placeholder="The one you actually check" required /></label>
            <label>What’s on your mind?<textarea name="message" rows="3" placeholder="Give us the good bits..." required></textarea></label>
            <button type="submit">{sent ? <>Note received <Check size={16} /></> : <>Send the note <ArrowUpRight size={17} /></>}</button>
            {sent && <p className="sent-message" role="status">Thanks. We’ll be in touch soon, promise.</p>}
            <small>We keep things between us. Pinky promise.</small>
          </form>
        </div>
        <div className="contact-bottom"><span>BROOKLYN, NEW YORK · WORKING EVERYWHERE</span><span>GOOD PEOPLE. GOOD WORK. GOOD ON PURPOSE.</span></div>
      </section>
    </main>
    <footer className="velora-footer"><a className="footer-wordmark" href="#top">VEL<span>O</span>RA<Star /></a><div className="footer-center"><span>INDEPENDENT BY NATURE. IMPOSSIBLE TO COPY.</span><a href="mailto:hello@velora.studio">COME SAY HELLO <MoveUpRight size={13} /></a></div><div className="footer-right"><span>© VELORA STUDIO 2025</span><a href="#top">BACK TO THE TOP ↑</a></div></footer>
  </>
}

export default App
