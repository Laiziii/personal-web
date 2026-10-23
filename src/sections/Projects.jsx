import { academicProjects, projects } from "../content";
import { profile } from "../profile";
import { Icon } from "../components/Icons";

function NotifyVisual() {
  return (
    <div className="notify-visual" aria-hidden="true">
      <div className="preview-label">LESS CLUTTER. MORE ROOM TO THINK.</div>
      <div className="notify-window">
        <div className="window-chrome">
          <span>
            <i />
            <i />
            <i />
          </span>
          <span>Notify — your study space</span>
          <span>+</span>
        </div>
        <div className="notify-app">
          <div className="notify-sidebar">
            <strong>
              notify<span>.</span>
            </strong>
            <div className="notify-new">+ New notebook</div>
            <span className="mini-label">MY NOTEBOOKS</span>
            <div className="notebook selected">◻ &nbsp; Health & society</div>
            <div className="notebook">◻ &nbsp; Research methods</div>
            <div className="notebook">◻ &nbsp; Ideas & questions</div>
            <span className="sidebar-bottom">A little space to focus.</span>
          </div>
          <div className="notify-note">
            <span className="mini-label">HEALTH & SOCIETY / NOTES</span>
            <div className="note-title">Start with a question.</div>
            <p>
              A space to learn, connect ideas,
              <br />
              and make sense of the details.
            </p>
            <div className="mock-text-line" />
            <div className="mock-text-line short" />
            <div className="note-highlight">Good notes. Clearer thinking.</div>
            <div className="mock-text-line" />
            <div className="mock-text-line medium" />
            <div className="note-tabs">
              <span>Notes</span>
              <span>Summary</span>
              <span>Flashcards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function GameVisual() {
  return (
    <div className="game-visual" aria-hidden="true">
      <div className="preview-label">THE OPPONENT HAS OTHER PLANS.</div>
      <div className="game-score">
        <span>
          YOU <b>×</b>
        </span>
        <span>VS</span>
        <span>
          AI <b>○</b>
        </span>
      </div>
      <div className="mini-board">
        {["×", "○", "", "", "○", "×", "", "○", ""].map((mark, i) => (
          <span key={i} className={mark === "○" ? "o-mark" : ""}>
            {mark}
          </span>
        ))}
        <div className="winning-line" />
      </div>
      <div className="game-caption">
        <span className="small-dot" /> NOT EXACTLY PLAYING BY THE RULES.
      </div>
    </div>
  );
}
export function Projects() {
  return (
    <section
      className="projects-section section wrap"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-kicker">
        <span>03 /</span> FROM CURIOSITY TO SOMETHING REAL
      </div>
      <div className="section-heading">
        <h2 id="projects-title">
          Things I’m
          <br />
          <span className="serif">putting together.</span>
        </h2>
        <a
          className="text-link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore my GitHub <Icon name="diagonal" />
        </a>
      </div>
      <p className="section-intro">
        Personal experiments and academic work. A place to put ideas into
        practice, learn, and keep improving.
      </p>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project project-${project.id}`} key={project.id}>
            <a
              className="project-preview"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
            >
              {project.id === "notify" ? <NotifyVisual /> : <GameVisual />}
              <span className="preview-arrow">
                <Icon name="diagonal" />
              </span>
            </a>
            <div className="project-category">{project.category}</div>
            <div className="project-title-row">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>
              <Icon name="diagonal" />
            </div>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <p className="project-note">{project.note}</p>
          </article>
        ))}
      </div>
      <a
        className="website-project"
        href={profile.repository}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="website-monogram">aa.</div>
        <div>
          <span className="project-category">YOU’RE HERE</span>
          <h3>This personal website</h3>
          <p>
            Exploring AI-assisted development through a space that feels like
            me.
          </p>
        </div>
        <span className="website-stack">React / Vite / CSS</span>
        <Icon name="diagonal" />
      </a>
      <div className="academic-heading">
        <h3>From the classroom</h3>
        <span>ACADEMIC PROJECTS & COURSEWORK</span>
      </div>
      <div className="academic-list">
        {academicProjects.map((project) => (
          <details key={project.id} className="academic-project">
            <summary>
              <span className="academic-number">{project.number}</span>
              <span className="academic-title">{project.title}</span>
              <span className="academic-type">{project.type}</span>
              <Icon name="plus" />
            </summary>
            <div className="academic-detail">
              <p>{project.summary}</p>
              <p>{project.detail}</p>
              <div className="topic-tags">
                {project.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
