const db = require('../db/queries');

async function itemDetail(req, res) {
    const id = req.params.id;
    const item = await db.getItemById(id);
    res.render('item', {
        title: item.name,
        item: item,
    });
}

async function createItemGet(req, res) {
    const categories = await db.getCategories();
    res.render('itemForm', {
        title: 'Create Item',
        categories: categories,
    });
}

async function createItemPost(req, res) {
    const { name, description, brand, price, stock, category } = req.body;
    await db.insertItem(name, description, brand, price, stock, category);
    res.redirect('/');
}

module.exports = {
    itemDetail,
    createItemGet,
    createItemPost,
}