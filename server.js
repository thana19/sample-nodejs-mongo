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

// HTTP GET
app.get('/', (req, res) => {
  res.json({ message: 'Sample-nodejs-mongo 1.12' })
})

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


app.listen(9000, () => {
  console.log('Application is running on port 9000')
})