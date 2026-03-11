const { Router } = require('express');
const indexRouter = Router();

const categoryController = require('../controllers/categoryController');
const itemsController = require('../controllers/itemsController');

indexRouter.get('/', categoryController.categoryList);

indexRouter.get('/category/create', categoryController.createCategoryGet);
indexRouter.post('/category/create', categoryController.createCategoryPost);

indexRouter.get('/category/:id/update', categoryController.updateCategoryGet);
indexRouter.post('/category/:id/update', categoryController.updateCategoryPost);

indexRouter.post('/category/:id/delete', categoryController.deleteCategoryPost);

indexRouter.get('/category/:id', categoryController.categoryItems);



indexRouter.get('/items/create', itemsController.createItemGet);
indexRouter.post('/items/create', itemsController.createItemPost);

indexRouter.get('/items/:id/update', itemsController.updateItemGet);
indexRouter.post('/items/:id/update', itemsController.updateItemPost);

indexRouter.post('/items/:id/delete', itemsController.deleteItemPost);

indexRouter.get('/items/:id', itemsController.itemDetail);

module.exports = indexRouter;