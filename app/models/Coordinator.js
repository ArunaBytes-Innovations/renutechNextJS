import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    mobileNo: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    batch: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Coordinator', coordinatorSchema);