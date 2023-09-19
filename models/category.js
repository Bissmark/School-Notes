const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        tasks: [{
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }]
    }, 
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);