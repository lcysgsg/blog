# Jenkins



## FAQ

### [Using docker build plugin and getting "Cannot connect to the Docker daemon."](https://github.com/jenkinsci/docker/issues/196)

`./docker-compose.yml` : 

```yml
jenkins:
    build: ./jenkins
    volumes:
      - /var/jenkins_home
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker
    environment:
      DOCKER_SOCKET: /var/run/docker.sock
      DOCKER_GROUP: dockerhost
      JENKINS_USER: jenkins
      JENKINS_URL: "https://jenkins.example.com/"
      DOCKER_HOST: unix:///var/run/docker.sock
```

`./jenkins/Dockerfile` : 

```
FROM jenkins/jenkins:lts-jdk11

USER root 

COPY ["entrypoint.sh", "/"]

RUN apt-get update && \
    apt-get install sudo && \
    chmod 755 /entrypoint.sh

ENTRYPOINT ["/bin/bash","-c","./entrypoint.sh"]
```

`./jenkins/entrypoint.sh` : 

```sh
#!/bin/bash

if [ -S ${DOCKER_SOCKET} ]; then
    DOCKER_GID=$(stat -c '%g' ${DOCKER_SOCKET})
    groupadd -for -g ${DOCKER_GID} ${DOCKER_GROUP}
    usermod -aG ${DOCKER_GROUP} ${JENKINS_USER}
fi

exec sudo -E -H -u jenkins bash -c /usr/local/bin/jenkins.sh
```




> docker in docker 
> https://www.cnblogs.com/anliven/p/13551614.html
>
> 1. volume 挂载同一个 `/var/run/docker.sock`
> 2. 使用 `docker:dind` 容器

