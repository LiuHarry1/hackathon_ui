# hello-world-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




### to build ECR
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/k6z2c7p9

docker build -t hackathon_repo .

docker tag hackathon_repo:latest public.ecr.aws/k6z2c7p9/hackathon_repo:latest


docker push public.ecr.aws/k6z2c7p9/hackathon_repo:latest