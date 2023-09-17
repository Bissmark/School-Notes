const Category = require('../../models/category');
const Task = require('../../models/task');

module.exports = {
    index,
    show,
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

async function show(req, res) {
    try {
        const category = await Category.findById(req.params.id);
        const tasks = await Task.find({category: req.params.id});
        category.tasks = tasks;
        console.log(category);
        res.json(category);
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