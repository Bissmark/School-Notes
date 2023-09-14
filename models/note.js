const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
        name: {
            type: String, 
            required: true
        },
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        time: {
            type: String,
        },
        priority: {
            type: String,
        },
        image: {
            type: String,
        }
    }, 
    { timestamps: true }
);

module.exports = mongoose.model('Note', noteSchema);