import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});


// Hash Password
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        return next();
    });
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;