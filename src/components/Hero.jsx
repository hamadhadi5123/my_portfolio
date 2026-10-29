import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const actionsRef = useRef(null);
  const blobRef = useRef(null);
  const badgeRef = useRef(null);
  const videoBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        videoBgRef.current,
        { opacity: 0 },
        { opacity: 0.18, duration: 1.6 }
      )
      .fromTo(
        kickerRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=1.2'
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.7'
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        blobRef.current,
        { opacity: 0, scale: 0.92, rotation: -2 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'back.out(1.4)' },
        '-=1.1'
      )
      .fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(2)' },
        '-=0.5'
      );

      // 2. Floating Breathing Blob Animation
      gsap.to(blobRef.current, {
        y: -14,
        rotation: 1.2,
        duration: 3.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 3. Subtle Interactive Parallax on Mouse Move
      const handleMouseMove = (e) => {
        if (!blobRef.current) return;
        const { clientX, clientY } = e;
        const xOffset = (clientX / window.innerWidth - 0.5) * 20;
        const yOffset = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(blobRef.current, {
          x: xOffset,
          y: yOffset,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Ambient Looping Video Background */}
      <div className="hero-video-backdrop" ref={videoBgRef}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-ambient-video"
          src="./videos/hero-bg.mp4"
        />
        <div className="hero-video-vignette"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-kicker" ref={kickerRef}>
            <span>SOFTWARE</span> / <span>MOBILE</span> / <span>AI &amp; DATA</span>
          </div>

          <h1 className="hero-title" ref={titleRef}>
            <span className="hero-author-label">Muhammad Hamad Asghar</span>
            New possibilities for <br />
            <span className="hero-highlight">ambitious software</span>
          </h1>

          <p className="hero-subtitle" ref={subtitleRef}>
            Undergraduate Computer Science student at <strong>Riphah International University</strong> (7th semester). Engineering modern mobile applications, game physics, and intelligent data systems that transform complex challenges into elegant solutions.
          </p>

          <div className="hero-actions" ref={actionsRef}>
            <a href="#projects" className="btn btn-pill-dark">
              Explore projects
            </a>
            <a href="#contact" className="btn btn-pill-outline">
              Get in touch
            </a>
          </div>
        </div>

        {/* Right Column: Organic Curved Blob with Video & Portrait */}
        <div className="hero-visual-wrapper">
          <div className="hero-organic-blob" ref={blobRef}>
            {/* Embedded Ambient Video in the Blob */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="blob-video-layer"
              src="./videos/hero-bg.mp4"
            />
            {/* Real Portrait of Hamad */}
            <img
              src="./images/profile.jpg"
              alt="Muhammad Hamad Asghar"
              className="blob-portrait-layer"
              onError={(e) => {
                e.currentTarget.src = './images/avatar.svg';
              }}
            />
            <div className="blob-gradient-overlay"></div>
          </div>

          {/* Floating Status Badge */}
          <div className="hero-floating-badge" ref={badgeRef}>
            <span className="badge-pulse-dot"></span>
            <div className="badge-text">
              <strong>7th Semester BSCS</strong>
              <span>Riphah International Univ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
