const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true},
    password: { type: String, required: true},
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
    challenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'}],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;