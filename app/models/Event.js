import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
    },

    ruleBookUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    coordinatorName1: {
        type: String,
        required: true,
    },
    coordinatorMobile1: {
        type: String,

    },
    coordinatorName2: {
        type: String,
        required: true,
    },
    coordinatorMobile2: {
        type: String,
    },
}

);

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;