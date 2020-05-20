const express = require('express')
const app = express()
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

mongoose.connect(config.url, {
    useNewUrlParser: true
})
mongoose.connection.on('error', err => {
    console.error('Mongo error', err)
})

const Product = require('./models/product')
const products = [{}]

app.use(express.json())

app.post('/products', async (req, res) => {
  const payload = req.body
  const product = new Product(payload)
  await product.save()
  res.status(201).end()
})

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.json(product)
})

const data = {
    $set: {
      newValue: 'new data'
    }
}
Product.findByIdAndUpdate('ObjectId', data)

app.put('/products/:id', async (req, res) => {
    const payload = req.body
    const { id } = req.params
  
    const product = await Product.findByIdAndUpdate(id, { $set: payload })
    res.json(product)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
  
    await Product.findByIdAndDelete(id)
    res.status(204).end()
})


// mock data
// const products = [
//     {
//       id: '1001',
//       name: 'Node.js for Beginners',
//       category: 'Node',
//       price: 990
//     },
//     {
//       id: '1002',
//       name: 'React 101',
//       category: 'React',
//       price: 3990
//     },
//     {
//       id: '1003',
//       name: 'Getting started with MongoDB',
//       category: 'MongoDB',
//       price: 1990
//     }
//   ]
  
//   app.get('/products', (req, res) => {
//     res.json(products)
//   })
  
//   app.get('/products/:id', (req, res) => {
//     const { id } = req.params
//     const result = products.find(product => product.id === id)
//     res.json(result)
//   })
  
//   app.post('/products', (req, res) => {
//     const payload = req.body
//     res.json(payload)
//   })
  
//   app.put('/products/:id', (req, res) => {
//     const { id } = req.params
//     res.json({ id })
//   })
  
//   app.delete('/products/:id', (req, res) => {
//     const { id } = req.params
//     res.json({ id })
//   })
  
// //---------------------------------------------

// สำหรับ HTTP GET
app.get('/', (req, res) => {
  res.json({ message: 'Sample-nodejs-mongo 1.9' })
})

// app.get('/hello/:message', (req, res) => {
//     const { params } = req
//     res.json({ message: 'Thana', params })
// })

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})