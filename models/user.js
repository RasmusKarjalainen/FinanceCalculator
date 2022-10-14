const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,

    },
    { versionKey: false },
    { minimize: false }
)
module.exports = mongoose.model('user', userSchema);