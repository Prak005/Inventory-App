const db = require('../db/queries');

async function categoryList(req, res) {
    const categories = await db.getCategories();
    res.render('index', {
        title: 'Computer Parts Store',
        categories: categories,
    });
}

module.exports = {
    categoryList,
};