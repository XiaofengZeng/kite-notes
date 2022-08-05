# pnpm

## 1 npmp特点

## 2. 安装与配置

- 安装

  ```sh
  # 安装（一般全局安装）
  npm install -g pnpm
  ```

- 配置
  - **统一存储目录（内容寻址目录）**
    - 自动生成
    会自动在当前磁盘分区的根目录生成`.pnmp-store`目录
    - 手动生成

    ```sh
    pnpm config set store-dir {path}/.pnpm-store
    ```

  - **镜像**

    ```sh
    # 查看镜像
    pnpm config get registry 
    # 切换镜像（淘宝镜像）
    pnpm config set registry https://registry.npmmirror.com/
    ```

  - **环境变量（Path）+全局指令目录（global-bin-dir）**

    - 自动配置环境

    ```sh
    pnpm setup
    ```

    - 手动设置

      - Windows

        1. 设置变量：`PNPM_HOME`，变量值：`{path}/pnpm`
        2. 变量该添加至Path中：`%PNPM_HOME%`
        3. 设置配置项：`pnpm config set global-bin-dir {path}/pnpm`

      - Linux

        `TODO...`

- 常用 CLI 操作

  对依赖的相关操作与`npm`/`yarn`类似

  - 添加/移除/更新

    ```sh
    # []表示可替换选项，其中/分隔为选项可选
    # <pkg>表示相应的依赖包名称

    # 安装项目所有依赖
    pnpm install[i]

    # 安装-全局依赖(从全局环境中添加指定的软件包)
    pnpm add -g[--global] <pkg>
    # 安装-开发依赖(添加至devDependencies配置项)
    pnpm add -D[--save-dev] <pkg>
    # 安装-生产依赖(添加至dependencies配置项)
    pnpm add [-P/--save-prod] <pkg>

    # 删除-全局依赖(从全局环境中删除指定的软件包)
    pnpm remove[rm/uninstall/un] -g[--global] <pkg>
    # 删除-开发依赖(从devDependencies配置项中移除)
    pnpm remove[rm/uninstall/un] -D[--save-dev] <pkg>
    # 删除-生产依赖(从dependencies配置项中移除)
    pnpm remove[rm/uninstall/un] [-P/--save-prod] <pkg>

    # 更新-全局依赖
    pnpm update[up] -g[--global] <pkg>
    # 更新-开发依赖
    pnpm update[up] -D[--dev] <pkg>
    # 更新-生产依赖
    pnpm update[up] -P[--prod] <pkg>
    ```

  - 清理

    删除不需要的软件包，<mark>**不建议经常执行该指令**</mark>

    ```sh
    pnpm prune
    ```

  - 运行脚本

  ```sh
  # <script>是项目package.json中的script脚本

  pnpm run <script>
  pnpm <script> # 简写(前提是脚本与pnpm内建指令不冲突)
  ```
