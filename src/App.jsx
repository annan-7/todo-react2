import './App.css'

const features = [
  {
    title: 'Fluid Motion',
    text: 'Smooth transitions and floating accents create a premium, modern feel.',
  },
  {
    title: 'Dark Neon UI',
    text: 'Glowing gradients and glassmorphism-inspired cards give the page depth.',
  },
  {
    title: 'Responsive by Design',
    text: 'Looks sharp on mobile, tablet, and desktop with adaptive layouts.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <nav className="topbar">
          <div className="brand">
            <span className="brand-dot" />
            NeonFlow
          </div>
          <div className="topbar-links">
            <a href="#features">Features</a>
            <a href="#preview">Preview</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Modern animation website</span>
            <h1>Craft immersive experiences with motion, light, and depth.</h1>
            <p>
              Build a visually striking web presence with layered gradients,
              animated glow, and sleek cards that feel alive.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#preview">
                Explore the design
              </a>
              <a className="secondary-btn" href="#features">
                See features
              </a>
            </div>
          </div>

          <div className="hero-preview" id="preview">
            <div className="preview-panel glass-card">
              <div className="panel-header">
                <span />
                <span />
                <span />
              </div>
              <div className="panel-body">
                <div className="stats-row">
                  <div>
                    <strong>98%</strong>
                    <span>motion smoothness</span>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <span>visual impact</span>
                  </div>
                </div>
                <div className="animated-grid">
                  <div className="grid-card tall" />
                  <div className="grid-card" />
                  <div className="grid-card wide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        {features.map((feature, index) => (
          <article className="feature-card glass-card" key={feature.title}>
            <span className="feature-index">0{index + 1}</span>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
