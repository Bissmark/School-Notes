const Category = require('../../models/category');

module.exports = {
    index,
    create
};

async function index(req, res) {
    try {
        const categories = await Category.find({user: req.user._id});
        res.json(categories);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const category = await Category.create({
            name: req.body.name,
            user: req.user._id
        });
        res.json(category);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}