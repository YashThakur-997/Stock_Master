let express = require('express');
let app = express();
const dotenv = require('dotenv');
const mongoose  = require('mongoose');
dotenv.config();

app.get('/', (req, res) =>{
  res.send('Hello World!');
});

app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/Stockmaster', authRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});