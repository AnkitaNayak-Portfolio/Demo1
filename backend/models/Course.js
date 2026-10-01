const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    instructor: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    students: { type: String, required: true },
    duration: { type: String, required: true },
    category: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
