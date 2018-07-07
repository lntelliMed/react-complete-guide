const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
var winston = require('winston');

const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/secret', (req, res) => {
  const { userInput } = req.body;
  console.log(userInput);
  if (userInput) {
    winston.log('info', 'user input: ' + userInput);
    res.status(200).json('success');
  } else {
    winston.error('Something is not right:' + userInput);
    res.status(400).json('incorrect submission')
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
