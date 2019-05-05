#!/bin/bash -x
rails static:stop_rails_server
rails static:stop_static_server
rm -rf out/
mkdir out
rm -rf public/assets/

rails assets:clean
RAILS_ENV=static rails assets:precompile

# read -p "Press [Enter] key to continue..."

RAILS_ENV=static rails s -p 3000 -d

sleep 5s

cd out
wget -mnH http://localhost:3000/

# read -p "Press [Enter] key to continue..."

cd ../
rsync -ruv --exclude=.svn/ public/ out/

cd out
heel --daemonize --port 8000