# NEOM 2.0

Nextjs project for Neom

## Requirements

- [node v18.14.0 LTS](https://nodejs.org/en/)
- [npm v9.4.0](https://docs.npmjs.com/cli/v9)
- [docker v20.10.22](https://docs.docker.com/get-docker/)
- [docker-compose v1.29.2](https://docs.docker.com/compose/install/)

## Setup

- Clone the repository:

```bash
git clone git@github.com:AO-Group/Neom-2.0.git
```

- cd into the Neom2.0 directory
- Make sure you have docker and docker-compose installed and ready (Docker Desktop works well)

### Build container
  
```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

### Run container

```bash
docker compose up -d
```

### Check if the container is running

```bash
docker ps
```

### Stop the container

```bash
docker compose down --remove-orphans
```

### Once the container is running

- In your browser: navigate to:

'''bash
http://localhost:3000
'''
