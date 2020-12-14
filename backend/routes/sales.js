const router = require('express').Router();
let Sales = require('../models/sales.model');

router.route('/').get((req, res) => {
  Sales.find()
    .then(Sales => res.json(Sales))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const category = req.body.category;
  const date = Date.parse(req.body.date);
  const sales = Number(req.body.sales);

  const newSales = new Sales({
    category,
    date,
    sales,
  });

  newSales.save()
  .then(() => res.json('Sales added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Sales.findById(req.params.id)
    .then(Sales => res.json(Sales))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Sales.findByIdAndDelete(req.params.id)
    .then(() => res.json('Sales deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Sales.findById(req.params.id)
    .then(Sales => {
      Sales.category = req.body.category;
      Sales.date = Date.parse(req.body.date);
      Sales.sales = Number(req.body.sales);

      Sales.save()
        .then(() => res.json('Sales updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;