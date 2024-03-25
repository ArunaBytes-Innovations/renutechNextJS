const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,

    },
    mobileNo: {
        type: Number,

    },
    email: {
        type: String,
        unique: true,
    },
    college: {
        type: String,

    },
    branch: {
        type: String,

    },
    batch: {
        type: Date,

    },
    paymentStatus: {
        type: Boolean,

    },
    events: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event',
            },
        ],
    },
});
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;