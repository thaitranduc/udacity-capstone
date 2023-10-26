# udacity-capstone

#Github
https://github.com/thaitranduc/udacity-capstone.git

#CircleCi
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/thaitranduc/udacity-capstone/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/thaitranduc/udacity-capstone/tree/main)

# Propose and Scope the Project
1. Create simple web browser with Circle CI to deploy EKS, then build docker image and deploy it to created EKS

# Pick AWS Kubernetes as a Service.
1. ```eksctl``` 
2. ```kubectl``` 

# Build pipeline
1. Steps in CircileCI: 
    - build: Build nodejs webapp
    - push: Create docker image, tag and push to docker hub
    - deploy: Deploy EKS and using docker image created by previous step to setup webapp
2. Configure a deployment pipeline
    - .circleci/config.yml
3. Dockerfile
    - ./frontend/Dockerfile

# Pylint Fail
![CircleCI](./screenshots/2023-10-26_203317.png)

# Pylint Pass
![CircleCI](./screenshots/2023-10-26_205028.png)

# CircleCI pipeline
![CircleCI](./screenshots/2023-10-26_170316.png)

# Docker Repository
![AWS](./screenshots/2023-10-26_203519.png)

# AWS Cloudformation
![AWS](./screenshots/2023-10-26_203519.png)

# EC2 Instances
![AWS](./screenshots/2023-10-26_170732.png)

# K8s Create pipelines
![K8s](./screenshots/2023-10-26_171725.png)

# Browser
![Browser](./screenshots/2023-10-26_170948.png)
http://adf0467cdc2bd451c8ca8c04515a862e-421794244.us-west-1.elb.amazonaws.com:1234/