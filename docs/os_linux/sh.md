# 常用脚本

## 配置JDK环境

```sh
#!/bin/bash 
# 安装包文件（具体到文件名）
SOURCE_FILE=/opt/soft/jdk-8u261-linux-x64.tar.gz
# 安装目录
INSTALL_PATH=/opt/java
# JDK版本号
JDK=jdk1.8.0_261

echo "install jdk..."
# 解压
echo "tar ing..."
mkdir $INSTALL_PATH
tar -zxvf $SOURCE_FILE -C $INSTALL_PATH
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
