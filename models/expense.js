const mongoose = require('mongoose')
const { Schema } = mongoose;

const expenseSchema = new Schema({
        user: String,
        expenses: Object,
    },
    { versionKey: false },
    { minimize: false }
)
module.exports = mongoose.model('expense', expenseSchema);