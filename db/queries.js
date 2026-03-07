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
    return rows[0];
}

async function insertItem(name, description, brand, price, stock, category_id) {
    await pool.query(
        `INSERT INTO items (name, description, brand, price, stock, category_id)
         VALUES ($1, $2, $3, $4, $5, $6)`,
         [name, description, brand, price, stock, category_id]
    );
}

module.exports = {
    getCategories,
    getItemsByCategory,
    getItemById,
    insertItem,
};