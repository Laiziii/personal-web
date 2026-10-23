import { useRef, useState } from "react";
import { interests } from "../content";
import { Icon } from "../components/Icons";

export function Interests() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef([]);
  const interest = interests[selected];
  function navigate(event, index) {
    let next;
    if (["ArrowDown", "ArrowRight"].includes(event.key))
      next = (index + 1) % interests.length;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key))
      next = (index - 1 + interests.length) % interests.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = interests.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }
  return (
    <section
      className="interests-section section"
      id="interests"
      aria-labelledby="interests-title"
    >
      <div className="wrap">
        <div className="section-kicker">
          <span>02 /</span> MANY INTERESTS. ONE PERSON.
        </div>
        <div className="section-heading">
          <h2 id="interests-title">
            A few things
            <br />
            <span className="serif">I get curious about.</span>
          </h2>
          <p>
            Usually asking why.
            <br />
            Occasionally adjusting my PC settings.
          </p>
        </div>
        <div className="interests-layout">
          <div
            className="interest-tabs"
            role="tablist"
            aria-label="Explore my interests"
            aria-orientation="vertical"
          >
            {interests.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-controls="interest-panel"
                aria-selected={index === selected}
                tabIndex={index === selected ? 0 : -1}
                ref={(el) => (tabs.current[index] = el)}
                key={item.id}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => navigate(event, index)}
              >
                <span className="tab-number" aria-hidden="true">
                  {item.number}
                </span>
                <Icon name={item.icon} />
                <span>{item.label}</span>
                <Icon name="diagonal" className="tab-arrow" />
              </button>
            ))}
          </div>
          <div
            className="interest-panel"
            id="interest-panel"
            role="tabpanel"
            aria-labelledby={`tab-${interest.id}`}
            tabIndex={0}
          >
            <div className="interest-panel-top">
              <span>{interest.label.toUpperCase()}</span>
              <Icon name={interest.icon} />
            </div>
            <div className="interest-panel-content" key={interest.id}>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
              <div className="topic-tags">
                {interest.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              <div className="interest-note">
                <span>{interest.noteLabel}</span>
                <p>{interest.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
