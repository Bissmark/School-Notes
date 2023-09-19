const Task = require('../../models/task');

module.exports = {
    index,
    create,
    show,
    delete: deleteTask,
    update
};

async function index(req, res) {
    try {
        await Task.find({user: req.user._id}).populate('category').exec().then(tasks => {
            console.log(tasks);
            res.json(tasks);
        });
        } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        console.log(req.body)
        const task = await Task.create({
            name: req.body.name,
            // category: req.body.category,
            // category: req.category.id,
            user: req.user._id,
            time: req.body.time,
            priority: req.body.priority,
            image: req.body.image
        });
        res.json(task);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

async function show(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}



async function deleteTask(req, res) {
    try {
        await Task.deleteOne({_id: req.params.id, user: req.user._id});
        console.log('delete');
        res.json(true);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json(task);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}