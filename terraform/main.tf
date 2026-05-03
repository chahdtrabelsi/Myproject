terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"  # For Windows Docker Desktop
}

resource "docker_image" "node_alpine" {
  name = "node:18-alpine"
}

resource "docker_container" "mern_backend" {
  name  = "mern-backend"
  image = docker_image.node_alpine.image_id

  ports {
    internal = 3000
    external = 3004
  }

  volumes {
    host_path      = "C:/atelierDevops/monProjet/backend"   # corrected absolute path
    container_path = "/app"
  }

  working_dir = "/app"
  command     = ["sh", "-c", "npm install && npm start"]
}