const stockModel = require('../model/stock');

const express = require('express');
const router = express();

router.use(express.urlencoded({
  extended: true
}));

router.use(express.json());

router.get('/', (req, res) => {
  res.status(200).send(`Hello from stock model!`);
  log.success('/stock');
});


router.post('/data', (req, res) => {
  const symbol = req.body.symbol.toUpperCase();
  Promise.resolve().then(_ => {
    if (stockModel.isSET50(symbol) === false) throw new Error('Symbol not found');

    stockModel.getData(symbol).then(data => {
      res.status(200).send(data);
    });
    log.success('/stock/data', "post");
  })
    .catch(err => {
      res.status(500).send('Invalid request data');
      log.error('/stock/data', err, "post");
    });
});

module.exports = router;