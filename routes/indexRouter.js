const { Router } = require('express');
const indexRouter = Router();

const categoryController = require('../controllers/categoryController');
const itemsController = require('../controllers/itemsController');

indexRouter.get('/', categoryController.categoryList);
indexRouter.get('/category/:id', categoryController.categoryItems);
indexRouter.get('/items/:id', itemsController.itemDetail);

module.exports = indexRouter;