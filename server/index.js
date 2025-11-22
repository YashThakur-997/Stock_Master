let express = require('express');
let app = express();
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
dotenv.config();

app.get('/', (req, res) =>{
  res.send('Hello World!');
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
})
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});