let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', (req, res) => {
  // ask controller to perform logic
  controller.postCat(req, res);

});

router.get('/', (req, res) => {
  // ask controller to perform logic
  controller.getAllCats(req, res);

});

router.delete('/', (req, res) => {
  controller.deleteCat(req, res);
});

module.exports = router;
