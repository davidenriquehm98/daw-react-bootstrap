# NODE JS
FROM node:20-alpine as builder
WORKDIR /app
COPY . . 
RUN npm install
RUN npm run build

# NGINX
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# BUILD IMAGE
# docker build -t docker-react-image:1.0 .
# RUN IMAGE 
# docker run -p 4000:80 --name docker-react-container docker-react-image:1.0