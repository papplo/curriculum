#!/usr/bin/env sh

set -e

npm run build

cd dist

touch .nojekyll

#git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:papplo/papplo.github.io.git feature/cd-github-pages

cd -