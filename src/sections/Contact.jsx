import { useRef, useState, useEffect } from "react";
import { profile } from "../profile";
import { Icon } from "../components/Icons";

export function Contact() {
  const [copyState, setCopyState] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyContact() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email || profile.github);
      setCopyState("copied");
      timer.current = setTimeout(() => setCopyState(""), 3000);
    } catch {
      setCopyState("error");
    }
  }
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-layout">
        <div>
          <div className="section-kicker">
            <span>05 /</span> A CONVERSATION IS A GOOD START
          </div>
          <h2 id="contact-title">
            A role. A project.
            <br />
            <span className="serif">A shared interest.</span>
          </h2>
          <p>
            I’m open to job opportunities, freelance collaborations, and
            conversations with people who are curious about similar things.
          </p>
          <div className="contact-actions">
            <a
              className="button primary"
              href={profile.email ? `mailto:${profile.email}` : profile.github}
              {...(!profile.email
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {profile.email ? "Say hello by email" : "Find me on GitHub"}
              <Icon name="diagonal" />
            </a>
            <button className="copy-button" type="button" onClick={copyContact}>
              {copyState === "copied"
                ? "Copied"
                : profile.email
                  ? "Copy email"
                  : "Copy profile link"}
              <Icon name={copyState === "copied" ? "check" : "copy"} />
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyState === "copied"
              ? "Contact link copied to your clipboard."
              : copyState === "error"
                ? `You can copy this directly: ${profile.email || profile.github}`
                : ""}
          </p>
        </div>
        <div className="contact-aside">
          <Icon name="spark" />
          <span>
            Different backgrounds.
            <br />
            Interesting conversations.
          </span>
          <div className="contact-location">
            <Icon name="pin" />
            {profile.location}, Canada
          </div>
        </div>
      </div>
    </section>
  );
}
