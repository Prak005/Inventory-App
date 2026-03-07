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

module.exports = {
    categoryList,
    categoryItems,
};