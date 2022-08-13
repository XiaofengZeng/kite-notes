# 常用脚本

## JDK环境-安装+配置

### 前置条件

1. 准备安装包。如`jdk-8u261-linux-x64.tar.gz`

### 脚本

主要内容：

1. 解压jdk压缩包到指定目录，并更名
2. 对jdk进行环境配置
3. 测试java指令

```sh
#!/bin/bash 
# 安装包文件（具体到文件名）
INSTALL_PKG=/opt/soft/jdk-8u261-linux-x64.tar.gz
# 安装目录
INSTALL_PATH=/opt/java
# JDK版本号
JDK=jdk1.8.0_261

echo "install jdk..."
# 解压
echo "tar ing..."
mkdir $INSTALL_PATH
tar -zxvf $INSTALL_PKG -C $INSTALL_PATH
echo "tar end"

# 配置环境变量
echo "edit /etc/profile content"
cat >> /etc/profile << EOF
JAVA_HOME=$INSTALL_PATH/$JDK
JRE_HOME=\$JAVA_HOME/
PATH=\$PATH:\$JAVA_HOME/bin:\$JRE_HOME/bin
CLASSPATH=.:\$JAVA_HOME/lib/dt.jar:\$JAVA_HOME/lib/tools.jar:\$JRE_HOME/lib
export JAVA_HOME JRE_HOME PATH CLASSPATH
EOF
echo "edit end and source profile"

# 使环境变量生效
source /etc/profile
echo "jdk install end"

# 检查配置
echo "test jdk"
java -version
```

## Node环境-安装+配置

### 前置条件

1. 准备安装包。如`node-v16.15.0-linux-x64.tar`

### 脚本

主要内容：

1. 解压nodejs压缩包到指定目录，并更名
2. 对node、npm指令进行软连接
3. 测试node、npm指令
4. 修改npm镜像

```sh
#!/bin/bash 
# 安装包文件（具体到文件名）
INSTALL_PKG=/opt/soft/node-v16.15.0-linux-x64.tar
# 安装目录
INSTALL_PATH=/opt/nodejs
# JDK版本号
NODEJS=node-v16.15.0

echo "install nodejs..."
# 解压
echo "tar ing..."
mkdir $INSTALL_PATH
tar -xf $INSTALL_PKG -C $INSTALL_PATH
mv $INSTALL_PATH/node-v16.15.0-linux-x64 $INSTALL_PATH/$NODEJS
echo "tar end"

# 软链接
echo "build weaked link"
ln -s $INSTALL_PATH/$NODEJS/bin/node /usr/local/bin
ln -s $INSTALL_PATH/$NODEJS/bin/npm /usr/local/bin
echo "build weaked link end"

# 检查配置
echo "test node"
node -v
echo "test npm"
npm -v

# 修改npm镜像
npm config set registry https://registry.npm.taobao.org
```

## Maven环境-安装+配置

### 前置条件

1. 准备安装包。如`node-v16.15.0-linux-x64.tar`
2. （可选）maven配置文件（其中配置了仓库地址）。如`maven-settings.xml`

### 脚本

主要内容：

1. 解压maven安装包
2. 创建本地仓库目录
3. （可选）替换配置文件settings.xml
4. 写入系统环境变量
5. 测试mvn指令

```sh
#!/bin/bash 
# 安装包文件（具体到文件名）
INSTALL_PKG=/home/jenkins/apache-maven-3.6.3-bin.tar.gz
# 配置文件
CONFIG_FILE=/opt/soft/maven-settings.xml
# 安装目录
INSTALL_PATH=/opt/maven
# MAVEM版本号
MAVEM=apache-maven-3.6.3

echo "install maven..."
# 解压
echo "tar ing..."
mkdir $INSTALL_PATH
tar -zxvf $INSTALL_PKG -C $INSTALL_PATH
echo "tar end"

# 创建本地仓库目录
echo "mkdir local repo"
mkdir $INSTALL_PATH/$MAVEM/repo

# 配置文件替换
echo "replace file"
if [ ! -d $CONFIG_FILE ];then
  cp $CONFIG_FILE $INSTALL_PATH/$MAVEM/conf/settings.xml
fi

echo "edit /etc/profile content"
cat >> /etc/profile << EOF
MAVEN_HOME=$INSTALL_PATH/$MAVEM
PATH=$PATH:$MAVEN_HOME/bin
export MAVEN_HOME PATH
EOF

# 使环境变量生效
echo "edit end and source profile"
source /etc/profile
echo "maven install end"

# 测试
echo "test maven"
mvn -v
```