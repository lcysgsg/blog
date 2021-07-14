## Docker 简单教程(概览)

`$ docker run -d -p 80:80 docker/getting-started`

> - `-d` - 在分离模式下——在后台——运行容器
> - `-p` - 将主机的端口 80 映射到容器中的端口 80
> - `docker/getting-started` - 要使用的映像名

## 快速卷类型

### 命名卷

> 保留数据

1. `$ docker volume create todo-db`

2. `$ docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started`

   - 启动待办事项应用容器，但添加 -v 标志来指定卷装载。 你要使用命名卷并将其装载到 /etc/todos，这将捕获在该路径中创建的所有文件。

### 绑定装载

> 使用绑定装载，你可以控制主机上的确切装载点。 你可以使用它来保留数据，但是它通常用于向容器提供其他数据。 在处理应用程序时，你可以使用绑定装载将源代码装载到容器中，以使其查看代码更改、做出响应并让你立即看到更改。

#### 在容器中的开发模式

使用绑定装载在本地开发设置中非常常见。 其优点是开发计算机无需安装所有生成工具和环境。

首先确保下列操作

- 将源代码装载到容器中
- 安装所有依赖项，包括“dev”依赖项
- 启动 nodemon 以查看文件系统更改（nodemon 只是监控文件变更）

1. 运行以下命令

   `$ docker run -dp 3000:3000 -w /app -v ${PWD}:/app node:12-alpine sh -c "yarn install && yarn run dev"`

   - `-dp 3000:3000` - 与以前相同。 在分离（后台）模式下运行并创建端口映射
   - `-w /app` - 设置运行命令的“工作目录”或当前目录
   - `-v ${PWD}:/app` - 将当前目录从容器中的主机绑定装载到 /app 目录
   - `node:12-alpine` - 要使用的映像。 请注意，这是 Dockerfile 中应用的基本映像
   - `sh -c "yarn install && yarn run dev"` - 命令。 我们正在使用 sh （alpine 没有 bash）启动 shell，并运行 yarn install 来安装所有依赖项，然后运行 yarn run dev。 如果你查看 package.json，将看到 dev 脚本正在启动 nodemon。

2. 查看容器日志，确定程序执行情况

   `$ docker logs -f <container-id> `

   等到程序执行完后，打开 [localhost:3000](http://localhost:3000)

3. 现在修改文件，例如：在 `src/static/js/app.js` 文件中，将“添加项”按钮更改为“添加” 。 此更改将位于第 109 行。

   然后刷新页面就能看到内容已经被修改了。

4. 完成后，停止容器并使用 `docker build -t getting-started .` 生成新映像。

### 生成容器映像

1. 在根目录创建文件 `Dockerfile`：

```yaml
FROM node:12-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "/app/src/index.js"]
```

2. 使用 `$ docker build` 生成容器映像

`$ docker build -t getting-started .`

> - `-t` - 标记映像，当作最终映像的用户可读名称。
> - `.` - 告诉 Docker 从哪里找 `Dockerfile`

## 多容器应用

### 通过命令行

`$ docker network create todo-app`

```bash
docker run -dp 3000:3000 \
  -w /app -v ${PWD}:/app \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"
```

```bash
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7
```

### 通过 Docker Compose

```yaml
version: '3.7'

services:
  app:
    image: node:12-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:5.7
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

## 参考资料

- [docker 入门教程](https://docs.microsoft.com/zh-cn/visualstudio/docker/tutorials/docker-tutorial)
