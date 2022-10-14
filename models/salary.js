const mongoose = require('mongoose')
const { Schema } = mongoose;

const salarySchema = new Schema({
    amount: String,
    taxPercentage: String,
    holder: String
},
    { versionKey: false },
    { minimize: false }
)
module.exports = mongoose.model('salary', salarySchema);