#!/usr/bin/env bash
echo "---------------------- Building locally. --------------------------------------"
cd front
yarn build
cd ..
echo "---------------------- Copying static assets to /server. ----------------------"
DATE=`date '+%Y-%m-%d %H:%M:%S'`
rm -R $PWD/server/front-end
mkdir $PWD/server/front-end
cp -a $PWD/front/dist/. $PWD/server/front-end
echo "---------------------- Pushing to GIT. ----------------------------------------"
git add .
MSG=". Deployed: $DATE"
git commit -m "$1 $MSG"
git push
echo "---------------------- Deploying lim ------------------------------------------"
ssh hamishclulee@more-art-than.science 'cd /var/www/more-art-than.science && git reset --hard && git pull && sudo systemctl restart mats.service'
echo "---------------------- Deploy complete. Have a nice day. ----------------------"
