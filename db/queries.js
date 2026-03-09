const pool = require('./pool');

async function getCategories() {
    const { rows } = await pool.query('SELECT * FROM categories');
    return rows;
}

async function getItemsByCategory(id) {
    const { rows } = await pool.query('SELECT * FROM items WHERE category_id=$1', [id]);
    return rows;
}

async function getItemById(id) {
    const { rows } = await pool.query(
        `SELECT items.*, categories.name AS category
         FROM items
         JOIN categories ON items.category_id = categories.id
         WHERE items.id = $1`,
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

async function updateItem(id, name, description, brand, price, stock, category_id) {
    await pool.query(
        `UPDATE items
         SET name=$1, description=$2, brand=$3, price=$4, stock=$5, category_id=$6 WHERE id=$7`,
         [name, description, brand, price, stock, category_id, id]
    );
}

async function deleteItem(id) {
    await pool.query(
        `DELETE FROM items WHERE id = $1`, [id]
    );
}

async function getCategoryById(id) {
    const { rows } = await pool.query(
        `SELECT * FROM categories WHERE id=$1`,[id]
    );
    return rows[0];
}

async function insertCategory(name, description) {
    await pool.query(
        `INSERT INTO categories (name, description)
         VALUES ($1, $2)`,
         [name, description]
    );
}

async function updateCategory(id, name, description) {
    await pool.query(
        `UPDATE categories
         SET name=$1, description=$2
         WHERE id=$3`, [name, description, id]
    );
}

module.exports = {
    getCategories,
    getItemsByCategory,
    getItemById,
    insertItem,
    updateItem,
    deleteItem,
    insertCategory,
    updateCategory,
};