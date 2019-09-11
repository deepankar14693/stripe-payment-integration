const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const payments = require('./routes/api/payment');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/api/payments', payments);

app.get('/', (req, res) => res.send('hello'));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`server running on port: ${port}`));
