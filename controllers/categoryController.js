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
    const category = await db.getCategoryById(categoryId);
    res.render('category', {
        title: 'Category Items',
        items: items,
        category: category,
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

async function updateCategoryGet(req, res) {
    const id = req.params.id;
    const category = await db.getCategoryById(id);
    res.render('updateCategory', {
        title:'Update Category',
        category: category
    });
}

async function updateCategoryPost(req, res){
    const id = req.params.id;
    const { name, description } = req.body;
    await db.updateCategory(id, name, description);
    res.redirect(`/category/${id}`);
}

module.exports = {
    categoryList,
    categoryItems,
    createCategoryGet,
    createCategoryPost,
    updateCategoryGet,
    updateCategoryPost,
};