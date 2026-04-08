# Day 3 - Docker Containerization & UI Enhancements 🐳✨

## 📌 Overview

On Day 3, I transitioned from a traditional Apache deployment to a fully containerized application using Docker, while also enhancing the frontend with animations and modern UI styling.

---

## ⚙️ What I Did

- Installed and configured Docker on EC2
- Created a Dockerfile for the application
- Built and ran a Docker container to serve the website
- Replaced Apache with container-based deployment
- Debugged issues with permissions, ports, and container updates
- Added JavaScript animations using anime.js
- Implemented interactive UI with CSS hover effects
- Enhanced visual design with gradients, glow effects, and particles.js

---

## 🐳 Dockerfile

```dockerfile
FROM httpd:2.4

COPY . /usr/local/apache2/htdocs/
