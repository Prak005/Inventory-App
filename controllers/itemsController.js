const db = require('../db/queries');

async function itemDetail(req, res) {
    const id = req.params.id;
    const item = await db.getItemById(id);
    res.render('items', {
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

async function updateItemGet(req, res) {
    const id = req.params.id;
    const item = await db.getItemById(id);
    const categories = await db.getCategories();
    res.render('updateItem', {
        title: 'Update Item',
        item: item,
        categories: categories,
    });
}

async function updateItemPost(req, res) {
    const id = req.params.id;
    const { name, description, brand, price, stock, category } = req.body;
    await db.updateItem(id, name, description, brand, price, stock, category);
    res.redirect(`/items/${id}`);
}

async function deleteItemPost(req, res) {
    const id = req.params.id;
    const item = await db.getItemById(id);
    await db.deleteItem(id);
    res.redirect(`/category/${item.category_id}`);
}

module.exports = {
    itemDetail,
    createItemGet,
    createItemPost,
    updateItemGet,
    updateItemPost,
    deleteItemPost,
}