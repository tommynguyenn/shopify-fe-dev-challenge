require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('dist'));
app.use(cors());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use('/api/images', require('./api/images'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}`));
