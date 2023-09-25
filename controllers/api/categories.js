const Category = require('../../models/category');
const Task = require('../../models/task');

module.exports = {
    index,
    show,
    delete: deleteCategory,
    create,
    updatePositions
};

async function index(req, res) {
    try {
        await Category.find({user: req.user._id}).populate('tasks').exec().then(categories => {;
            res.json(categories);
        })
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
    console.log(req.body);
    try {
        const category = await Category.create({
            name: req.body.name,
            user: req.user._id,
            time: req.body.time,
            priority: req.body.priority,
        });
        res.json(category);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function deleteCategory(req, res) {
    try {
        const categoryId = req.body._id;
        await Category.deleteOne({_id: categoryId});
        res.json(true);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function updatePositions(req, res) {
    console.log('lmao')
    try {
        const categories = req.body;
        categories.forEach(async (category) => {
            await Category.updateOne({_id: category._id}, {position: category.position});
        });
        res.json(true);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}