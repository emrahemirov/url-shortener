const router = require('express')();
const TransactionsFactory = require('../database/transactions-factory');
const urlTransactions = TransactionsFactory.creating('urlTransactions');

router.get('/urls/:short', async ({ params }, res) => {
  const url = urlTransactions.getUrl(params.short);

  if (!url) res.status(404).json('Not found');
  else res.status(200).json(url);
});

router.post('/urls', async ({ body }, res) => {
  let message = '';

  if (body.short) message = urlTransactions.insertUrl(body.short, body.url);
  else message = urlTransactions.generateUrl(body.url);

  res.status(404).json(message);
});

module.exports = router;
