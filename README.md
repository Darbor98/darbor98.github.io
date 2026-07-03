# 🌱 Spring

A one-page, two-column [Jekyll](http://jekyllrb.com) theme that pairs beautifully styled content with contextual media.

> This is a modernized fork of [connor-baer/spring](https://github.com/connor-baer/spring), updated to run on current Jekyll, Ruby, and Node, with the old Gulp 3 pipeline replaced by Sass + esbuild, and deployment automated through GitHub Actions.

## Usage

You'll need [Ruby](https://www.ruby-lang.org/) (3.x) with `bundler`, and [Node](https://nodejs.org/) (18+) installed.

```bash
# Ruby gems
bundle install
# Node modules
npm install
```

Then run `npm start` to build the assets, watch for changes, and start the Jekyll server on port `4000`.

Other useful commands:

```bash
npm run build   # one-off build of CSS/JS into /assets
npm run watch   # rebuild CSS/JS on every change (no Jekyll server)
npm run serve   # just the Jekyll server (assumes assets are already built)
```

## Deployment

This repo deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): on every push to `main`, GitHub Actions builds the assets, builds the Jekyll site, and publishes it to GitHub Pages. In your repo settings, under **Settings → Pages → Build and deployment**, set the source to **GitHub Actions** (not "Deploy from a branch").

## Options

Spring includes some customizable options, applied via options in the `_config.yml` file. A standout feature is the dark theme.
Have a look at the [`_config.yml`](_config.yml) file for all available options.

## Contributing

**This theme is no longer actively maintained.** However, I welcome bug fixes and feature request through [pull requests](https://github.com/connor-baer/spring/compare). If you don't feel comfortable making code changes, feel free to [open an issue](https://github.com/connor-baer/spring/issues/new), perhaps somebody else will help out.

## License

Open sourced under the [MIT license](LICENSE.md).

💚
