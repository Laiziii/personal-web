# Azeez Adigun: personal website

A static site written in plain HTML, CSS and JavaScript. No framework and no build step.

## Files

```
index.html         all page content (edit text here)
css/styles.css     design tokens at the top, then styles section by section
js/main.js         SITE_CONFIG (your links) + theme, menu, animations, GitHub repos
assets/favicon.svg tab icon
serve.js           local preview server (node serve.js -> http://localhost:5173)
```

## Before going live: fill in the placeholders

Open `js/main.js` and edit `SITE_CONFIG` at the top:

| Field            | What to put                                  | If left empty                    |
|------------------|----------------------------------------------|----------------------------------|
| `email`          | The address you want public                  | Shows "Coming soon", not clickable |
| `githubUsername` | Just your username, e.g. `azeezadigun`       | Projects shows "Nothing public here yet" |
| `linkedinUrl`    | Full profile URL                             | Shows "Coming soon"              |

Once `githubUsername` is set, the site pulls your public, non-fork repos from GitHub
(name, description, language, last updated) and links to them. Add a description to each repo
on GitHub so it shows up nicely.

## Editing

- **Change colours:** edit the variables under `:root` (dark) and `:root[data-theme="light"]` in `css/styles.css`.
- **Add a portfolio project:** copy an entry in `js/projects.js`. It shows up as a card on the
  home page and gets its own page at `project.html?id=<its id>`. To offer a download, put the PDF in
  `files/` and set `pdf: "files/name.pdf"`; otherwise set `pdf: null` and write a `privateNote`.
  Only post PDFs of work you did on your own, with no student number or other private details.
- **Add an interest:** copy a `<details class="index-item">` block and renumber.
- **Hero rotating words:** edit `data-words` on the `.rotator-word` element (separate with `|`).

## Deploying

Live at https://laiziii.github.io/personal-web/

GitHub Pages serves the site straight from the `main` branch, so every push to `main`
updates it within a minute or two. `serve.js` is just for local preview.
