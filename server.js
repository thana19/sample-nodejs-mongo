const express = require('express')
const app = express()

// สำหรับ HTTP GET
// app.get('/', (req, res) => {
//   res.json({ message: 'Thana 1.2' })
// })

app.get('/hello/:message', (req, res) => {
    const { params } = req
    res.json({ message: 'Thana', params })
})

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})