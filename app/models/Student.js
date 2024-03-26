const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    contact: {
        type: Number,

    },
    email: {
        type: String,
        unique: true,
    },
    college: {
        type: String,

    },

    registrationNo: {
        type: Number,
    },

    branch: {
        type: String,

    },
    year: {
        type: String,

    },
    paymentStatus: {
        type: Boolean,

    },
    events: {
        type: Array,
    },
});
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;