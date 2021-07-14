## FAQ

### `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`

`$ sudo service docker start`

## [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

### 不让docker只能在root下使用 Manage Docker as a non-root user

### 开机启动 Configure Docker to start on boot

> wsl2 中没有用

```
$ sudo systemctl enable docker.service
$ sudo systemctl enable containerd.service
```

```
$ sudo systemctl disable docker.service
$ sudo systemctl disable containerd.service
```



## tips

- 使用当前目录 Dockerfile 创建镜像: `$ docker build -t myname .`
- 创建新容器并运行: `$ docker run -dp 3000:3000 myname`
- 在容器中开启交互终端：`$ docker exec -i -t container_id [/bin/bash|sh]`
  - [OCI runtime exec failed: exec failed: (…) executable file not found in $PATH": unknown](https://stackoverflow.com/questions/48001082/oci-runtime-exec-failed-exec-failed-executable-file-not-found-in-path)
- 启动容器：`$ docker start container_name/container_id`
- 停止容器：`$ docker stop container_name/container_id`
- 重启容器：`$ docker restart container_name/container_id`

`$ docker run --rm -d -p 10010:10010/tcp AppName`