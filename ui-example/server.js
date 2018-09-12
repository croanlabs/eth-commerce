const express = require('express');
const bodyParser = require('body-parser');
const sigUtil = require('eth-sig-util');

const app = express();
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/log-payment', (req, res) => {
  console.log(req.body.address, req.body.msj, req.body.signed);
  const params = {
    data: req.body.msg,
    sig: req.body.signed
  };
  const recovered = sigUtil.recoverPersonalSignature(params);
  if (!recovered || recovered !== req.body.address) {
    const err = {
      message: 'Invalid credentials'
    };
    res.status(400).send();
  }

  res.status(200).send();
});

app.listen(8080, () => {
  console.log('app listening on port 8080!');
});
