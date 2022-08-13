# Git

`TODO-简介`

## Git的特点优势

`TODO`

## Git与Subversion的联系和区别

`TODO`

## 安装配置

`TODO`

### 配置（与Github关联）

- 修改本地配置config
- 生成rsa文件，以及ssh
- 在Github上创建ssh key

## 常用命令

### 代码管理

- 拉取
- 提交
- 推送

### 分支管理

```sh
# 占位符说明
# <local>: 表示本地分支名称
# <remote>: 表示远程分支名称
```

- 创建分支

```sh
# 创建【本地】分支
git branch <local>
# 创建【远程】分支
git push origin <local>:<remote>
```

- 切换分支

```sh
# 切换分支
git switch <local>
# 创建并切换分支
git checkout -b <local>
```

- 删除分支

```sh
# 删除【本地】分支
# 常规删除
git branch -d <local>
# 强制删除
git branch -D <local>

# 删除【远程】分支
# 常规删除
git push origin -d <remote>
# 强制删除
git push origin -D <remote>
# 推送空分支
git push origin :<remote>

```

- 跟踪分支

```sh
# 当存在本地分支，想远程创建同名分支+跟踪
git push [-u|--set-upstream] origin <local>
# 当远程存在分支，想本地创建同名分支+跟踪
git checkout --track origin/<remote>
```
