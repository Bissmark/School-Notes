const Note = require('../../models/note');

module.exports = {
    index,
    show,
    create,
    delete: deleteNote,
    update
};

async function index(req, res) {
    try {
        const notes = await Note.find({user: req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function show(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function create(req, res) {
    try {
        const note = await Note.create({
            name: req.body.name,
            category: req.body.category,
            user: req.user._id,
            time: req.body.time,
            priority: req.body.priority,
            image: req.body.image
        });
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function deleteNote(req, res) {
    try {
        await Note.deleteOne({_id: req.params.id, user: req.user._id});
        console.log('delete');
        res.json(true);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function update(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body);
        res.json(note);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}