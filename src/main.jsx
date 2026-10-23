import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/dm-sans/wght.css";
import { profile } from "./profile";
import { strengths } from "./content";
import { Header } from "./components/Header";
import { Icon } from "./components/Icons";
import { InterestMap } from "./components/InterestMap";
import { Interests } from "./sections/Interests";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import "./styles.css";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="small-dot" /> BROCK UNIVERSITY STUDENT · ONTARIO,
              CANADA
            </div>
            <h1 id="hero-title">
              Hey, I’m
              <br />
              <span>
                Azeez <em>Adigun.</em>
              </span>
            </h1>
            <div className="hero-description">
              <span className="intro-line" />
              <p>
                A background in health and social sciences.
                <br className="desktop-break" /> A curiosity that goes{" "}
                <strong>well beyond the classroom.</strong>
              </p>
            </div>
            <p className="hero-detail">
              Technology, AI, public health, finance, gaming — I like
              understanding how things work, and seeing what I can make of them.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#about">
                Get to know me <Icon name="arrow" />
              </a>
              <a className="text-link" href="#projects">
                See what I’m building <Icon name="diagonal" />
              </a>
            </div>
          </div>
          <InterestMap />
          <div className="hero-footer">
            <span>CURIOUS BY NATURE. STILL FIGURING THINGS OUT.</span>
            <a href="#about">
              SCROLL TO EXPLORE <Icon name="arrow" className="arrow-down" />
            </a>
          </div>
        </section>
        <div className="interest-strip" aria-hidden="true">
          <div className="wrap">
            <span>Health & society</span>
            <span className="strip-plus">+</span>
            <span>Technology & AI</span>
            <span className="strip-plus">+</span>
            <span>Gaming</span>
            <span className="strip-plus">+</span>
            <span>Finance</span>
            <span className="strip-plus">+</span>
            <span>A little of everything</span>
          </div>
        </div>
        <section
          className="about-section section wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>01 /</span> A LITTLE CONTEXT
          </div>
          <div className="about-layout">
            <div>
              <h2 id="about-title">
                More than
                <br />
                <span className="serif">one thing.</span>
              </h2>
              <div className="about-margin-note">
                <span className="small-dot" /> ALWAYS LEARNING.
                <br /> &nbsp;&nbsp;&nbsp; NOT PRETENDING TO HAVE IT ALL FIGURED
                OUT.
              </div>
            </div>
            <div className="about-copy">
              <p className="lead">
                One minute I’m reading about epidemiology. The next, I’m looking
                into a graphics card, trying an AI tool, or figuring out how
                investing works.
              </p>
              <p>
                I’m a student at Brock University in St. Catharines, Ontario. My
                academic background spans public health, health sciences, and
                social sciences, but I’ve never been interested in staying
                inside one subject.
              </p>
              <p>
                I like asking questions, finding straightforward explanations,
                and putting ideas to use. I’m still exploring where those
                interests might take me — and I’m okay with that.
              </p>
              <div className="education">
                <div className="education-mark">b.</div>
                <div>
                  <span className="mini-label">
                    EDUCATION · SEPTEMBER 2023 — PRESENT
                  </span>
                  <h3>Brock University</h3>
                  <p>Academic background in health & social sciences</p>
                  <span className="education-location">
                    St. Catharines, Ontario, Canada
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Interests />
        <Projects />
        <section
          className="exploring-section section"
          id="exploring"
          aria-labelledby="exploring-title"
        >
          <div className="wrap">
            <div className="section-kicker">
              <span>04 /</span> WHAT I BRING & WHERE I’M GOING
            </div>
            <div className="exploring-layout">
              <div>
                <h2 id="exploring-title">
                  A foundation.
                  <br />
                  <span className="serif">An open mind.</span>
                </h2>
                <p className="exploring-intro">
                  Skills I’m developing through university and everyday
                  experience, alongside the things I’m making time to learn.
                </p>
                <div className="currently-note">
                  <Icon name="spark" />
                  <div>
                    <span className="mini-label">CURRENTLY EXPLORING</span>
                    <p>
                      AI-assisted development, practical digital projects,
                      financial literacy, and more confident communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="strengths">
                {strengths.map((strength, index) => (
                  <div className="strength" key={strength.title}>
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{strength.title}</h3>
                      <p>{strength.text}</p>
                    </div>
                    <Icon name="check" />
                  </div>
                ))}
                <p className="learning-note">
                  Learning in public, at my own pace. No expert labels required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="footer wrap">
        <div>
          <a className="wordmark" href="#home">
            azeez<span>.</span>
          </a>
          <span>A personal space. Always evolving.</span>
        </div>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#home" className="back-top">
          BACK TO TOP <Icon name="arrow" className="arrow-up" />
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
