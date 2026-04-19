# Day 4 — CI/CD Pipeline with GitHub Actions

## Overview
On Day 4, I implemented a CI/CD pipeline using GitHub Actions to automate deployment of my web application to an AWS EC2 instance. This eliminated the need for manual SSH deployment and allows automatic updates whenever code is pushed.

---

## What I Accomplished
- Generated SSH key pair for secure authentication 
- Configured EC2 to accept GitHub Actions access 
- Added private key to GitHub Secrets 
- Created automated deployment workflow 
- Triggered deployment on every push to main 
- Debugged real-world Git and SSH issues 

---

## SSH Setup

Generate key:
```
ssh-keygen -t rsa -b 4096 -C "github-actions"
```

Copy public key:
```
cat ~/.ssh/id_rsa.pub
```

Add to EC2:
```
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys
```

Set permissions:
```
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

---

## GitHub Secrets

Added in:
Settings → Secrets → Actions

- EC2_HOST → EC2 public IP 
- EC2_SSH_KEY → private key (id_rsa) 

---

## Workflow File

Path:
```
.github/workflows/deploy.yml
```

```
name: Deploy to EC2

on:
 push:
 branches:
 - main

jobs:
 deploy:
 runs-on: ubuntu-latest

 steps:
 - name: Checkout Code
 uses: actions/checkout@v3

 - name: Deploy to EC2
 uses: appleboy/ssh-action@v1.0.0
 with:
 host: ${{ secrets.EC2_HOST }}
 username: ec2-user
 key: ${{ secrets.EC2_SSH_KEY }}
 script: |
 cd /var/www/html
 sudo git pull origin main
 sudo systemctl restart httpd
```

---

## Deployment Flow

1. Push code to GitHub 
2. GitHub Actions triggers 
3. SSH connects to EC2 
4. Code updates on server 
5. Server restarts 
6. Changes go live 

---

## Challenges Faced

- SSH authentication errors 
- Git push restrictions (workflow permissions) 
- Upstream branch issues 
- Unstaged changes blocking pull 
- Accidentally tracking system files 

---

## What I Learned

- CI/CD pipeline fundamentals 
- Automating deployments 
- Secure SSH authentication 
- Git troubleshooting and workflow management 
- Real-world DevOps debugging 

---

## Next Steps

- Integrate Docker into CI/CD 
- Deploy containerized application 
- Add custom domain + HTTPS 
- Improve frontend navigation 

---

## Key Takeaway

Automating deployments with CI/CD pipelines removes manual steps, reduces errors, and reflects real-world DevOps practices used in production environments.
