#!/bin/bash

docker run --restart always -p 84:80 -d --name btc-frontend btc-frontend:v1
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


