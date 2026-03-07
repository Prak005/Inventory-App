const db = require('../db/queries');

async function itemDetail(req, res) {
    const id = req.params.id;
    const item = await db.getItemById(id);
    res.render('item', {
        title: item.name,
        item: item,
    });
}

module.exports = {
    itemDetail,
}