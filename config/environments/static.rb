require File.expand_path('../development', __FILE__)
# environment for serving static pages like error pages to upload to S3
Workherder::Application.configure do
  config.serve_static_assets = true

  # Compress JavaScripts and CSS
  config.assets.compress = true

  # Don't fallback to assets pipeline if a precompiled asset is missed
  config.assets.compile = false

  # Generate digests for assets URLs
  config.assets.digest = true
end