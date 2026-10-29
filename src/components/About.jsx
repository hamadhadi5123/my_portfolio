import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-card', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Profile Overview</span>
          <h2 className="section-title">About Me</h2>
          <div className="accent-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-badge">01</div>
            <h3 className="about-card-title">Academic Journey</h3>
            <p>
              Hello! My name is <strong>Hamad</strong>, and I am an enthusiastic and motivated undergraduate pursuing a Bachelor of Science in Computer Science in my 7th semester at <strong>Riphah International University</strong>. I focus on bridging solid theoretical foundations with production-quality engineering.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-badge">02</div>
            <h3 className="about-card-title">Technical Domain</h3>
            <p>
              My hands-on experience covers cross-platform mobile client development with Flutter &amp; Dart, object-oriented software design in C++ and Java, data analysis with Python, and interactive physics-driven game loops built in Unity.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-badge">03</div>
            <h3 className="about-card-title">Capstone &amp; Vision</h3>
            <p>
              Presently actively researching and engineering my final year project, <strong>DataMind FYP</strong>, exploring data-driven intelligence and machine learning pipelines, while adhering to modern CI/CD automation principles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
