---
index: false
icon: laptop-code
category:
  - 部署/使用手册
tags:
  - Docker
date: 2022-10-25
---

# Docker

## 安装

### 1. 源码安装

TODO...

### 2. yum安装<sup>1</sup>

```sh
# 更新yum
yum update
# 安装工具包
yum install -y yum-utils

# 建立Docker仓库 (映射仓库地址)
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# 安装Docker引擎
yum install docker-ce docker-ce-cli containerd.io

# 启动Docker
systemctl start docker

# 检查Docker是否正常
docker run hello-world
# 列表中存在hello-world则表示正常
docker ps
```

## 配置

### 切换仓库镜像源<sup>2</sup>

- 对于systemd系统：Ubuntu16.04+、Debian8+、CentOS7

```sh
# 检查配置是否存在？
ll /etc/docker/daemon.json
# 不存在，则追加内容
cat >> /etc/docker/daemon.json << EOF
{"registry-mirrors":["https://docker.mirrors.ustc.edu.cn/"]}
EOF
# 存在，则修改内容
vim /etc/docker/daemon.json
# 内容如下
# {"registry-mirrors":["https://docker.mirrors.ustc.edu.cn/"]}

# 重启Docker
systemctl daemon-reload
systemctl restart docker
```

## 常用指令

```sh
# 开启docker服务
service docker start
# 启动 docker 后台服务
systemctl start docker
# 重启docker守护进程
systemctl daemon-reload
# 重启docker服务
systemctl restart docker

# 拉取镜像
docker pull {image}:{version}
# 查看镜像列表
docker images
# 删除镜像
docker rmi {imageID}/{imageAlias}

# 查看容器,不加-a查看正在运行的，加上-a查看所有
docker ps -a
# 移除容器
docker rm {containerID}/{containerAlias}
# 关闭一个已启动容器 
docker stop {containerID}/{containerAlias}
# 启动一个关闭的容器 
docker start {containerID}/{containerAlias}
# 查看一个容器的详情
docker inspect {containerID}/{containerAlias}
# 进入容器内部
docker exec -it {containerID}/{containerAlias} /bin/bash
# 生成镜像
docker build ...
# 运行容器
docker run -d ... 
```

## 参考文档

1. [Docker安装 (完整详细版)](https://blog.csdn.net/BThinker/article/details/123358697)
2. [Docker 镜像加速](https://www.runoob.com/docker/docker-mirror-acceleration.html)
