#!/bin/bash -x
# rails static:stop_rails_server
# rails static:stop_static_server
# rm -rf out/
# mkdir out
# rm -rf public/assets/

# rails assets:clean
# RAILS_ENV=static rails assets:precompile


# RAILS_ENV=static rails s -p 3000 -d

# sleep 5s

# cd out
# wget -mnH http://localhost:3000/


# cd ../
# rsync -ruv --exclude=.svn/ public/ out/

# cd out
# heel --daemonize --port 8000

RAILS_ENV=static rails static:generate2