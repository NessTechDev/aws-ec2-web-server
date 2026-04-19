# Day 1 – EC2 Web Server Deployment

## Goal
Deploy a web server using AWS EC2 and Apache.

## What I Did
- Launched an EC2 instance (Amazon Linux)
- Configured security groups:
 - SSH (port 22)
 - HTTP (port 80)
- Connected to the instance using SSH
- Installed Apache (httpd)
- Started the Apache service
- Deployed a basic HTML web page

## What I Learned
- How EC2 instances function as virtual servers
- How security groups control inbound traffic
- How to remotely access a server using SSH
- How Apache serves web content
- How infrastructure and networking work together

## Issues Faced
- Initial confusion with SSH connection and permissions

## Fixes
- Verified correct username (ec2-user)
- Ensured security group allowed SSH access

## Next Step
Add CSS styling and improve the web page layout
