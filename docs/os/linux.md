# Linux

## 常用操作

### 基本操作语法

- `&` 表示衔接操作，完成<u>操作符前</u>的指令后立即操作后续衔接的指令
- `|` 表示管道操作符，用于将该<u>操作符前</u>的操作返回结果作为<u>操作符后</u>的输入

### 用户/组操作

```sh
# 添加组
# groupadd <opt> <group>
# -g：指定用户组ID
groupadd -g <gid> <group>

# 添加用户
# useradd <opt> <user>
# -u：用户，指定用户ID
# -g：用户组，指定用户组ID
# -m：用户主目录
useradd -m <mainDir> -u <uid> -g <gid> <user>

# 用户附加组
# -G: 修改用户所属的附加群组
usermod -G <group1> [<group2>...]

# 删除组
groupdel <group>

# 删除用户
userdel <user>
```

### 文件操作

#### 创建目录

```sh
# -p 表示如果不存在在新建
mkdir -p <dirName>
```

#### 创建文件

```sh
# 单纯新建文件
touch <file>

# 输出指定内容并新建
# >：表示如果现有文件已经存在则覆盖
echo <content> > <file>
cat > <file>
```

#### 目录/文件授权

![文件权限](./img/linux-file.jpg)

**文件类型（file-type）**

- `d` -> 目录
- `-` -> 文件；
- `l` -> 表示为链接文档(link file)；
- `b` -> 表示为装置文件里面的可供储存的接口设备(可随机存取装置)；
- `c` -> 表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)。

**rwx对照表：**

- `r` -> readable，权重为4
- `w` -> writeable，权重为2
- `x` -> executable，权重为1

| value | permission |     detail     |
| ----- | :--------: | :------------: |
| 1     |     x      |      执行      |
| 2     |     w      |      写入      |
| 3     |    -wx     |   写入+执行    |
| 4     |     r      |      读取      |
| 5     |    r-x     |   读取+执行    |
| 6     |    rw-     |   读取+写入    |
| 7     |    rwx     | 读取+写入+执行 |

```sh
# 目录/文件赋予权限
# 修改目录/文件所属用户与组
# -R: 表示递归设置
chown <user>[:<group>] [<dirName>|<fileName>]

# 修改目录/文件权限
chmod <permssion> [<dirName>|<fileName>]
# chmod 755 file.txt
```

### 查看系统进程情况

```sh
# 查看进程是否存在（可获取进程号）
ps -ef | grep [<key>|<port>...]

# 杀死进程
kill -9 <pid>
```

### 查看机器硬件使用情况

```sh
# 查看内存（内存总量+内存使用量+内存使用率）
# free -k：以kb为单位，查看内存使使用情况
# sed -n '2p'：流编辑器，只输出第二行（输出那些匹配的行）
# awk '{print $2}'：每行按空格或TAB分割，输出文本中的第二项
free -k | sed -n '2p' | awk '{print "total: "$2" KB, used: "$3" KB,used percent: "$3*100/$2"%"}'
```
