const pool = require('./pool');

async function getCategories() {
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
}

async function getItemsByCategory(id) {
    const { rows } = await pool.query('SELECT * FROM items WHERE id=$1', [id]);
    return rows;
}

module.exports = {
    getCategories,
    getItemsByCategory,
};