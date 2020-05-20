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

HTTP get
```
http://localhost:9000/products
http://localhost:9000/products/[id]

```
HTTP Post
```
http://localhost:9000/products
{
  "name": "My Product from localhost",
  "category": "localhost",
  "price": 25000,
  "tags": ["test1", "test2", "tag1"]
}
```
HTTP Put
```
http://localhost:9000/products/[id]
{
  "name": "My Product from localhost",
  "category": "localhost",
  "price": 25000,
  "tags": ["test1", "test2", "tag1"]
}
```
HTTP Delete
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

Create a docker-compose.yml
```
version: '2.0'
services: 
    web:
        image: [image name]
        container_name: [container name]
        restart: always
        ports: 
        - 9000:9000
```


```
docker-compose up -d
```