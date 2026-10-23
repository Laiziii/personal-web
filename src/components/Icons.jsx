export function Icon({ name = "arrow", className = "", ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    diagonal: <path d="M5 19 19 5M5 5h14v14" />,
    plus: <path d="M12 5v14M5 12h14" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>
    ),
    moon: <path d="M20 15.2A9 9 0 0 1 8.8 4 9 9 0 1 0 20 15.2Z" />,
    computer: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
        <path d="M20 2v4m-2-2h4" />
      </>
    ),
    health: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
        <path d="M5 12h4l2-4 2 8 2-4h4" />
      </>
    ),
    game: (
      <>
        <path d="M7 7h10c3 0 5 9 3 11-1.5 1.5-4-2-5-2H9c-1 0-3.5 3.5-5 2-2-2 0-11 3-11Z" />
        <path d="M6 11h4m-2-2v4m7-2h.01M18 13h.01" />
      </>
    ),
    chart: (
      <>
        <path d="M4 3v17h17M8 15l4-5 4 3 5-7m-5 0h5v5" />
      </>
    ),
    growth: (
      <>
        <path d="M12 21v-8M12 15C5 15 3 11 3 5c6 0 9 3 9 8m0-2c0-6 4-8 9-8 0 6-3 10-9 10" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    github: (
      <>
        <path
          d="M9 19c-4.3 1.3-4.3-2.2-6-2.6M15 22v-3.4c0-1 .1-1.5-.5-2.1 3.5-.4 7.1-1.7 7.1-7.6A6 6 0 0 0 20 4.7 5.6 5.6 0 0 0 19.8.5S18.5.1 15.4 2a14.4 14.4 0 0 0-7.9 0C4.4.1 3.1.5 3.1.5a5.6 5.6 0 0 0-.2 4.2 6 6 0 0 0-1.6 4.2c0 5.9 3.6 7.2 7.1 7.6-.5.5-.7 1.1-.6 2.1V22"
          transform="translate(1 1) scale(.9)"
        />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
