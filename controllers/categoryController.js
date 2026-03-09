const db = require('../db/queries');

async function categoryList(req, res) {
    const categories = await db.getCategories();
    res.render('index', {
        title: 'Computer Parts Store',
        categories: categories,
    });
}

async function categoryItems(req, res) {
    const categoryId = req.params.id;
    const items = await db.getItemsByCategory(categoryId);
    res.render('category', {
        title: 'Category Items',
        items: items,
    });
}

async function createCategoryGet(req, res) {
    res.render('createCategory', {
        title: 'Create Category'
    });
}

async function createCategoryPost(req, res) {
    const { name, description } = req.body;
    await db.insertCategory(name, description);
    res.redirect('/');
}

module.exports = {
    categoryList,
    categoryItems,
    createCategoryGet,
    createCategoryPost,
};