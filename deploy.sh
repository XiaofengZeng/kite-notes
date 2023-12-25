#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git add -A
git commit -m 'docs(deploy): deploy to github pages'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:XiaofengZeng/kite-notes.git main:gh-pages

cd -