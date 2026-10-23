export function InterestMap() {
  return (
    <div className="interest-map" aria-hidden="true">
      <div className="map-top">
        <span>FIG. 01</span>
        <span>A FEW CONNECTED WORLDS</span>
        <span>+</span>
      </div>
      <svg className="map-drawing" viewBox="0 0 460 430" fill="none">
        <path
          d="M230 20v385M20 215h420"
          className="map-guide"
          strokeDasharray="2 7"
        />
        <circle cx="230" cy="215" r="148" className="map-outer" />
        <circle cx="230" cy="215" r="122" className="map-inner" />
        <ellipse
          cx="230"
          cy="215"
          rx="150"
          ry="57"
          transform="rotate(-40 230 215)"
          className="map-orbit"
        />
        <ellipse
          cx="230"
          cy="215"
          rx="150"
          ry="57"
          transform="rotate(40 230 215)"
          className="map-orbit faint"
        />
        <ellipse cx="230" cy="215" rx="62" ry="148" className="map-inner" />
        <path d="M83 215h294M104 139h252M104 291h252" className="map-inner" />
        <circle cx="338" cy="112" r="7" className="map-point" />
        <circle cx="107" cy="298" r="4" className="map-point small" />
        <path d="M338 112h47V81M107 298H49v34" className="map-leader" />
        <text x="371" y="68" className="map-label">
          TECHNOLOGY
        </text>
        <text x="24" y="351" className="map-label">
          HEALTH &amp; SOCIETY
        </text>
        <rect
          x="146"
          y="162"
          width="168"
          height="108"
          rx="54"
          className="map-monogram-bg"
        />
        <text x="230" y="245" textAnchor="middle" className="map-monogram">
          aa.
        </text>
        <path d="M49 75h14m-7-7v14M389 340h14m-7-7v14" className="map-cross" />
      </svg>
      <div className="map-bottom">
        <span>
          DIFFERENT INTERESTS.
          <br />
          SAME CURIOSITY.
        </span>
        <svg
          className="map-small-orbit"
          viewBox="0 0 40 20"
          width="40"
          height="20"
        >
          <path
            d="M3 10h34m-6-6 6 6-6 6M9 4l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
      <span className="map-annotation">Still connecting the dots.</span>
    </div>
  );
}
