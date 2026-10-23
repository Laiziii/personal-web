# GitHub Pages deployment

Azeez approved public deployment in chat. The website is configured for GitHub Pages in `Laiziii/personal-web`.

The workflow in `.github/workflows/pages.yml` builds the locked dependencies with Node.js 24, uploads `dist/`, and deploys through GitHub's official Pages actions. Actions are pinned to verified release commits. Pushes to `main` and manual workflow runs trigger deployment.

## One-time hosting configuration

The repository must have GitHub Pages enabled with **GitHub Actions** as its source. This can be set in the repository's **Settings → Pages → Build and deployment → Source**. An authorized GitHub API client can also create the Pages site with `build_type: workflow`.

The default GitHub Actions token cannot create a Pages site; it can deploy after Pages is enabled. No hosting credentials or secrets belong in this repository.

The expected project URL is `https://laiziii.github.io/personal-web/`. Treat it as live only after a successful deployment and a public browser check. Relative asset URLs support this subpath as well as a domain root.

## Checks before publication

```sh
npm run test:e2e
```

This runs the production build and 14 browser checks. Also verify that the built site loads from `/personal-web/`, including fonts, JavaScript, styles, and the favicon. Public deployment requires `api.github.com` for GitHub Pages configuration and workflow status, and `laiziii.github.io` for public verification, when those hosts are restricted by the cloud network policy.
