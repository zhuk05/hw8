const express = require('express');
const { Pool } = require('pg');
const config = require('./config.json');
const math = require('./math');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1234');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const pool = new Pool({
    host: config.database.host,
    port: config.database.port,
    database: config.database.name
});

app.get('/calculate', (req, res) => {
    const num1 = 10;
    const num2 = 5;
    
    const result = {
        addition: math.add(num1, num2),
        subtraction: math.subtract(num1, num2)
    };
    
    res.json(result);
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
