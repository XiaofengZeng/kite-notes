# pnpm

## 1 npmp特点

## 2. 安装与配置

- 安装

  ```sh
  # 安装（一般全局安装）
  npm install -g pnpm
  ```

- 配置
  - 统一存储目录（内容寻址目录）
    - 自动生成
    会自动在当前磁盘分区的根目录生成`.pnmp-store`目录
    - 手动生成

    ```sh
    pnpm config set store-dir {path}/.pnpm-store
    ```

  - 镜像

    ```sh
    # 查看镜像
    pnpm config get registry 
    # 切换镜像（淘宝镜像）
    pnpm config set registry https://registry.npmmirror.com/
    ```

  - 环境变量（Path）+全局指令目录（global-bin-dir）

    - 自动配置环境

    ```sh
    pnpm setup
    # 
    ```

    - 手动设置

      - Windows

        1. 设置变量：`PNPM_HOME`，变量值：`{path}/pnpm`
        2. 变量该添加至Path中：`%PNPM_HOME%`
