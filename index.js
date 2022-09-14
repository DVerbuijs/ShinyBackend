console.log("Hello world");
const loginRoutes = require('./routes/loginRoutes' );
const express = require('express')
const app = express()
const port = 3000
//getCards();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/login',loginRoutes);