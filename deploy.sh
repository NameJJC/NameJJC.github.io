#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist
# 初始化仓库
git init
# 初始化分支
#git branch page
# 切换分支
#git checkout -b page page
# 增加修改
git add .
# 提交修改
git commit -m 'deploy'
# 发布网站
git push -f https://github.com/NameJJC/namejjc.github.io.git master:page
# 如果是发布到自定义域名
#echo 'https://namejjc.github.io/' > CNAME

#git init
#git add .
#git commit -m 'deploy'
 
# 如果发布到 https://<USERNAME>.github.io 更新项目文件 !!!项目更新发布到master 分支
#git push -f https://github.com/NameJJC/namejjc.github.io.git master
# 发布网站  ！！ 发布网站是用page 分支
#git push -f https://github.com/NameJJC/namejjc.github.io.git page
#git push -f origin master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
