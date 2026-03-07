const { Router } = require('express');
const indexRouter = Router();

const categoryController = require('../controllers/categoryController');

indexRouter.get('/', categoryController.categoryList);

module.exports = indexRouter;