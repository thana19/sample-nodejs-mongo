# sample-nodejs-mongo
### Download & Build on local

Clone the repository, install node packages and verify routes locally

```
//on local 
git clone https://github.com/thana19/sample-nodejs-mongo
cd sample-nodejs-mongo
```

Create a config.js which contains objects representing your configs:
```
var config = {
development: {
    //mongodb connection settings
    url: 'http://my.site.com:27017/[db]'
},
production: {
    //mongodb connection settings
    url: 'http://my.site.com:27017/[db]'
    
}
};
module.exports = config;

```

```
npm install
npm start
```

GET /products
```
http://localhost:9000/products
```
GET /products/1
```
http://localhost:9000/products/[id]

```
POST /products
```
http://localhost:9000/products
```
body
```
{
  "name": "My Product from localhost",
  "category": "localhost",
  "price": 25000,
  "tags": ["test1", "test2", "tag1"]
}
```
PUT /products/1
```
http://localhost:9000/products/[id]
```
body
```
{
  "name": "My Product from localhost",
  "category": "localhost",
  "price": 25000,
  "tags": ["test1", "test2", "tag1"]
}
```
DELETE /products/1
```
http://localhost:9000/products/[id]
```
Docker Build
```
docker build -t [image name] .
```
Docker Push
```
docker push [image name] 
```

Docker Respotory
```
https://hub.docker.com/repository/docker/thana19/sample-nodejs-mongo
```
Docker Run
```
docker run --name sample -d -p 3001:9000 thana19/sample-nodejs-mongo
```
or Create a docker-compose.yml
```
version: '2.0'
services: 
    web:
        image: thana19/sample-nodejs-mongo
        container_name: sample
        restart: always
        ports: 
        - 9000:9000
```
```
docker-compose up -d
```