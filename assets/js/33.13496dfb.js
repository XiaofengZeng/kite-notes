(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{333:function(s,a,t){"use strict";t.r(a);var n=t(13),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常用脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用脚本"}},[s._v("#")]),s._v(" 常用脚本")]),s._v(" "),a("h2",{attrs:{id:"jdk环境-安装-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jdk环境-安装-配置"}},[s._v("#")]),s._v(" JDK环境-安装+配置")]),s._v(" "),a("h3",{attrs:{id:"前置条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ol",[a("li",[s._v("准备安装包。如"),a("code",[s._v("jdk-8u261-linux-x64.tar.gz")])])]),s._v(" "),a("h3",{attrs:{id:"脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("主要内容：")]),s._v(" "),a("ol",[a("li",[s._v("解压jdk压缩包到指定目录，并更名")]),s._v(" "),a("li",[s._v("对jdk进行环境配置")]),s._v(" "),a("li",[s._v("测试java指令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包文件（具体到文件名）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PKG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/soft/jdk-8u261-linux-x64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/java\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JDK版本号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JDK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdk1.8.0_261\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install jdk..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar ing..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PKG")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit /etc/profile content"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nJAVA_HOME="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JDK")]),s._v("\nJRE_HOME=\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/\nPATH=\\"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),s._v("/bin\nCLASSPATH=.:\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar:\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JRE_HOME")]),s._v("/lib\nexport JAVA_HOME JRE_HOME PATH CLASSPATH\nEOF")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit end and source profile"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使环境变量生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jdk install end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test jdk"')]),s._v("\njava -version\n")])])]),a("h2",{attrs:{id:"node环境-安装-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node环境-安装-配置"}},[s._v("#")]),s._v(" Node环境-安装+配置")]),s._v(" "),a("h3",{attrs:{id:"前置条件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件-2"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ol",[a("li",[s._v("准备安装包。如"),a("code",[s._v("node-v16.15.0-linux-x64.tar")])])]),s._v(" "),a("h3",{attrs:{id:"脚本-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本-2"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("主要内容：")]),s._v(" "),a("ol",[a("li",[s._v("解压nodejs压缩包到指定目录，并更名")]),s._v(" "),a("li",[s._v("对node、npm指令进行软连接")]),s._v(" "),a("li",[s._v("测试node、npm指令")]),s._v(" "),a("li",[s._v("修改npm镜像")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包文件（具体到文件名）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PKG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/soft/node-v16.15.0-linux-x64.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/nodejs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JDK版本号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODEJS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node-v16.15.0\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install nodejs..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar ing..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PKG")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/node-v16.15.0-linux-x64 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODEJS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 软链接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build weaked link"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODEJS")]),s._v("/bin/node /usr/local/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NODEJS")]),s._v("/bin/npm /usr/local/bin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build weaked link end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test node"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" -v\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test npm"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改npm镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n")])])]),a("h2",{attrs:{id:"maven环境-安装-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maven环境-安装-配置"}},[s._v("#")]),s._v(" Maven环境-安装+配置")]),s._v(" "),a("h3",{attrs:{id:"前置条件-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件-3"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ol",[a("li",[s._v("准备安装包。如"),a("code",[s._v("node-v16.15.0-linux-x64.tar")])]),s._v(" "),a("li",[s._v("（可选）maven配置文件（其中配置了仓库地址）。如"),a("code",[s._v("maven-settings.xml")])])]),s._v(" "),a("h3",{attrs:{id:"脚本-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本-3"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("主要内容：")]),s._v(" "),a("ol",[a("li",[s._v("解压maven安装包")]),s._v(" "),a("li",[s._v("创建本地仓库目录")]),s._v(" "),a("li",[s._v("（可选）替换配置文件settings.xml")]),s._v(" "),a("li",[s._v("写入系统环境变量")]),s._v(" "),a("li",[s._v("测试mvn指令")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包文件（具体到文件名）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PKG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/jenkins/apache-maven-3.6.3-bin.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CONFIG_FILE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/soft/maven-settings.xml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/maven\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MAVEM版本号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAVEM")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("apache-maven-3.6.3\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install maven..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar ing..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PKG")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建本地仓库目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir local repo"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEM")]),s._v("/repo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置文件替换")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace file"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONFIG_FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CONFIG_FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEM")]),s._v("/conf/settings.xml\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit /etc/profile content"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nMAVEN_HOME="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEM")]),s._v("\nPATH="),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAVEN_HOME")]),s._v("/bin\nexport MAVEN_HOME PATH\nEOF")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使环境变量生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit end and source profile"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"maven install end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test maven"')]),s._v("\nmvn -v\n")])])]),a("h2",{attrs:{id:"tomcat环境-安装-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat环境-安装-配置"}},[s._v("#")]),s._v(" Tomcat环境-安装+配置")]),s._v(" "),a("h3",{attrs:{id:"前置条件-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置条件-4"}},[s._v("#")]),s._v(" 前置条件")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#jdk%E7%8E%AF%E5%A2%83-%E5%AE%89%E8%A3%85-%E9%85%8D%E7%BD%AE"}},[s._v("JDK环境")]),s._v("。")]),s._v(" "),a("li",[s._v("准备安装包。如"),a("code",[s._v("apache-tomcat-9.0.68.tar.gz")])])]),s._v(" "),a("h3",{attrs:{id:"脚本-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本-4"}},[s._v("#")]),s._v(" 脚本")]),s._v(" "),a("p",[s._v("主要内容：")]),s._v(" "),a("ol",[a("li",[s._v("解压tomcat压缩包到指定目录")]),s._v(" "),a("li",[s._v("配置Tomcat自启环境变量")]),s._v(" "),a("li",[s._v("开放防火墙端口设置（TODO）")]),s._v(" "),a("li",[s._v("启动Tomcat")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装包文件（具体到文件名）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PKG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/install/apache-tomcat-9.0.68.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Tomcat版本号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TOMCAT_VER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("apache-tomcat-9.0.68\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JAVA环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/env/java/jdk1.8.0_351/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INSTALL_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/env/tomcat\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install tomcat..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar ing..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PKG")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tar end"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置自启环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"edit auto-started config"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/rc.d/rc.local "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nexport JAVA_HOME="),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TOMCAT_VER")]),s._v("/bin/startup.sh start\nEOF")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /etc/rc.d/rc.local\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto-started config done, please reboot machine right now to take effect!!!"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 防火墙设置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动TOMCAT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$INSTALL_PATH")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TOMCAT_VER")]),s._v("/bin/startup.sh start\n\n")])])]),a("h2",{attrs:{id:"检查端口号并杀死对应进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查端口号并杀死对应进程"}},[s._v("#")]),s._v(" 检查端口号并杀死对应进程")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("check_and_kill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"check:'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tlpn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\b"}},[s._v("\\b")]),s._v('"')]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -nlp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $7}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[ / ]'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${PID}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kill:'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(' not exit"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查并杀死指定端口号进程，可批量")]),s._v("\n  check_and_kill "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8092")]),s._v("\n  check_and_kill "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8093")]),s._v("\n  check_and_kill "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8094")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);