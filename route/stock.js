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
  const action = {
    do: async (symbol, range) => {
      const data = await stockModel.getData(symbol, range);
      return data;
    },
    url: '/stock/data',
    method: 'post'
  };

  stockTemplate(req, res, action);
});

router.post('/sma', (req, res) => {
  const action = {
    do: async (symbol, range) => {
      const data = await stockModel.getData(symbol, range);
      const sma = await stockModel.computeSMA(data.records);
      return sma;
    },
    url: '/stock/sma',
    method: 'post'
  };

  stockTemplate(req, res, action);
});

let stockTemplate = (req, res, action) => {
  const symbol = req.body.symbol.toUpperCase();
  const range = (req.body.range) ? req.body.range : '10y';
  Promise.resolve().then(async _ => {
      if (stockModel.isSET50(symbol) === false) throw new Error('Symbol not found');

      const data = await action.do(symbol, range);

      res.status(200).send(data);
      log.success(action.url, action.method);
    })
    .catch(err => {
      const errMsg = {
        msg: 'Invalid input',
        url: action.url,
        method: action.method
      };
      sendError(res, err, errMsg);
    });
};

let sendError = (res, err, errMsg) => {
  res.status(500).send(errMsg.msg);
  log.error(errMsg.url, err, errMsg.method);
};

module.exports = router;