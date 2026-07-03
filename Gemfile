source 'https://rubygems.org'

# We deliberately do NOT use the `github-pages` gem: it pins Jekyll to an
# old 3.x version and drags in a huge, slow-moving dependency tree. Instead
# we run Jekyll directly and deploy via a GitHub Actions workflow
# (see .github/workflows/deploy.yml), which is the approach GitHub now
# recommends for anything beyond their small set of "supported" themes.
gem 'jekyll', '~> 4.3'

gem 'jekyll-feed'
gem 'jekyll-gist'
gem 'jekyll-redirect-from'
gem 'jekyll-seo-tag'

# Jekyll's live-reload server needs this explicitly on Ruby 3+.
gem 'webrick', '~> 1.8'

# Ruby 3.4 removed these from the standard library; Jekyll's toolchain
# still needs them.
gem 'csv'
gem 'base64'
gem 'bigdecimal'

group :jekyll_plugins do
  # (kept empty here on purpose — plugins are listed above and mirrored in
  # _config.yml's `plugins:` list, which is what Jekyll actually reads)
end
