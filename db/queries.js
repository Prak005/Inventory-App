const pool = require('./pool');

async function getCategories() {
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
}

async function getItemsByCategory(id) {
    const { rows } = await pool.query('SELECT * FROM items WHERE id=$1', [id]);
    return rows;
}

async function getItemById(id) {
    const { rows } = await pool.query(
        `SELECT items.*, categories.name AS category
         FROM items
         JOIN categories ON items.category_id = categories.id
         WHERE items.id = $1
        `,
        [id]
    );
    return rows;
}

module.exports = {
    getCategories,
    getItemsByCategory,
    getItemById,
};