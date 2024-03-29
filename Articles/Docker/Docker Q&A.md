## FAQ

### 多容器共用 Volume

**关键词：** `external`, `deprecated external.name`

> [compose-file-v3/#external](https://docs.docker.com/compose/compose-file/compose-file-v3/#external)

通过 compose 启动的时候，如果不设置 `external: true` 或指定 volume name，那么会自动创建一个基于 image name 拼接的新 volume——`${ProjectName}_${VolumeName}`，比如下列例子就会是：_app1_data_, _app2_data_。

使用指定公共卷示例如下：

`$ docker volume create data`

```yaml
# /app1/docker-compose.yaml
version: '3.7'
services:
    app:
        image: app1
        ports:
            - 3001:3001
        working_dir: /app
        volumes:
            - data:/.temp

volumes:
    data:
        external: true
```

```yaml
# /app2/docker-compose.yaml
version: '3.7'
services:
    app:
        image: app2
        ports:
            - 3002:3002
        working_dir: /app
        volumes:
            - data:/.temp

volumes:
    data:
        # 同样可以使用 name 指定。注意：`external.name` was deprecated in version 3.4.
        name: data
```

### `Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?`

`$ sudo service docker start`

## [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

### 不让 docker 只能在 root 下使用 Manage Docker as a non-root user

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

-   使用当前目录 Dockerfile 创建镜像: `$ docker build -t myname .`
-   创建新容器并运行: `$ docker run -dp 3000:3000 myname`
-   在容器中开启交互终端：`$ docker exec -i -t container_id [/bin/bash|sh]`
    -   [OCI runtime exec failed: exec failed: (…) executable file not found in $PATH": unknown](https://stackoverflow.com/questions/48001082/oci-runtime-exec-failed-exec-failed-executable-file-not-found-in-path)
-   启动容器：`$ docker start container_name/container_id`
-   停止容器：`$ docker stop container_name/container_id`
-   重启容器：`$ docker restart container_name/container_id`

`$ docker run --rm -d -p 10010:10010/tcp AppName`

## 链接远程 docker

> [Protect the Docker daemon socket](https://docs.docker.com/engine/security/protect-access/#use-tls-https-to-protect-the-docker-daemon-socket)

### 是否开启 `tls`？

-   是

    -   开启 `tlsverify`
    -   指定证书地址，docker 服务地址

        1. 通过参数指定
            ```sh
            docker --tlsverify \
                --tlscacert=ca.pem \
                --tlscert=cert.pem \
                --tlskey=key.pem \
                -H=$HOST:2376 version
            ```
        2. 通过环境变量

            1. `$ export DOCKER_CERT_PATH=/MY_DOCKER_CERT_PATH/`

                - `$ ls /MY_DOCKER_CERT_PATH/`
                - `证书目录包含对应的证书如 >>> ca.pem cert.pem key.pem`

            2. `$ export DOCKER_HOST=$HOST:2376`

            3. 现在直接使用时链接的即远程的服务 `$ docker version`
