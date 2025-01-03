const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {type: String, required: true},
    password: { type: String, required: true},
    activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
    challenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge'}],
});

UserSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch(error) {
        next(error);
    }
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw new Error('Error comparing password');
    }
};

const User = mongoose.model('User', UserSchema);

module.exports = User;