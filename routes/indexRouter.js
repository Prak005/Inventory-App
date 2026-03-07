const { Router } = require('express');
const indexRouter = Router();

const categoryController = require('../controllers/categoryController');
const itemsController = require('../controllers/itemsController');

indexRouter.get('/', categoryController.categoryList);
indexRouter.get('/category/:id', categoryController.categoryItems);
indexRouter.get('/items/:id', itemsController.itemDetail);
indexRouter.get('/items/create', itemsController.createItemGet);
indexRouter.get('/items/create', itemsController.createItemPost);

module.exports = indexRouter;