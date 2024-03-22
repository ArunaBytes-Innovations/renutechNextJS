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
    imageUrl: {
        type: String,
        required: true,
    },
    coordinators: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Coordinator',
            },
        ],
    },
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;