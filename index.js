const express = require('express')
const app = express()

app.use(express.json())

//mock data
const products = [
    {
      id: '1001',
      name: 'Node.js for Beginners',
      category: 'Node',
      price: 990
    },
    {
      id: '1002',
      name: 'React 101',
      category: 'React',
      price: 3990
    },
    {
      id: '1003',
      name: 'Getting started with MongoDB',
      category: 'MongoDB',
      price: 1990
    }
]

app.get('/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json(products)
})
  
app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const result = products.find(product => product.id === id)
    res.json(result)
})
  
app.post('/products', (req, res) => {
    const payload = req.body
    res.json(payload)
})
  
app.put('/products/:id', (req, res) => {
    const { id } = req.params
    res.json({ id })
})
  
app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    res.json({ id })
})
  
// สำหรับ HTTP GET
app.get('/', (req, res) => {
    res.json({ message: 'Sample-nodejs' })
})

app.listen(3000, () => {
    console.log('Application is running on port 3000')
})
