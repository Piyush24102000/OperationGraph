const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        // enum: ['Not Started', 'In Progress', 'Completed']
    },
    clientId: {
        type: String,
        ref: 'client'
    }
})

module.exports = mongoose.models.project || mongoose.model('project', projectSchema)