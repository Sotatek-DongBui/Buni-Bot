#/bin/sh
cd /home/sotatek/workspace/buni-api-dev/buni-api-islands
git fetch origin $1
git checkout origin $1
npm install
npm run build
pm2 reload 1_app_dev.json
pm2 reload 2_cronjob_dev.json
