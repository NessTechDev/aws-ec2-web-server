# Day 3 - Docker Containerization 🐳

## 📌 Overview

On Day 3, I transitioned from running a web server manually to containerizing the application using Docker.

---

## ⚙️ What I Did

- Installed Docker on EC2 instance
- Created a Dockerfile
- Built a Docker image for the web app
- Stopped Apache web server
- Ran the application inside a Docker container
- Exposed port 80 to serve the website

---

## 🐳 Dockerfile

```dockerfile
FROM httpd:2.4

COPY . /usr/local/apache2/htdocs/
