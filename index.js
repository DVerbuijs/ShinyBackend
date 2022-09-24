console.log("Hello world");
const loginRoutes = require('./routes/loginRoutes' );
const pokemonRoutes = require('./routes/pokemonRoutes' );
const express = require('express')
const app = express()
const port = 3000
//getCards();
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.use('/login',loginRoutes);
app.use('/pokemon',pokemonRoutes);

module.exports=app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})