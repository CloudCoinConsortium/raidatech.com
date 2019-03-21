# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# Do not include timestamp in static files
ENV['RAILS_ASSET_ID'] = ''